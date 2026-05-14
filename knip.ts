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
    },
  },
} as const satisfies KnipConfig;

export default config;
