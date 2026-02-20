import type { KnipConfig } from "knip/dist";

const config = {
  entry: ["rolldown.config.js"],
  project: ["**/*.{js,ts}"],
  oxlint: {},
  vitest: {},
  ignore: ["tests/fixtures/**/*"],
  ignoreDependencies: ["@libpg-query/parser"],
} as const satisfies KnipConfig;

export default config;
