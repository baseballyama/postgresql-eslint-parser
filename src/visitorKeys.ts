import type { Program } from "./ast.ts";

const SKIP_KEYS = new Set(["type", "range", "loc", "parent"]);

const BASE_VISITOR_KEYS: Record<string, string[]> = {
  Program: ["body", "tokens", "comments"],
  SQLStatement: ["statement"],
  SQLParseError: [],
  SQLProcedure: [],
  EmbeddedCode: [],
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);

export const buildVisitorKeys = (ast: Program): Record<string, string[]> => {
  const visitorKeys: Record<string, string[]> = {};
  const visitedNodes = new WeakSet<object>();

  const traverseNode = (node: unknown): void => {
    if (!isObject(node) || visitedNodes.has(node)) return;
    visitedNodes.add(node);

    const type = typeof node["type"] === "string" ? node["type"] : "Unknown";
    // Union keys across every node of the same type so that optional fields
    // (e.g. `embeddedCode` on CreateFunctionStmt) are still picked up when
    // the first instance happens to omit them.
    const childKeys: string[] = visitorKeys[type] ?? [];
    if (!(type in visitorKeys)) visitorKeys[type] = childKeys;

    const addKey = (key: string) => {
      if (!childKeys.includes(key)) childKeys.push(key);
    };

    for (const [key, value] of Object.entries(node)) {
      if (SKIP_KEYS.has(key)) continue;

      if (Array.isArray(value)) {
        const containsObject = value.some(isObject);
        if (containsObject || value.length > 0) {
          addKey(key);
        }
        if (containsObject) {
          for (const item of value) traverseNode(item);
        }
      } else if (isObject(value)) {
        addKey(key);
        traverseNode(value);
      }
    }
  };

  traverseNode(ast);

  return { ...visitorKeys, ...BASE_VISITOR_KEYS };
};
