---
"postgresql-eslint-parser": minor
---

Expose `CREATE FUNCTION` / `CREATE PROCEDURE` bodies written in another
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
