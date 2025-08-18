import libpgQuery from "libpg-query";

import type { Program, SQLParseError } from "./ast.ts";
import { manipulate } from "./manipulate.ts";
import { tokenizeSQL } from "./tokenize.ts";
import type { ParseResult, RawPostgreSQLAst } from "./types.ts";
import { createLineMap } from "./utils.ts";
import { buildVisitorKeys } from "./visitorKeys.ts";

export const parseForESLint = (code: string): ParseResult => {
  const lineMap = createLineMap(code);
  const tokens = tokenizeSQL(code);
  const program: Program = {
    type: "Program",
    range: [0, code.length],
    loc: {
      start: { line: 1, column: 0 },
      end: lineMap.getPosition(code.length),
    },
    body: [],
    tokens,
    comments: [],
  };

  try {
    const pgAst = libpgQuery.parseSync(code) as RawPostgreSQLAst;
    const ast = manipulate(pgAst, tokens, lineMap);
    program.body = ast;

    for (const stmt of ast) {
      stmt.parent = program;
    }

    const visitorKeys = buildVisitorKeys(program);

    return {
      ast: program,
      visitorKeys,
      scopeManager: null,
    };
  } catch (err) {
    const errorNode: SQLParseError = {
      type: "SQLParseError",
      range: program.range,
      loc: program.loc,
      error: err instanceof Error ? err.message : "Unknown SQL parsing error",
      raw: code,
    };

    errorNode.parent = program;
    program.body = [errorNode];
    const visitorKeys = buildVisitorKeys(program);

    return {
      ast: program,
      visitorKeys,
      scopeManager: null,
    };
  }
};

export const parse = (code: string): Program => {
  return parseForESLint(code).ast;
};
