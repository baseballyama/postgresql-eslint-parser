export interface LineMap {
  lineStartOffsets: number[];
  code: string;
  getPosition: (offset: number) => { line: number; column: number };
}

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
