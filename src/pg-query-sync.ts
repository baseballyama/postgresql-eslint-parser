/**
 * Synchronous WASM-based PostgreSQL query parser.
 *
 * This module loads the `@libpg-query/parser` WASM binary synchronously
 * using `new WebAssembly.Module()` + `new WebAssembly.Instance()`,
 * avoiding the library's async `loadModule()` requirement.
 *
 * This is necessary because ESLint parsers must be fully synchronous.
 */

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

// ---------------------------------------------------------------------------
// Resolve the WASM binary path from the installed package
// ---------------------------------------------------------------------------
const require_ = createRequire(import.meta.url);
const indexPath = require_.resolve("@libpg-query/parser");
const wasmPath = join(dirname(indexPath), "libpg-query.wasm");

// ---------------------------------------------------------------------------
// Memory views – updated whenever WebAssembly.Memory grows
// ---------------------------------------------------------------------------
let wasmMemory: WebAssembly.Memory;
let HEAPU8: Uint8Array;
let HEAPU32: Uint32Array;

function updateMemoryViews(): void {
  const b = wasmMemory.buffer;
  HEAPU8 = new Uint8Array(b);
  HEAPU32 = new Uint32Array(b);
}

// ---------------------------------------------------------------------------
// WASM table & stack helpers – assigned after instantiation
// ---------------------------------------------------------------------------
let wasmTable: WebAssembly.Table;
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type AnyFn = Function;
let setThrew: (flag: number, value: number) => void;
let stackRestore: (val: number) => void;
let stackSave: () => number;

function getTableEntry(index: number): AnyFn {
  return wasmTable.get(index) as AnyFn;
}

// ---------------------------------------------------------------------------
// UTF-8 string ↔ WASM memory utilities
// ---------------------------------------------------------------------------
const textDecoder = new TextDecoder();

function UTF8ToString(ptr: number): string {
  if (!ptr) return "";
  let end = ptr;
  while (HEAPU8[end]) end++;
  return textDecoder.decode(HEAPU8.subarray(ptr, end));
}

function lengthBytesUTF8(str: string): number {
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
}

function stringToUTF8(str: string, outPtr: number, maxBytes: number): void {
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
      i++; // skip trail surrogate
    }
  }
  HEAPU8[outIdx] = 0;
}

// ---------------------------------------------------------------------------
// Emscripten invoke_* trampolines (setjmp / longjmp support)
//
// Pattern: save the stack, call the indirect function via the WASM table.
// If the callee does longjmp (throws Infinity), catch it, restore the
// stack and signal via _setThrew.  All other exceptions propagate.
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
function invoke_i(index: number): any {
  const sp = stackSave();
  try {
    return getTableEntry(index)();
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_ii(index: number, a1: any): any {
  const sp = stackSave();
  try {
    return getTableEntry(index)(a1);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_iii(index: number, a1: any, a2: any): any {
  const sp = stackSave();
  try {
    return getTableEntry(index)(a1, a2);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_iiii(index: number, a1: any, a2: any, a3: any): any {
  const sp = stackSave();
  try {
    return getTableEntry(index)(a1, a2, a3);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_iiiii(index: number, a1: any, a2: any, a3: any, a4: any): any {
  const sp = stackSave();
  try {
    return getTableEntry(index)(a1, a2, a3, a4);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_iiiiii(
  index: number,
  a1: any,
  a2: any,
  a3: any,
  a4: any,
  a5: any,
): any {
  const sp = stackSave();
  try {
    return getTableEntry(index)(a1, a2, a3, a4, a5);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_v(index: number): void {
  const sp = stackSave();
  try {
    getTableEntry(index)();
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_vi(index: number, a1: any): void {
  const sp = stackSave();
  try {
    getTableEntry(index)(a1);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_vii(index: number, a1: any, a2: any): void {
  const sp = stackSave();
  try {
    getTableEntry(index)(a1, a2);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_viii(index: number, a1: any, a2: any, a3: any): void {
  const sp = stackSave();
  try {
    getTableEntry(index)(a1, a2, a3);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_viiii(index: number, a1: any, a2: any, a3: any, a4: any): void {
  const sp = stackSave();
  try {
    getTableEntry(index)(a1, a2, a3, a4);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
  }
}
function invoke_ji(index: number, a1: any): any {
  const sp = stackSave();
  try {
    return getTableEntry(index)(a1);
  } catch (e: any) {
    stackRestore(sp);
    if (e !== e + 0) throw e;
    setThrew(1, 0);
    return 0n;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// ---------------------------------------------------------------------------
// Minimal Emscripten system-call stubs
// ---------------------------------------------------------------------------

function assertFail(
  condition: number,
  filename: number,
  line: number,
  func: number,
): never {
  throw new Error(
    `Assertion failed: ${UTF8ToString(condition)}, at: ` +
      `${filename ? UTF8ToString(filename) : "unknown"}:${line} ` +
      `${func ? UTF8ToString(func) : "unknown"}`,
  );
}

function abortJs(): never {
  throw new Error("Aborted");
}

function emscriptenThrowLongjmp(): never {
  throw Infinity;
}

function emscriptenResizeHeap(requestedSize: number): number {
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
}

function exitFn(_code: number): never {
  throw new Error(`exit(${String(_code)})`);
}

function fdClose(): number {
  return 0;
}

function fdRead(
  _fd: number,
  _iov: number,
  _iovcnt: number,
  pnum: number,
): number {
  HEAPU32[pnum >>> 2] = 0;
  return 0;
}

function fdSeek(
  _fd: number,
  _offsetLow: bigint,
  _whence: number,
  _newOffset: number,
): number {
  return 70; // ENOSYS
}

function fdWrite(
  _fd: number,
  iov: number,
  iovcnt: number,
  pnum: number,
): number {
  let written = 0;
  for (let i = 0; i < iovcnt; i++) {
    const len = HEAPU32[(iov + 4) >>> 2]!;
    iov += 8;
    written += len;
  }
  HEAPU32[pnum >>> 2] = written;
  return 0;
}

// ---------------------------------------------------------------------------
// Build the import object matching the Emscripten-generated WASM
// ---------------------------------------------------------------------------
const wasmImports = {
  a: {
    a: invoke_iii,
    b: invoke_ii,
    c: assertFail,
    d: invoke_iiii,
    e: invoke_vi,
    f: invoke_v,
    g: invoke_i,
    h: invoke_iiiii,
    i: invoke_vii,
    j: invoke_viiii,
    k: invoke_viii,
    l: invoke_iiiiii,
    m: fdWrite,
    n: invoke_ji,
    o: exitFn,
    p: emscriptenThrowLongjmp,
    q: emscriptenResizeHeap,
    r: fdRead,
    s: fdSeek,
    t: fdClose,
    u: abortJs,
  },
};

// ---------------------------------------------------------------------------
// Synchronous WASM compilation & instantiation
// ---------------------------------------------------------------------------
const wasmBinary = readFileSync(wasmPath);
const wasmModule = new WebAssembly.Module(wasmBinary);
const wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);
const wasmExports = wasmInstance.exports;

// Bind memory & table
wasmMemory = wasmExports["v"] as WebAssembly.Memory;
wasmTable = wasmExports["z"] as WebAssembly.Table;
updateMemoryViews();

// Bind exported functions
const wasmParseQuery = wasmExports["x"] as (ptr: number) => number;
const wasmMalloc = wasmExports["y"] as (size: number) => number;
const wasmFree = wasmExports["A"] as (ptr: number) => void;
const wasmFreeString = wasmExports["K"] as (ptr: number) => void;
setThrew = wasmExports["L"] as (flag: number, value: number) => void;
stackRestore = wasmExports["M"] as (val: number) => void;
stackSave = wasmExports["N"] as () => number;

// Run C/C++ static constructors
(wasmExports["w"] as () => void)();

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
function stringToPtr(str: string): number {
  const len = lengthBytesUTF8(str) + 1;
  const ptr = wasmMalloc(len);
  try {
    stringToUTF8(str, ptr, len);
    return ptr;
  } catch (error) {
    wasmFree(ptr);
    throw error;
  }
}

export function parseSync(query: string): unknown {
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
    if (resultPtr) {
      wasmFreeString(resultPtr);
    }
  }
}
