/**
 * Browser counterpart of src/pg-query-sync.ts.
 *
 * The Emscripten-generated loader bundled inside `@libpg-query/parser` resolves
 * its WASM via `document.currentScript`, which is `null` in ESM modules — so it
 * cannot locate the binary when imported through Vite. To sidestep the loader
 * entirely we replicate the manual WebAssembly instantiation that the library
 * already does for Node, fetching the WASM through a Vite-bundled asset URL.
 *
 * Letter-to-symbol mappings for imports/exports are derived at runtime from the
 * Emscripten shim source so an upstream WASM rebuild does not silently corrupt
 * memory layouts.
 */
import shimSource from "@libpg-query/parser/wasm/libpg-query.js?raw";
import wasmUrl from "@libpg-query/parser/wasm/libpg-query.wasm?url";

const parseImportLetters = (src: string): Record<string, string> => {
  const match = src.match(/wasmImports\s*=\s*\{([^}]*)\}/);
  if (!match) throw new Error("Could not locate wasmImports in libpg-query.js");
  const out: Record<string, string> = {};
  for (const part of match[1]!.split(",")) {
    const m = part.match(/^\s*([A-Za-z]+)\s*:\s*([A-Za-z0-9_$]+)\s*$/);
    if (m) out[m[2]!] = m[1]!;
  }
  return out;
};

const parseExportLetters = (src: string): Record<string, string> => {
  const out: Record<string, string> = {};
  const assignRe =
    /([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*wasmExports\["([A-Za-z])"\]/g;
  for (let m; (m = assignRe.exec(src)); ) out[m[1]!] = m[2]!;
  const ctorMatch = src.match(/wasmExports\["([A-Za-z])"\]\s*\(\s*\)/);
  if (ctorMatch) out["__wasm_call_ctors"] = ctorMatch[1]!;
  return out;
};

const importLetterBySymbol = parseImportLetters(shimSource);
const exportLetterBySymbol = parseExportLetters(shimSource);

const importLetter = (symbol: string): string => {
  const letter = importLetterBySymbol[symbol];
  if (!letter) throw new Error(`Unknown libpg-query import symbol: ${symbol}`);
  return letter;
};

const exportLetter = (symbol: string): string => {
  const letter = exportLetterBySymbol[symbol];
  if (!letter) throw new Error(`Unknown libpg-query export symbol: ${symbol}`);
  return letter;
};

let wasmMemory: WebAssembly.Memory;
let HEAPU8: Uint8Array;
let HEAPU32: Uint32Array;
let wasmTable: WebAssembly.Table;
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type AnyFn = Function;
let setThrew: (flag: number, value: number) => void;
let stackRestore: (val: number) => void;
let stackSave: () => number;

let wasmParseQuery: (ptr: number) => number;
let wasmMalloc: (size: number) => number;
let wasmFree: (ptr: number) => void;
let wasmFreeString: (ptr: number) => void;

const updateMemoryViews = (): void => {
  const b = wasmMemory.buffer;
  HEAPU8 = new Uint8Array(b);
  HEAPU32 = new Uint32Array(b);
};

const getTableEntry = (index: number): AnyFn => wasmTable.get(index) as AnyFn;

const textDecoder = new TextDecoder();
const UTF8ToString = (ptr: number): string => {
  if (!ptr) return "";
  let end = ptr;
  while (HEAPU8[end]) end++;
  return textDecoder.decode(HEAPU8.subarray(ptr, end));
};

const lengthBytesUTF8 = (str: string): number => {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i)!;
    if (c <= 0x7f) len++;
    else if (c <= 0x7ff) len += 2;
    else if (c >= 0xd800 && c <= 0xdfff) {
      len += 4;
      i++;
    } else len += 3;
  }
  return len;
};

const stringToUTF8 = (str: string, outPtr: number, maxBytes: number): void => {
  if (maxBytes <= 0) return;
  let outIdx = outPtr;
  const endIdx = outPtr + maxBytes - 1;
  for (let i = 0; i < str.length; i++) {
    let u = str.codePointAt(i)!;
    if (u <= 0x7f) {
      if (outIdx >= endIdx) break;
      HEAPU8[outIdx++] = u;
    } else if (u <= 0x7ff) {
      if (outIdx + 1 >= endIdx) break;
      HEAPU8[outIdx++] = 0xc0 | (u >> 6);
      HEAPU8[outIdx++] = 0x80 | (u & 0x3f);
    } else if (u <= 0xffff) {
      if (outIdx + 2 >= endIdx) break;
      HEAPU8[outIdx++] = 0xe0 | (u >> 12);
      HEAPU8[outIdx++] = 0x80 | ((u >> 6) & 0x3f);
      HEAPU8[outIdx++] = 0x80 | (u & 0x3f);
    } else {
      if (outIdx + 3 >= endIdx) break;
      HEAPU8[outIdx++] = 0xf0 | (u >> 18);
      HEAPU8[outIdx++] = 0x80 | ((u >> 12) & 0x3f);
      HEAPU8[outIdx++] = 0x80 | ((u >> 6) & 0x3f);
      HEAPU8[outIdx++] = 0x80 | (u & 0x3f);
      i++;
    }
  }
  HEAPU8[outIdx] = 0;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const mkInvoke = (returnsBigInt = false) =>
  function (index: number, ...args: any[]): any {
    const sp = stackSave();
    try {
      return getTableEntry(index)(...args);
    } catch (e: any) {
      stackRestore(sp);
      if (e !== e + 0) throw e;
      setThrew(1, 0);
      if (returnsBigInt) return 0n;
    }
  };

const invoke_i = mkInvoke();
const invoke_ii = mkInvoke();
const invoke_iii = mkInvoke();
const invoke_iiii = mkInvoke();
const invoke_iiiii = mkInvoke();
const invoke_iiiiii = mkInvoke();
const invoke_v = mkInvoke();
const invoke_vi = mkInvoke();
const invoke_vii = mkInvoke();
const invoke_viii = mkInvoke();
const invoke_viiii = mkInvoke();
const invoke_ji = mkInvoke(true);
/* eslint-enable @typescript-eslint/no-explicit-any */

const assertFail = (
  condition: number,
  filename: number,
  line: number,
  func: number,
): never => {
  throw new Error(
    `Assertion failed: ${UTF8ToString(condition)}, at: ${
      filename ? UTF8ToString(filename) : "unknown"
    }:${line} ${func ? UTF8ToString(func) : "unknown"}`,
  );
};

const abortJs = (): never => {
  throw new Error("Aborted");
};
const emscriptenThrowLongjmp = (): never => {
  throw Infinity;
};

const emscriptenResizeHeap = (requestedSize: number): number => {
  requestedSize >>>= 0;
  const maxHeapSize = 2147483648;
  if (requestedSize > maxHeapSize) return 0;
  const oldSize = HEAPU8.length;
  for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
    let over = oldSize * (1 + 0.2 / cutDown);
    over = Math.min(over, requestedSize + 100663296);
    const newSize = Math.min(
      maxHeapSize,
      Math.ceil(Math.max(requestedSize, over) / 65536) * 65536,
    );
    const pages =
      ((newSize - wasmMemory.buffer.byteLength + 65535) / 65536) | 0;
    try {
      wasmMemory.grow(pages);
      updateMemoryViews();
      return 1;
    } catch {
      /* try next cutDown */
    }
  }
  return 0;
};

const exitFn = (_code: number): never => {
  throw new Error(`exit(${String(_code)})`);
};
const fdClose = (): number => 0;
const fdRead = (
  _fd: number,
  _iov: number,
  _iovcnt: number,
  pnum: number,
): number => {
  HEAPU32[pnum >>> 2] = 0;
  return 0;
};
const fdSeek = (): number => 70;
const fdWrite = (
  _fd: number,
  iov: number,
  iovcnt: number,
  pnum: number,
): number => {
  let written = 0;
  for (let i = 0; i < iovcnt; i++) {
    const len = HEAPU32[(iov + 4) >>> 2]!;
    iov += 8;
    written += len;
  }
  HEAPU32[pnum >>> 2] = written;
  return 0;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WasmFn = (...args: any[]) => any;

const buildEnvImports = (): Record<string, WasmFn> => {
  const env: Record<string, WasmFn> = {};
  const bindings: Array<[string, WasmFn]> = [
    ["invoke_i", invoke_i],
    ["invoke_ii", invoke_ii],
    ["invoke_iii", invoke_iii],
    ["invoke_iiii", invoke_iiii],
    ["invoke_iiiii", invoke_iiiii],
    ["invoke_iiiiii", invoke_iiiiii],
    ["invoke_v", invoke_v],
    ["invoke_vi", invoke_vi],
    ["invoke_vii", invoke_vii],
    ["invoke_viii", invoke_viii],
    ["invoke_viiii", invoke_viiii],
    ["invoke_ji", invoke_ji],
    ["___assert_fail", assertFail],
    ["__abort_js", abortJs],
    ["__emscripten_throw_longjmp", emscriptenThrowLongjmp],
    ["_emscripten_resize_heap", emscriptenResizeHeap],
    ["_exit", exitFn],
    ["_fd_close", fdClose],
    ["_fd_read", fdRead],
    ["_fd_seek", fdSeek],
    ["_fd_write", fdWrite],
  ];
  for (const [symbol, fn] of bindings) env[importLetter(symbol)] = fn;
  return env;
};

let readyPromise: Promise<void> | null = null;

const initWasm = async (): Promise<void> => {
  const response = await fetch(wasmUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch libpg-query.wasm: ${response.status}`);
  }
  const wasmImports = { a: buildEnvImports() };

  let instance: WebAssembly.Instance;
  if (typeof WebAssembly.instantiateStreaming === "function") {
    try {
      ({ instance } = await WebAssembly.instantiateStreaming(
        response.clone(),
        wasmImports,
      ));
    } catch {
      const buffer = await response.arrayBuffer();
      ({ instance } = await WebAssembly.instantiate(buffer, wasmImports));
    }
  } else {
    const buffer = await response.arrayBuffer();
    ({ instance } = await WebAssembly.instantiate(buffer, wasmImports));
  }

  const exports = instance.exports as Record<string, unknown>;
  const getExport = <T>(symbol: string): T =>
    exports[exportLetter(symbol)] as T;

  wasmMemory = getExport<WebAssembly.Memory>("wasmMemory");
  wasmTable = getExport<WebAssembly.Table>("wasmTable");
  updateMemoryViews();

  wasmParseQuery = getExport("_wasm_parse_query");
  wasmMalloc = getExport("_malloc");
  wasmFree = getExport("_free");
  wasmFreeString = getExport("_wasm_free_string");
  setThrew = getExport("_setThrew");
  stackRestore = getExport("__emscripten_stack_restore");
  stackSave = getExport("_emscripten_stack_get_current");

  getExport<() => void>("__wasm_call_ctors")();
};

export const ensurePgReady = (): Promise<void> => {
  if (!readyPromise) readyPromise = initWasm();
  return readyPromise;
};

const stringToPtr = (str: string): number => {
  const len = lengthBytesUTF8(str) + 1;
  const ptr = wasmMalloc(len);
  try {
    stringToUTF8(str, ptr, len);
    return ptr;
  } catch (error) {
    wasmFree(ptr);
    throw error;
  }
};

export const parseQuerySync = (query: string): unknown => {
  const queryPtr = stringToPtr(query);
  let resultPtr = 0;
  try {
    resultPtr = wasmParseQuery(queryPtr);
    const resultStr = UTF8ToString(resultPtr);
    if (
      resultStr.startsWith("syntax error") ||
      resultStr.startsWith("deparse error") ||
      resultStr.startsWith("ERROR")
    ) {
      throw new Error(resultStr);
    }
    return JSON.parse(resultStr);
  } finally {
    wasmFree(queryPtr);
    if (resultPtr) wasmFreeString(resultPtr);
  }
};
