import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { parseForESLint } from "../src/parse.ts";

// Check if fixture update mode is enabled
const UPDATE_FIXTURES = process.env["UPDATE_FIXTURES"] === "true";

const removeParent = (obj: unknown): unknown => {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => removeParent(item));
  }

  if (typeof obj === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if (key !== "parent") {
        result[key] = removeParent(value);
      }
    }
    return result;
  }

  return obj;
};

/**
 * Load fixture files from a directory
 */
const loadFixture = async (fixturePath: string) => {
  const inputPath = path.join(fixturePath, "input.sql");
  const astPath = path.join(fixturePath, "output.ast.ts");
  const visitorKeysPath = path.join(fixturePath, "output.visitorKeys.json");
  const scopeManagerPath = path.join(fixturePath, "output.scopeManager.json");

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found: ${inputPath}`);
  }

  const input = fs.readFileSync(inputPath, "utf8");

  let expectedAst: unknown = null;
  if (fs.existsSync(astPath)) {
    try {
      // Import the TypeScript module to get the AST
      const astModule = (await import(astPath)) as { default: unknown };
      expectedAst = astModule.default;
    } catch (err) {
      console.warn(`Failed to import AST from ${astPath}:`, String(err));
      expectedAst = null;
    }
  }

  let expectedVisitorKeys: unknown = null;
  if (fs.existsSync(visitorKeysPath)) {
    const visitorKeysContent = fs.readFileSync(visitorKeysPath, "utf8");
    expectedVisitorKeys = visitorKeysContent.trim()
      ? JSON.parse(visitorKeysContent)
      : null;
  }

  let expectedScopeManager: unknown = null;
  if (fs.existsSync(scopeManagerPath)) {
    const scopeManagerContent = fs.readFileSync(scopeManagerPath, "utf8");
    expectedScopeManager = scopeManagerContent.trim()
      ? JSON.parse(scopeManagerContent)
      : null;
  }

  return {
    input,
    expectedAst,
    expectedVisitorKeys,
    expectedScopeManager,
  };
};

/**
 * Get all fixture directories
 */
const getFixtureDirectories = () => {
  const fixturesDir = path.join(import.meta.dirname, "fixtures");

  if (!fs.existsSync(fixturesDir)) {
    return [];
  }

  return fs
    .readdirSync(fixturesDir)
    .map((name) => path.join(fixturesDir, name))
    .filter((dir) => fs.statSync(dir).isDirectory())
    .map((dir) => ({
      name: path.basename(dir),
      path: dir,
    }));
};

/**
 * Write fixture output files
 */
const writeFixture = (
  fixturePath: string,
  ast: unknown,
  visitorKeys: unknown,
  scopeManager: unknown,
) => {
  const astPath = path.join(fixturePath, "output.ast.ts");
  const visitorKeysPath = path.join(fixturePath, "output.visitorKeys.json");
  const scopeManagerPath = path.join(fixturePath, "output.scopeManager.json");

  // Write AST as TypeScript file
  const astContent = `import type { Program } from '../../../src/ast.ts';

export default ${JSON.stringify(removeParent(ast), null, 2)} satisfies Program;
`;

  fs.writeFileSync(astPath, astContent, "utf8");

  // Write visitor keys
  fs.writeFileSync(
    visitorKeysPath,
    JSON.stringify(visitorKeys, null, 2) + "\n",
    "utf8",
  );

  // Write scope manager
  const scopeManagerContent =
    scopeManager === null ? "" : JSON.stringify(scopeManager, null, 2) + "\n";

  fs.writeFileSync(scopeManagerPath, scopeManagerContent, "utf8");
};

describe("SQL Parser Fixtures", () => {
  const fixtureDirectories = getFixtureDirectories();

  it("should have fixture directories", () => {
    expect(fixtureDirectories.length).toBeGreaterThan(0);
  });

  for (const { name, path: fixturePath } of fixtureDirectories) {
    describe(`Fixture: ${name}`, () => {
      it("should parse correctly", async () => {
        const {
          input,
          expectedAst,
          expectedVisitorKeys,
          expectedScopeManager,
        } = await loadFixture(fixturePath);

        const result = parseForESLint(input);

        if (UPDATE_FIXTURES) {
          // Update fixture files with current parser output
          writeFixture(
            fixturePath,
            result.ast,
            result.visitorKeys,
            result.scopeManager,
          );
          console.warn(`Updated fixture: ${name}`);

          return; // Skip assertions when updating
        }

        // Test AST structure
        if (expectedAst !== null) {
          expect(removeParent(result.ast)).toEqual(expectedAst);
        }

        // Test visitor keys
        if (expectedVisitorKeys !== null) {
          expect(result.visitorKeys).toEqual(expectedVisitorKeys);
        }

        // Test scope manager
        if (expectedScopeManager === null) {
          // If no scope manager file or empty file, expect null
          expect(result.scopeManager).toBeNull();
        } else {
          expect(result.scopeManager).toEqual(expectedScopeManager);
        }
      });
    });
  }
});
