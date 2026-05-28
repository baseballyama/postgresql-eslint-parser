import type { Program, SourceLocation } from "./ast.ts";
import type { ESLintToken, RawPostgreSQLAst } from "./types.ts";
import { createByteToCharOffset, type LineMap } from "./utils.ts";

const specialKeys = ["parent", "type", "range", "loc"];

interface Location {
  start: { position: number; line: number; column: number };
  end: { position: number; line: number; column: number };
}

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value);
};

const createLocationFromPosition = (
  position: number,
  lineMap: LineMap,
): Location => {
  const { line, column } = lineMap.getPosition(position);
  return {
    start: { position, line, column },
    end: { position, line, column },
  };
};

const setNodeLocation = (
  node: Record<string, unknown>,
  range: [number, number],
  loc: SourceLocation,
): void => {
  node["range"] = range;
  node["loc"] = loc;
};

const addParents = (
  node: Record<string, unknown>,
  parent: Record<string, unknown> | null = null,
): void => {
  node["parent"] = parent;

  for (const [key, value] of Object.entries(node)) {
    if (specialKeys.includes(key)) continue;

    if (Array.isArray(value)) {
      for (const item of value) {
        if (isRecord(item) && "type" in item) {
          addParents(item, node);
        }
      }
    } else if (isRecord(value) && "type" in value) {
      addParents(value, node);
    }
  }
};

// libpg-query emits some node types as bare objects without the
// usual single-key `{ TypeName: {...} }` wrapper. Without an explicit
// type tag, the typeKey-detection loop below would pick whichever
// field happens to be an object — for `Alias` (`{ aliasname, colnames? }`)
// that wrongly picks `colnames` (an array) and inlines its items into
// the node under numeric keys, stranding the String children with no
// per-name range. Detect these bare nodes by their characteristic
// fields and assign the canonical type explicitly instead.
const detectBareNodeType = (node: Record<string, unknown>): string | null => {
  if (typeof node["aliasname"] === "string") return "Alias";
  return null;
};

const addTypes = (node: Record<string, unknown>): void => {
  if (isArray(node)) {
    for (const item of node) {
      if (isRecord(item)) addTypes(item);
    }
  } else if (isRecord(node)) {
    const bareType = node["type"] == null ? detectBareNodeType(node) : null;
    if (bareType != null) {
      node["type"] = bareType;
    } else {
      const typeKey = Object.keys(node).find(
        (k) => !specialKeys.includes(k) && isRecord(node[k]),
      );
      if (typeKey) {
        node["type"] = typeKey;
        const value = node[typeKey];
        if (isRecord(value)) {
          delete node[typeKey];
          Object.assign(node, value);
        }
      }
    }
    for (const [key, value] of Object.entries(node)) {
      if (!specialKeys.includes(key) && isRecord(value)) {
        addTypes(value);
      }
    }
  }
};

const buildAddLocation = (
  locationMap: Record<number, Location>,
  lineMap: LineMap,
  byteToChar: (byteOffset: number) => number,
) => {
  const getParentLocation = (
    obj: Record<string, unknown>,
  ): { range: [number, number]; loc: SourceLocation } | null => {
    const parent = obj["parent"];
    if (!isRecord(parent)) return null;

    if (parent["loc"] != null && parent["range"] != null) {
      return {
        loc: parent["loc"] as SourceLocation,
        range: parent["range"] as [number, number],
      };
    }
    return getParentLocation(parent);
  };

  const addLocation = (
    node: Record<string, unknown>,
  ): { minLocation: Location | null; maxLocation: Location | null } => {
    let minLocation: Location | null = null;
    let maxLocation: Location | null = null;

    const updateCurrentMinMax = (
      newMin: Location | null,
      newMax: Location | null,
    ) => {
      if (newMin == null || newMax == null) return;
      if (
        minLocation == null ||
        newMin.start.position < minLocation.start.position
      ) {
        minLocation = newMin;
      }
      if (
        maxLocation == null ||
        newMax.end.position > maxLocation.end.position
      ) {
        maxLocation = newMax;
      }
    };

    if (isArray(node)) {
      for (const item of node) {
        if (isRecord(item)) {
          const { minLocation: childMin, maxLocation: childMax } =
            addLocation(item);
          updateCurrentMinMax(childMin, childMax);
        }
      }
      return { minLocation, maxLocation };
    }

    if (!isRecord(node)) return { minLocation, maxLocation };

    for (const [key, value] of Object.entries(node)) {
      if (isRecord(value) && !specialKeys.includes(key)) {
        const { minLocation: childMin, maxLocation: childMax } =
          addLocation(value);
        updateCurrentMinMax(childMin, childMax);
      }
    }

    // libpg-query uses negative `location` values (most commonly -1) to mark
    // synthetic / unanchored nodes — e.g. the `selectStmt` that
    // `transformInsertStmt` wraps around an `INSERT INTO ... SELECT ...`. Treat
    // those as "no location" so they neither overwrite the node with a bogus
    // position nor bubble a negative `minLocation` into their ancestors.
    const rawLocation =
      typeof node["location"] === "number" && node["location"] >= 0
        ? node["location"]
        : null;
    // libpg-query reports `location` as a UTF-8 byte offset, but the rest of
    // the pipeline (tokens, line map, node ranges) operates on JS string
    // (UTF-16) offsets. Convert here so downstream lookups line up when the
    // source contains multi-byte characters.
    const location = rawLocation == null ? null : byteToChar(rawLocation);
    if (typeof node["location"] === "number") {
      delete node["location"];
    }
    if (location != null) {
      const locationInfo = locationMap[location];

      if (locationInfo) {
        const { start, end } = locationInfo;
        setNodeLocation(node, [start.position, end.position], {
          start: { line: start.line, column: start.column },
          end: { line: end.line, column: end.column },
        });
        updateCurrentMinMax(locationInfo, locationInfo);
      } else {
        const { line, column } = lineMap.getPosition(location);
        setNodeLocation(node, [location, location], {
          start: { line, column },
          end: { line, column },
        });
        const locationObj = createLocationFromPosition(location, lineMap);
        updateCurrentMinMax(locationObj, locationObj);
      }
    }

    if (
      node["range"] == null &&
      node["loc"] == null &&
      minLocation != null &&
      maxLocation != null
    ) {
      setNodeLocation(
        node,
        [
          (minLocation as Location).start.position,
          (maxLocation as Location).end.position,
        ],
        {
          start: {
            line: (minLocation as Location).start.line,
            column: (minLocation as Location).start.column,
          },
          end: {
            line: (maxLocation as Location).end.line,
            column: (maxLocation as Location).end.column,
          },
        },
      );
    }

    if ("type" in node && (node["range"] == null || node["loc"] == null)) {
      const parentLocation = getParentLocation(node);
      if (parentLocation) {
        setNodeLocation(node, parentLocation.range, parentLocation.loc);
        const locationObj = {
          start: {
            position: parentLocation.range[0],
            line: parentLocation.loc.start.line,
            column: parentLocation.loc.start.column,
          },
          end: {
            position: parentLocation.range[1],
            line: parentLocation.loc.end.line,
            column: parentLocation.loc.end.column,
          },
        };

        updateCurrentMinMax(locationObj, locationObj);
      } else if (node["range"] == null || node["loc"] == null) {
        setNodeLocation(node, [0, 0], {
          start: { line: 1, column: 0 },
          end: { line: 1, column: 0 },
        });
      }
    }

    // Return whatever locations were actually observed in this subtree
    // (or null when nothing was found). The previous default of
    // {position: 0} was bubbling into ancestors via `updateCurrentMinMax`
    // and dragging their `range[0]` down to 0 whenever any descendant
    // lacked its own `location` — most visibly for the `selectStmt`
    // wrapped inside an `InsertStmt`. `updateCurrentMinMax` already
    // treats null as a no-op, so this is the right contract.
    return { minLocation, maxLocation };
  };

  return addLocation;
};

const buildStartEndMap = (tokens: ESLintToken[]): Record<number, Location> => {
  const result: Record<number, Location> = {};

  for (const token of tokens) {
    const [start, end] = token.range;
    result[start] = {
      start: {
        position: start,
        line: token.loc.start.line,
        column: token.loc.start.column,
      },
      end: {
        position: end,
        line: token.loc.end.line,
        column: token.loc.end.column,
      },
    };
  }

  return result;
};

// `addLocation` falls back to `range: [0, 0]` for nodes that have no own
// `location` and whose descendants are also unanchored (most commonly the
// `SelectStmt` and its children wrapped inside an `InsertStmt`). That makes
// every inline `eslint-disable` directive useless for downstream rules,
// because reports against those nodes resolve to line 1 column 0 — strictly
// before any comment-based directive can take effect.
//
// By the time the loop in `manipulate` knows the true bounds of the top-level
// statement (from libpg-query's `stmt_location` / `stmt_len`), we can walk
// back down and replace the [0, 0] fallbacks with the nearest ancestor's loc.
// This still over-approximates a child statement's exact range, but it is
// strictly inside the enclosing statement and large enough that inline
// directives at the file head suppress reports against it.
const isFallbackRange = (range: unknown): boolean =>
  isArray(range) && range.length === 2 && range[0] === 0 && range[1] === 0;

const repairFallbackLocations = (
  node: unknown,
  ancestorRange: [number, number],
  ancestorLoc: SourceLocation,
): void => {
  if (isArray(node)) {
    for (const item of node)
      repairFallbackLocations(item, ancestorRange, ancestorLoc);
    return;
  }
  if (!isRecord(node)) return;

  let inheritedRange = ancestorRange;
  let inheritedLoc = ancestorLoc;

  if (isFallbackRange(node["range"])) {
    setNodeLocation(node, [ancestorRange[0], ancestorRange[1]], {
      start: { line: ancestorLoc.start.line, column: ancestorLoc.start.column },
      end: { line: ancestorLoc.end.line, column: ancestorLoc.end.column },
    });
  } else if (
    isArray(node["range"]) &&
    isRecord(node["loc"]) &&
    isRecord((node["loc"] as unknown as SourceLocation).start) &&
    isRecord((node["loc"] as unknown as SourceLocation).end)
  ) {
    inheritedRange = node["range"] as [number, number];
    inheritedLoc = node["loc"] as unknown as SourceLocation;
  }

  for (const [key, value] of Object.entries(node)) {
    if (specialKeys.includes(key)) continue;
    if (isRecord(value) || isArray(value)) {
      repairFallbackLocations(value, inheritedRange, inheritedLoc);
    }
  }
};

// libpg-query carries no per-name location for `Alias.colnames` String
// children, and emits no location for the Alias node itself — both
// inherit the parent's range via `addLocation`'s fallback. That works
// for nodes that live INSIDE the parent's range, but fails for an alias
// in `func() WITH ORDINALITY AS r(range, r_idx)` where the parent
// (`RangeFunction`) range covers only the function call. Resolve the
// aliasname's position from the token stream and walk the parenthesised
// colname list to assign each String its own per-name range. Without
// this, rules like `prefer-keyword-case` cannot tell that `range`,
// `user`, `order` etc. inside `AS r(...)` are identifier positions, and
// case-fold them as keywords (corrupting the alias column reference).
const isIdentifierLike = (token: ESLintToken): boolean =>
  token.type === "Identifier" || token.type === "Keyword";

const unquoteIdentifier = (value: string): string => {
  if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1).replace(/""/g, '"');
  }
  return value;
};

const findFirstTokenAtOrAfter = (
  tokens: ESLintToken[],
  position: number,
): number => {
  let lo = 0;
  let hi = tokens.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (tokens[mid]!.range[0] >= position) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};

const setRangeAndLoc = (
  node: Record<string, unknown>,
  range: [number, number],
  lineMap: LineMap,
): void => {
  const startPos = lineMap.getPosition(range[0]);
  const endPos = lineMap.getPosition(range[1]);
  node["range"] = range;
  node["loc"] = {
    start: { line: startPos.line, column: startPos.column },
    end: { line: endPos.line, column: endPos.column },
  };
};

const resolveAliasNodeRanges = (
  alias: Record<string, unknown>,
  parentRange: [number, number] | null,
  tokens: ESLintToken[],
  lineMap: LineMap,
): void => {
  const aliasname = alias["aliasname"];
  if (typeof aliasname !== "string") return;

  // Search forward from the parent's start (not its end — for some node
  // types like RangeSubselect the parent's range begins before the
  // alias). The alias name is the first identifier-like token after the
  // parent's start whose unquoted value matches `aliasname`.
  const searchFrom = parentRange != null ? parentRange[0] : 0;
  const startIdx = findFirstTokenAtOrAfter(tokens, searchFrom);
  const target = aliasname.toLowerCase();

  let aliasTokenIdx = -1;
  for (let i = startIdx; i < tokens.length; i++) {
    const token = tokens[i]!;
    if (!isIdentifierLike(token)) continue;
    // Skip identifiers that fall inside the parent's range — those are
    // table / function / column references in the relation expression,
    // not the alias name. The aliasname token always lives strictly
    // after the parent ends.
    if (parentRange != null && token.range[1] <= parentRange[1]) continue;
    const unquoted = unquoteIdentifier(token.value).toLowerCase();
    if (unquoted === target) {
      aliasTokenIdx = i;
      break;
    }
  }
  if (aliasTokenIdx === -1) return;

  const aliasToken = tokens[aliasTokenIdx]!;
  let endRange: [number, number] = aliasToken.range;

  const colnames = alias["colnames"];
  if (isArray(colnames) && colnames.length > 0) {
    // Expect `(` immediately after the aliasname token (modulo comments
    // which the lexer strips out of `tokens`).
    const open = tokens[aliasTokenIdx + 1];
    if (open && open.type === "Punctuator" && open.value === "(") {
      const colTokens: ESLintToken[][] = [];
      let current: ESLintToken[] = [];
      let depth = 1;
      let closeIdx = -1;
      for (let i = aliasTokenIdx + 2; i < tokens.length && depth > 0; i++) {
        const t = tokens[i]!;
        if (t.type === "Punctuator" && t.value === "(") {
          depth++;
          current.push(t);
        } else if (t.type === "Punctuator" && t.value === ")") {
          depth--;
          if (depth === 0) {
            closeIdx = i;
            colTokens.push(current);
            current = [];
          } else {
            current.push(t);
          }
        } else if (t.type === "Punctuator" && t.value === "," && depth === 1) {
          colTokens.push(current);
          current = [];
        } else {
          current.push(t);
        }
      }
      if (closeIdx !== -1) {
        endRange = tokens[closeIdx]!.range;
        for (let i = 0; i < colnames.length && i < colTokens.length; i++) {
          const colNode = colnames[i];
          const segment = colTokens[i]!;
          if (!isRecord(colNode) || segment.length === 0) continue;
          const first = segment[0]!;
          const last = segment[segment.length - 1]!;
          setRangeAndLoc(colNode, [first.range[0], last.range[1]], lineMap);
        }
      }
    }
  }

  setRangeAndLoc(alias, [aliasToken.range[0], endRange[1]], lineMap);
};

const resolveAliasRanges = (
  node: unknown,
  tokens: ESLintToken[],
  lineMap: LineMap,
): void => {
  if (isArray(node)) {
    for (const item of node) resolveAliasRanges(item, tokens, lineMap);
    return;
  }
  if (!isRecord(node)) return;

  const alias = node["alias"];
  if (isRecord(alias) && alias["type"] === "Alias") {
    const parentRange =
      isArray(node["range"]) &&
      typeof node["range"][0] === "number" &&
      typeof node["range"][1] === "number"
        ? ([node["range"][0], node["range"][1]] as [number, number])
        : null;
    resolveAliasNodeRanges(alias, parentRange, tokens, lineMap);
  }

  for (const [key, value] of Object.entries(node)) {
    if (specialKeys.includes(key)) continue;
    if (isRecord(value) || isArray(value)) {
      resolveAliasRanges(value, tokens, lineMap);
    }
  }
};

export const manipulate = (
  pgAst: RawPostgreSQLAst,
  tokens: ESLintToken[],
  lineMap: LineMap,
): Program["body"] => {
  const startEndMap = buildStartEndMap(tokens);
  const result: unknown[] = [];
  const byteToChar = createByteToCharOffset(lineMap.code);
  const addLocation = buildAddLocation(startEndMap, lineMap, byteToChar);

  for (const stmt of pgAst.stmts) {
    const stmtNode = structuredClone(stmt.stmt);
    addTypes(stmtNode);
    addParents(stmtNode);
    addLocation(stmtNode);
    // The descendant aggregation in `addLocation` cannot recover the
    // statement's true bounds when some descendant lacks `location` —
    // the [0, 0] fallback for unanchored nodes drags `range[0]` to 0
    // for every statement after the first. libpg-query already gives
    // us the absolute byte offset and byte length of each top-level
    // statement; trust those over the aggregate.
    //
    // libpg-query omits `stmt_location` from the JSON output when the
    // value is 0 (the default for the first statement). Treat the
    // missing field as 0 instead of skipping the override — otherwise
    // the first DropStmt / SelectStmt ends up with the [0, 0] fallback
    // and every downstream rule reports against `line 1, column 0`.
    const stmtLocation =
      typeof stmt.stmt_location === "number" ? stmt.stmt_location : 0;
    if (stmt.stmt_len > 0) {
      const startChar = byteToChar(stmtLocation);
      const endChar = byteToChar(stmtLocation + stmt.stmt_len);
      const startPos = lineMap.getPosition(startChar);
      const endPos = lineMap.getPosition(endChar);
      stmtNode["range"] = [startChar, endChar];
      stmtNode["loc"] = {
        start: { line: startPos.line, column: startPos.column },
        end: { line: endPos.line, column: endPos.column },
      };
    }
    // Propagate the resolved statement loc down into descendants whose
    // location resolution bottomed out at [0, 0].
    const resolvedRange = stmtNode["range"];
    const resolvedLoc = stmtNode["loc"];
    if (isArray(resolvedRange) && isRecord(resolvedLoc)) {
      repairFallbackLocations(
        stmtNode,
        resolvedRange as [number, number],
        resolvedLoc as unknown as SourceLocation,
      );
    }
    // Recompute Alias / colname ranges from the token stream — see the
    // comment on `resolveAliasNodeRanges` for why this can't be derived
    // from libpg-query's `location` data alone.
    resolveAliasRanges(stmtNode, tokens, lineMap);
    result.push(stmtNode);
  }

  return result as Program["body"];
};
