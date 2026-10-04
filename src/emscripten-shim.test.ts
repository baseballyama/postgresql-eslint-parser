import { describe, expect, it } from "vitest";

import {
  assertLoaderExports,
  parseExportLetters,
  parseImportLetters,
} from "./emscripten-shim.ts";

// Excerpts copied verbatim from `wasm/libpg-query.js` of the published
// @libpg-query/parser tarballs (only the statements the loader reads).
const SHIM_17_6_10 = [
  `function receiveInstance(instance){wasmExports=instance.exports;wasmMemory=wasmExports["v"];updateMemoryViews();wasmTable=wasmExports["z"];assignWasmExports(wasmExports)}`,
  `function initRuntime(){FS.init();TTY.init();wasmExports["w"]();FS.ignorePermissions=false}`,
  `function assignWasmExports(wasmExports){_malloc=wasmExports["y"];_free=wasmExports["A"];_wasm_parse_query_raw=wasmExports["B"];_wasm_free_parse_result=wasmExports["C"];_setThrew=wasmExports["N"];__emscripten_stack_restore=wasmExports["O"];_emscripten_stack_get_current=wasmExports["P"]}`,
  `var wasmImports={c:___assert_fail,u:__abort_js,p:__emscripten_throw_longjmp,q:_emscripten_resize_heap,o:_exit,t:_fd_close,r:_fd_read,s:_fd_seek,m:_fd_write,g:invoke_i,b:invoke_ii,a:invoke_iii,d:invoke_iiii,h:invoke_iiiii,l:invoke_iiiiii,n:invoke_ji,f:invoke_v,e:invoke_vi,i:invoke_vii,k:invoke_viii,j:invoke_viiii}`,
].join("");

// Like 17.6.3 and 17.6.4, 17.6.5 predates `_wasm_parse_query_raw` and
// `_wasm_free_parse_result`. It assigns exports as
// `Module["…"]=name=wasmExports["…"]`.
const SHIM_17_6_5 = [
  `function receiveInstance(instance,module){wasmExports=instance.exports;wasmMemory=wasmExports["v"];updateMemoryViews();wasmTable=wasmExports["z"];assignWasmExports(wasmExports);removeRunDependency("wasm-instantiate");return wasmExports}`,
  `function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["w"]();FS.ignorePermissions=false}`,
  `function assignWasmExports(wasmExports){Module["_wasm_parse_query"]=_wasm_parse_query=wasmExports["x"];Module["_malloc"]=_malloc=wasmExports["y"];Module["_free"]=_free=wasmExports["A"];Module["_wasm_deparse_protobuf"]=_wasm_deparse_protobuf=wasmExports["B"];Module["_wasm_parse_plpgsql"]=_wasm_parse_plpgsql=wasmExports["C"];Module["_wasm_fingerprint"]=_wasm_fingerprint=wasmExports["D"];Module["_wasm_parse_query_protobuf"]=_wasm_parse_query_protobuf=wasmExports["E"];Module["_wasm_get_protobuf_len"]=_wasm_get_protobuf_len=wasmExports["F"];Module["_wasm_normalize_query"]=_wasm_normalize_query=wasmExports["G"];Module["_wasm_parse_query_detailed"]=_wasm_parse_query_detailed=wasmExports["H"];Module["_wasm_free_detailed_result"]=_wasm_free_detailed_result=wasmExports["I"];Module["_wasm_scan"]=_wasm_scan=wasmExports["J"];Module["_wasm_free_string"]=_wasm_free_string=wasmExports["K"];_setThrew=wasmExports["L"];__emscripten_stack_restore=wasmExports["M"];_emscripten_stack_get_current=wasmExports["N"]}`,
  `var wasmImports={c:___assert_fail,u:__abort_js,p:__emscripten_throw_longjmp,q:_emscripten_resize_heap,o:_exit,t:_fd_close,r:_fd_read,s:_fd_seek,m:_fd_write,g:invoke_i,b:invoke_ii,a:invoke_iii,d:invoke_iiii,h:invoke_iiiii,l:invoke_iiiiii,n:invoke_ji,f:invoke_v,e:invoke_vi,i:invoke_vii,k:invoke_viii,j:invoke_viiii}`,
].join("");

// 17.8.0 assigns most exports through `Module["…"]` and aliases memory and
// table (`memory=wasmMemory=…`).
const SHIM_17_8_0 = [
  `function initRuntime(){FS.init();TTY.init();wasmExports["w"]();FS.ignorePermissions=false}`,
  `function assignWasmExports(wasmExports){_malloc=Module["_malloc"]=wasmExports["y"];_free=Module["_free"]=wasmExports["A"];_wasm_parse_query_raw=Module["_wasm_parse_query_raw"]=wasmExports["B"];_wasm_free_parse_result=Module["_wasm_free_parse_result"]=wasmExports["C"];_setThrew=wasmExports["K"];__emscripten_stack_restore=wasmExports["L"];_emscripten_stack_get_current=wasmExports["M"];memory=wasmMemory=wasmExports["v"];__indirect_function_table=wasmTable=wasmExports["z"]}`,
  `var wasmImports={c:___assert_fail,u:__abort_js,p:__emscripten_throw_longjmp,q:_emscripten_resize_heap,o:_exit,t:_fd_close,r:_fd_read,s:_fd_seek,m:_fd_write,h:invoke_i,b:invoke_ii,a:invoke_iii,d:invoke_iiii,g:invoke_iiiii,l:invoke_iiiiii,n:invoke_ji,e:invoke_v,f:invoke_vi,j:invoke_vii,k:invoke_viii,i:invoke_viiii}`,
].join("");

// The symbols `pg-query-sync.ts` asks for.
const pickLoaderExports = (letters: Record<string, string>) => ({
  wasmMemory: letters["wasmMemory"],
  wasmTable: letters["wasmTable"],
  __wasm_call_ctors: letters["__wasm_call_ctors"],
  _malloc: letters["_malloc"],
  _free: letters["_free"],
  _wasm_parse_query_raw: letters["_wasm_parse_query_raw"],
  _wasm_free_parse_result: letters["_wasm_free_parse_result"],
  _setThrew: letters["_setThrew"],
  __emscripten_stack_restore: letters["__emscripten_stack_restore"],
  _emscripten_stack_get_current: letters["_emscripten_stack_get_current"],
});

describe("parseExportLetters", () => {
  it("reads the 17.6.10 shim", () => {
    expect(pickLoaderExports(parseExportLetters(SHIM_17_6_10))).toEqual({
      wasmMemory: "v",
      wasmTable: "z",
      __wasm_call_ctors: "w",
      _malloc: "y",
      _free: "A",
      _wasm_parse_query_raw: "B",
      _wasm_free_parse_result: "C",
      _setThrew: "N",
      __emscripten_stack_restore: "O",
      _emscripten_stack_get_current: "P",
    });
  });

  it("reads the 17.8.0 shim's `Module[...]=` assignments", () => {
    expect(pickLoaderExports(parseExportLetters(SHIM_17_8_0))).toEqual({
      wasmMemory: "v",
      wasmTable: "z",
      __wasm_call_ctors: "w",
      _malloc: "y",
      _free: "A",
      _wasm_parse_query_raw: "B",
      _wasm_free_parse_result: "C",
      _setThrew: "K",
      __emscripten_stack_restore: "L",
      _emscripten_stack_get_current: "M",
    });
  });

  it("accepts minified names longer than one letter", () => {
    expect(
      parseExportLetters(`_malloc=wasmExports["a$1"];wasmExports["_b"]();`),
    ).toEqual({ _malloc: "a$1", __wasm_call_ctors: "_b" });
  });
});

describe("assertLoaderExports", () => {
  it.each([
    ["17.6.10", SHIM_17_6_10],
    ["17.8.0", SHIM_17_8_0],
  ])("accepts the %s shim", (_, shim) => {
    expect(() => assertLoaderExports(parseExportLetters(shim))).not.toThrow();
  });

  it("names the exports 17.6.5 lacks and the version it needs", () => {
    const letters = parseExportLetters(SHIM_17_6_5);
    expect(() => assertLoaderExports(letters)).toThrow(
      new Error(
        "libpg-query.js does not export _wasm_parse_query_raw, _wasm_free_parse_result. " +
          "postgresql-eslint-parser requires @libpg-query/parser 17.6.6 or later.",
      ),
    );
  });
});

describe("parseImportLetters", () => {
  it.each([
    ["17.6.10", SHIM_17_6_10, { invoke_i: "g", invoke_iiiii: "h" }],
    ["17.6.5", SHIM_17_6_5, { invoke_i: "g", invoke_iiiii: "h" }],
    ["17.8.0", SHIM_17_8_0, { invoke_i: "h", invoke_iiiii: "g" }],
  ])("maps import symbols to letters in %s", (_, shim, expected) => {
    const letters = parseImportLetters(shim);
    expect(Object.keys(letters)).toHaveLength(21);
    expect(letters).toMatchObject({
      ___assert_fail: "c",
      _fd_write: "m",
      invoke_ji: "n",
      ...expected,
    });
  });

  it("accepts minified keys longer than one letter", () => {
    expect(parseImportLetters("wasmImports={a$:_exit,b1:_fd_close}")).toEqual({
      _exit: "a$",
      _fd_close: "b1",
    });
  });

  it("fails loudly when the shim has no import table", () => {
    expect(() => parseImportLetters("var x={}")).toThrow(
      "Could not locate wasmImports in libpg-query.js",
    );
  });
});
