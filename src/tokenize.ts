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

const SQL_KEYWORDS_SET = new Set([
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

  // aggregate / window
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

  // procedure / PL/pgSQL
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
  "FETCH",
  "FREEZE",
  "LOCALTIME",
  "LOCALTIMESTAMP",
  "ONLY",
  "OVERLAPS",
  "PLACING",
  "SESSION_USER",
  "SET",
  "SYMMETRIC",
  "SYSTEM_USER",
  "TABLESAMPLE",
  "TO",
  "TRAILING",
  "USER",
  "VERBOSE",
  "WHERE",
  "WITH",
]);

const NUMERIC_PATTERN = /^\d+(\.\d+)?([eE][+-]?\d+)?$/;

// PostgreSQL's lexer (scan.l) only treats these six characters as
// whitespace. Anything else — NBSP, U+3000, U+FEFF, U+2028 … — is a
// high-bit byte to PostgreSQL and therefore part of an identifier, so the
// token stream must not silently drop it.
const isWhitespace = (char: string): boolean => /[ \t\n\r\f\v]/.test(char);

// scan.l: ident_start = [A-Za-z\200-\377_], ident_cont adds [0-9$]. Every
// non-ASCII code unit maps to UTF-8 bytes in \200-\377.
const isNonAscii = (char: string): boolean => char.charCodeAt(0) > 0x7f;
const isIdentStart = (char: string): boolean =>
  /[a-zA-Z_]/.test(char) || isNonAscii(char);
const isIdentCont = (char: string): boolean =>
  /[a-zA-Z0-9_$]/.test(char) || isNonAscii(char);
// Dollar-quote tags follow ident rules but cannot contain `$`.
const isDollarTagCont = (char: string): boolean =>
  /[a-zA-Z0-9_]/.test(char) || isNonAscii(char);

// Returns the offset just past the closing quote (or `code.length` when the
// literal is unterminated). A doubled quote is always an escaped quote.
// Backslash escapes exist only in E'...' strings: with
// standard_conforming_strings (the default since PostgreSQL 9.1) a
// backslash inside '...' or "..." is an ordinary character.
const scanQuoted = (
  code: string,
  openQuoteIndex: number,
  backslashEscapes: boolean,
): number => {
  const quote = code[openQuoteIndex];
  let i = openQuoteIndex + 1;
  while (i < code.length) {
    const char = code[i];
    if (char === quote) {
      if (code[i + 1] === quote) {
        i += 2;
        continue;
      }
      return i + 1;
    }
    i += backslashEscapes && char === "\\" ? 2 : 1;
  }
  return code.length;
};

// Single-letter prefixes that turn the following '...' into one lexeme:
// E'' (escape string), B'' / X'' (bit strings) and N'' (national char).
const STRING_PREFIX_PATTERN = /^[eEbBxXnN]$/;

const isKeyword = (value: string): boolean =>
  SQL_KEYWORDS_SET.has(value.toUpperCase());

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

    if (isWhitespace(char)) {
      i++;
      continue;
    }

    // comment
    if (char === "-" && i + 1 < length && code[i + 1] === "-") {
      // scan.l: comment = "--"{non_newline}*, non_newline = [^\n\r]. The
      // terminating CR / LF belongs to the line break, not the comment.
      const start = i;
      while (i < length && code[i] !== "\n" && code[i] !== "\r") {
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
      // Unlike C / JavaScript, PostgreSQL block comments nest:
      // `/* a /* b */ c */` is a single comment.
      const start = i;
      let depth = 1;
      i += 2;
      while (i < length && depth > 0) {
        if (code[i] === "/" && code[i + 1] === "*") {
          depth++;
          i += 2;
        } else if (code[i] === "*" && code[i + 1] === "/") {
          depth--;
          i += 2;
        } else {
          i++;
        }
      }
      // An unterminated comment (a syntax error) runs to EOF and has no
      // closing "*/" to strip.
      const valueEnd = depth === 0 ? i - 2 : i;
      const { range, loc } = calculateLocationFromOffset(
        lineMap,
        start,
        i - start,
      );
      comments.push({
        type: "Block",
        value: code.slice(start + 2, valueEnd),
        range,
        loc,
      });
      continue;
    }

    // string literal, or quoted identifier (also emitted as "String")
    if (char === "'" || char === '"') {
      const start = i;
      i = scanQuoted(code, i, false);

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

    // dollar-quoted string literal: $$...$$ or $tag$...$tag$
    // The tag, if present, follows unquoted-identifier rules: it must
    // start with a letter or underscore. `$1`, `$2`, ... are positional
    // parameters and are intentionally not handled here.
    if (char === "$") {
      let j = i + 1;
      if (j < length && isIdentStart(code[j]!)) {
        j++;
        while (j < length && isDollarTagCont(code[j]!)) {
          j++;
        }
      }
      if (j < length && code[j] === "$") {
        const tag = code.slice(i, j + 1);
        const start = i;
        i = j + 1;
        while (i < length) {
          if (code[i] === "$" && code.slice(i, i + tag.length) === tag) {
            i += tag.length;
            break;
          }
          i++;
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
      // Not a dollar-quote opening — fall through to the unsupported-char
      // branch so `$1` etc. are skipped exactly as before.
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
    if (/\d/.test(char) || isIdentStart(char)) {
      const start = i;
      let type: string;

      if (/\d/.test(char)) {
        // numeric literal — integer / decimal / scientific
        while (i < length && code[i] && /[\d.]/.test(code[i]!)) {
          i++;
        }
        if (i < length && code[i] && /[eE]/.test(code[i]!)) {
          i++;
          if (i < length && code[i] && /[+-]/.test(code[i]!)) {
            i++;
          }
          while (i < length && code[i] && /\d/.test(code[i]!)) {
            i++;
          }
        }
        // The scanner is permissive (e.g. it will swallow `1..2` or `1e`),
        // so validate the final lexeme before committing to "Numeric".
        // Malformed numerics fall through to "Identifier" to preserve the
        // pre-refactor classification.
        type = NUMERIC_PATTERN.test(code.slice(start, i))
          ? "Numeric"
          : "Identifier";
      } else {
        // identifier or keyword
        while (i < length && isIdentCont(code[i]!)) {
          i++;
        }
        const word = code.slice(start, i);
        const isUnicodeEscapePrefix =
          (word === "U" || word === "u") &&
          code[i] === "&" &&
          (code[i + 1] === "'" || code[i + 1] === '"');
        if (
          (STRING_PREFIX_PATTERN.test(word) && code[i] === "'") ||
          isUnicodeEscapePrefix
        ) {
          // The prefix and the quoted body are one lexeme, and libpg-query
          // anchors the A_Const `location` on the prefix. Splitting them
          // would give the constant node a range covering only "E" / "U".
          const quoteIndex = isUnicodeEscapePrefix ? i + 1 : i;
          i = scanQuoted(code, quoteIndex, word === "E" || word === "e");
          const value = code.slice(start, i);
          const { range, loc } = calculateLocationFromOffset(
            lineMap,
            start,
            value.length,
          );
          tokens.push({ type: "String", value, range, loc });
          continue;
        }
        type = isKeyword(word) ? "Keyword" : "Identifier";
      }

      const value = code.slice(start, i);
      const { range, loc } = calculateLocationFromOffset(
        lineMap,
        start,
        value.length,
      );
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
