import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

const dev = process.env.NODE_ENV !== "production";
const base = basePath(
  dev ? "" : (process.env.BASE_PATH ?? "/postgresql-eslint-parser"),
);

// Kit 3 types `paths.base` as "" or a root-relative path; reject anything else
// from the environment instead of letting the build produce broken links.
function basePath(value: string) {
  if (!isBasePath(value)) {
    throw new Error(
      `BASE_PATH must be empty or start with "/", got ${JSON.stringify(value)}`,
    );
  }
  return value;
}

function isBasePath(value: string): value is "" | `/${string}` {
  return value === "" || value.startsWith("/");
}

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
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
      // A subpath import (`#parser/*`) cannot point outside this package, so
      // the library sources stay behind the (deprecated) Kit alias.
      alias: {
        "$parser/*": "../src/*",
      },
      prerender: {
        handleHttpError: "warn",
      },
    }),
  ],
  server: {
    fs: {
      // Allow Vite to read TypeScript sources from the repository root so the
      // playground can re-use the library's tokenize/manipulate/visitorKeys.
      allow: [here, repoRoot],
    },
  },
  optimizeDeps: {
    exclude: ["@libpg-query/parser"],
  },
});
