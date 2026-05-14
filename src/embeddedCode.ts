import type { EmbeddedCode, Program, SourceLocation } from "./ast.ts";
import type { ESLintToken } from "./types.ts";
import type { LineMap } from "./utils.ts";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const findDefElem = (
  options: unknown,
  defname: string,
): Record<string, unknown> | null => {
  if (!Array.isArray(options)) return null;
  for (const option of options) {
    if (
      isRecord(option) &&
      option["type"] === "DefElem" &&
      option["defname"] === defname
    ) {
      return option;
    }
  }
  return null;
};

interface AsBody {
  source: string;
  startSearchFrom: number;
}

// libpg_query exposes the AS body as a List of String items. A single-item
// list is a normal function body; a two-item list is the C-language
// `AS 'libname', 'symbol'` form which is not source code we can lint.
const readAsBody = (asDefElem: Record<string, unknown>): AsBody | null => {
  const arg = asDefElem["arg"];
  if (!isRecord(arg)) return null;

  const items = arg["items"];
  if (!Array.isArray(items) || items.length !== 1) return null;

  const first = items[0];
  if (!isRecord(first) || first["type"] !== "String") return null;

  const sval = first["sval"];
  if (typeof sval !== "string") return null;

  const asRange = asDefElem["range"];
  const startSearchFrom =
    Array.isArray(asRange) && typeof asRange[1] === "number" ? asRange[1] : 0;

  return { source: sval, startSearchFrom };
};

const readLanguage = (
  langDefElem: Record<string, unknown> | null,
): string | null => {
  if (!langDefElem) return null;
  const arg = langDefElem["arg"];
  if (!isRecord(arg) || arg["type"] !== "String") return null;
  const sval = arg["sval"];
  return typeof sval === "string" ? sval.toLowerCase() : null;
};

interface BodyTokenInfo {
  innerStart: number;
  innerEnd: number;
  quoteStyle: "dollar" | "single";
}

// Locate the string token that holds the function body in the original SQL
// so we can report its absolute position. The DefElem for `AS` covers only
// the AS keyword itself, so we scan forward from the keyword for the next
// String token. PostgreSQL grammar guarantees nothing but whitespace can
// appear between `AS` and the body literal.
const findBodyToken = (
  tokens: ESLintToken[],
  startSearchFrom: number,
): BodyTokenInfo | null => {
  for (const token of tokens) {
    if (token.type !== "String") continue;
    if (token.range[0] < startSearchFrom) continue;

    const raw = token.value;
    if (raw.startsWith("$")) {
      // Dollar-quote: $$...$$ or $tag$...$tag$
      const tagEnd = raw.indexOf("$", 1);
      if (tagEnd === -1) continue;
      const tagLength = tagEnd + 1;
      const innerStart = token.range[0] + tagLength;
      const innerEnd = token.range[1] - tagLength;
      return { innerStart, innerEnd, quoteStyle: "dollar" };
    }

    if (raw.startsWith("'")) {
      // Single-quoted body. The source has `''` escapes resolved; the
      // absolute range still spans the raw literal contents so callers
      // know where to find it. If the body contains `''`, source length
      // will be smaller than (innerEnd - innerStart) — sourceMap support
      // is intentionally deferred.
      const innerStart = token.range[0] + 1;
      const innerEnd = token.range[1] - 1;
      return { innerStart, innerEnd, quoteStyle: "single" };
    }

    // Any other String token here is unexpected — skip and keep looking.
  }
  return null;
};

const buildLoc = (
  start: number,
  end: number,
  lineMap: LineMap,
): SourceLocation => ({
  start: lineMap.getPosition(start),
  end: lineMap.getPosition(end),
});

const attachToFunctionStmt = (
  stmt: Record<string, unknown>,
  tokens: ESLintToken[],
  lineMap: LineMap,
): void => {
  const options = stmt["options"];
  const langDefElem = findDefElem(options, "language");
  const language = readLanguage(langDefElem);
  if (!language) return;

  const asDefElem = findDefElem(options, "as");
  if (!asDefElem) return;

  const body = readAsBody(asDefElem);
  if (!body) return;

  const tokenInfo = findBodyToken(tokens, body.startSearchFrom);
  if (!tokenInfo) return;

  const embedded: EmbeddedCode = {
    type: "EmbeddedCode",
    language,
    source: body.source,
    quoteStyle: tokenInfo.quoteStyle,
    range: [tokenInfo.innerStart, tokenInfo.innerEnd],
    loc: buildLoc(tokenInfo.innerStart, tokenInfo.innerEnd, lineMap),
  };
  (embedded as { parent?: unknown }).parent = stmt;

  (stmt as { embeddedCode?: EmbeddedCode }).embeddedCode = embedded;
};

export const attachEmbeddedCode = (
  program: Program,
  tokens: ESLintToken[],
  lineMap: LineMap,
): void => {
  for (const rawNode of program.body) {
    const node = rawNode as unknown as Record<string, unknown>;
    if (!isRecord(node)) continue;
    // Only CreateFunctionStmt carries a function body. `CREATE PROCEDURE`
    // surfaces under the same node in libpg_query (with `is_procedure: true`).
    if (node["type"] !== "CreateFunctionStmt") continue;
    attachToFunctionStmt(node, tokens, lineMap);
  }
};

/**
 * Collects every `EmbeddedCode` node in a parsed program. Intended for tools
 * that need to enumerate PL function bodies — e.g. an ESLint processor that
 * emits a virtual file per body, or a CI script that audits which languages
 * are in use across a codebase.
 *
 * The returned list preserves source order so virtual-file indices line up
 * with the order embedded bodies appear in the SQL file.
 */
export const extractEmbeddedCode = (program: Program): EmbeddedCode[] => {
  const result: EmbeddedCode[] = [];
  for (const rawNode of program.body) {
    const node = rawNode as unknown as Record<string, unknown>;
    if (!isRecord(node)) continue;
    const embedded = node["embeddedCode"];
    if (isRecord(embedded) && embedded["type"] === "EmbeddedCode") {
      result.push(embedded as unknown as EmbeddedCode);
    }
  }
  return result;
};
