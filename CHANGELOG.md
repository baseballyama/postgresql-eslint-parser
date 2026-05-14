# postgresql-eslint-parser

## 0.5.0

### Minor Changes

- [#185](https://github.com/baseballyama/postgresql-eslint-parser/pull/185) [`6032677`](https://github.com/baseballyama/postgresql-eslint-parser/commit/6032677a419c73f6186ae8d95f50bedf2c0fd14c) Thanks [@baseballyama](https://github.com/baseballyama)! - Stop the descendant-aggregation in `addLocation` from emitting a
  default `{position: 0}` for subtrees with no observed locations.

  Previously, `addLocation` returned `createDefaultLocation()` (which is
  position 0) when neither a child nor the node itself had a location.
  That default bubbled into the ancestor's `updateCurrentMinMax` and
  dragged its `range[0]` down to 0 — most visibly for the `selectStmt`
  wrapped inside an `InsertStmt`, whose range came out as `[0, 63]`
  instead of the correct `[34, 41]` for `INSERT INTO t (col) VALUES ('x')`.

  The function now returns `{ minLocation: null, maxLocation: null }` when
  nothing was found, and `updateCurrentMinMax` already treats null as a
  no-op. Top-level statement ranges are unaffected (they were already
  overridden via `stmt_location` / `stmt_len` in PR [#182](https://github.com/baseballyama/postgresql-eslint-parser/issues/182)).

## 0.4.0

### Minor Changes

- [#182](https://github.com/baseballyama/postgresql-eslint-parser/pull/182) [`6fe1161`](https://github.com/baseballyama/postgresql-eslint-parser/commit/6fe1161c3febc7a45dba3883aa9efbfc378ce751) Thanks [@baseballyama](https://github.com/baseballyama)! - Use `stmt_location` and `stmt_len` from libpg-query to set the absolute
  `range` and `loc` of every top-level statement.

  Previously, the parser derived each top-level node's range by aggregating
  the min/max positions of its descendants. When a descendant lacked
  `location` info, the `[0, 0]` fallback dragged `range[0]` down to 0 for
  every statement after the first, and `range[1]` was set to the start of
  the rightmost-located token rather than its end. Token-walking lint
  rules (`require-trailing-semicolon`, statement-boundary checks) relied
  on the stmt range and false-positived as a result.

  libpg-query already returns `stmt_location` (absolute byte offset) and
  `stmt_len` (byte length) per top-level statement; we now use them
  directly. Inner nodes (e.g. the `selectStmt` of an `InsertStmt`) still
  go through the aggregate path — that's a separate bug.

## 0.3.0

### Minor Changes

- [#178](https://github.com/baseballyama/postgresql-eslint-parser/pull/178) [`d1ec5de`](https://github.com/baseballyama/postgresql-eslint-parser/commit/d1ec5def2268e275fc351f6153894bb22e16bfd9) Thanks [@baseballyama](https://github.com/baseballyama)! - Expose `CREATE FUNCTION` / `CREATE PROCEDURE` bodies written in another
  language as an `EmbeddedCode` node on the enclosing `CreateFunctionStmt`. The
  node carries the source text, the absolute range/loc inside the original SQL,
  the lower-cased `LANGUAGE` clause name, and whether the body was dollar-
  quoted or single-quoted.

  The parser deliberately does not parse the inner language itself — `language`
  is exposed as a free-form `string` so any PL (plv8, plpgsql, plpython3u,
  plperl, plrust, …) flows through without a parser change. Bodies written as
  the C-style two-argument form (`AS 'libname', 'symbol'`) are intentionally
  skipped because they are not source code. `EmbeddedCode` is registered in the
  visitor keys, and `buildVisitorKeys` now unions keys across every node of the
  same type so optional fields (like `embeddedCode`) are reported even when the
  first encountered statement omits them.

- [#179](https://github.com/baseballyama/postgresql-eslint-parser/pull/179) [`eb64b4e`](https://github.com/baseballyama/postgresql-eslint-parser/commit/eb64b4ee5e5e3d7da9dac0d6fd44b054a909d299) Thanks [@baseballyama](https://github.com/baseballyama)! - Add `extractEmbeddedCode(program)` — a low-level helper that returns every
  `EmbeddedCode` node in source order. Intended as the building block for
  tooling that maps PL function bodies onto something else (an ESLint
  processor's virtual files, a CI audit, a documentation generator, …) without
  re-walking the AST manually.

- [#180](https://github.com/baseballyama/postgresql-eslint-parser/pull/180) [`777a910`](https://github.com/baseballyama/postgresql-eslint-parser/commit/777a910cef97744f4e5414e6c02b81de3d84bf9e) Thanks [@baseballyama](https://github.com/baseballyama)! - Add `createPlProcessor` (exported from the new `postgresql-eslint-parser/processor` subpath) — a generic ESLint processor that emits one virtual file per PL function body so ESLint can lint each body with whatever parser and rules the user has configured for that language. The processor itself is language-agnostic: it takes a `{ languages: Record<string, string> }` map from `LANGUAGE` name to virtual-file extension. Plug in `.js` for plv8, `.py` for plpython3u, `.plpgsql` for plpgsql, etc.

  `preprocess` returns blocks named `0.<ext>`, `1.<ext>`, … so user configs can target them with patterns like `**/*.sql/*.js`. `postprocess` maps message line/column back to the SQL coordinate system. Fix ranges are translated only for dollar-quoted bodies; single-quoted bodies (with `''` escapes) drop fixes to avoid reporting incorrect ranges. `unknown: "error"` flips the default skip behaviour so unhandled languages fail loudly.

## 0.2.0

### Minor Changes

- [#175](https://github.com/baseballyama/postgresql-eslint-parser/pull/175) [`c6e8300`](https://github.com/baseballyama/postgresql-eslint-parser/commit/c6e8300724a56a7b81fcea73083225c45557125e) Thanks [@baseballyama](https://github.com/baseballyama)! - Tokenize dollar-quoted string literals (`$$...$$` and `$tag$...$tag$`) as a
  single `String` token. Previously the body was scanned character-by-character
  as if it were SQL, which leaked spurious `Keyword` and `Identifier` tokens out
  of every PL/pgSQL function body and let downstream lint rules false-positive
  on PL/pgSQL contents.

  Positional parameters (`$1`, `$2`, ...) are unchanged — the tag, when present,
  must start with a letter or underscore per PostgreSQL's identifier rules.

## 0.1.10

### Patch Changes

- [#151](https://github.com/baseballyama/postgresql-eslint-parser/pull/151) [`8ccbd78`](https://github.com/baseballyama/postgresql-eslint-parser/commit/8ccbd782d652d3eb9122e7c3186d9474072edd70) Thanks [@renovate](https://github.com/apps/renovate)! - fix: resolve `@libpg-query/parser` WASM import/export letters dynamically so future rebuilds (e.g. v17.6.10) don't silently corrupt memory

## 0.1.9

### Patch Changes

- [#159](https://github.com/baseballyama/postgresql-eslint-parser/pull/159) [`ee8bd63`](https://github.com/baseballyama/postgresql-eslint-parser/commit/ee8bd63c4b4eb007e4aa22379e826f30beefdcde) Thanks [@baseballyama](https://github.com/baseballyama)! - Fix source location reporting when the SQL contains multi-byte characters (e.g. Japanese comments, emoji). `libpg-query` returns `location` as a UTF-8 byte offset, but the parser was treating it as a JavaScript string (UTF-16) offset, causing ESLint to report errors several lines/columns away from the actual position. Byte offsets are now converted to character offsets before being mapped to line/column.

## 0.1.8

### Patch Changes

- [#129](https://github.com/baseballyama/postgresql-eslint-parser/pull/129) [`18ae60e`](https://github.com/baseballyama/postgresql-eslint-parser/commit/18ae60e8b2de49c7111c604b6ecb38bb4e878f7c) Thanks [@baseballyama](https://github.com/baseballyama)! - fix: respect ESLint disable directives in SQL comments

  Previously, the `comments` array in the AST was always empty, which caused ESLint to ignore directive comments such as `/* eslint-disable */`, `/* eslint-disable-next-line */`, and `-- eslint-disable-line`.

  This fix separates SQL comments from the tokens array and populates the AST `comments` array with properly formatted ESLint comment objects:
  - `--` line comments → `{ type: "Line", value: "..." }` (value excludes the leading `--`)
  - `/* */` block comments → `{ type: "Block", value: "..." }` (value excludes the `/*` and `*/` delimiters)

## 0.1.7

### Patch Changes

- [#126](https://github.com/baseballyama/postgresql-eslint-parser/pull/126) [`0d0cffb`](https://github.com/baseballyama/postgresql-eslint-parser/commit/0d0cffb2427e4becd0fb114af9cf8e3a7a6835ae) Thanks [@baseballyama](https://github.com/baseballyama)! - chore: support npm trusted publishing

## 0.1.6

### Patch Changes

- [#123](https://github.com/baseballyama/postgresql-eslint-parser/pull/123) [`4e21e52`](https://github.com/baseballyama/postgresql-eslint-parser/commit/4e21e52c25dfeda79f3e65a40cd6ccba0044cb95) Thanks [@baseballyama](https://github.com/baseballyama)! - Fix synchronous parsing by loading the WASM binary synchronously via `new WebAssembly.Module()` + `new WebAssembly.Instance()`, removing the need for the async `loadModule()` call that was incompatible with ESLint's synchronous parser API.

## 0.1.5

### Patch Changes

- [#52](https://github.com/baseballyama/postgresql-eslint-parser/pull/52) [`ef7e638`](https://github.com/baseballyama/postgresql-eslint-parser/commit/ef7e6380e0fd49ee9a680e15b781e95338394b6a) Thanks [@baseballyama](https://github.com/baseballyama)! - fix: call `loadModule` of `libpg-query`

- [#54](https://github.com/baseballyama/postgresql-eslint-parser/pull/54) [`894330e`](https://github.com/baseballyama/postgresql-eslint-parser/commit/894330e0876a7a35932968db1930d1cdda50181d) Thanks [@baseballyama](https://github.com/baseballyama)! - chore!: drop Node18 support

## 0.1.4

### Patch Changes

- [#50](https://github.com/baseballyama/postgresql-eslint-parser/pull/50) [`1f6b288`](https://github.com/baseballyama/postgresql-eslint-parser/commit/1f6b2883938df9cc629e03b4ccbaac481470b035) Thanks [@baseballyama](https://github.com/baseballyama)! - chore: update dependencies

## 0.1.3

### Patch Changes

- [#8](https://github.com/baseballyama/postgresql-eslint-parser/pull/8) [`bf26fca`](https://github.com/baseballyama/postgresql-eslint-parser/commit/bf26fca3e25364f7da9d0f5a919549e57c8f9391) Thanks [@baseballyama](https://github.com/baseballyama)! - fix: remove unnecessary console

## 0.1.2

### Patch Changes

- [#7](https://github.com/baseballyama/postgresql-eslint-parser/pull/7) [`ce3089f`](https://github.com/baseballyama/postgresql-eslint-parser/commit/ce3089f56bb97cdcde4dc87ca646ddd5b420b2d1) Thanks [@baseballyama](https://github.com/baseballyama)! - fix: change import style of libpg-query

## 0.1.1

### Patch Changes

- [#3](https://github.com/baseballyama/postgresql-eslint-parser/pull/3) [`d931a90`](https://github.com/baseballyama/postgresql-eslint-parser/commit/d931a90652dd07830cbd13242edbb7bce6862f7b) Thanks [@baseballyama](https://github.com/baseballyama)! - fix: return SQLParseError node if there is syntax error

## 0.1.0

### Minor Changes

- [`6f5a847`](https://github.com/baseballyama/postgresql-eslint-parser/commit/6f5a8479cb445473c6e9bbe50f250cff10d73fc9) Thanks [@baseballyama](https://github.com/baseballyama)! - feat: initial release
