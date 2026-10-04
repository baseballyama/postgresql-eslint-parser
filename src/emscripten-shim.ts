// Recovers the minified names an Emscripten JS shim gives to the WASM
// module's imports and exports. Kept free of side effects so the parsing can
// be tested against real shim excerpts without loading the WASM binary.
//
// Emscripten (via binaryen) shortens names to JS identifiers: one letter
// first, then longer names that can also contain digits, `_` and `$`.
const MINIFIED_NAME = "[A-Za-z_$][A-Za-z0-9_$]*";

export const parseImportLetters = (src: string): Record<string, string> => {
  const match = src.match(/wasmImports\s*=\s*\{([^}]*)\}/);
  if (!match) throw new Error("Could not locate wasmImports in libpg-query.js");
  const entry = new RegExp(
    `^\\s*(${MINIFIED_NAME})\\s*:\\s*([A-Za-z0-9_$]+)\\s*$`,
  );
  const out: Record<string, string> = {};
  for (const part of match[1]!.split(",")) {
    const m = part.match(entry);
    if (m) out[m[2]!] = m[1]!;
  }
  return out;
};

export const parseExportLetters = (src: string): Record<string, string> => {
  const out: Record<string, string> = {};
  // Variable assignments: `wasmMemory=wasmExports["v"]`,
  // `_malloc=wasmExports["y"]`, or — in shims built since
  // @libpg-query/parser 17.8.0, which `^17.6.3` resolves to under
  // max-satisfying resolvers — `_malloc=Module["_malloc"]=wasmExports["y"]`.
  const assignRe = new RegExp(
    `([A-Za-z_$][A-Za-z0-9_$]*)\\s*=\\s*(?:Module\\["[A-Za-z0-9_$]+"\\]\\s*=\\s*)?wasmExports\\["(${MINIFIED_NAME})"\\]`,
    "g",
  );
  for (const m of src.matchAll(assignRe)) out[m[1]!] = m[2]!;
  // Constructor call: `wasmExports["w"]()` runs C/C++ static ctors.
  const ctorMatch = src.match(
    new RegExp(`wasmExports\\["(${MINIFIED_NAME})"\\]\\s*\\(\\s*\\)`),
  );
  if (ctorMatch) out["__wasm_call_ctors"] = ctorMatch[1]!;
  return out;
};
