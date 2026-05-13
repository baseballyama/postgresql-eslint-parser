import type { Program, SQLParseError } from "./ast.ts";
import { manipulate } from "./manipulate.ts";
import { parseSync } from "./pg-query-sync.ts";
import { tokenizeSQL } from "./tokenize.ts";
import type { ParseResult, RawPostgreSQLAst } from "./types.ts";
import { createLineMap } from "./utils.ts";
import { buildVisitorKeys } from "./visitorKeys.ts";

export const parseForESLint = (code: string): ParseResult => {
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
    const pgAst = parseSync(code) as unknown as RawPostgreSQLAst;
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
    node.parent = program;
  }

  return {
    ast: program,
    visitorKeys: buildVisitorKeys(program),
    scopeManager: null,
  };
};

export const parse = (code: string): Program => {
  return parseForESLint(code).ast;
};
