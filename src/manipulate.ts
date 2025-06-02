import type { Program, SourceLocation } from "./ast.ts";
import type { ESLintToken, RawPostgreSQLAst } from "./types.ts";
import type { LineMap } from "./utils.ts";

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

const createDefaultLocation = (): Location => ({
  start: { position: 0, line: 1, column: 0 },
  end: { position: 0, line: 1, column: 0 },
});

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

const addTypes = (node: Record<string, unknown>): void => {
  if (isArray(node)) {
    for (const item of node) {
      if (isRecord(item)) addTypes(item);
    }
  } else if (isRecord(node)) {
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

    const location =
      typeof node["location"] === "number" ? node["location"] : null;
    if (location != null) {
      delete node["location"];
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

    return {
      minLocation: minLocation ?? createDefaultLocation(),
      maxLocation: maxLocation ?? createDefaultLocation(),
    };
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

export const manipulate = (
  pgAst: RawPostgreSQLAst,
  tokens: ESLintToken[],
  lineMap: LineMap,
): Program["body"] => {
  const startEndMap = buildStartEndMap(tokens);
  const result: unknown[] = [];
  const addLocation = buildAddLocation(startEndMap, lineMap);

  for (const stmt of pgAst.stmts) {
    const stmtNode = structuredClone(stmt.stmt);
    addTypes(stmtNode);
    addParents(stmtNode);
    addLocation(stmtNode);
    result.push(stmtNode);
  }

  return result as Program["body"];
};
