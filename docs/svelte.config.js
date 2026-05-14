import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = process.env.NODE_ENV !== "production";
const base = dev ? "" : (process.env.BASE_PATH ?? "/postgresql-eslint-parser");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      base,
    },
    alias: {
      "$parser/*": "../src/*",
    },
    prerender: {
      handleHttpError: "warn",
    },
  },
};

export default config;
