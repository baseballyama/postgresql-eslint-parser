import { Linter, type Rule } from "eslint";
import { describe, expect, it } from "vitest";

import { parseForESLint } from "../src/parse.ts";
import { createPlProcessor, type ProcessorMessage } from "../src/processor.ts";

// Runs the parser through ESLint itself (SourceCode, directive comments,
// SourceCodeFixer) instead of re-deriving ESLint's behaviour in the test.

const sqlParser = {
  meta: { name: "postgresql-eslint-parser" },
  parseForESLint,
};

// Reports every token at its own `loc`, with the token text as the message.
const reportTokens: Rule.RuleModule = {
  create(context) {
    return {
      Program() {
        for (const token of context.sourceCode.ast.tokens) {
          context.report({ loc: token.loc, message: token.value });
        }
      },
    };
  },
};

const lintSql = (code: string, rules: Record<string, Rule.RuleModule>) => {
  const ruleConfig: Linter.RulesRecord = {};
  for (const name of Object.keys(rules)) ruleConfig[`test/${name}`] = "error";
  return new Linter().verify(
    code,
    [
      {
        files: ["**/*.sql"],
        languageOptions: { parser: sqlParser },
        plugins: { test: { rules } },
        rules: ruleConfig,
      },
    ],
    { filename: "query.sql" },
  );
};

const summarize = (messages: Linter.LintMessage[]) =>
  messages.map((m) => [m.line, m.column, m.endLine, m.endColumn, m.message]);

describe("inline directives", () => {
  it("applies `eslint-disable-line` to its own line in a CR-only file", () => {
    const code = "SELECT a -- eslint-disable-line test/tokens\rFROM t;";
    expect(summarize(lintSql(code, { tokens: reportTokens }))).toEqual([
      [2, 1, 2, 5, "FROM"],
      [2, 6, 2, 7, "t"],
      [2, 7, 2, 8, ";"],
    ]);
  });

  it("reads a directive from a nested block comment as one comment", () => {
    const code =
      "/* eslint-disable-next-line test/tokens -- a /* b */ c */\n" +
      "SELECT 1;\n" +
      "SELECT 2;";
    expect(summarize(lintSql(code, { tokens: reportTokens }))).toEqual([
      [3, 1, 3, 7, "SELECT"],
      [3, 8, 3, 9, "2"],
      [3, 9, 3, 10, ";"],
    ]);
  });
});

describe("nodes anchored on a positional parameter", () => {
  it("report at the parameter and expose its text", () => {
    const reportParams: Rule.RuleModule = {
      create(context) {
        return {
          ParamRef(node: Rule.Node) {
            context.report({ node, message: context.sourceCode.getText(node) });
          },
        };
      },
    };
    const code = "SELECT $1 + 1;\nSELECT a FROM t WHERE id = $2;";
    expect(summarize(lintSql(code, { params: reportParams }))).toEqual([
      [1, 8, 1, 10, "$1"],
      [2, 28, 2, 30, "$2"],
    ]);
  });
});

describe("SourceCode agrees with tokens and comments", () => {
  // Multi-byte and astral characters, CRLF, CR, U+2029, nested comments and
  // prefixed strings in one file.
  const code =
    "SELECT 名前, E'a\\\\', U&\"x\" -- c\r\n" +
    "FROM t /* a /* b */ c */\r" +
    "WHERE x ->> 'k\u2029' = '𝒳';";

  const observe = () => {
    const seen: Array<() => void> = [];
    const rule: Rule.RuleModule = {
      create(context) {
        return {
          Program() {
            const sourceCode = context.sourceCode;
            const { tokens, comments } = sourceCode.ast;
            for (const item of [...tokens, ...comments]) {
              // Same as `sourceCode.getText(item)`, which ESLint implements as
              // this slice; eslint 10.11's types accept only nodes there.
              const text = sourceCode.text.slice(
                item.range![0],
                item.range![1],
              );
              const start = sourceCode.getLocFromIndex(item.range![0]);
              const end = sourceCode.getLocFromIndex(item.range![1]);
              const index = sourceCode.getIndexFromLoc(item.loc!.start);
              seen.push(() => {
                const raw =
                  item.type === "Line"
                    ? `--${item.value}`
                    : item.type === "Block"
                      ? `/*${item.value}*/`
                      : item.value;
                expect(text).toBe(raw);
                expect({ start, end }).toEqual(item.loc);
                expect(index).toBe(item.range![0]);
              });
            }
            tokens.forEach((token, i) => {
              const before = sourceCode.getTokenBefore(token);
              const after = sourceCode.getTokenAfter(token);
              seen.push(() => {
                expect(before?.range).toEqual(tokens[i - 1]?.range);
                expect(after?.range).toEqual(tokens[i + 1]?.range);
              });
            });
            const lineCount = sourceCode.lines.length;
            seen.push(() => expect(lineCount).toBe(4));
          },
        };
      },
    };
    const messages = lintSql(code, { observe: rule });
    return { messages, seen };
  };

  it("matches getText, getLocFromIndex, getIndexFromLoc and neighbours", () => {
    const { messages, seen } = observe();
    expect(messages).toEqual([]);
    expect(seen.length).toBeGreaterThan(0);
    for (const check of seen) check();
  });
});

describe("processor with a BOM-prefixed file", () => {
  const code =
    "\uFEFFCREATE FUNCTION x() RETURNS int AS $$ return 1; $$ LANGUAGE plv8;";

  const oneToTwo: Rule.RuleModule = {
    meta: { fixable: "code" },
    create(context) {
      return {
        Literal(node) {
          if (node.value === 1) {
            context.report({
              node,
              message: "one",
              fix: (fixer) => fixer.replaceText(node, "2"),
            });
          }
        },
      };
    },
  };

  const plProcessor = createPlProcessor({ languages: { plv8: ".js" } });

  // ESLint's processor types require complete LintMessage objects, while
  // createPlProcessor works with a looser message shape.
  const isLintMessage = (
    message: ProcessorMessage,
  ): message is ProcessorMessage & Linter.LintMessage =>
    typeof message.line === "number" &&
    typeof message.column === "number" &&
    typeof message.message === "string" &&
    (message.severity === 1 || message.severity === 2);

  // LintMessage types its optional fields as `T | undefined`, which
  // ProcessorMessage does not accept under exactOptionalPropertyTypes, so
  // copy only the fields ESLint actually set.
  const toProcessorMessage = ({
    endLine,
    endColumn,
    fix,
    ...rest
  }: Linter.LintMessage): ProcessorMessage => ({
    ...rest,
    ...(endLine === undefined ? {} : { endLine }),
    ...(endColumn === undefined ? {} : { endColumn }),
    ...(fix === undefined ? {} : { fix }),
  });

  const configs: Linter.Config[] = [
    {
      files: ["**/*.sql"],
      processor: {
        meta: plProcessor.meta,
        supportsAutofix: plProcessor.supportsAutofix,
        preprocess: (text, filename) => plProcessor.preprocess(text, filename),
        postprocess: (messageLists, filename) =>
          plProcessor
            .postprocess(
              messageLists.map((list) => list.map(toProcessorMessage)),
              filename,
            )
            .map((message) => {
              if (!isLintMessage(message)) {
                throw new Error(
                  `incomplete message ${JSON.stringify(message)}`,
                );
              }
              return message;
            }),
      },
    },
    {
      files: ["**/*.js"],
      // A PLV8 body is a function body, so its top-level `return` is valid.
      languageOptions: {
        sourceType: "script",
        parserOptions: { ecmaFeatures: { globalReturn: true } },
      },
      plugins: { test: { rules: { "one-to-two": oneToTwo } } },
      rules: { "test/one-to-two": "error" },
    },
  ];

  it("reports at the body's position in the BOM-stripped text", () => {
    const messages = new Linter().verify(code, configs, {
      filename: "fn.sql",
    });
    // "CREATE FUNCTION x() RETURNS int AS $$" is 37 characters, so the `1`
    // at body offset 8 sits at index 45: column 46 (1-based).
    expect(summarize(messages)).toEqual([[1, 46, 1, 47, "one"]]);
  });

  it("applies the fix at the right offset and keeps the BOM", () => {
    const result = new Linter().verifyAndFix(code, configs, {
      filename: "fn.sql",
    });
    expect(result.fixed).toBe(true);
    expect(result.output).toBe(
      "\uFEFFCREATE FUNCTION x() RETURNS int AS $$ return 2; $$ LANGUAGE plv8;",
    );
    expect(result.messages).toEqual([]);
  });
});
