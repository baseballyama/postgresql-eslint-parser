<script lang="ts">
  import { page } from "$app/state";
  import { base } from "$app/paths";

  const items = [
    { href: "/", label: "Index", n: "00" },
    { href: "/docs", label: "Manual", n: "01" },
    { href: "/playground", label: "Playground", n: "02" },
  ];

  const isActive = (href: string) => {
    const pathname = page.url.pathname;
    const target = `${base}${href}`;
    if (href === "/") return pathname === `${base}/` || pathname === base;
    return pathname.startsWith(target);
  };
</script>

<header class="nav">
  <div class="shell row">
    <a class="brand" href="{base}/">
      <span class="brand-mark mono">pg::eslint</span>
      <span class="brand-sep mono">/</span>
      <span class="brand-name">postgresql-eslint-parser</span>
    </a>

    <nav class="links" aria-label="Primary">
      {#each items as item, i (item.href)}
        <a
          class="link"
          class:active={isActive(item.href)}
          href="{base}{item.href === '/' ? '/' : item.href}"
        >
          <span class="link-no mono">{item.n}</span>
          <span class="link-label">{item.label}</span>
        </a>
        {#if i < items.length - 1}
          <span class="dot" aria-hidden="true">·</span>
        {/if}
      {/each}
    </nav>

    <a
      class="gh mono"
      href="https://github.com/baseballyama/postgresql-eslint-parser"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span class="gh-arrow" aria-hidden="true">↗</span>
      GitHub
    </a>
  </div>
  <div class="ascii-rule" aria-hidden="true">
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  </div>
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(14px) saturate(160%);
    -webkit-backdrop-filter: blur(14px) saturate(160%);
    background: rgba(10, 12, 18, 0.72);
  }
  .row {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 64px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .brand {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    border: none;
    color: var(--ink-strong);
    font-family: var(--font-display);
    font-size: 1.05rem;
  }
  .brand-mark {
    color: var(--amber);
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    font-weight: 600;
  }
  .brand-sep {
    color: var(--ink-faint);
    font-size: 0.8rem;
  }
  .brand-name {
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.01em;
    font-variation-settings: "opsz" 14;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    justify-content: center;
  }
  .link {
    display: inline-flex;
    align-items: baseline;
    gap: 0.4rem;
    padding: 0.25rem 0.5rem;
    color: var(--ink-muted);
    border: none;
    transition: color 0.18s ease;
  }
  .link:hover { color: var(--ink-strong); }
  .link.active { color: var(--ink-strong); }
  .link.active .link-no { color: var(--terracotta); }
  .link-no {
    font-size: 0.66rem;
    color: var(--ink-faint);
    letter-spacing: 0.08em;
  }
  .link-label {
    font-family: var(--font-display);
    font-style: italic;
    font-weight: 380;
    font-variation-settings: "opsz" 18;
    font-size: 1rem;
  }
  .dot {
    color: var(--ink-faint);
    font-size: 0.7rem;
    user-select: none;
  }
  .gh {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink-muted);
    border: 1px solid var(--rule-strong);
    padding: 0.5rem 0.85rem;
    border-radius: 999px;
    transition: color 0.15s ease, border-color 0.15s ease;
  }
  .gh:hover {
    color: var(--ink-strong);
    border-color: var(--amber);
  }
  .gh-arrow { color: var(--amber); }

  @media (max-width: 720px) {
    .links { display: none; }
    .gh { display: none; }
  }
</style>
