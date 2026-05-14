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
      // `$parser/*` is a SvelteKit/Vite alias that resolves to the library
      // source. SvelteKit also writes it into `.svelte-kit/tsconfig.json`, but
      // that file does not exist on a clean CI checkout, so we declare the
      // mapping here explicitly for knip.
      paths: {
        "$parser/*": ["../src/*"],
      },
      // app.d.ts is consumed by SvelteKit's type pipeline, not by any module
      // import — keep it from being flagged as unused.
      ignore: ["src/app.d.ts"],
    },
  },
} as const satisfies KnipConfig;

export default config;
