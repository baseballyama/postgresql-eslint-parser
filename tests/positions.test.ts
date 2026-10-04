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
// `SourceCode#getLocFromIndex`. Kept independent of `src/utils.ts` on
// purpose so the test acts as an oracle rather than a tautology.
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
  Array.isArray(value.range);

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

const parse = (code: string) => {
  const { ast } = parseForESLint(code);
  return {
    ast,
    tokens: (ast.tokens ?? []).filter(isLexeme),
    comments: (ast.comments ?? []).filter(isLexeme),
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

// Known gaps that need a fixture regeneration or a public-API decision
// before they can be fixed. `it.fails` keeps the full expectation in place:
// the suite turns red as soon as one of them starts passing, so the marker
// cannot silently outlive the fix.
describe("known position gaps", () => {
  it.fails("covers the whole statement, including its first keyword", () => {
    expect(rangesOf("SELECT 1", "SelectStmt")).toEqual([[0, 8]]);
  });

  it.fails("starts a statement at its first token, not after `;`", () => {
    const code = "SELECT 1;\n-- c\nSELECT 2";
    expect(rangesOf(code, "SelectStmt")).toEqual([
      [0, 8],
      [15, 23],
    ]);
  });

  it.fails("tokenizes parameters, operators and brackets", () => {
    expect(tokensOf("SELECT $1, a ~ b, c[1], d->>'k'")).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Parameter", "$1", 7, 9],
      ["Punctuator", ",", 9, 10],
      ["Identifier", "a", 11, 12],
      ["Operator", "~", 13, 14],
      ["Identifier", "b", 15, 16],
      ["Punctuator", ",", 16, 17],
      ["Identifier", "c", 18, 19],
      ["Punctuator", "[", 19, 20],
      ["Numeric", "1", 20, 21],
      ["Punctuator", "]", 21, 22],
      ["Punctuator", ",", 22, 23],
      ["Identifier", "d", 24, 25],
      ["Operator", "->>", 25, 28],
      ["String", "'k'", 28, 31],
    ]);
  });

  it.fails("tokenizes PostgreSQL 16+ numeric literals whole", () => {
    expect(tokensOf("SELECT 0x1F, 1_000, .5")).toEqual([
      ["Keyword", "SELECT", 0, 6],
      ["Numeric", "0x1F", 7, 11],
      ["Punctuator", ",", 11, 12],
      ["Numeric", "1_000", 13, 18],
      ["Punctuator", ",", 18, 19],
      ["Numeric", ".5", 20, 22],
    ]);
  });
});

// Property checks over every fixture input plus the edge cases above.
const EDGE_CASES = [
  "SELECT 名前, café, cafe\u0301, ＡＢＣ FROM t",
  "SELECT 𝒳𝒴 FROM t WHERE x = '😀'",
  String.raw`SELECT 'C:\' AS p, E'a\'b', "a\"`,
  "SELECT /* a /* b */ c */ 1 -- c\r\nFROM t\r-- d\rWHERE x = 'a\u2028b'",
  "SELECT 1;\n-- 日本語\nSELECT 2; SELECT $ä$x$ä$",
  "SELECT 'abc",
  "SELECT 1 /* x",
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
        } else {
          expect([`/*${comment.value}*/`, `/*${comment.value}`]).toContain(raw);
        }
      }
    });

    it("tokens and comments are sorted and do not overlap", () => {
      const all = [...tokens, ...comments].sort(
        (a, b) => a.range[0] - b.range[0],
      );
      let previousEnd = 0;
      for (const item of all) {
        expect(item.range[0]).toBeGreaterThanOrEqual(previousEnd);
        expect(item.range[1]).toBeGreaterThan(item.range[0]);
        previousEnd = item.range[1];
      }
      expect(previousEnd).toBeLessThanOrEqual(code.length);
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
