<script lang="ts">
  import { base } from "$app/paths";

  let { data } = $props();

  const features: { title: string; body: string }[] = [
    {
      title: "Real PostgreSQL 17 grammar",
      body: "Backed by libpg-query — the actual Postgres server parser compiled to WebAssembly. CTEs, window functions, LATERAL joins, partial indexes are all parsed the way Postgres parses them.",
    },
    {
      title: "ESTree-compatible AST",
      body: "Every statement is a normal AST node with `type`, `range`, `loc`, `parent`. ESLint, plugin authors, codemods and AST inspectors already speak this language.",
    },
    {
      title: "Synchronous parser API",
      body: "The WASM is loaded eagerly through `new WebAssembly.Module`, so `parseForESLint` stays synchronous — exactly what ESLint expects from a custom parser.",
    },
    {
      title: "ESLint directives in SQL comments",
      body: "`-- eslint-disable-next-line` and `/* eslint-disable */` work in `.sql` files because tokens and comments are emitted in the shape ESLint's directive scanner expects.",
    },
    {
      title: "Graceful syntax errors",
      body: "Broken SQL doesn't crash the lint run. The parser returns a `SQLParseError` node inside `program.body`, so downstream rules and IDEs can still inspect the source.",
    },
    {
      title: "Typed AST",
      body: "All node types are shipped under the `Ast` namespace export. Write custom ESLint rules in TypeScript with full inference — no `any` casts needed.",
    },
  ];

</script>

<section class="hero">
  <div class="shell hero-inner">
    <span class="eyebrow">ESLint custom parser · PostgreSQL 17</span>
    <h1>Lint SQL the same way you lint everything else.</h1>
    <p class="lede">
      <strong>postgresql-eslint-parser</strong> turns PostgreSQL source into an
      ESTree-compatible AST so ESLint can parse, traverse and report on
      <code>.sql</code> files — directives, scope walks, rule authoring and all.
    </p>

    <div class="cta-row">
      <a class="btn primary" href="{base}/playground">Open the Playground</a>
      <a class="btn ghost" href="{base}/docs">Read the Docs</a>
    </div>

    <div class="install">
      <span class="install-label">Install</span>
      <code>npm install --save-dev postgresql-eslint-parser</code>
    </div>
  </div>
</section>

<section class="features">
  <div class="shell">
    <h2 class="section-title">Features</h2>
    <ul class="feature-grid">
      {#each features as f (f.title)}
        <li class="feature">
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="usage">
  <div class="shell usage-grid">
    <div>
      <h2 class="section-title">Drop it into your ESLint config</h2>
      <p class="usage-lede">
        Add the parser to ESLint's flat config and point it at
        <code>.sql</code> files. Your editor and CI will lint SQL the same way
        they lint TypeScript and JavaScript.
      </p>
      <p class="usage-lede">
        See the <a href="{base}/docs">documentation</a> for the full API, or
        try the
        <a href="{base}/playground">playground</a> to inspect the AST a rule
        would receive.
      </p>
    </div>
    <div class="code shiki-host">{@html data.eslintConfig}</div>
  </div>
</section>

<style>
  .hero {
    padding: 4rem 0 3rem;
  }
  .hero-inner {
    max-width: 46rem;
  }
  .eyebrow {
    display: inline-block;
    color: var(--brand);
    background: var(--brand-tint);
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 0.02em;
  }
  h1 {
    font-size: clamp(2rem, 4.5vw, 3rem);
    line-height: 1.1;
  }
  .lede {
    margin-top: 1.1rem;
    font-size: 1.1rem;
    color: var(--fg-muted);
    line-height: 1.6;
    max-width: 40rem;
  }
  .lede strong {
    color: var(--fg-strong);
    font-weight: 700;
  }
  .lede code {
    background: var(--bg-code);
    padding: 0.1em 0.35em;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--brand);
  }

  .cta-row {
    display: flex;
    gap: 0.6rem;
    margin-top: 1.6rem;
    flex-wrap: wrap;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    padding: 0.65rem 1.15rem;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.95rem;
    border: 1px solid transparent;
    transition:
      background 0.12s ease,
      color 0.12s ease,
      border-color 0.12s ease;
  }
  .btn.primary {
    background: var(--brand);
    color: #fff;
  }
  .btn.primary:hover {
    background: var(--brand-strong);
    color: #fff;
    border-bottom: 1px solid transparent;
  }
  .btn.ghost {
    background: transparent;
    color: var(--brand);
    border-color: var(--rule-strong);
  }
  .btn.ghost:hover {
    background: var(--brand-tint);
    color: var(--brand-strong);
    border-bottom: 1px solid var(--rule-strong);
  }

  .install {
    margin-top: 2rem;
    display: flex;
    gap: 0.7rem;
    align-items: center;
    border: 1px solid var(--rule);
    border-radius: 6px;
    padding: 0.65rem 0.85rem;
    background: var(--bg-code);
    width: fit-content;
    max-width: 100%;
    overflow: auto;
  }
  .install-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--fg-faint);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .install code {
    font-size: 0.92rem;
    color: var(--fg-strong);
  }

  /* Features */
  .features {
    padding: 3rem 0 2rem;
    border-top: 1px solid var(--rule);
  }
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  .feature-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1.5rem;
  }
  .feature {
    border: 1px solid var(--rule);
    border-radius: 8px;
    padding: 1.3rem 1.35rem;
    background: var(--bg);
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
  }
  .feature:hover {
    border-color: var(--brand);
  }
  .feature h3 {
    margin-bottom: 0.5rem;
    color: var(--fg-strong);
  }
  .feature p {
    color: var(--fg-muted);
    font-size: 0.93rem;
    line-height: 1.55;
  }
  .feature p :global(code) {
    background: var(--bg-code);
    padding: 0.05em 0.3em;
    border-radius: 3px;
    font-size: 0.88em;
    color: var(--brand);
  }

  /* Usage */
  .usage {
    padding: 3rem 0 4rem;
    border-top: 1px solid var(--rule);
  }
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 2.5rem;
    align-items: start;
  }
  .usage-lede {
    margin-top: 1rem;
    color: var(--fg-muted);
    max-width: 36rem;
  }
  .usage-lede code {
    background: var(--bg-code);
    padding: 0.05em 0.3em;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--brand);
  }
  .code {
    margin: 0;
    padding: 1rem 1.1rem;
    background: var(--bg-code);
    border: 1px solid var(--rule);
    border-radius: 8px;
    overflow: auto;
    font-size: 0.85rem;
    line-height: 1.55;
    color: var(--fg);
  }
  .code code {
    white-space: pre;
  }

  @media (max-width: 760px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
