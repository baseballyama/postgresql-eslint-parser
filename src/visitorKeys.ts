import type { Program } from "./ast.ts";

export const buildVisitorKeys = (ast: Program): Record<string, string[]> => {
  const visitorKeys: Record<string, string[]> = {};
  const seenTypes = new Set<string>();
  const visitedNodes = new WeakSet<object>();

  const isObject = (value: unknown): value is Record<string, unknown> => {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  };

  const hasObjects = (arr: unknown[]): boolean => {
    return arr.some((item) => isObject(item));
  };

  const traverseNode = (node: unknown, nodeType?: string): void => {
    if (!isObject(node)) return;

    if (visitedNodes.has(node)) return;
    visitedNodes.add(node);

    const type =
      nodeType ?? (typeof node["type"] === "string" ? node["type"] : "Unknown");

    if (!seenTypes.has(type)) {
      seenTypes.add(type);
      const childKeys: string[] = [];

      for (const [key, value] of Object.entries(node)) {
        if (
          key === "type" ||
          key === "range" ||
          key === "loc" ||
          key === "parent"
        ) {
          continue;
        }

        if (Array.isArray(value)) {
          if (hasObjects(value)) {
            childKeys.push(key);

            for (const item of value) {
              if (isObject(item)) {
                traverseNode(item);
              }
            }
          } else if (value.length > 0) {
            childKeys.push(key);
          }
        } else if (isObject(value)) {
          childKeys.push(key);
          traverseNode(value);
        }
      }

      visitorKeys[type] = childKeys;
    }

    for (const [key, value] of Object.entries(node)) {
      if (
        key === "type" ||
        key === "range" ||
        key === "loc" ||
        key === "parent"
      ) {
        continue;
      }

      if (Array.isArray(value)) {
        for (const item of value) {
          if (isObject(item)) {
            traverseNode(item);
          }
        }
      } else if (isObject(value)) {
        traverseNode(value);
      }
    }
  };

  traverseNode(ast);

  const baseVisitorKeys = {
    Program: ["body", "tokens", "comments"],
    SQLStatement: ["statement"],
    SQLParseError: [],
    SQLProcedure: [],
  };

  return { ...visitorKeys, ...baseVisitorKeys };
};
