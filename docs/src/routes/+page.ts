import { highlight } from "$lib/highlight";

const eslintExample = `// eslint.config.js
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

export const load = async () => {
  const eslintConfig = await highlight(eslintExample, "javascript");
  return { eslintConfig };
};
