// Temporary consumer check: import the installed plugin and lint sample SQL
// exactly as a user's eslint.config.js would. Fails on any fatal parse error
// for valid SQL, or if the plugin cannot be loaded.
import { createRequire } from "node:module";
import { ESLint } from "eslint";
import { writeFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const version = (name, from) => {
  const req = from ? createRequire(require.resolve(`${from}/package.json`)) : require;
  return req(`${name}/package.json`).version;
};
const parserVersion = version("postgresql-eslint-parser", "eslint-plugin-postgresql");
const libpgVersion = createRequire(
  createRequire(require.resolve("eslint-plugin-postgresql/package.json")).resolve(
    "postgresql-eslint-parser/package.json",
  ),
)("@libpg-query/parser/package.json").version;
console.log(`plugin ${version("eslint-plugin-postgresql")}, parser ${parserVersion}, @libpg-query/parser ${libpgVersion}, eslint ${version("eslint")}`);

const { default: plugin } = await import("eslint-plugin-postgresql");
console.log(`rules: ${Object.keys(plugin.rules).length}`);

writeFileSync("good.sql", "SELECT id, name\nFROM users\nWHERE id = 1;\n");
writeFileSync("style.sql", "select * from users;\n");
writeFileSync("bad.sql", "SELECT 'unterminated string FROM users;\n");
writeFileSync(
  "eslint.config.js",
  'import postgresql from "eslint-plugin-postgresql";\nexport default [{ files: ["**/*.sql"], ...postgresql.configs.recommended }];\n',
);

const results = await new ESLint().lintFiles(["good.sql", "style.sql", "bad.sql"]);
let failed = false;
for (const r of results) {
  const name = r.filePath.split("/").pop();
  for (const m of r.messages) console.log(`${name}:${m.line}:${m.column} ${m.ruleId ?? "(fatal)"} ${m.message}`);
  if (r.messages.length === 0) console.log(`${name}: no messages`);
  if (name !== "bad.sql" && r.messages.some((m) => m.fatal)) failed = true;
}
const bad = results.find((r) => r.filePath.endsWith("bad.sql")).messages;
if (bad.length === 0 || bad.some((m) => /is not valid JSON/.test(m.message))) {
  console.log("bad.sql: syntax error is missing or replaced by a JSON parse error");
  failed = true;
}
process.exitCode = failed ? 1 : 0;
