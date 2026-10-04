---
"postgresql-eslint-parser": patch
---

Fix token, comment and `loc` positions so they follow PostgreSQL's lexer and ESLint's line rules.

- Non-ASCII identifiers (`名前`, `café`, full-width letters, astral characters) and identifiers containing `$` (`a$b`) are now single `Identifier` tokens; previously they were dropped or cut short, which gave `ColumnRef` / `RangeVar` nodes empty or truncated ranges.
- `E'…'`, `B'…'`, `X'…'` and `U&'…'` / `U&"…"` literals are now one `String` token that includes the prefix, so the `A_Const` range covers the whole literal instead of just `E`.
- A backslash no longer escapes the closing quote in standard `'…'` strings or `"…"` identifiers (`'C:\'` used to swallow the rest of the line).
- Nested block comments (`/* a /* b */ c */`) are one comment, and line comments end at a lone CR. The value of an unterminated block comment is no longer truncated.
- `loc` now treats CR, CRLF, LF, U+2028 and U+2029 as line breaks, matching ESLint, so reports and `eslint-disable-line` directives land on the right line in CR-only files.
- Lexer errors such as `unterminated quoted string at or near "'abc"` are reported as-is in `SQLParseError.error` instead of `Unexpected token 'u', "unterminat"... is not valid JSON`.
- `createPlProcessor` now strips a leading BOM before parsing, so PL bodies in BOM-prefixed files are linted and their positions match the text ESLint fixes.
