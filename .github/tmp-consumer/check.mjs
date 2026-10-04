// Temporary consumer check: import the installed plugin and lint sample SQL
// exactly as a user's eslint.config.js would. Fails on any fatal parse error
// for valid SQL, or if the plugin cannot be loaded.
import { createRequire } from "node:module";
import { ESLint } from "eslint";
import { existsSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Packages here do not export ./package.json, so find each one's directory
// from its resolved entry point, starting where the dependent package lives.
const pkgOf = (name, fromFile) => {
  let dir = dirname(createRequire(fromFile).resolve(name));
  while (!existsSync(join(dir, "package.json")) || JSON.parse(readFileSync(join(dir, "package.json"), "utf8")).name !== name) dir = dirname(dir);
  return { dir, version: JSON.parse(readFileSync(join(dir, "package.json"), "utf8")).version };
};
const app = join(process.cwd(), "package.json");
const pluginPkg = pkgOf("eslint-plugin-postgresql", app);
const parserPkg = pkgOf("postgresql-eslint-parser", join(realpathSync(pluginPkg.dir), "package.json"));
const libpgPkg = pkgOf("@libpg-query/parser", join(realpathSync(parserPkg.dir), "package.json"));
console.log(`plugin ${pluginPkg.version}, parser ${parserPkg.version}, @libpg-query/parser ${libpgPkg.version}, eslint ${pkgOf("eslint", app).version}`);

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
