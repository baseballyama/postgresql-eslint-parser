import type { SourceLocation } from "./ast.ts";
import type { ESLintComment, ESLintToken } from "./types.ts";
import { createLineMap, type LineMap } from "./utils.ts";

const calculateLocationFromOffset = (
  lineMap: LineMap,
  location: number,
  length: number = 1,
): { range: [number, number]; loc: SourceLocation } => {
  const start = location;
  const end = location + length;

  return {
    range: [start, end],
    loc: {
      start: lineMap.getPosition(start),
      end: lineMap.getPosition(end),
    },
  };
};

const SQL_KEYWORDS = [
  // basic
  "SELECT",
  "INSERT",
  "UPDATE",
  "DELETE",
  "CREATE",
  "ALTER",
  "DROP",
  "TABLE",
  "INDEX",
  "VIEW",
  "DATABASE",
  "SCHEMA",
  "COLUMN",
  "PRIMARY",
  "KEY",
  "FOREIGN",
  "REFERENCES",
  "CONSTRAINT",
  "UNIQUE",
  "CHECK",
  "DEFAULT",
  "AS",
  "BETWEEN",
  "CASE",
  "CAST",
  "EXISTS",
  "FALSE",
  "TRUE",
  "NOT",
  "NULL",
  "NULLS",
  "IS",
  "ISNULL",
  "NOTNULL",
  "AND",
  "OR",
  "ANY",
  "SOME",
  "IN",
  "LIKE",
  "ILIKE",
  "SIMILAR",
  "ESCAPE",
  "ASC",
  "DESC",
  "ORDER",
  "GROUP",
  "HAVING",
  "LIMIT",
  "OFFSET",
  "DISTINCT",
  "ALL",
  "EXCEPT",
  "INTERSECT",
  "UNION",
  "VALUES",
  "FROM",
  "INTO",

  // data type
  "INTEGER",
  "INT",
  "BIGINT",
  "SMALLINT",
  "DEC",
  "DECIMAL",
  "NUMERIC",
  "REAL",
  "DOUBLE",
  "PRECISION",
  "FLOAT",
  "VARCHAR",
  "CHAR",
  "TEXT",
  "BOOLEAN",
  "DATE",
  "TIME",
  "TIMESTAMP",
  "INTERVAL",
  "UUID",
  "JSON",
  "JSONB",
  "ARRAY",

  // join
  "JOIN",
  "INNER",
  "LEFT",
  "RIGHT",
  "FULL",
  "OUTER",
  "CROSS",
  "NATURAL",
  "USING",
  "ON",

  // aggregate
  "COUNT",
  "SUM",
  "AVG",
  "MIN",
  "MAX",
  "OVER",
  "PARTITION",
  "WINDOW",
  "RANGE",
  "ROWS",
  "UNBOUNDED",
  "PRECEDING",
  "FOLLOWING",
  "CURRENT",
  "ROW",

  // procedure
  "FUNCTION",
  "PROCEDURE",
  "RETURNS",
  "RETURN",
  "LANGUAGE",
  "PLPGSQL",
  "SQL",
  "IMMUTABLE",
  "STABLE",
  "VOLATILE",
  "SECURITY",
  "DEFINER",
  "INVOKER",
  "STRICT",
  "CALLED",
  "INPUT",
  "COST",
  "ROWS",
  "PARALLEL",
  "SAFE",
  "RESTRICTED",
  "UNSAFE",
  "DECLARE",
  "BEGIN",
  "END",
  "EXCEPTION",
  "WHEN",
  "RAISE",
  "NOTICE",
  "WARNING",
  "INFO",
  "LOG",
  "DEBUG",
  "EXECUTE",
  "PERFORM",
  "GET",
  "DIAGNOSTICS",
  "LOOP",
  "WHILE",
  "FOR",
  "FOREACH",
  "EXIT",
  "CONTINUE",
  "IF",
  "THEN",
  "ELSE",
  "ELSIF",
  "CASE",
  "FOUND",
  "ROW_COUNT",
  "RESULT_OID",
  "PG_CONTEXT",
  "PG_DATATYPE_NAME",
  "PG_EXCEPTION_CONTEXT",
  "PG_EXCEPTION_DETAIL",
  "PG_EXCEPTION_HINT",
  "MESSAGE_TEXT",
  "RETURNED_SQLSTATE",
  "SCHEMA_NAME",
  "TABLE_NAME",
  "COLUMN_NAME",
  "CONSTRAINT_NAME",
  "PG_TYPE_NAME",
  "CALL",
  "DO",
  "BLOCK",

  // transaction
  "BEGIN",
  "COMMIT",
  "ROLLBACK",
  "SAVEPOINT",
  "RELEASE",
  "START",
  "TRANSACTION",
  "WORK",

  // permission
  "GRANT",
  "REVOKE",
  "PRIVILEGES",
  "USAGE",
  "CONNECT",
  "TEMPORARY",
  "TEMP",
  "EXECUTE",
  "TRIGGER",
  "RULE",
  "EVENT",
  "COMMENT",

  // other
  "ANALYSE",
  "ANALYZE",
  "AUTHORIZATION",
  "BINARY",
  "BOTH",
  "BY",
  "COLLATE",
  "COLLATION",
  "CONCURRENTLY",
  "CROSS",
  "CURRENT_CATALOG",
  "CURRENT_DATE",
  "CURRENT_ROLE",
  "CURRENT_SCHEMA",
  "CURRENT_TIME",
  "CURRENT_TIMESTAMP",
  "CURRENT_USER",
  "DEALLOCATE",
  "DEFERRABLE",
  "DEFERRED",
  "DO",
  "ELSE",
  "END",
  "EXCEPT",
  "FETCH",
  "FOR",
  "FOREIGN",
  "FREEZE",
  "FULL",
  "GROUP",
  "HAVING",
  "ILIKE",
  "IN",
  "INNER",
  "INTERSECT",
  "IS",
  "JOIN",
  "LEFT",
  "LIKE",
  "LOCALTIME",
  "LOCALTIMESTAMP",
  "NATURAL",
  "NOT",
  "NOTNULL",
  "NULL",
  "OFFSET",
  "ONLY",
  "OR",
  "ORDER",
  "OUTER",
  "OVERLAPS",
  "PLACING",
  "SESSION_USER",
  "SET",
  "SIMILAR",
  "SOME",
  "SYMMETRIC",
  "SYSTEM_USER",
  "TABLESAMPLE",
  "THEN",
  "TO",
  "TRAILING",
  "UNIQUE",
  "USER",
  "VERBOSE",
  "WHEN",
  "WHERE",
  "WINDOW",
  "WITH",
];

const SQL_KEYWORDS_SET = new Set(
  SQL_KEYWORDS.map((keyword) => keyword.toUpperCase()),
);

const getTokenType = (value: string): string => {
  const trimmedValue = value.trim();
  const upperValue = trimmedValue.toUpperCase();

  // keyword
  if (SQL_KEYWORDS_SET.has(upperValue)) {
    return "Keyword";
  }

  // numeric literal
  if (/^\d+(\.\d+)?([eE][+-]?\d+)?$/.test(trimmedValue)) {
    return "Numeric";
  }

  // string literal
  if (
    /^'([^'\\]|\\.)*'$/.test(trimmedValue) ||
    /^"([^"\\]|\\.)*"$/.test(trimmedValue)
  ) {
    return "String";
  }

  // identifier
  if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(trimmedValue)) {
    return "Identifier";
  }

  // operator
  if (/^(=|<>|!=|<=|>=|<|>|\+|-|\*|\/|%|\|\||&&|::)$/.test(trimmedValue)) {
    return "Operator";
  }

  // punctuation
  if (/^[(),;.]$/.test(trimmedValue)) {
    return "Punctuator";
  }

  return "Identifier";
};

export const tokenizeSQL = (
  code: string,
): { tokens: ESLintToken[]; comments: ESLintComment[] } => {
  const lineMap = createLineMap(code);
  const tokens: ESLintToken[] = [];
  const comments: ESLintComment[] = [];

  let i = 0;
  const length = code.length;

  while (i < length) {
    const char = code[i];
    if (!char) break;

    // skip whitespace
    if (/\s/.test(char)) {
      i++;
      continue;
    }

    // comment
    if (char === "-" && i + 1 < length && code[i + 1] === "-") {
      // line comment
      const start = i;
      while (i < length && code[i] !== "\n") {
        i++;
      }
      const rawValue = code.slice(start, i);
      const { range, loc } = calculateLocationFromOffset(
        lineMap,
        start,
        rawValue.length,
      );
      comments.push({
        type: "Line",
        value: rawValue.slice(2), // strip leading "--"
        range,
        loc,
      });
      continue;
    }

    if (char === "/" && i + 1 < length && code[i + 1] === "*") {
      // block comment
      const start = i;
      i += 2;
      while (i < length - 1 && !(code[i] === "*" && code[i + 1] === "/")) {
        i++;
      }
      i += 2;
      const rawValue = code.slice(start, i);
      const { range, loc } = calculateLocationFromOffset(
        lineMap,
        start,
        rawValue.length,
      );
      comments.push({
        type: "Block",
        value: rawValue.slice(2, -2), // strip leading "/*" and trailing "*/"
        range,
        loc,
      });
      continue;
    }

    // string literal
    if (char === "'" || char === '"') {
      const quote = char;
      const start = i;
      i++;

      while (i < length) {
        const currentChar = code[i];
        if (!currentChar) break;

        if (currentChar === quote) {
          if (i + 1 < length && code[i + 1] === quote) {
            // escaped quote
            i += 2;
          } else {
            i++;
            break;
          }
        } else if (currentChar === "\\") {
          // backslash escape
          i += 2;
        } else {
          i++;
        }
      }

      const value = code.slice(start, i);
      const { range, loc } = calculateLocationFromOffset(
        lineMap,
        start,
        value.length,
      );
      tokens.push({
        type: "String",
        value,
        range,
        loc,
      });
      continue;
    }

    // punctuation or operator
    if (/[(),;.=<>!+\-*/%|&:]/.test(char)) {
      const start = i;

      // check multiple characters operator
      if (i < length - 1) {
        const twoChar = code.slice(i, i + 2);
        if (["<=", ">=", "<>", "!=", "::", "||", "&&"].includes(twoChar)) {
          i += 2;
          const { range, loc } = calculateLocationFromOffset(lineMap, start, 2);
          tokens.push({
            type: "Operator",
            value: twoChar,
            range,
            loc,
          });
          continue;
        }
      }

      i++;
      const value = char;
      const { range, loc } = calculateLocationFromOffset(lineMap, start, 1);
      const type = /[(),;.]/.test(char) ? "Punctuator" : "Operator";
      tokens.push({
        type,
        value,
        range,
        loc,
      });
      continue;
    }

    // identifier, keyword, numeric
    if (/[a-zA-Z_0-9]/.test(char)) {
      const start = i;

      // numeric
      if (/\d/.test(char)) {
        while (i < length && code[i] && /[\d.]/.test(code[i]!)) {
          i++;
        }
        // support scientific notation
        if (i < length && code[i] && /[eE]/.test(code[i]!)) {
          i++;
          if (i < length && code[i] && /[+-]/.test(code[i]!)) {
            i++;
          }
          while (i < length && code[i] && /\d/.test(code[i]!)) {
            i++;
          }
        }
      } else {
        // identifier or keyword
        while (i < length && code[i] && /[a-zA-Z0-9_]/.test(code[i]!)) {
          i++;
        }
      }

      const value = code.slice(start, i);
      const { range, loc } = calculateLocationFromOffset(
        lineMap,
        start,
        value.length,
      );
      const type = getTokenType(value);
      tokens.push({
        type,
        value,
        range,
        loc,
      });
      continue;
    }

    // other characters (unsupported characters)
    i++;
  }

  return { tokens, comments };
};
