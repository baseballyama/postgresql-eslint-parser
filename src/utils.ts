export interface LineMap {
  lineStartOffsets: number[];
  code: string;
  getPosition: (offset: number) => { line: number; column: number };
}

export type ByteToCharOffset = (byteOffset: number) => number;

export const createByteToCharOffset = (code: string): ByteToCharOffset => {
  // Fast path: if the source is pure ASCII, byte offsets equal char offsets.
  let asciiOnly = true;
  for (let i = 0; i < code.length; i++) {
    if (code.charCodeAt(i) > 0x7f) {
      asciiOnly = false;
      break;
    }
  }
  if (asciiOnly) {
    return (byteOffset) => byteOffset;
  }

  let byteLength = 0;
  for (let i = 0; i < code.length; i++) {
    const c = code.charCodeAt(i);
    if (c <= 0x7f) {
      byteLength += 1;
    } else if (c <= 0x7ff) {
      byteLength += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      byteLength += 4;
      i++; // skip the low surrogate
    } else {
      byteLength += 3;
    }
  }

  const map = new Int32Array(byteLength + 1);
  let bi = 0;
  for (let ci = 0; ci < code.length; ci++) {
    const c = code.charCodeAt(ci);
    let width: number;
    let charSpan = 1;
    if (c <= 0x7f) {
      width = 1;
    } else if (c <= 0x7ff) {
      width = 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      width = 4;
      charSpan = 2; // surrogate pair occupies two UTF-16 code units
    } else {
      width = 3;
    }
    for (let k = 0; k < width; k++) {
      map[bi + k] = ci;
    }
    bi += width;
    if (charSpan === 2) ci++; // skip the low surrogate
  }
  map[byteLength] = code.length;

  return (byteOffset) => {
    if (byteOffset < 0) return byteOffset;
    if (byteOffset >= map.length) return code.length;
    return map[byteOffset] ?? code.length;
  };
};

export const createLineMap = (code: string): LineMap => {
  const lineStartOffsets = [0];

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "\n") {
      lineStartOffsets.push(i + 1);
    }
  }

  const getPosition = (offset: number): { line: number; column: number } => {
    let left = 0;
    let right = lineStartOffsets.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right + 1) / 2);
      const midOffset = lineStartOffsets[mid];
      if (midOffset !== undefined && midOffset <= offset) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }

    const lineNumber = left + 1;
    const lineStartOffset = lineStartOffsets[left];
    const columnNumber =
      lineStartOffset === undefined ? 0 : offset - lineStartOffset;

    return {
      line: lineNumber,
      column: columnNumber,
    };
  };

  return {
    lineStartOffsets,
    code,
    getPosition,
  };
};
