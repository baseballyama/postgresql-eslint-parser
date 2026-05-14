import type { KnipConfig } from "knip/dist";

const config = {
  workspaces: {
    ".": {
      entry: ["rolldown.config.js"],
      project: ["src/**/*.{js,ts}", "tests/**/*.{js,ts}"],
      oxlint: {},
      vitest: {},
      ignore: ["tests/fixtures/**/*"],
      ignoreDependencies: ["@libpg-query/parser"],
    },
    docs: {
      entry: ["src/lib/parser.ts", "src/lib/libpg-browser.ts"],
      project: ["src/**/*.{js,ts,svelte}"],
      // postgresql-eslint-parser appears in code samples inside the marketing
      // page; it is not actually imported by the docs site (the playground
      // uses the source via the $parser alias instead).
      ignoreDependencies: ["postgresql-eslint-parser"],
    },
  },
} as const satisfies KnipConfig;

export default config;
