---
"postgresql-eslint-parser": minor
---

Make token, comment, node and error positions follow PostgreSQL's lexer and ESLint's position rules.

**Lint results can change after upgrading.** Code that used to be dropped or mis-tokenized is now visible to rules, so rules that read tokens (for example `no-identifier-too-long` and `consistent-as-for-column-alias` in eslint-plugin-postgresql) may report new problems, and reports tied to statements or literals can move to a different line or column. Review the new reports when you upgrade.

Changes to the token stream (`ast.tokens` / `ast.comments`):

- Non-ASCII identifiers (`名前`, `café`, full-width letters, emoji) and identifiers containing `$` (`a$b`) are single `Identifier` tokens. They used to be dropped or cut short.
- Only PostgreSQL's whitespace (space, tab, CR, LF, form feed, vertical tab) separates tokens. NBSP, U+3000, U+FEFF and U+2028 are identifier characters, as they are to PostgreSQL.
- `E'…'`, `B'…'`, `X'…'`, `U&'…'` and `U&"…"` (any letter case) are one `String` token whose `value` includes the prefix.
- A backslash no longer escapes a quote in standard `'…'` strings or `"…"` identifiers, so `'C:\'` no longer swallows the rest of the line. Backslash escapes are honoured only in `E'…'`.
- Operators are lexed like PostgreSQL: `->>`, `@>`, `<@`, `~`, `~*`, `?`, `#` and similar are single `Operator` tokens instead of being split or dropped. `=-1` still lexes as `=`, `-`, `1`. `[` and `]` are `Punctuator` tokens, and `:=` is one `Operator`.
- `0x1F`, `0o17`, `0b101`, `1_000` and `.5` are single `Numeric` tokens.
- Nested block comments (`/* a /* b */ c */`) are one comment. Line comments end at a lone CR and never include the `\r` of a CRLF. An unterminated block comment keeps its whole value.

Changes to positions:

- `loc` treats CRLF, CR, LF, U+2028 and U+2029 as line breaks, the same as ESLint. Reports and `eslint-disable-line` directives in CR-only files now land on the right line.
- Top-level statements start at their first token and end at their last one. Previously, every statement after the first started right after the previous `;`, including any blank lines and comments, so reports landed on the previous line and `eslint-disable-next-line` placed above a statement did not apply. A final statement without `;` used to skip its first keyword.
- Nodes anchored on a literal or operator (`A_Const`, `A_Expr`, `ColumnRef`, …) now cover the whole literal, operator or identifier. Nodes anchored on a positional parameter (`ParamRef`, and a `ResTarget` that starts with one) cover `$1` instead of being zero-width. `$1` itself still has no token of its own: the `$` is skipped and the digits are a `Numeric` token.

Changes to parse errors:

- `SQLParseError.error` carries libpg-query's message for lexer errors (for example `unterminated quoted string at or near "'abc"`) instead of `Unexpected token 'u', "unterminat"... is not valid JSON`.
- New: `SQLParseError.errorPosition` (`{ index, line, column }`) is where PostgreSQL located the error, in the same units as `range` / `loc`. The node's own `range` / `loc` still span the whole file.

Processor:

- `createPlProcessor` strips a leading BOM before parsing. PL bodies in BOM-prefixed files are now linted, and their positions and fixes line up with the text ESLint fixes.
