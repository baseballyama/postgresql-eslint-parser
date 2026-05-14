---
"postgresql-eslint-parser": minor
---

Tokenize dollar-quoted string literals (`$$...$$` and `$tag$...$tag$`) as a
single `String` token. Previously the body was scanned character-by-character
as if it were SQL, which leaked spurious `Keyword` and `Identifier` tokens out
of every PL/pgSQL function body and let downstream lint rules false-positive
on PL/pgSQL contents.

Positional parameters (`$1`, `$2`, ...) are unchanged — the tag, when present,
must start with a letter or underscore per PostgreSQL's identifier rules.
