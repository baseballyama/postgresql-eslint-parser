import { describe, expect, it } from "vitest";

import { parseForESLint } from "./parse.js";

const findFirst = (
  body: unknown[],
  type: string,
): Record<string, unknown> | null => {
  const visit = (node: unknown): Record<string, unknown> | null => {
    if (Array.isArray(node)) {
      for (const child of node) {
        const found = visit(child);
        if (found) return found;
      }
      return null;
    }
    if (node && typeof node === "object") {
      const obj = node as Record<string, unknown>;
      if (obj["type"] === type) return obj;
      for (const [key, value] of Object.entries(obj)) {
        if (key === "parent" || key === "loc" || key === "range") continue;
        const found = visit(value);
        if (found) return found;
      }
    }
    return null;
  };
  return visit(body);
};

const requireFirst = (
  body: unknown[],
  type: string,
): Record<string, unknown> => {
  const node = findFirst(body, type);
  if (!node) throw new Error(`Could not find a ${type} node`);
  return node;
};

describe("parseForESLint - source location accuracy", () => {
  it("reports correct line/column when multi-byte comments precede a statement", () => {
    const code = "-- 日本語\nSELECT 1";
    const { ast } = parseForESLint(code);

    const constNode = requireFirst(ast.body as unknown[], "A_Const");
    expect(constNode["loc"]).toEqual({
      start: { line: 2, column: 7 },
      end: { line: 2, column: 8 },
    });
    expect(constNode["range"]).toEqual([14, 15]);
  });

  it("does not push child loc onto wrong lines after multi-line, multi-byte comments", () => {
    const code = [
      "-- これはテーブル定義です",
      "-- 列の説明: ID は主キーです",
      "SELECT id FROM users WHERE id = 1",
    ].join("\n");
    const { ast } = parseForESLint(code);

    const constNode = requireFirst(ast.body as unknown[], "A_Const");
    // The literal `1` lives on line 3; before the fix its byte-offset based
    // location was interpreted as a JS char offset, pushing it past the EOL
    // and onto a non-existent line.
    const loc = constNode["loc"] as { start: { line: number } };
    expect(loc.start.line).toBe(3);
  });

  it("handles surrogate pairs (emoji) before a statement", () => {
    const code = "-- 😀\nSELECT 1";
    const { ast } = parseForESLint(code);
    const constNode = requireFirst(ast.body as unknown[], "A_Const");
    // 'SELECT 1' starts on line 2; the '1' is at column 7
    expect(constNode["loc"]).toEqual({
      start: { line: 2, column: 7 },
      end: { line: 2, column: 8 },
    });
  });
});
