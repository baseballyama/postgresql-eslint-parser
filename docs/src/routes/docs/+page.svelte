<script lang="ts">
  import { base } from "$app/paths";

  const toc: { id: string; title: string; n: string }[] = [
    { id: "requirements", title: "Requirements", n: "1.1" },
    { id: "install", title: "Installation", n: "1.2" },
    { id: "eslint", title: "ESLint configuration", n: "1.3" },
    { id: "directives", title: "Directives in SQL comments", n: "1.4" },
    { id: "api", title: "Programmatic API", n: "1.5" },
    { id: "errors", title: "Syntax errors", n: "1.6" },
    { id: "rules", title: "Writing custom rules", n: "1.7" },
  ];
</script>

<svelte:head>
  <title>Manual · postgresql-eslint-parser</title>
</svelte:head>

<section class="hero">
  <div class="shell head-grid">
    <div class="head">
      <div class="eyebrow">Manual · 01 · 2026 printing</div>
      <h1 class="display">
        <em>The</em> Manual.
      </h1>
      <p class="lede">
        Everything a SQL lint setup actually needs — and not much more. Read
        in order, or jump to the bit your tooling is bleeding on.
      </p>
    </div>

    <aside class="toc" aria-label="Table of contents">
      <div class="section-no">— TABLE OF CONTENTS</div>
      <ol>
        {#each toc as item (item.id)}
          <li>
            <a href="#{item.id}">
              <span class="toc-n mono">{item.n}</span>
              <span class="toc-t">{item.title}</span>
            </a>
          </li>
        {/each}
      </ol>
    </aside>
  </div>
</section>

<article class="manual">
  <div class="shell body">
    <section id="requirements">
      <header class="sec-head">
        <span class="sec-no mono">1.1</span>
        <h2>Requirements</h2>
      </header>
      <ul class="bullet">
        <li><strong>Node.js</strong> ≥ 22</li>
        <li><strong>ESM only</strong> — the package sets <code>"type": "module"</code></li>
        <li>Runs the same on macOS, Linux, and Windows. The WASM binary ships inside the package.</li>
      </ul>
    </section>

    <section id="install">
      <header class="sec-head">
        <span class="sec-no mono">1.2</span>
        <h2>Installation</h2>
      </header>
      <pre class="code"><code>{`pnpm add -D postgresql-eslint-parser
# or
npm i  -D postgresql-eslint-parser
# or
yarn add -D postgresql-eslint-parser`}</code></pre>
    </section>

    <section id="eslint">
      <header class="sec-head">
        <span class="sec-no mono">1.3</span>
        <h2>ESLint configuration</h2>
      </header>
      <p>Flat config, one block. Point ESLint at <code>.sql</code> files and give it this parser:</p>
      <pre class="code"><code>{`// eslint.config.js
import postgresqlParser from "postgresql-eslint-parser";

export default [
  {
    files: ["**/*.sql"],
    languageOptions: {
      parser: postgresqlParser,
    },
    rules: {
      // your SQL-specific rules go here
    },
  },
];`}</code></pre>
    </section>

    <section id="directives">
      <header class="sec-head">
        <span class="sec-no mono">1.4</span>
        <h2>Directives in SQL comments</h2>
      </header>
      <p>
        ESLint's directive scanner reads <code>eslint-disable</code>-style
        comments. The parser surfaces SQL comments as ESLint comment nodes,
        so these all work as expected:
      </p>
      <pre class="code"><code>{`-- eslint-disable-next-line no-select-star
SELECT * FROM users;

/* eslint-disable some-rule */
SELECT id FROM users;
/* eslint-enable some-rule */`}</code></pre>

      <table class="table">
        <thead>
          <tr><th>SQL comment</th><th>ESLint comment node</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>-- ...</code></td>
            <td><code>{`{ type: "Line", value: "..." }`}</code></td>
          </tr>
          <tr>
            <td><code>/* ... */</code></td>
            <td><code>{`{ type: "Block", value: "..." }`}</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="api">
      <header class="sec-head">
        <span class="sec-no mono">1.5</span>
        <h2>Programmatic API</h2>
      </header>

      <h3 class="sub"><code>parse(code: string)</code></h3>
      <p>Returns a <code>Program</code> AST node.</p>

      <h3 class="sub"><code>parseForESLint(code: string)</code></h3>
      <p>Returns <code>{`{ ast, visitorKeys, scopeManager }`}</code> — the
        shape ESLint wants from a custom parser.</p>

      <h3 class="sub"><code>Ast</code> namespace</h3>
      <p>
        All node types (<code>Program</code>, <code>SelectStmt</code>,
        <code>SQLStatementNode</code>, <code>SQLParseError</code>, …) are
        re-exported under <code>Ast</code> for use in TypeScript rule authoring.
      </p>

      <pre class="code"><code>{`import parser, { parse, parseForESLint, type Ast } from "postgresql-eslint-parser";

const program = parse("SELECT 1");
const { ast, visitorKeys } = parseForESLint("SELECT 1");

// type guard against the typed AST
function isSelect(node: Ast.SQLStatementNode): node is Ast.SelectStmt {
  return node.type === "SelectStmt";
}`}</code></pre>
    </section>

    <section id="errors">
      <header class="sec-head">
        <span class="sec-no mono">1.6</span>
        <h2>Syntax errors</h2>
      </header>
      <p>
        <code>parseForESLint</code> does <strong>not</strong> throw on broken
        SQL. The lint run keeps going, and the program body holds a single
        <code>SQLParseError</code> node so other tooling can still introspect:
      </p>
      <pre class="code"><code>{`interface SQLParseError {
  type: "SQLParseError";
  range: [number, number];
  loc: Ast.SourceLocation;
  error: string;   // human-readable message from libpg-query
  raw: string;     // the original source
}`}</code></pre>
    </section>

    <section id="rules">
      <header class="sec-head">
        <span class="sec-no mono">1.7</span>
        <h2>Writing custom rules</h2>
      </header>
      <p>Visitor keys are exported, so the regular ESLint rule shape just works:</p>
      <pre class="code"><code>{`// no-select-star.ts
import type { Rule } from "eslint";
import type { Ast } from "postgresql-eslint-parser";

export const noSelectStar: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    messages: { star: "SELECT * is disallowed — list columns explicitly." },
  },
  create(context) {
    return {
      SelectStmt(node: Ast.SelectStmt) {
        const target = node.targetList ?? [];
        const hasStar = target.some((t) => t?.ResTarget?.val?.A_Star);
        if (hasStar) context.report({ node, messageId: "star" });
      },
    };
  },
};`}</code></pre>

      <div class="callout">
        <div class="callout-no mono">↳ Tip</div>
        <p>
          When in doubt about a node's shape, open the
          <a href="{base}/playground">Playground</a> and paste the SQL — the
          AST tree shows every property, with types and ranges.
        </p>
      </div>
    </section>

    <hr class="ascii-rule" />
    <p class="end mono">⎯⎯⎯⎯⎯ END · 01 · MANUAL ⎯⎯⎯⎯⎯</p>
  </div>
</article>

<style>
  /* ─────────────── HERO ─────────────── */
  .hero { padding: 4rem 0 3rem; }
  .head-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 3rem;
    align-items: end;
  }
  .display {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(3rem, 8vw, 6rem);
    line-height: 0.95;
    color: var(--ink-strong);
    margin: 0.8rem 0 1.5rem;
    font-variation-settings: "opsz" 144, "SOFT" 80;
  }
  .display em { color: var(--terracotta); }
  .lede {
    font-family: var(--font-display);
    font-style: italic;
    font-variation-settings: "opsz" 24;
    font-size: 1.15rem;
    color: var(--ink-muted);
    max-width: 38ch;
    line-height: 1.55;
  }

  /* ─────────────── TOC ─────────────── */
  .toc {
    border-left: 1px solid var(--rule-strong);
    padding: 0.5rem 0 0.5rem 1.5rem;
  }
  .toc ol {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    display: grid;
    gap: 0.45rem;
  }
  .toc a {
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    gap: 0.5rem;
    align-items: baseline;
    color: var(--ink-muted);
    border: none;
    padding: 0.15rem 0;
  }
  .toc a:hover { color: var(--amber); }
  .toc-n { color: var(--pg-blue); font-size: 0.78rem; }
  .toc-t {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1rem;
    font-variation-settings: "opsz" 18;
  }

  /* ─────────────── BODY ─────────────── */
  .manual { padding: 1rem 0 3rem; }
  .body {
    max-width: 56rem;
    display: grid;
    gap: 3.5rem;
  }
  .sec-head {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.2rem;
    padding-bottom: 0.7rem;
    border-bottom: 1px solid var(--rule);
  }
  .sec-no {
    color: var(--terracotta);
    font-size: 0.95rem;
    letter-spacing: 0.06em;
  }
  .sec-head h2 {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 2.1rem;
    font-variation-settings: "opsz" 60, "SOFT" 60;
    color: var(--ink-strong);
    margin: 0;
  }
  section p {
    color: var(--ink);
    max-width: 60ch;
    line-height: 1.65;
  }
  section :global(p + p) { margin-top: 1rem; }
  .sub {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    margin: 1.6rem 0 0.4rem;
    font-style: normal;
    color: var(--amber);
    font-weight: 500;
  }
  .sub code {
    background: rgba(244,185,66,0.08);
    padding: 0.15rem 0.4rem;
    border-radius: 2px;
    border: 1px solid rgba(244,185,66,0.18);
  }
  code {
    font-family: var(--font-mono);
    font-size: 0.88em;
    color: var(--phosphor);
  }
  strong { color: var(--ink-strong); }
  .bullet {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.45rem;
    color: var(--ink);
  }
  .bullet > li {
    padding-left: 1.4rem;
    position: relative;
  }
  .bullet > li::before {
    content: "▸";
    color: var(--amber);
    position: absolute;
    left: 0;
    font-size: 0.85rem;
  }

  .code {
    margin: 1rem 0 0;
    padding: 1.3rem 1.4rem;
    background: var(--bg-deep);
    border: 1px solid var(--rule-strong);
    border-radius: 3px;
    overflow: auto;
    font-family: var(--font-mono);
    font-size: 0.84rem;
    line-height: 1.55;
    color: var(--ink);
  }
  .code code { color: var(--ink); }

  .table {
    margin-top: 1.2rem;
    border-collapse: collapse;
    font-size: 0.9rem;
    width: 100%;
  }
  .table th,
  .table td {
    padding: 0.65rem 0.9rem;
    border-bottom: 1px solid var(--rule);
    text-align: left;
  }
  .table th {
    color: var(--ink-faint);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .callout {
    margin-top: 2rem;
    border: 1px dashed rgba(244,185,66,0.3);
    border-radius: 3px;
    padding: 1.1rem 1.3rem;
    background: rgba(244,185,66,0.04);
    display: grid;
    gap: 0.4rem;
  }
  .callout-no {
    color: var(--amber);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
  }
  .callout p { margin: 0; color: var(--ink-muted); font-size: 0.92rem; }

  .end {
    color: var(--ink-faint);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: 880px) {
    .head-grid { grid-template-columns: 1fr; }
    .toc { border-left: none; padding-left: 0; }
  }
</style>
