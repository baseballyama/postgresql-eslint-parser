import type { Program } from "./ast.ts";

const SKIP_KEYS = new Set(["type", "range", "loc", "parent"]);

const BASE_VISITOR_KEYS: Record<string, string[]> = {
  Program: ["body", "tokens", "comments"],
  SQLStatement: ["statement"],
  SQLParseError: [],
  SQLProcedure: [],
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
    const isNewType = !(type in visitorKeys);
    const childKeys: string[] = isNewType ? [] : visitorKeys[type]!;

    for (const [key, value] of Object.entries(node)) {
      if (SKIP_KEYS.has(key)) continue;

      if (Array.isArray(value)) {
        const containsObject = value.some(isObject);
        if (isNewType && (containsObject || value.length > 0)) {
          childKeys.push(key);
        }
        if (containsObject) {
          for (const item of value) traverseNode(item);
        }
      } else if (isObject(value)) {
        if (isNewType) childKeys.push(key);
        traverseNode(value);
      }
    }

    if (isNewType) visitorKeys[type] = childKeys;
  };

  traverseNode(ast);

  return { ...visitorKeys, ...BASE_VISITOR_KEYS };
};
