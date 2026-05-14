<script lang="ts">
  import { base } from "$app/paths";

  const features: { n: string; title: string; body: string }[] = [
    {
      n: "01",
      title: "PostgreSQL 17, the real grammar",
      body: "Backed by libpg-query — the actual Postgres server parser compiled to WebAssembly. CTEs, window functions, LATERAL joins, partial indexes: if Postgres parses it, this parser parses it.",
    },
    {
      n: "02",
      title: "ESTree-shaped, not bolted on",
      body: "Every statement is a normal AST node with type, range, loc, parent. ESLint, eslint-plugin authors, codemods and AST inspectors all already speak this language.",
    },
    {
      n: "03",
      title: "Synchronous, like ESLint expects",
      body: "WASM loaded eagerly through new WebAssembly.Module so parseForESLint stays sync. No async race, no “parser not ready” errors mid-lint.",
    },
    {
      n: "04",
      title: "SQL comments become ESLint directives",
      body: "-- eslint-disable-next-line and /* eslint-disable */ work in .sql files because tokens & comments are emitted exactly the way ESLint's directive scanner expects.",
    },
    {
      n: "05",
      title: "Graceful syntax errors",
      body: "Broken SQL doesn't crash the lint run. The parser returns a SQLParseError node inside the Program body so downstream rules and IDEs can still inspect the source.",
    },
    {
      n: "06",
      title: "Typed AST, exported",
      body: "Every node type is shipped under the Ast namespace export. Write custom ESLint rules in TypeScript with full inference — no any cast required.",
    },
  ];

  const sample = `-- linted by ESLint, parsed by Postgres itself
/* eslint-disable no-select-star */
WITH recent AS (
  SELECT id, email, created_at
  FROM users
  WHERE created_at > now() - INTERVAL '7 days'
)
SELECT
  r.email,
  count(o.id) AS orders
FROM recent r
LEFT JOIN orders o ON o.user_id = r.id
GROUP BY r.email
ORDER BY orders DESC NULLS LAST
LIMIT 50;`;
</script>

<section class="hero">
  <div class="shell hero-grid">
    <aside class="margin">
      <div class="meta-block">
        <div class="meta-label">Vol.</div>
        <div class="meta-value mono">01</div>
      </div>
      <div class="meta-block">
        <div class="meta-label">Filed</div>
        <div class="meta-value mono">PG / ESLint</div>
      </div>
      <div class="meta-block">
        <div class="meta-label">Subject</div>
        <div class="meta-value mono">SQL · AST · LINT</div>
      </div>
      <div class="vertical-mark mono" aria-hidden="true">
        ⎯ ⎯ ⎯ pg::eslint ⎯ ⎯ ⎯
      </div>
    </aside>

    <div class="hero-main">
      <div class="eyebrow row-eyebrow">
        <span class="dot-amber" aria-hidden="true"></span>
        Field manual for an ESLint custom parser
        <span class="sep">·</span>
        v0.1
      </div>

      <h1 class="display">
        <span class="line">Lint SQL the same way</span>
        <span class="line accent">
          <em>you already lint</em>
        </span>
        <span class="line">everything else.</span>
      </h1>

      <p class="lede">
        <strong>postgresql-eslint-parser</strong> is an ESLint custom parser
        that turns PostgreSQL into an ESTree-compatible AST. Rules,
        eslint-disable directives, scope walks — all the machinery your team
        already knows, now pointed at <code>.sql</code> files.
      </p>

      <div class="cta-row">
        <a class="cta primary" href="{base}/playground">
          <span class="cta-no mono">→ 02</span>
          <span class="cta-label">Open the Playground</span>
        </a>
        <a class="cta ghost" href="{base}/docs">
          <span class="cta-no mono">01</span>
          <span class="cta-label">Read the Manual</span>
        </a>
      </div>

      <div class="install">
        <div class="install-label mono">install ▸</div>
        <code class="install-code">pnpm add -D postgresql-eslint-parser</code>
        <code class="install-code dim">npm i -D postgresql-eslint-parser</code>
      </div>
    </div>

    <aside class="annot">
      <div class="annot-no mono">↳ Note 01</div>
      <p>
        Built on <a
          href="https://github.com/launchql/libpg-query-node"
          target="_blank"
          rel="noreferrer noopener">@libpg-query/parser</a
        > — the actual PostgreSQL 17 parser, compiled to WebAssembly and loaded synchronously
        so ESLint never has to await.
      </p>
    </aside>
  </div>
</section>

<section class="sample">
  <div class="shell sample-grid">
    <div class="sample-meta">
      <div class="section-no">— FIGURE A · 2026 PRINTING</div>
      <h2 class="fig-title"><em>Input</em> → AST</h2>
      <p class="fig-blurb">
        A page of SQL, the way ESLint sees it after this parser is done. Tokens,
        comments and statement nodes — all on the same ESTree.
      </p>
    </div>

    <pre class="codeblock"><code>{sample}</code></pre>
  </div>
</section>

<section class="features">
  <div class="shell">
    <div class="section-head">
      <div class="section-no">— INDEX OF FEATURES</div>
      <h2 class="section-title">
        Six things that make this parser <em>actually usable</em>.
      </h2>
    </div>

    <ol class="feature-grid">
      {#each features as f (f.n)}
        <li class="feature">
          <div class="feature-no mono">{f.n}</div>
          <h3 class="feature-title">{f.title}</h3>
          <p class="feature-body">{f.body}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>

<section class="quickstart">
  <div class="shell qs-grid">
    <div>
      <div class="section-no">— QUICKSTART</div>
      <h2 class="section-title">
        Three minutes from <em>install</em> to a linted .sql file.
      </h2>
    </div>
    <ol class="steps">
      <li>
        <span class="step-no mono">01.</span>
        <div>
          <strong>Install.</strong> Add the parser to your project's dev
          dependencies. Node 22 or newer.
          <pre class="step-code"><code>pnpm add -D postgresql-eslint-parser</code></pre>
        </div>
      </li>
      <li>
        <span class="step-no mono">02.</span>
        <div>
          <strong>Tell ESLint about .sql files.</strong> Use the flat config —
          one block, that's all.
          <pre class="step-code"><code>{`// eslint.config.js
import postgresqlParser from "postgresql-eslint-parser";

export default [
  {
    files: ["**/*.sql"],
    languageOptions: { parser: postgresqlParser },
    rules: { /* your SQL rules */ },
  },
];`}</code></pre>
        </div>
      </li>
      <li>
        <span class="step-no mono">03.</span>
        <div>
          <strong>Lint.</strong> Your editor and CI now treat SQL like every
          other source file. Write a rule, or grab one — visitor keys are
          already exported.
          <pre class="step-code"><code>pnpm eslint "**/*.sql"</code></pre>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="closer">
  <div class="shell closer-grid">
    <div class="closer-text">
      <div class="section-no">— FIN</div>
      <h2 class="display closer-title">
        <em>One parser.</em> All your SQL. Real Postgres grammar.
      </h2>
    </div>
    <div class="closer-cta">
      <a class="cta primary big" href="{base}/playground">
        <span class="cta-no mono">→</span>
        <span class="cta-label">Try the Playground</span>
      </a>
    </div>
  </div>
</section>

<style>
  /* ─────────────── HERO ─────────────── */
  .hero {
    padding: clamp(2rem, 5vw, 4rem) 0 clamp(3rem, 6vw, 5rem);
    position: relative;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 8rem 1fr 14rem;
    gap: 2.5rem;
    align-items: start;
  }
  .margin {
    position: sticky;
    top: 90px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-top: 0.5rem;
  }
  .meta-block {
    border-left: 1px solid var(--rule-strong);
    padding-left: 0.75rem;
  }
  .meta-label {
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink-faint);
    font-family: var(--font-mono);
  }
  .meta-value {
    color: var(--amber);
    font-size: 0.85rem;
    margin-top: 0.15rem;
    letter-spacing: 0.05em;
  }
  .vertical-mark {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 0.65rem;
    letter-spacing: 0.4em;
    color: var(--ink-faint);
    margin-top: 1.5rem;
    height: 12rem;
  }

  .hero-main {
    max-width: 44rem;
  }
  .row-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.4rem 0.8rem;
    background: rgba(244, 185, 66, 0.06);
    border: 1px solid rgba(244, 185, 66, 0.18);
    border-radius: 999px;
    color: var(--ink-muted);
    margin-bottom: 1.75rem;
  }
  .row-eyebrow .sep {
    color: var(--ink-faint);
  }
  .dot-amber {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--amber);
    box-shadow: 0 0 0 4px rgba(244, 185, 66, 0.12);
  }

  .display {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 320;
    font-variation-settings: "opsz" 144, "SOFT" 80;
    font-size: clamp(2.6rem, 7vw, 5.6rem);
    line-height: 0.96;
    letter-spacing: -0.022em;
    color: var(--ink-strong);
    margin: 0;
  }
  .display .line { display: block; }
  .display .accent { color: var(--amber); }
  .display em {
    font-variation-settings: "opsz" 144, "SOFT" 100, "wght" 360;
    color: var(--terracotta);
  }

  .lede {
    margin-top: 2rem;
    font-family: var(--font-display);
    font-style: italic;
    font-variation-settings: "opsz" 24;
    font-size: 1.18rem;
    line-height: 1.55;
    color: var(--ink);
    max-width: 36ch;
  }
  .lede strong {
    font-style: normal;
    font-family: var(--font-body);
    font-weight: 600;
    color: var(--ink-strong);
  }
  .lede code {
    font-size: 0.95em;
    color: var(--phosphor);
    background: rgba(158, 237, 138, 0.06);
    padding: 0.05em 0.35em;
    border-radius: 2px;
  }

  .cta-row {
    display: flex;
    gap: 0.75rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  .cta {
    display: inline-flex;
    align-items: baseline;
    gap: 0.6rem;
    padding: 0.95rem 1.25rem;
    border-radius: 3px;
    border: none;
    text-decoration: none;
    border-bottom: none;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.02rem;
    font-variation-settings: "opsz" 24;
    transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
  }
  .cta.primary {
    background: var(--amber);
    color: #1a1306;
  }
  .cta.primary:hover {
    background: var(--ink-strong);
    transform: translate(-1px, -1px);
  }
  .cta.ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--rule-strong);
  }
  .cta.ghost:hover {
    border-color: var(--amber);
    color: var(--amber);
  }
  .cta-no {
    font-style: normal;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    opacity: 0.7;
  }
  .cta.big {
    padding: 1.2rem 2rem;
    font-size: 1.3rem;
  }

  .install {
    margin-top: 2.5rem;
    display: grid;
    gap: 0.4rem;
    font-family: var(--font-mono);
    border: 1px dashed var(--rule-strong);
    border-radius: 3px;
    padding: 1rem 1.2rem;
    background: rgba(0,0,0,0.2);
  }
  .install-label {
    font-size: 0.65rem;
    letter-spacing: 0.22em;
    color: var(--ink-faint);
    text-transform: uppercase;
  }
  .install-code {
    color: var(--phosphor);
    font-size: 0.86rem;
  }
  .install-code.dim {
    color: var(--ink-muted);
  }

  /* ─────────────── ANNOTATION ─────────────── */
  .annot {
    border-left: 1px dashed var(--rule-strong);
    padding-left: 1rem;
    padding-top: 0.6rem;
    font-size: 0.82rem;
    color: var(--ink-muted);
    line-height: 1.6;
  }
  .annot-no {
    color: var(--terracotta);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    margin-bottom: 0.4rem;
  }

  /* ─────────────── SAMPLE ─────────────── */
  .sample {
    padding: 3rem 0;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    background: rgba(0,0,0,0.12);
  }
  .sample-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 3rem;
    align-items: center;
  }
  .fig-title {
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    margin-top: 0.5rem;
    color: var(--ink-strong);
  }
  .fig-title em {
    color: var(--amber);
  }
  .fig-blurb {
    margin-top: 1rem;
    color: var(--ink-muted);
    max-width: 32ch;
    font-size: 0.95rem;
  }
  .codeblock {
    margin: 0;
    padding: 1.5rem 1.7rem;
    background: var(--bg-deep);
    border: 1px solid var(--rule-strong);
    border-radius: 3px;
    box-shadow:
      0 1px 0 rgba(255,255,255,0.04) inset,
      0 30px 60px -30px rgba(0,0,0,0.6);
    overflow: auto;
    font-family: var(--font-mono);
    font-size: 0.84rem;
    line-height: 1.55;
    color: var(--ink);
    counter-reset: line;
  }
  .codeblock code { white-space: pre; color: var(--ink); }

  /* ─────────────── FEATURES ─────────────── */
  .features {
    padding: 5rem 0 1rem;
  }
  .section-head {
    margin-bottom: 3rem;
    max-width: 38rem;
  }
  .section-title {
    font-size: clamp(1.8rem, 3.4vw, 2.6rem);
    margin-top: 0.6rem;
    color: var(--ink-strong);
  }
  .section-title em { color: var(--terracotta); }
  .feature-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
  }
  .feature {
    background: var(--bg);
    padding: 1.75rem 1.6rem 1.85rem;
    transition: background 0.2s ease;
    position: relative;
  }
  .feature:hover {
    background: var(--bg-elevated);
  }
  .feature::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 2px;
    height: 0;
    background: var(--amber);
    transition: height 0.25s ease;
  }
  .feature:hover::before { height: 100%; }
  .feature-no {
    color: var(--pg-blue);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
  }
  .feature-title {
    font-family: var(--font-display);
    font-style: italic;
    font-variation-settings: "opsz" 36, "SOFT" 60;
    font-size: 1.5rem;
    color: var(--ink-strong);
    margin: 0.6rem 0 0.8rem;
    letter-spacing: -0.01em;
  }
  .feature-body {
    color: var(--ink-muted);
    font-size: 0.92rem;
    line-height: 1.6;
  }

  /* ─────────────── QUICKSTART ─────────────── */
  .quickstart {
    padding: 6rem 0 4rem;
  }
  .qs-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    align-items: start;
  }
  .steps {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1.8rem;
  }
  .steps > li {
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 0.5rem;
    align-items: start;
    border-top: 1px solid var(--rule);
    padding-top: 1.4rem;
  }
  .steps strong {
    color: var(--ink-strong);
    font-weight: 600;
  }
  .step-no {
    color: var(--terracotta);
    font-size: 0.95rem;
    letter-spacing: 0.04em;
  }
  .step-code {
    margin: 0.7rem 0 0;
    padding: 0.9rem 1rem;
    background: var(--bg-deep);
    border-radius: 3px;
    border: 1px solid var(--rule-strong);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    line-height: 1.5;
    color: var(--phosphor);
    overflow: auto;
  }

  /* ─────────────── CLOSER ─────────────── */
  .closer {
    padding: 4rem 0 6rem;
    border-top: 1px solid var(--rule);
    background:
      radial-gradient(ellipse 60% 50% at 80% 0%, rgba(229,116,82,0.08), transparent 60%);
  }
  .closer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    align-items: end;
  }
  .closer-title {
    font-size: clamp(2.4rem, 5vw, 4.4rem);
    line-height: 1;
  }
  .closer-title em { color: var(--amber); }
  .closer-cta {
    display: flex;
    justify-content: flex-end;
  }

  /* ─────────────── RESPONSIVE ─────────────── */
  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }
    .margin { display: none; }
    .annot { border-left: none; padding-left: 0; }
    .sample-grid { grid-template-columns: 1fr; }
    .qs-grid { grid-template-columns: 1fr; }
    .closer-grid { grid-template-columns: 1fr; }
    .closer-cta { justify-content: flex-start; }
  }
</style>
