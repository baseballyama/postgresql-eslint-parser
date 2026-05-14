/**
 * Browser-side mirror of src/parse.ts.
 *
 * The published parser entry-point (`postgresql-eslint-parser`) is Node-only:
 * it reads the libpg-query WASM via `node:fs` so ESLint can stay synchronous.
 * In the browser the WASM is fetched once, then everything else — tokenizer,
 * ESTree shaping, visitor keys — is reused verbatim from the library source
 * through the `$parser/*` alias.
 */
import type { Program, SQLParseError } from "$parser/ast.ts";
import { manipulate } from "$parser/manipulate.ts";
import { tokenizeSQL } from "$parser/tokenize.ts";
import type { RawPostgreSQLAst } from "$parser/types.ts";
import { createLineMap } from "$parser/utils.ts";
import { buildVisitorKeys } from "$parser/visitorKeys.ts";

import { ensurePgReady, parseQuerySync } from "./libpg-browser";

export const ensureParserReady = (): Promise<void> => ensurePgReady();

export interface BrowserParseResult {
  program: Program;
  visitorKeys: Record<string, readonly string[]>;
  durationMs: number;
}

export const parseSQL = async (code: string): Promise<BrowserParseResult> => {
  await ensureParserReady();

  const started = performance.now();
  const lineMap = createLineMap(code);
  const { tokens, comments } = tokenizeSQL(code);

  const program: Program = {
    type: "Program",
    range: [0, code.length],
    loc: {
      start: { line: 1, column: 0 },
      end: lineMap.getPosition(code.length),
    },
    body: [],
    tokens,
    comments,
  };

  let body: Program["body"];
  try {
    const pgAst = parseQuerySync(code) as RawPostgreSQLAst;
    body = manipulate(pgAst, tokens, lineMap);
  } catch (err) {
    const errorNode: SQLParseError = {
      type: "SQLParseError",
      range: program.range,
      loc: program.loc,
      error: err instanceof Error ? err.message : "Unknown SQL parsing error",
      raw: code,
    };
    body = [errorNode];
  }

  program.body = body;
  for (const node of body) {
    // `parent` would otherwise create a cycle when serializing to JSON.
    // The playground strips it; rule authors get it via parseForESLint.
    node.parent = program;
  }

  return {
    program,
    visitorKeys: buildVisitorKeys(program),
    durationMs: performance.now() - started,
  };
};

/**
 * Walks the program and removes `parent` back-references so the result can
 * be safely serialized (e.g. JSON.stringify) and traversed by the tree view.
 */
export const stripParents = <T>(value: T): T => {
  const seen = new WeakSet<object>();
  const walk = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    if (seen.has(node as object)) return;
    seen.add(node as object);
    if (Array.isArray(node)) {
      for (const item of node) walk(item);
      return;
    }
    const obj = node as Record<string, unknown>;
    if ("parent" in obj) delete obj.parent;
    for (const key of Object.keys(obj)) walk(obj[key]);
  };
  walk(value);
  return value;
};
