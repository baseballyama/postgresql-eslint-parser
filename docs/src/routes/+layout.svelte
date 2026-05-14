<script lang="ts">
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import { base } from "$app/paths";

  let { children } = $props();
</script>

<svelte:head>
  <title>postgresql-eslint-parser</title>
</svelte:head>

<div class="app">
  <Nav />
  <main>
    {@render children()}
  </main>

  <footer class="foot">
    <div class="shell foot-grid">
      <div class="foot-col">
        <div class="foot-title">postgresql-eslint-parser</div>
        <p class="foot-blurb">
          A PostgreSQL parser that gives ESLint a real ESTree, so SQL files
          can be linted the same way as the rest of your codebase.
        </p>
      </div>
      <div class="foot-col">
        <div class="foot-heading">Project</div>
        <ul>
          <li><a href="{base}/">Home</a></li>
          <li><a href="{base}/docs">Documentation</a></li>
          <li><a href="{base}/playground">Playground</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <div class="foot-heading">Resources</div>
        <ul>
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
    </div>
    <div class="shell foot-foot">
      <span class="muted"
        >© {new Date().getFullYear()} postgresql-eslint-parser contributors</span
      >
      <span class="muted">Built on libpg-query · PostgreSQL 17</span>
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
    margin-top: 5rem;
    padding: 2.5rem 0 1.5rem;
    border-top: 1px solid var(--rule);
    background: var(--bg-soft);
  }
  .foot-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
  }
  .foot-col ul {
    list-style: none;
    padding: 0;
    margin: 0.6rem 0 0;
    display: grid;
    gap: 0.4rem;
  }
  .foot-col li {
    font-size: 0.9rem;
  }
  .foot-col a {
    color: var(--fg-muted);
    border-bottom-color: transparent;
  }
  .foot-col a:hover {
    color: var(--brand);
  }
  .foot-title {
    font-weight: 700;
    color: var(--fg-strong);
    margin-bottom: 0.4rem;
  }
  .foot-blurb {
    color: var(--fg-muted);
    font-size: 0.9rem;
    max-width: 36ch;
  }
  .foot-heading {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--fg-strong);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .foot-foot {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1.2rem;
    border-top: 1px solid var(--rule);
    font-size: 0.82rem;
  }
  .muted {
    color: var(--fg-faint);
  }
  @media (max-width: 720px) {
    .foot-grid {
      grid-template-columns: 1fr 1fr;
    }
    .foot-foot {
      flex-direction: column;
      gap: 0.2rem;
    }
  }
</style>
