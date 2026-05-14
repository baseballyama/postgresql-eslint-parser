import { defineConfig } from "rolldown";

export default defineConfig({
  input: {
    index: "src/index.ts",
    processor: "src/processor.ts",
  },
  output: {
    dir: "dist",
    format: "esm",
    entryFileNames: "[name].js",
    sourcemap: true,
  },
  platform: "node",
});
