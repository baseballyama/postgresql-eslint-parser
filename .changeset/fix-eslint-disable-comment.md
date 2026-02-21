---
"postgresql-eslint-parser": patch
---

fix: respect ESLint disable directives in SQL comments

Previously, the `comments` array in the AST was always empty, which caused ESLint to ignore directive comments such as `/* eslint-disable */`, `/* eslint-disable-next-line */`, and `-- eslint-disable-line`.

This fix separates SQL comments from the tokens array and populates the AST `comments` array with properly formatted ESLint comment objects:
- `--` line comments → `{ type: "Line", value: "..." }` (value excludes the leading `--`)
- `/* */` block comments → `{ type: "Block", value: "..." }` (value excludes the `/*` and `*/` delimiters)
