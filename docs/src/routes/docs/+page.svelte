<script lang="ts">
  import { base } from "$app/paths";

  const toc: { id: string; title: string }[] = [
    { id: "requirements", title: "Requirements" },
    { id: "install", title: "Installation" },
    { id: "eslint", title: "ESLint configuration" },
    { id: "directives", title: "ESLint directives in SQL comments" },
    { id: "api", title: "Programmatic API" },
    { id: "errors", title: "Syntax errors" },
    { id: "rules", title: "Writing custom rules" },
  ];
</script>

<svelte:head>
  <title>Documentation · postgresql-eslint-parser</title>
</svelte:head>

<div class="docs-shell shell">
  <aside class="sidebar" aria-label="Documentation navigation">
    <div class="sidebar-heading">User Guide</div>
    <ul>
      {#each toc as item (item.id)}
        <li><a href="#{item.id}">{item.title}</a></li>
      {/each}
    </ul>
  </aside>

  <article class="article">
    <header class="head">
      <h1>Documentation</h1>
      <p class="lede">
        Everything you need to lint <code>.sql</code> files with ESLint —
        install, configure, write rules.
      </p>
    </header>

    <section id="requirements">
      <h2>Requirements</h2>
      <ul class="bullet">
        <li>Node.js <strong>22 or later</strong></li>
        <li>ESM-only package (<code>"type": "module"</code>)</li>
        <li>
          Runs on macOS, Linux and Windows. The WebAssembly binary ships
          inside the package.
        </li>
      </ul>
    </section>

    <section id="install">
      <h2>Installation</h2>
      <pre class="code"><code>{`npm install --save-dev postgresql-eslint-parser
# or
pnpm add -D postgresql-eslint-parser
# or
yarn add --dev postgresql-eslint-parser`}</code></pre>
    </section>

    <section id="eslint">
      <h2>ESLint configuration</h2>
      <p>
        Use ESLint's flat config and point the parser at <code>.sql</code> files.
      </p>
      <pre class="code"><code>{`// eslint.config.js
import postgresqlParser from "postgresql-eslint-parser";

export default [
  {
    files: ["**/*.sql"],
    languageOptions: {
      parser: postgresqlParser,
    },
    rules: {
      // your SQL-specific rules
    },
  },
];`}</code></pre>
    </section>

    <section id="directives">
      <h2>ESLint directives in SQL comments</h2>
      <p>
        ESLint's directive scanner reads <code>eslint-disable</code>-style
        comments. The parser surfaces SQL comments as ESLint comment nodes, so
        the usual directives work in <code>.sql</code> files:
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
      <h2>Programmatic API</h2>

      <h3><code>parse(code: string)</code></h3>
      <p>Parses SQL and returns a <code>Program</code> AST node.</p>

      <h3><code>parseForESLint(code: string)</code></h3>
      <p>
        Returns <code>{`{ ast, visitorKeys, scopeManager }`}</code> — the shape
        ESLint expects from a custom parser. <code>scopeManager</code> is
        currently always <code>null</code>.
      </p>

      <h3><code>Ast</code> namespace</h3>
      <p>
        All node types (<code>Program</code>, <code>SelectStmt</code>,
        <code>SQLStatementNode</code>, <code>SQLParseError</code>, …) are
        re-exported under <code>Ast</code> for use in TypeScript rule authoring.
      </p>

      <pre class="code"><code>{`import parser, { parse, parseForESLint, type Ast } from "postgresql-eslint-parser";

const program = parse("SELECT 1");
const { ast, visitorKeys } = parseForESLint("SELECT 1");

function isSelect(node: Ast.SQLStatementNode): node is Ast.SelectStmt {
  return node.type === "SelectStmt";
}`}</code></pre>
    </section>

    <section id="errors">
      <h2>Syntax errors</h2>
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
      <h2>Writing custom rules</h2>
      <p>
        Visitor keys are exported, so the regular ESLint rule shape works:
      </p>
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
        <strong>Tip.</strong>
        When you're not sure about a node's shape, open the
        <a href="{base}/playground">Playground</a> and paste in some SQL — the
        AST tree shows every property, range and location.
      </div>
    </section>
  </article>
</div>

<style>
  .docs-shell {
    display: grid;
    grid-template-columns: 14rem 1fr;
    gap: 3rem;
    padding-top: 2.5rem;
    padding-bottom: 3rem;
    align-items: start;
  }

  /* Sidebar */
  .sidebar {
    position: sticky;
    top: 80px;
    align-self: start;
    border-right: 1px solid var(--rule);
    padding-right: 1rem;
  }
  .sidebar-heading {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--fg-faint);
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.25rem;
  }
  .sidebar a {
    display: block;
    padding: 0.32rem 0.6rem;
    color: var(--fg-muted);
    border-radius: 4px;
    border: none;
    font-size: 0.9rem;
  }
  .sidebar a:hover {
    color: var(--fg-strong);
    background: var(--bg-soft);
    border-bottom: none;
  }

  /* Article */
  .article {
    max-width: 50rem;
    min-width: 0;
  }
  .head {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--rule);
  }
  .head h1 {
    font-size: 2.4rem;
  }
  .lede {
    margin-top: 0.6rem;
    color: var(--fg-muted);
    font-size: 1.1rem;
  }
  .lede code {
    background: var(--bg-code);
    padding: 0.05em 0.3em;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--brand);
  }

  section {
    margin: 2.5rem 0 0;
  }
  section h2 {
    font-size: 1.55rem;
    margin-bottom: 0.8rem;
    scroll-margin-top: 80px;
  }
  section h3 {
    margin: 1.4rem 0 0.4rem;
    font-size: 1.05rem;
    color: var(--fg-strong);
  }
  section h3 code {
    background: var(--bg-code);
    padding: 0.05em 0.35em;
    border-radius: 3px;
    color: var(--brand);
    font-size: 0.92em;
  }
  section p {
    color: var(--fg);
    line-height: 1.7;
    max-width: 60ch;
  }
  section :global(p + p) {
    margin-top: 0.8rem;
  }
  section :global(code) {
    font-family: var(--font-mono);
    font-size: 0.88em;
    background: var(--bg-code);
    padding: 0.05em 0.3em;
    border-radius: 3px;
    color: var(--fg-strong);
  }
  section strong {
    color: var(--fg-strong);
  }

  .bullet {
    list-style: none;
    padding: 0;
    margin: 0.6rem 0 0;
    display: grid;
    gap: 0.3rem;
  }
  .bullet li {
    position: relative;
    padding-left: 1.1rem;
  }
  .bullet li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--brand);
  }

  .code {
    margin: 1rem 0 0;
    padding: 1rem 1.1rem;
    background: var(--bg-code);
    border: 1px solid var(--rule);
    border-radius: 6px;
    overflow: auto;
    font-size: 0.85rem;
    line-height: 1.55;
    color: var(--fg);
  }

  .table {
    margin-top: 1rem;
    border-collapse: collapse;
    font-size: 0.92rem;
    width: 100%;
    border: 1px solid var(--rule);
    border-radius: 6px;
    overflow: hidden;
  }
  .table th,
  .table td {
    padding: 0.55rem 0.85rem;
    text-align: left;
    border-bottom: 1px solid var(--rule);
  }
  .table thead th {
    background: var(--bg-soft);
    font-weight: 700;
    color: var(--fg-strong);
    font-size: 0.82rem;
  }
  .table tbody tr:last-child td {
    border-bottom: none;
  }

  .callout {
    margin-top: 1.5rem;
    border: 1px solid var(--brand-soft);
    background: var(--brand-tint);
    border-left: 3px solid var(--brand);
    border-radius: 6px;
    padding: 0.9rem 1.1rem;
    color: var(--fg);
    font-size: 0.93rem;
    line-height: 1.55;
  }
  .callout strong {
    color: var(--brand-strong);
  }

  @media (max-width: 880px) {
    .docs-shell {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .sidebar {
      position: static;
      border-right: none;
      border-bottom: 1px solid var(--rule);
      padding: 0 0 0.8rem;
    }
    .sidebar ul {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      display: grid;
    }
  }
</style>
