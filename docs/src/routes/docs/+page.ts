import { highlight } from "$lib/highlight";

const install = `npm install --save-dev postgresql-eslint-parser
# or
pnpm add -D postgresql-eslint-parser
# or
yarn add --dev postgresql-eslint-parser`;

const eslintConfig = `// eslint.config.js
import postgresqlParser from "postgresql-eslint-parser";

export default [
  {
    files: ["**/*.sql"],
    languageOptions: {
      parser: postgresqlParser,
    },
    rules: {
      // your SQL-specific rules
    },
  },
];`;

const directives = `-- eslint-disable-next-line no-select-star
SELECT * FROM users;

/* eslint-disable some-rule */
SELECT id FROM users;
/* eslint-enable some-rule */`;

const apiExample = `import parser, { parse, parseForESLint, type Ast } from "postgresql-eslint-parser";

const program = parse("SELECT 1");
const { ast, visitorKeys } = parseForESLint("SELECT 1");

function isSelect(node: Ast.SQLStatementNode): node is Ast.SelectStmt {
  return node.type === "SelectStmt";
}`;

const sqlParseError = `interface SQLParseError {
  type: "SQLParseError";
  range: [number, number];
  loc: Ast.SourceLocation;
  error: string;   // human-readable message from libpg-query
  raw: string;     // the original source
}`;

const customRule = `// no-select-star.ts
import type { Rule } from "eslint";
import type { Ast } from "postgresql-eslint-parser";

export const noSelectStar: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    messages: { star: "SELECT * is disallowed — list columns explicitly." },
  },
  create(context) {
    return {
      SelectStmt(node: Ast.SelectStmt) {
        const target = node.targetList ?? [];
        const hasStar = target.some((t) => t?.ResTarget?.val?.A_Star);
        if (hasStar) context.report({ node, messageId: "star" });
      },
    };
  },
};`;

export const load = async () => {
  const [
    installHtml,
    eslintConfigHtml,
    directivesHtml,
    apiExampleHtml,
    sqlParseErrorHtml,
    customRuleHtml,
  ] = await Promise.all([
    highlight(install, "bash"),
    highlight(eslintConfig, "javascript"),
    highlight(directives, "sql"),
    highlight(apiExample, "typescript"),
    highlight(sqlParseError, "typescript"),
    highlight(customRule, "typescript"),
  ]);
  return {
    install: installHtml,
    eslintConfig: eslintConfigHtml,
    directives: directivesHtml,
    apiExample: apiExampleHtml,
    sqlParseError: sqlParseErrorHtml,
    customRule: customRuleHtml,
  };
};
