---
"postgresql-eslint-parser": patch
---

Fix more positions to follow PostgreSQL's lexer.

- Top-level statement `range` / `loc` now start at the statement's first token and end at its last token. Previously the second and later statements started right after the previous `;` (so leading comments and blank lines were included and reports landed on the previous line), and a final statement without `;` fell back to a span that skipped its first keyword (`SELECT 1` → `1`).
- Operators are lexed like PostgreSQL does: `->>`, `@>`, `<@`, `~`, `?`, `#` … are single `Operator` tokens instead of being split or dropped, `[` and `]` are `Punctuator` tokens, and `=-1` still lexes as `=` `-` `1`. `A_Expr` nodes anchored on such operators now cover the whole operator.
- `0x1F`, `0o17`, `0b101`, `1_000` and `.5` are single `Numeric` tokens, so the `A_Const` range covers the whole literal.
