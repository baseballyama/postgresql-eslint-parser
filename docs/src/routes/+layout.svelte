<script lang="ts">
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import { base } from "$app/paths";

  let { children } = $props();
</script>

<svelte:head>
  <title>postgresql-eslint-parser · field manual</title>
</svelte:head>

<div class="app">
  <Nav />
  <main>
    {@render children()}
  </main>

  <footer class="foot">
    <div class="shell foot-grid">
      <div class="foot-col">
        <div class="eyebrow">Colophon</div>
        <p class="foot-blurb">
          A PostgreSQL parser that hands ESLint a real ESTree, so SQL can be
          linted the same way the rest of your codebase already is.
        </p>
      </div>
      <div class="foot-col">
        <div class="eyebrow">Index</div>
        <ul class="foot-list">
          <li><a href="{base}/">Overview</a></li>
          <li><a href="{base}/docs">Manual</a></li>
          <li><a href="{base}/playground">Playground</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <div class="eyebrow">Distribution</div>
        <ul class="foot-list">
          <li>
            <a
              href="https://www.npmjs.com/package/postgresql-eslint-parser"
              target="_blank"
              rel="noreferrer noopener">npm</a
            >
          </li>
          <li>
            <a
              href="https://github.com/baseballyama/postgresql-eslint-parser"
              target="_blank"
              rel="noreferrer noopener">GitHub</a
            >
          </li>
          <li>
            <a
              href="https://github.com/baseballyama/postgresql-eslint-parser/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer noopener">MIT License</a
            >
          </li>
        </ul>
      </div>
      <div class="foot-col">
        <div class="eyebrow">Engine</div>
        <p class="foot-mono mono">
          libpg-query · PostgreSQL 17
          <br />ESM · Node ≥ 22
        </p>
      </div>
    </div>
    <div class="shell foot-mark">
      <span class="mono small muted">
        © {new Date().getFullYear()} · postgresql-eslint-parser · printed in
        TypeScript on a bed of WebAssembly.
      </span>
    </div>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
  }
  .foot {
    margin-top: 6rem;
    padding: 3rem 0 2rem;
    border-top: 1px solid var(--rule);
    background:
      linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
  }
  .foot-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .foot-col {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .foot-blurb {
    font-family: var(--font-display);
    font-style: italic;
    font-variation-settings: "opsz" 36;
    font-size: 1rem;
    color: var(--ink-muted);
    line-height: 1.5;
    max-width: 28ch;
  }
  .foot-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.35rem;
    font-size: 0.85rem;
  }
  .foot-list a {
    color: var(--ink-muted);
    border-bottom-color: transparent;
  }
  .foot-list a:hover {
    color: var(--amber);
  }
  .foot-mono {
    font-size: 0.78rem;
    color: var(--ink-muted);
    line-height: 1.65;
  }
  .foot-mark {
    border-top: 1px solid var(--rule-faint);
    padding-top: 1.2rem;
    margin-top: 1.5rem;
  }
  .small { font-size: 0.7rem; }
  .muted { color: var(--ink-faint); letter-spacing: 0.06em; }
  @media (max-width: 760px) {
    .foot-grid { grid-template-columns: 1fr 1fr; }
  }
</style>
