import type { Program, SourceLocation } from "./ast.ts";

interface RawPostgreSQLNode {
  [key: string]: unknown;
  location: number | null;
}

export interface RawPostgreSQLAst {
  version: number;
  stmts: {
    stmt: RawPostgreSQLNode;
    // libpg-query emits the absolute byte offset of each top-level
    // statement and its length. Both are used to give the resulting
    // top-level AST node a correct `range` and `loc`, since the
    // descendant min/max aggregation cannot recover them when some
    // child node lacks its own `location`.
    stmt_location?: number;
    stmt_len: number;
  }[];
}

// -----------

export interface ESLintToken {
  type: string;
  loc: SourceLocation;
  range: [number, number];
  value: string;
}

export interface ESLintComment {
  type: "Line" | "Block";
  loc: SourceLocation;
  range: [number, number];
  value: string;
}

export interface ParseResult {
  ast: Program;
  visitorKeys: Record<string, string[]>;
  scopeManager: null;
}
