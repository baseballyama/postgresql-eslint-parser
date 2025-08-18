import type { KnipConfig } from "knip/dist";

const config = {
  entry: ["rolldown.config.js"],
  project: ["**/*.{js,ts}"],
  oxlint: {},
  vitest: {},
  ignore: ["tests/fixtures/**/*"],
} as const satisfies KnipConfig;

export default config;
