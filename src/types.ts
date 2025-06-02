import type { Program, SourceLocation } from "./ast.ts";

interface RawPostgreSQLNode {
  [key: string]: unknown;
  location: number | null;
}

export interface RawPostgreSQLAst {
  version: number;
  stmts: {
    stmt: RawPostgreSQLNode;
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

export interface ParseResult {
  ast: Program;
  visitorKeys: Record<string, string[]>;
  scopeManager: null;
}
