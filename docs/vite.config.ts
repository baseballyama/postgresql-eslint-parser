import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

export default defineConfig({
  plugins: [sveltekit()],
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
