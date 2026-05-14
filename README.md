# postgresql-eslint-parser

A PostgreSQL SQL parser for ESLint, built on top of [`@libpg-query/parser`](https://github.com/launchql/libpg-query-node) (PostgreSQL 17).

It exposes an ESTree-compatible AST so that ESLint can lint `.sql` files written in PostgreSQL dialect, including `eslint-disable` directives written as SQL comments.

## Requirements

- Node.js `>= 22`
- ESM-only package (`"type": "module"`)

## Installation

```bash
npm install postgresql-eslint-parser
# or
pnpm add postgresql-eslint-parser
# or
yarn add postgresql-eslint-parser
```

## Usage

```javascript
import parser from "postgresql-eslint-parser";

// Parse SQL code
const ast = parser.parse("SELECT * FROM users WHERE id = 1");

// Parse for ESLint (includes visitor keys and scope manager)
const { ast, visitorKeys, scopeManager } = parser.parseForESLint(
  "SELECT * FROM users WHERE id = 1",
);
```

Named exports are also available:

```javascript
import { parse, parseForESLint, Ast } from "postgresql-eslint-parser";

const program = parse("SELECT 1");
// `Ast` is a namespace re-export of all AST type definitions
// (useful when writing custom ESLint rules in TypeScript).
```

## ESLint Integration

### ESLint Flat Config (`eslint.config.js`)

```javascript
import postgresqlParser from "postgresql-eslint-parser";

export default [
  {
    files: ["**/*.sql"],
    languageOptions: {
      parser: postgresqlParser,
    },
    rules: {
      // Your SQL-specific rules here
    },
  },
];
```

### ESLint directives in SQL comments

`eslint-disable` style directives written as SQL comments are honored, because the parser populates the AST `comments` array from both line and block SQL comments:

```sql
-- eslint-disable-next-line no-select-star
SELECT * FROM users;

/* eslint-disable some-rule */
SELECT id FROM users;
/* eslint-enable some-rule */
```

| SQL comment | ESLint comment node                                                    |
| ----------- | ---------------------------------------------------------------------- |
| `-- ...`    | `{ type: "Line",  value: "..." }` (without the leading `--`)           |
| `/* ... */` | `{ type: "Block", value: "..." }` (without the `/*` / `*/` delimiters) |

## Features

- **PostgreSQL 17 parsing** — powered by `@libpg-query/parser`, loaded synchronously via WebAssembly so it works with ESLint's synchronous parser API.
- **ESTree-compatible AST** — `Program` node with `body`, `tokens`, and `comments` arrays.
- **`parseForESLint` integration** — returns `ast`, `visitorKeys`, and `scopeManager`.
- **Source location tracking** — every node has `range` and `loc` (line/column) information.
- **Tokens & comments** — generated for syntax highlighting, rule authoring, and ESLint directive support.
- **Graceful syntax error handling** — invalid SQL is returned as a `SQLParseError` node inside `Program.body` instead of throwing, so other tooling can still inspect the source.
- **Typed AST** — full TypeScript declarations are shipped alongside the JS bundle.

## API

### `parse(code: string): Program`

Parses SQL code and returns an ESTree `Program` node.

### `parseForESLint(code: string): ParseResult`

Parses SQL code for ESLint usage. Returns:

- `ast`: the `Program` node (with `tokens` and `comments`)
- `visitorKeys`: visitor key mappings for AST traversal
- `scopeManager`: currently always `null`

### `Ast` namespace

All AST node type definitions (e.g. `Program`, `SQLStatementNode`, `SelectStmt`, `SQLParseError`, …) are re-exported under the `Ast` namespace for use in custom ESLint rules.

### `extractEmbeddedCode(program: Program): EmbeddedCode[]`

Returns every `EmbeddedCode` node (PL function bodies) in source order. Each entry exposes `language` (the lower-cased `LANGUAGE` clause, e.g. `"plv8"`, `"plpgsql"`, `"plpython3u"`), `source` (the body text), `range` / `loc` (absolute position in the SQL file), and `quoteStyle` (`"dollar"` or `"single"`). C-style two-argument `AS 'libname', 'symbol'` is intentionally skipped because it is not source code.

```ts
import { parseForESLint, extractEmbeddedCode } from "postgresql-eslint-parser";

const { ast } = parseForESLint(sql);
for (const body of extractEmbeddedCode(ast)) {
  console.log(
    `${body.language}: ${body.source.length} chars at ${body.range[0]}`,
  );
}
```

### Syntax errors

When the input cannot be parsed, `parseForESLint` does **not** throw. Instead, `program.body` contains a single `SQLParseError` node:

```ts
import type { Ast } from "postgresql-eslint-parser";

interface SQLParseError {
  type: "SQLParseError";
  range: [number, number];
  loc: Ast.SourceLocation;
  error: string; // human-readable error message from libpg-query
  raw: string; // the original source code
}
```

## License

[MIT](./LICENSE)
