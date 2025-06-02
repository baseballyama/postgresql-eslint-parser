import { describe, expect, it } from "vitest";

import { createLineMap } from "./utils.js";

describe("utils", () => {
  describe("createLineMap", () => {
    describe("getPosition method", () => {
      it("should calculate position for first line", () => {
        const code = "SELECT * FROM users";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(0);

        expect(position.line).toBe(1);
        expect(position.column).toBe(0);
      });

      it("should calculate position for middle of first line", () => {
        const code = "SELECT * FROM users";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(7);

        expect(position.line).toBe(1);
        expect(position.column).toBe(7);
      });

      it("should calculate position for end of first line", () => {
        const code = "SELECT * FROM users";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(code.length);

        expect(position.line).toBe(1);
        expect(position.column).toBe(19);
      });

      it("should calculate position for second line start", () => {
        const code = "SELECT *\nFROM users";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(9);

        expect(position.line).toBe(2);
        expect(position.column).toBe(0);
      });

      it("should calculate position for second line middle", () => {
        const code = "SELECT *\nFROM users";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(14);

        expect(position.line).toBe(2);
        expect(position.column).toBe(5);
      });

      it("should calculate position for multiple lines", () => {
        const code = "SELECT *\nFROM users\nWHERE id = 1";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(21);

        expect(position.line).toBe(3);
        expect(position.column).toBe(1);
      });

      it("should handle empty string", () => {
        const code = "";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(0);

        expect(position.line).toBe(1);
        expect(position.column).toBe(0);
      });

      it("should handle only newlines", () => {
        const code = "\n\n\n";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(2);

        expect(position.line).toBe(3);
        expect(position.column).toBe(0);
      });

      it("should handle CRLF line endings", () => {
        const code = "SELECT *\r\nFROM users";
        const lineMap = createLineMap(code);
        const position = lineMap.getPosition(10);

        expect(position.line).toBe(2);
        expect(position.column).toBe(0);
      });
    });

    describe("lineStartOffsets property", () => {
      it("should track line start offsets correctly for single line", () => {
        const code = "SELECT * FROM users";
        const lineMap = createLineMap(code);

        expect(lineMap.lineStartOffsets).toEqual([0]);
      });

      it("should track line start offsets correctly for multiple lines", () => {
        const code = "SELECT *\nFROM users\nWHERE id = 1";
        const lineMap = createLineMap(code);

        expect(lineMap.lineStartOffsets).toEqual([0, 9, 20]);
      });

      it("should track line start offsets for empty lines", () => {
        const code = "SELECT *\n\nFROM users";
        const lineMap = createLineMap(code);

        expect(lineMap.lineStartOffsets).toEqual([0, 9, 10]);
      });

      it("should handle consecutive newlines", () => {
        const code = "SELECT *\n\n\nFROM users";
        const lineMap = createLineMap(code);

        expect(lineMap.lineStartOffsets).toEqual([0, 9, 10, 11]);
      });
    });

    describe("code property", () => {
      it("should store the original code", () => {
        const code = "SELECT * FROM users";
        const lineMap = createLineMap(code);

        expect(lineMap.code).toBe(code);
      });
    });
  });

  describe("performance comparison", () => {
    it("should handle large documents efficiently", () => {
      const lines = Array.from(
        { length: 1000 },
        (_, i) => `SELECT ${i} FROM table_${i}`,
      );
      const code = lines.join("\n");

      const lineMap = createLineMap(code);

      const testOffsets = [0, 100, 1000, 5000, 10000, code.length];

      for (const offset of testOffsets) {
        if (offset <= code.length) {
          const position = lineMap.getPosition(offset);
          expect(position.line).toBeGreaterThan(0);
          expect(position.column).toBeGreaterThanOrEqual(0);
        }
      }
    });
  });

  describe("edge cases", () => {
    it("should handle offset beyond code length", () => {
      const code = "SELECT * FROM users";
      const lineMap = createLineMap(code);

      const position = lineMap.getPosition(code.length + 10);

      expect(position.line).toBe(1);
      expect(position.column).toBe(code.length + 10);
    });

    it("should handle negative offset", () => {
      const code = "SELECT * FROM users";
      const lineMap = createLineMap(code);

      const position = lineMap.getPosition(-5);

      expect(position.line).toBe(1);
      expect(position.column).toBe(-5);
    });

    it("should handle code ending with newline", () => {
      const code = "SELECT * FROM users\n";
      const lineMap = createLineMap(code);

      const position = lineMap.getPosition(code.length);

      expect(position.line).toBe(2);
      expect(position.column).toBe(0);
    });

    it("should handle mixed line endings", () => {
      const code = "SELECT *\nFROM users\r\nWHERE id = 1\n";
      const lineMap = createLineMap(code);

      const position = lineMap.getPosition(21);

      expect(position.line).toBe(3);
      expect(position.column).toBe(0);
    });
  });
});
