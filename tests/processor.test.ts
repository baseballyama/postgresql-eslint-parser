import { type ESLint, Linter, type Rule } from "eslint";
import { describe, expect, it } from "vitest";

import { parseForESLint } from "../src/parse.ts";
import {
  createPlProcessor,
  type PlProcessor,
  type ProcessorMessage,
} from "../src/processor.ts";

// The type annotations below are part of the test: `pnpm type:check` fails if
// the processor cannot be used where ESLint expects one, without a cast or a
// wrapper.

const sqlParser = {
  meta: { name: "postgresql-eslint-parser" },
  parseForESLint,
};

const code =
  "CREATE FUNCTION x() RETURNS int AS $$ return 1; $$ LANGUAGE plv8;";

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

const configs: Linter.Config[] = [
  {
    files: ["**/*.sql"],
    languageOptions: { parser: sqlParser },
    processor: createPlProcessor({ languages: { plv8: ".js" } }),
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

describe("createPlProcessor as an ESLint processor", () => {
  it("is assignable to Linter.Processor", () => {
    const processor: Linter.Processor = createPlProcessor({
      languages: { plv8: ".js" },
    });
    expect(processor.supportsAutofix).toBe(true);
  });

  it("is accepted by a plugin's `processors`", () => {
    const plugin: ESLint.Plugin = {
      processors: { pl: createPlProcessor({ languages: { plv8: ".js" } }) },
    };
    expect(Object.keys(plugin.processors ?? {})).toEqual(["pl"]);
  });

  it("reports at the body's position in the SQL file", () => {
    const messages = new Linter().verify(code, configs, {
      filename: "fn.sql",
    });
    // "CREATE FUNCTION x() RETURNS int AS $$" is 37 characters, so the `1`
    // at body offset 8 sits at index 45: column 46 (1-based).
    expect(
      messages.map((m) => [m.line, m.column, m.endLine, m.endColumn]),
    ).toEqual([[1, 46, 1, 47]]);
  });

  it("applies the fix at the body's offset", () => {
    const result = new Linter().verifyAndFix(code, configs, {
      filename: "fn.sql",
    });
    expect(result.output).toBe(
      "CREATE FUNCTION x() RETURNS int AS $$ return 2; $$ LANGUAGE plv8;",
    );
    expect(result.messages).toEqual([]);
  });

  it("still accepts and returns ProcessorMessage when called directly", () => {
    const processor = createPlProcessor({ languages: { plv8: ".js" } });
    processor.preprocess(code, "fn.sql");
    const input: ProcessorMessage[][] = [
      [{ line: 1, column: 9, endLine: 1, endColumn: 10, custom: "kept" }],
    ];
    const output: ProcessorMessage[] = processor.postprocess(input, "fn.sql");
    expect(output).toEqual([
      { line: 1, column: 46, endLine: 1, endColumn: 47, custom: "kept" },
    ]);
  });
});

// The published `PlProcessor` and `ProcessorMessage` types must keep
// accepting code written against them.
describe("PlProcessor as published", () => {
  it("accepts a hand-written ProcessorMessage postprocess", () => {
    const postprocess = (lists: ProcessorMessage[][]): ProcessorMessage[] =>
      lists.flat();
    const custom: PlProcessor = {
      meta: { name: "custom", version: "1" },
      supportsAutofix: false,
      preprocess: (text, filename) => [{ text, filename }],
      postprocess,
    };
    expect(custom.postprocess([[{ line: 1 }]], "a.sql")).toEqual([{ line: 1 }]);
  });

  it("keeps postprocess's parameter type", () => {
    const lists: Parameters<PlProcessor["postprocess"]>[0] = [
      [{ line: 1, custom: "kept" }],
    ];
    const processor: PlProcessor = createPlProcessor({
      languages: { plv8: ".js" },
    });
    // No preprocess ran for this file, so there is nothing to translate.
    expect(processor.postprocess(lists, "unknown.sql")).toEqual([]);
  });
});

// Calling createPlProcessor's result directly must type-check as it did when
// it returned a plain PlProcessor, while ESLint's LintMessage also goes in.
describe("createPlProcessor's postprocess called directly", () => {
  it("returns LintMessage for LintMessage input", () => {
    const processor = createPlProcessor({ languages: { plv8: ".js" } });
    processor.preprocess(code, "fn.sql");
    const input: Linter.LintMessage[][] = [
      [{ ruleId: "r", message: "m", severity: 2, line: 1, column: 9 }],
    ];
    const output: Linter.LintMessage[] = processor.postprocess(input, "fn.sql");
    expect(output).toEqual([
      { ruleId: "r", message: "m", severity: 2, line: 1, column: 46 },
    ]);
  });

  it("returns ProcessorMessage for an unannotated literal", () => {
    const processor = createPlProcessor({ languages: { plv8: ".js" } });
    const output = processor.postprocess(
      [[{ line: 1, column: 1 }]],
      "unknown.sql",
    );
    const severity: number | undefined = output[0]?.severity;
    expect(severity).toBeUndefined();
  });

  it("accepts messages without position fields", () => {
    const processor = createPlProcessor({ languages: { plv8: ".js" } });
    const input: { ruleId: string; message: string }[][] = [
      [{ ruleId: "r", message: "m" }],
    ];
    const output: ProcessorMessage[] = processor.postprocess(
      input,
      "unknown.sql",
    );
    expect(output).toEqual([]);
  });

  it("keeps the parameter type derived from its return type", () => {
    type Postprocess = ReturnType<typeof createPlProcessor>["postprocess"];
    const lists: Parameters<Postprocess>[0] = [[{ line: 1, custom: "kept" }]];
    const processor = createPlProcessor({ languages: { plv8: ".js" } });
    expect(processor.postprocess(lists, "unknown.sql")).toEqual([]);
  });

  it("needs a PlProcessor annotation to hold a hand-written processor", () => {
    const custom: PlProcessor = {
      meta: { name: "custom", version: "1" },
      supportsAutofix: false,
      preprocess: (text, filename) => [{ text, filename }],
      postprocess: (lists) => lists.flat(),
    };
    let inferred = createPlProcessor({ languages: { plv8: ".js" } });
    // @ts-expect-error A plain PlProcessor's postprocess does not accept
    // LintMessage, which the inferred type requires.
    inferred = custom;
    let annotated: PlProcessor = createPlProcessor({
      languages: { plv8: ".js" },
    });
    annotated = custom;
    expect([inferred, annotated]).toEqual([custom, custom]);
  });
});
