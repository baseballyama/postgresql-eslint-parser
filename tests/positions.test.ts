import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { parseForESLint } from "../src/parse.ts";

// Position contract shared with ESLint:
// - `range` is a pair of UTF-16 code unit offsets into the parsed text.
// - `loc.line` is 1-based, `loc.column` is a 0-based UTF-16 offset in that
//   line, and lines are split exactly like ESLint's SourceCode does.
// - `text.slice(...token.range) === token.value` for every token.
//
// Expected values below are written by hand from the PostgreSQL lexer
// rules (scan.l). Do not regenerate them from parser output.

// Mirrors ESLint's `astUtils.createGlobalLinebreakMatcher()` and
// `SourceCode#getLocFromIndex`. It is written separately from `src/utils.ts`
// but follows the same algorithm, so it only catches slips between the two;
// `eslint.test.ts` checks the same contract against ESLint's real
// `SourceCode`.
const eslintLoc = (code: string, index: number) => {
  const lineStarts = [0];
  for (const match of code.matchAll(/\r\n|[\r\n\u2028\u2029]/gu)) {
    lineStarts.push(match.index + match[0].length);
  }
  let line = 0;
  while (line + 1 < lineStarts.length && lineStarts[line + 1]! <= index) {
    line++;
  }
  return { line: line + 1, column: index - lineStarts[line]! };
};

interface Loc {
  start: { line: number; column: number };
  end: { line: number; column: number };
}

interface Ranged {
  type: string;
  range: [number, number];
  loc: Loc;
}

// Tokens and comments carry a `value`; AST nodes do not.
interface Lexeme extends Ranged {
  value: string;
}

const isRanged = (value: unknown): value is Ranged =>
  typeof value === "object" &&
  value !== null &&
  "type" in value &&
  typeof value.type === "string" &&
  "range" in value &&
  Array.isArray(value.range) &&
  "loc" in value &&
  typeof value.loc === "object" &&
  value.loc !== null;

const isLexeme = (value: unknown): value is Lexeme =>
  isRanged(value) && "value" in value && typeof value.value === "string";

const collectNodes = (root: unknown): Ranged[] => {
  const out: Ranged[] = [];
  const visit = (value: unknown): void => {
    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }
    if (value === null || typeof value !== "object") return;
    if (isRanged(value)) out.push(value);
    for (const [key, child] of Object.entries(value)) {
      if (key === "parent" || key === "tokens" || key === "comments") continue;
      visit(child);
    }
  };
  visit(root);
  return out;
};

// Throws instead of filtering so a malformed token or comment fails the
// test rather than silently dropping out of every later check.
const lexemes = (items: unknown[] | undefined): Lexeme[] => {
  const list = items ?? [];
  if (!list.every(isLexeme)) {
    throw new Error(`malformed token or comment in ${JSON.stringify(list)}`);
  }
  return list;
};

const parse = (code: string) => {
  const { ast } = parseForESLint(code);
  return {
    ast,
    tokens: lexemes(ast.tokens),
    comments: lexemes(ast.comments),
    nodes: collectNodes(ast.body),
  };
};

const tokensOf = (code: string) =>
  parse(code).tokens.map((t) => [t.type, t.value, ...t.range]);

const commentsOf = (code: string) =>
  parse(code).comments.map((c) => [c.type, c.value, ...c.range]);

const rangesOf = (code: string, type: string) =>
  parse(code)
    .nodes.filter((node) => node.type === type)
    .map((node) => node.range);

const parseErrorOf = (code: string) => {
  const [node] = parseForESLint(code).ast.body;
  expect(node?.type).toBe("SQLParseError");
  return node?.type === "SQLParseError" ? node.error : undefined;
};

describe("tokens: identifiers", () => {
  it("keeps non-ASCII identifiers (BMP, combining, full-width) whole", () => {
    const code = "SELECT 名前, café, cafe\u0301, ＡＢＣ FROM t";
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Identifier", "名前", 7, 9],
      ["Punctuator", ",", 9, 10],
      ["Identifier", "café", 11, 15],
      ["Punctuator", ",", 15, 16],
      ["Identifier", "cafe\u0301", 17, 22],
      ["Punctuator", ",", 22, 23],
      ["Identifier", "ＡＢＣ", 24, 27],
      ["Keyword", "FROM", 28, 32],
      ["Identifier", "t", 33, 34],
    ]);
    expect(rangesOf(code, "ColumnRef")).toEqual([
      [7, 9],
      [11, 15],
      [17, 22],
      [24, 27],
    ]);
  });

  it("counts astral identifiers in UTF-16 code units", () => {
    const code = "SELECT 𝒳𝒴 FROM t";
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Identifier", "𝒳𝒴", 7, 11],
      ["Keyword", "FROM", 12, 16],
      ["Identifier", "t", 17, 18],
    ]);
    expect(rangesOf(code, "ColumnRef")).toEqual([[7, 11]]);
  });

  it("treats `$` as an identifier character after the first one", () => {
    const code = "SELECT a$b FROM t";
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Identifier", "a$b", 7, 10],
      ["Keyword", "FROM", 11, 15],
      ["Identifier", "t", 16, 17],
    ]);
    expect(rangesOf(code, "ColumnRef")).toEqual([[7, 10]]);
  });

  it("does not treat a backslash as an escape in quoted identifiers", () => {
    const code = String.raw`SELECT "a\" FROM t`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", String.raw`"a\"`, 7, 11],
      ["Keyword", "FROM", 12, 16],
      ["Identifier", "t", 17, 18],
    ]);
    expect(rangesOf(code, "ColumnRef")).toEqual([[7, 11]]);
    expect(rangesOf(code, "RangeVar")).toEqual([[17, 18]]);
  });
});

describe("tokens: string literals", () => {
  it("does not treat a backslash as an escape in standard strings", () => {
    const code = String.raw`SELECT 'C:\' AS p, 'z' AS q`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", String.raw`'C:\'`, 7, 12],
      ["Keyword", "AS", 13, 15],
      ["Identifier", "p", 16, 17],
      ["Punctuator", ",", 17, 18],
      ["String", "'z'", 19, 22],
      ["Keyword", "AS", 23, 25],
      ["Identifier", "q", 26, 27],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([
      [7, 12],
      [19, 22],
    ]);
  });

  it("emits E'' escape strings as one token including the prefix", () => {
    const code = String.raw`SELECT E'a\'b' AS x`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", String.raw`E'a\'b'`, 7, 14],
      ["Keyword", "AS", 15, 17],
      ["Identifier", "x", 18, 19],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([[7, 14]]);
  });

  it("emits B'', X'' and U&'' literals as one token including the prefix", () => {
    const code = String.raw`SELECT B'01', X'1F', U&'d\0061t'`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", "B'01'", 7, 12],
      ["Punctuator", ",", 12, 13],
      ["String", "X'1F'", 14, 19],
      ["Punctuator", ",", 19, 20],
      ["String", String.raw`U&'d\0061t'`, 21, 32],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([
      [7, 12],
      [14, 19],
      [21, 32],
    ]);
  });

  // scan.l returns `N` as the NCHAR keyword; this tokenizer only splits it
  // the same way and reports it as an Identifier (it is not in the keyword
  // list).
  it("splits N'' into `N` and the quoted string", () => {
    const code = "SELECT N'x'";
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Identifier", "N", 7, 8],
      ["String", "'x'", 8, 11],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([[8, 11]]);
  });

  it('emits U&"…" quoted identifiers as one String token', () => {
    const code = String.raw`SELECT U&"d\0061t" FROM t`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", String.raw`U&"d\0061t"`, 7, 18],
      ["Keyword", "FROM", 19, 23],
      ["Identifier", "t", 24, 25],
    ]);
    expect(rangesOf(code, "ColumnRef")).toEqual([[7, 18]]);
  });

  it("accepts lower-case string prefixes", () => {
    const code = String.raw`SELECT e'a\'b', b'01', x'1f', u&'x'`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", String.raw`e'a\'b'`, 7, 14],
      ["Punctuator", ",", 14, 15],
      ["String", "b'01'", 16, 21],
      ["Punctuator", ",", 21, 22],
      ["String", "x'1f'", 23, 28],
      ["Punctuator", ",", 28, 29],
      ["String", "u&'x'", 30, 35],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([
      [7, 14],
      [16, 21],
      [23, 28],
      [30, 35],
    ]);
  });

  it("closes an E'' string right after an escaped backslash", () => {
    const code = String.raw`SELECT E'a\\', 1`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", String.raw`E'a\\'`, 7, 13],
      ["Punctuator", ",", 13, 14],
      ["Numeric", "1", 15, 16],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([
      [7, 13],
      [15, 16],
    ]);
  });

  it("accepts doubled quotes inside an E'' string", () => {
    const code = String.raw`SELECT E'it''s\n', 1`;
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", String.raw`E'it''s\n'`, 7, 17],
      ["Punctuator", ",", 17, 18],
      ["Numeric", "1", 19, 20],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([
      [7, 17],
      [19, 20],
    ]);
  });

  it("accepts non-ASCII dollar-quote tags", () => {
    const code = "SELECT $ä$x$ä$ AS v";
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["String", "$ä$x$ä$", 7, 14],
      ["Keyword", "AS", 15, 17],
      ["Identifier", "v", 18, 19],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([[7, 14]]);
  });
});

describe("comments", () => {
  it("treats nested block comments as a single comment", () => {
    const code = "SELECT /* a /* b */ c */ 1";
    expect(commentsOf(code)).toEqual([["Block", " a /* b */ c ", 7, 24]]);
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Numeric", "1", 25, 26],
    ]);
  });

  it("keeps the whole value of an unterminated block comment", () => {
    const code = "SELECT 1 /* x";
    expect(commentsOf(code)).toEqual([["Block", " x", 9, 13]]);
  });

  it("ends a line comment before CRLF", () => {
    const code = "SELECT 1 -- c\r\nFROM t";
    expect(commentsOf(code)).toEqual([["Line", " c", 9, 13]]);
  });

  it("ends a line comment at a lone CR", () => {
    const code = "SELECT 1 -- c\rFROM t";
    expect(commentsOf(code)).toEqual([["Line", " c", 9, 13]]);
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Numeric", "1", 7, 8],
      ["Keyword", "FROM", 14, 18],
      ["Identifier", "t", 19, 20],
    ]);
    const [rangeVar] = parse(code).nodes.filter(
      (node) => node.type === "RangeVar",
    );
    expect(rangeVar?.range).toEqual([19, 20]);
    expect(rangeVar?.loc).toEqual({
      start: { line: 2, column: 5 },
      end: { line: 2, column: 6 },
    });
  });
});

describe("loc follows ESLint line breaks", () => {
  it("splits lines at U+2029", () => {
    const code = "SELECT 1 /* a\u2029b */, 2";
    const { tokens, comments } = parse(code);
    expect(comments.map((c) => [c.range, c.loc])).toEqual([
      [[9, 18], { start: { line: 1, column: 9 }, end: { line: 2, column: 4 } }],
    ]);
    expect(tokens.map((t) => [t.value, t.loc.start, t.loc.end])).toEqual([
      ["SELECT", { line: 1, column: 0 }, { line: 1, column: 6 }],
      ["1", { line: 1, column: 7 }, { line: 1, column: 8 }],
      [",", { line: 2, column: 4 }, { line: 2, column: 5 }],
      ["2", { line: 2, column: 6 }, { line: 2, column: 7 }],
    ]);
  });

  it("splits lines at CR, CRLF and U+2028", () => {
    const code = "SELECT 'a\u2028b', 1\rFROM t";
    const { ast, tokens } = parse(code);
    const locs = tokens.map((t) => [t.value, t.loc.start, t.loc.end]);
    expect(locs).toEqual([
      ["SELECT", { line: 1, column: 0 }, { line: 1, column: 6 }],
      ["'a\u2028b'", { line: 1, column: 7 }, { line: 2, column: 2 }],
      [",", { line: 2, column: 2 }, { line: 2, column: 3 }],
      ["1", { line: 2, column: 4 }, { line: 2, column: 5 }],
      ["FROM", { line: 3, column: 0 }, { line: 3, column: 4 }],
      ["t", { line: 3, column: 5 }, { line: 3, column: 6 }],
    ]);
    expect(ast.loc.end).toEqual({ line: 3, column: 6 });
  });
});

describe("parse errors", () => {
  it.each([
    ["SELECT 'abc", `unterminated quoted string at or near "'abc"`],
    ["SELECT 1 /* x", `unterminated /* comment at or near "/* x"`],
    [`SELECT ""`, `zero-length delimited identifier at or near """"`],
    ["SELECT 1a", `trailing junk after numeric literal at or near "1a"`],
    ["SELECT 1 FROM FROM", `syntax error at or near "FROM"`],
  ])("keeps libpg-query's message for %j", (code, message) => {
    expect(parseErrorOf(code)).toBe(message);
  });
});

const locatedOf = (code: string, type: string) =>
  parse(code)
    .nodes.filter((node) => node.type === type)
    .map(({ range, loc }) => ({ range, loc }));

const at = (line: number, column: number) => ({ line, column });

describe("top-level statement ranges", () => {
  it("cover a statement without a trailing `;`, first keyword included", () => {
    expect(locatedOf("SELECT 1", "SelectStmt")).toEqual([
      { range: [0, 8], loc: { start: at(1, 0), end: at(1, 8) } },
    ]);
  });

  it("start at the statement's first token, not after the previous `;`", () => {
    const code = "SELECT 1;\n-- c\nSELECT 2";
    expect(locatedOf(code, "SelectStmt")).toEqual([
      { range: [0, 8], loc: { start: at(1, 0), end: at(1, 8) } },
      { range: [15, 23], loc: { start: at(3, 0), end: at(3, 8) } },
    ]);
  });

  it("exclude the separating whitespace and the `;`", () => {
    expect(locatedOf("SELECT 1; SELECT 2;", "SelectStmt")).toEqual([
      { range: [0, 8], loc: { start: at(1, 0), end: at(1, 8) } },
      { range: [10, 18], loc: { start: at(1, 10), end: at(1, 18) } },
    ]);
  });

  it("end before a trailing comment and keep a positional parameter", () => {
    const code = "SELECT $1 /* c */;\nSELECT 2 -- tail\n";
    expect(locatedOf(code, "SelectStmt")).toEqual([
      { range: [0, 9], loc: { start: at(1, 0), end: at(1, 9) } },
      { range: [19, 27], loc: { start: at(2, 0), end: at(2, 8) } },
    ]);
  });

  it("exclude comments before the first statement", () => {
    expect(locatedOf("-- head\nSELECT 1;", "SelectStmt")).toEqual([
      { range: [8, 16], loc: { start: at(2, 0), end: at(2, 8) } },
    ]);
  });
});

// Positional parameters have no token type yet (it is an open design
// question): the tokenizer skips the `$` and lexes the digits as a Numeric,
// and ParamRef is zero-width at the `$`. The statement still covers it.
// Update these expectations when `$n` gets a token.
describe("positional parameters (current behaviour)", () => {
  const code = "SELECT $1";

  it("emits no token for the `$`", () => {
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Numeric", "1", 8, 9],
    ]);
  });

  it("leaves ParamRef zero-width inside the statement range", () => {
    expect(locatedOf(code, "ParamRef")).toEqual([
      { range: [7, 7], loc: { start: at(1, 7), end: at(1, 7) } },
    ]);
    expect(locatedOf(code, "SelectStmt")).toEqual([
      { range: [0, 9], loc: { start: at(1, 0), end: at(1, 9) } },
    ]);
  });
});

describe("tokens: operators and brackets", () => {
  it("lexes operators like scan.l and brackets as punctuators", () => {
    const code = "SELECT a ~ b, c[1], d->>'k', g=-1 FROM t";
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Identifier", "a", 7, 8],
      ["Operator", "~", 9, 10],
      ["Identifier", "b", 11, 12],
      ["Punctuator", ",", 12, 13],
      ["Identifier", "c", 14, 15],
      ["Punctuator", "[", 15, 16],
      ["Numeric", "1", 16, 17],
      ["Punctuator", "]", 17, 18],
      ["Punctuator", ",", 18, 19],
      ["Identifier", "d", 20, 21],
      ["Operator", "->>", 21, 24],
      ["String", "'k'", 24, 27],
      ["Punctuator", ",", 27, 28],
      ["Identifier", "g", 29, 30],
      ["Operator", "=", 30, 31],
      ["Operator", "-", 31, 32],
      ["Numeric", "1", 32, 33],
      ["Keyword", "FROM", 34, 38],
      ["Identifier", "t", 39, 40],
    ]);
    // libpg-query anchors A_Expr on the operator.
    expect(locatedOf(code, "A_Expr")).toEqual([
      { range: [9, 10], loc: { start: at(1, 9), end: at(1, 10) } },
      { range: [21, 24], loc: { start: at(1, 21), end: at(1, 24) } },
      { range: [30, 31], loc: { start: at(1, 30), end: at(1, 31) } },
    ]);
  });

  it("drops a trailing +/- unless the operator has a special character", () => {
    expect(tokensOf("SELECT 2*-1, a @- b")).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Numeric", "2", 7, 8],
      ["Operator", "*", 8, 9],
      ["Operator", "-", 9, 10],
      ["Numeric", "1", 10, 11],
      ["Punctuator", ",", 11, 12],
      ["Identifier", "a", 13, 14],
      ["Operator", "@-", 15, 17],
      ["Identifier", "b", 18, 19],
    ]);
  });
});

describe("tokens: numeric literals", () => {
  it("keeps PostgreSQL 16+ literals whole", () => {
    const code = "SELECT 0x1F, 0o17, 0b101, 1_000, .5, 1.5e3, 1.";
    expect(tokensOf(code)).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Numeric", "0x1F", 7, 11],
      ["Punctuator", ",", 11, 12],
      ["Numeric", "0o17", 13, 17],
      ["Punctuator", ",", 17, 18],
      ["Numeric", "0b101", 19, 24],
      ["Punctuator", ",", 24, 25],
      ["Numeric", "1_000", 26, 31],
      ["Punctuator", ",", 31, 32],
      ["Numeric", ".5", 33, 35],
      ["Punctuator", ",", 35, 36],
      ["Numeric", "1.5e3", 37, 42],
      ["Punctuator", ",", 42, 43],
      ["Numeric", "1.", 44, 46],
    ]);
    expect(rangesOf(code, "A_Const")).toEqual([
      [7, 11],
      [13, 17],
      [19, 24],
      [26, 31],
      [33, 35],
      [37, 42],
      [44, 46],
    ]);
  });
});

describe("parse error position", () => {
  const errorNodeOf = (code: string) => {
    const [node] = parseForESLint(code).ast.body;
    return { ...node, parent: undefined };
  };

  it.each([
    // [code, error, index, line, column]
    ["SELECT 1 FROM FROM", `syntax error at or near "FROM"`, 14, 1, 14],
    // libpg-query counts code points; 𝒳 is one code point, two UTF-16 units.
    ["SELECT 𝒳 FROM FROM", `syntax error at or near "FROM"`, 15, 1, 15],
    ["SELECT 1\nFROM FROM", `syntax error at or near "FROM"`, 14, 2, 5],
    ["SELECT 'abc", `unterminated quoted string at or near "'abc"`, 7, 1, 7],
    ["SELECT 1 FROM", "syntax error at end of input", 13, 1, 13],
  ] as const)(
    "reports %j at the offending token",
    (code, error, index, line, column) => {
      const end = eslintLoc(code, code.length);
      expect(errorNodeOf(code)).toEqual({
        type: "SQLParseError",
        range: [0, code.length],
        loc: { start: at(1, 0), end },
        error,
        raw: code,
        errorPosition: { index, line, column },
      });
    },
  );
});

// Whether a block comment's raw text closes itself, counting PostgreSQL's
// nesting independently of the tokenizer.
const closesBlockComment = (raw: string): boolean => {
  let depth = 0;
  for (let i = 0; i < raw.length;) {
    if (raw.startsWith("/*", i)) {
      depth++;
      i += 2;
    } else if (raw.startsWith("*/", i)) {
      depth--;
      i += 2;
      if (depth === 0) return i === raw.length;
    } else {
      i++;
    }
  }
  return false;
};

// Property checks over every fixture input plus the edge cases above.
const EDGE_CASES = [
  "SELECT 名前, café, cafe\u0301, ＡＢＣ FROM t",
  "SELECT 𝒳𝒴 FROM t WHERE x = '😀'",
  String.raw`SELECT 'C:\' AS p, E'a\'b', "a\"`,
  "SELECT /* a /* b */ c */ 1 -- c\r\nFROM t\r-- d\rWHERE x = 'a\u2028b'",
  "SELECT 1;\n-- 日本語\nSELECT 2; SELECT $ä$x$ä$",
  "SELECT 'abc",
  "SELECT 1 /* x",
  "SELECT a ~ b, c[1], d->>'k', g=-1 FROM t WHERE x <@ y",
  "SELECT 0x1F, 0o17, 0b101, 1_000, .5, 1.5e3, 1.",
  "-- head\nSELECT 1; SELECT 2",
  String.raw`SELECT U&"d\0061t", e'a\\', E'it''s' FROM t`,
  "SELECT 1 /* a\u2029b */, 2 /* x",
];

const fixtureInputs = (() => {
  const dir = path.join(import.meta.dirname, "fixtures");
  return fs
    .readdirSync(dir)
    .map((name) => path.join(dir, name, "input.sql"))
    .filter((file) => fs.existsSync(file))
    .map((file) => fs.readFileSync(file, "utf8"));
})();

describe.each([...fixtureInputs, ...EDGE_CASES].map((code) => [code]))(
  "position invariants for %j",
  (code) => {
    const { ast, tokens, comments, nodes } = parse(code);

    it("token values equal the source sliced by their range", () => {
      for (const token of tokens) {
        expect(code.slice(...token.range)).toBe(token.value);
      }
    });

    it("comment values equal the source sliced by their range", () => {
      for (const comment of comments) {
        const raw = code.slice(...comment.range);
        if (comment.type === "Line") {
          expect(raw).toBe(`--${comment.value}`);
        } else if (closesBlockComment(raw)) {
          expect(raw).toBe(`/*${comment.value}*/`);
        } else {
          // Only an unterminated comment may lack "*/", and it runs to EOF.
          expect(comment.range[1]).toBe(code.length);
          expect(raw).toBe(`/*${comment.value}`);
        }
      }
    });

    // ESLint's TokenStore binary-searches `ast.tokens` and `ast.comments`
    // separately, so each array must be ascending as emitted.
    it.each([
      ["tokens", tokens],
      ["comments", comments],
    ])("%s are ascending and disjoint as emitted", (_, items) => {
      let previousEnd = 0;
      for (const item of items) {
        expect(item.range[0]).toBeGreaterThanOrEqual(previousEnd);
        expect(item.range[1]).toBeGreaterThan(item.range[0]);
        previousEnd = item.range[1];
      }
      expect(previousEnd).toBeLessThanOrEqual(code.length);
    });

    it("tokens and comments do not overlap each other", () => {
      const merged = [...tokens, ...comments].sort(
        (a, b) => a.range[0] - b.range[0],
      );
      for (let i = 1; i < merged.length; i++) {
        expect(merged[i]!.range[0]).toBeGreaterThanOrEqual(
          merged[i - 1]!.range[1],
        );
      }
    });

    it("every loc agrees with its range under ESLint's line rules", () => {
      // `nodes` covers the statements; the Program node is checked too.
      const everything = [...tokens, ...comments, ...nodes, ast];
      for (const item of everything) {
        expect(item.range[0]).toBeGreaterThanOrEqual(0);
        expect(item.range[0]).toBeLessThanOrEqual(item.range[1]);
        expect(item.range[1]).toBeLessThanOrEqual(code.length);
        expect(item.loc).toEqual({
          start: eslintLoc(code, item.range[0]),
          end: eslintLoc(code, item.range[1]),
        });
      }
    });
  },
);
