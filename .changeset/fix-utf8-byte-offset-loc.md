---
"postgresql-eslint-parser": patch
---

Fix source location reporting when the SQL contains multi-byte characters (e.g. Japanese comments, emoji). `libpg-query` returns `location` as a UTF-8 byte offset, but the parser was treating it as a JavaScript string (UTF-16) offset, causing ESLint to report errors several lines/columns away from the actual position. Byte offsets are now converted to character offsets before being mapped to line/column.
