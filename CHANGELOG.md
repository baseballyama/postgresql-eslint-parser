# postgresql-eslint-parser

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
