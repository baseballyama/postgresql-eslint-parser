<script lang="ts">
  import { onMount, untrack } from "svelte";
  import { browser } from "$app/environment";
  import Editor from "$lib/components/Editor.svelte";
  import AstTree from "$lib/components/AstTree.svelte";
  import type { Program } from "$parser/ast.ts";

  const examples: { name: string; sql: string }[] = [
    {
      name: "select · join · cte",
      sql: `-- recent buyers
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
LIMIT 50;`,
    },
    {
      name: "create table",
      sql: `CREATE TABLE IF NOT EXISTS orders (
  id         bigserial PRIMARY KEY,
  user_id    bigint NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status     text   NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','paid','refunded')),
  total      numeric(12,2) NOT NULL,
  metadata   jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX orders_user_created_idx ON orders (user_id, created_at DESC);`,
    },
    {
      name: "window function",
      sql: `SELECT
  user_id,
  amount,
  row_number() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn,
  sum(amount)  OVER (PARTITION BY user_id) AS total
FROM payments;`,
    },
    {
      name: "insert · returning",
      sql: `INSERT INTO sessions (user_id, expires_at, token)
VALUES ($1, now() + INTERVAL '30 days', encode(gen_random_bytes(32), 'hex'))
ON CONFLICT (token) DO NOTHING
RETURNING id, expires_at;`,
    },
    {
      name: "broken sql",
      sql: `SELECT FROM WHERE`,
    },
  ];

  let code = $state(examples[0]!.sql);
  let result = $state<{
    body: unknown;
    tokens: unknown;
    comments: unknown;
    visitorKeys: unknown;
    error: string | null;
    durationMs: number;
  } | null>(null);
  let ready = $state(false);
  let working = $state(false);
  let view = $state<"ast" | "json" | "tokens">("ast");
  let prettify = $state(true);

  let debounce: ReturnType<typeof setTimeout> | null = null;

  const run = async () => {
    if (!browser) return;
    working = true;
    try {
      const { parseSQL, stripParents } = await import("$lib/parser");
      const { program, visitorKeys, durationMs } = await parseSQL(code);
      stripParents(program);
      const safe = JSON.parse(JSON.stringify(program)) as Program;

      const errorNode = (safe.body as { type: string; error?: string }[]).find(
        (n) => n.type === "SQLParseError",
      );

      result = {
        body: safe.body,
        tokens: safe.tokens,
        comments: safe.comments,
        visitorKeys,
        error: errorNode?.error ?? null,
        durationMs,
      };
      ready = true;
    } catch (err) {
      result = {
        body: [],
        tokens: [],
        comments: [],
        visitorKeys: {},
        error: err instanceof Error ? err.message : String(err),
        durationMs: 0,
      };
      ready = true;
    } finally {
      working = false;
    }
  };

  const onChange = (next: string) => {
    code = next;
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(() => {
      run();
    }, 250);
  };

  const pickExample = (sql: string) => {
    code = sql;
    run();
  };

  onMount(() => {
    untrack(() => run());
  });

  const jsonBody = $derived.by(() => {
    if (!result) return "";
    return prettify
      ? JSON.stringify(result.body, null, 2)
      : JSON.stringify(result.body);
  });

</script>

<svelte:head>
  <title>Playground · postgresql-eslint-parser</title>
</svelte:head>

<section class="head">
  <div class="shell">
    <div class="eyebrow">02 · Playground · live AST inspector</div>
    <h1 class="display">
      Paste SQL, <em>watch</em> the AST.
    </h1>
    <p class="lede">
      The actual parser, running in your browser via WebAssembly. Every
      token, comment and statement node — exactly the way ESLint will see
      them when this parser is plugged into your config.
    </p>
  </div>
</section>

<section class="examples">
  <div class="shell ex-row">
    <div class="ex-label mono">examples ▸</div>
    {#each examples as ex (ex.name)}
      <button
        class="ex-btn mono"
        class:active={code === ex.sql}
        onclick={() => pickExample(ex.sql)}
      >
        {ex.name}
      </button>
    {/each}
  </div>
</section>

<section class="lab">
  <div class="lab-grid">
    <!-- editor pane -->
    <div class="pane">
      <header class="pane-head">
        <span class="pane-no mono">A</span>
        <span class="pane-title">Source · PostgreSQL</span>
        <span class="pane-tag mono">.sql</span>
      </header>
      <div class="pane-body editor-wrap">
        <Editor value={code} onchange={onChange} />
      </div>
      <footer class="pane-foot mono">
        <span class={working ? "live working" : "live"}>
          <span class="dot"></span>
          {working ? "parsing…" : "live"}
        </span>
        <span class="muted">cmd-z to undo · type to reparse</span>
      </footer>
    </div>

    <!-- output pane -->
    <div class="pane">
      <header class="pane-head">
        <span class="pane-no mono">B</span>
        <span class="pane-title">Output</span>
        <div class="view-toggle" role="tablist" aria-label="Output view">
          <button
            role="tab"
            class:active={view === "ast"}
            onclick={() => (view = "ast")}>AST tree</button
          >
          <button
            role="tab"
            class:active={view === "json"}
            onclick={() => (view = "json")}>JSON</button
          >
          <button
            role="tab"
            class:active={view === "tokens"}
            onclick={() => (view = "tokens")}>Tokens</button
          >
        </div>
        {#if view === "json"}
          <label class="pretty mono">
            <input type="checkbox" bind:checked={prettify} />
            pretty
          </label>
        {/if}
      </header>

      <div class="pane-body output">
        {#if !ready}
          <div class="empty">
            <div class="empty-spinner mono">loading WebAssembly · libpg-query</div>
            <div class="ascii-rule" aria-hidden="true">
              ─────────────────────────────────
            </div>
          </div>
        {:else if result?.error}
          <div class="errpane">
            <div class="err-no mono">SYNTAX ERROR</div>
            <pre class="err-msg">{result.error}</pre>
          </div>
        {/if}

        {#if ready && view === "ast"}
          <div class="ast">
            <AstTree value={result?.body} name="body" depth={0} />
          </div>
        {/if}

        {#if ready && view === "json"}
          <pre class="json"><code>{jsonBody}</code></pre>
        {/if}

        {#if ready && view === "tokens"}
          <div class="tokens">
            {#if Array.isArray(result?.tokens) && result.tokens.length > 0}
              <table class="tok-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>type</th>
                    <th>value</th>
                    <th>range</th>
                    <th>loc</th>
                  </tr>
                </thead>
                <tbody>
                  {#each result.tokens as tok, i (i)}
                    {@const t = tok as {
                      type: string;
                      value: string;
                      range: [number, number];
                      loc: { start: { line: number; column: number }; end: { line: number; column: number } };
                    }}
                    <tr>
                      <td class="tok-i mono">{i}</td>
                      <td><span class="tok-type">{t.type}</span></td>
                      <td class="tok-val mono">{t.value}</td>
                      <td class="mono muted">[{t.range[0]}, {t.range[1]}]</td>
                      <td class="mono muted">
                        {t.loc.start.line}:{t.loc.start.column}
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            {:else}
              <div class="empty muted mono">no tokens</div>
            {/if}
          </div>
        {/if}
      </div>

      <footer class="pane-foot mono">
        <span class="muted">
          ESTree-compatible · ranges and loc on every node
        </span>
      </footer>
    </div>
  </div>
</section>

<style>
  /* ─────────────── HEADER ─────────────── */
  .head {
    padding: 2.5rem 0 2rem;
  }
  .display {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(2.4rem, 6vw, 4.4rem);
    line-height: 0.98;
    color: var(--ink-strong);
    margin: 0.6rem 0 1rem;
    font-variation-settings: "opsz" 144, "SOFT" 80;
  }
  .display em { color: var(--terracotta); }
  .lede {
    font-family: var(--font-display);
    font-style: italic;
    font-variation-settings: "opsz" 24;
    font-size: 1.05rem;
    line-height: 1.55;
    color: var(--ink-muted);
    max-width: 42ch;
  }

  /* ─────────────── EXAMPLES ─────────────── */
  .examples {
    padding: 1rem 0 1.4rem;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    background: rgba(0,0,0,0.18);
  }
  .ex-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .ex-label {
    color: var(--ink-faint);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-right: 0.8rem;
  }
  .ex-btn {
    font-size: 0.75rem;
    color: var(--ink-muted);
    padding: 0.4rem 0.7rem;
    border: 1px solid var(--rule-strong);
    border-radius: 999px;
    letter-spacing: 0.04em;
    transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
  }
  .ex-btn:hover {
    color: var(--ink-strong);
    border-color: var(--pg-blue);
  }
  .ex-btn.active {
    color: #1a1306;
    background: var(--amber);
    border-color: var(--amber);
  }

  /* ─────────────── LAB ─────────────── */
  .lab {
    padding: 1.5rem 0 4rem;
  }
  .lab-grid {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 var(--gutter);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--rule-strong);
    border: 1px solid var(--rule-strong);
    border-radius: 3px;
    overflow: hidden;
    min-height: 64vh;
  }
  .pane {
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: var(--bg);
    min-height: 0;
  }
  .pane-head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.55rem 0.9rem;
    border-bottom: 1px solid var(--rule);
    background: var(--bg-elevated);
  }
  .pane-no {
    background: var(--amber);
    color: #1a1306;
    font-size: 0.7rem;
    font-weight: 600;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 2px;
    display: inline-grid;
    place-items: center;
  }
  .pane-title {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.05rem;
    color: var(--ink-strong);
    font-variation-settings: "opsz" 18;
  }
  .pane-tag {
    font-size: 0.7rem;
    color: var(--ink-faint);
    letter-spacing: 0.1em;
    margin-left: auto;
  }
  .view-toggle {
    margin-left: auto;
    display: inline-flex;
    border: 1px solid var(--rule-strong);
    border-radius: 2px;
    overflow: hidden;
  }
  .view-toggle button {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    padding: 0.32rem 0.7rem;
    color: var(--ink-muted);
    border-right: 1px solid var(--rule-strong);
    letter-spacing: 0.04em;
  }
  .view-toggle button:last-child { border-right: none; }
  .view-toggle button:hover { color: var(--ink-strong); }
  .view-toggle button.active {
    background: var(--surface-2);
    color: var(--amber);
  }
  .pretty {
    margin-left: 0.6rem;
    font-size: 0.7rem;
    color: var(--ink-muted);
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
  }
  .pretty input { accent-color: var(--amber); }

  .pane-body {
    min-height: 0;
    overflow: hidden;
    position: relative;
  }
  .editor-wrap {
    height: 100%;
    background: var(--bg-deep);
  }
  .output {
    overflow: auto;
    padding: 1.1rem 1.2rem;
    background: var(--bg);
  }

  .pane-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.45rem 0.9rem;
    border-top: 1px solid var(--rule);
    font-size: 0.7rem;
    color: var(--ink-faint);
    letter-spacing: 0.05em;
    background: var(--bg-elevated);
  }
  .live {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--phosphor);
  }
  .live .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--phosphor);
    box-shadow: 0 0 0 4px rgba(158,237,138,0.18);
    animation: pulse 1.6s ease-in-out infinite;
  }
  .live.working { color: var(--amber); }
  .live.working .dot {
    background: var(--amber);
    box-shadow: 0 0 0 4px rgba(244,185,66,0.18);
  }
  @keyframes pulse {
    50% { opacity: 0.5; }
  }
  .muted { color: var(--ink-faint); }

  /* ─────────────── OUTPUT VIEWS ─────────────── */
  .json {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.55;
    color: var(--ink);
    white-space: pre;
  }
  .ast {
    font-size: 0.83rem;
    line-height: 1.65;
  }
  .errpane {
    background: rgba(229,116,82,0.06);
    border: 1px solid rgba(229,116,82,0.3);
    padding: 0.9rem 1rem;
    border-radius: 3px;
    margin-bottom: 1.2rem;
  }
  .err-no {
    color: var(--terracotta);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    margin-bottom: 0.3rem;
  }
  .err-msg {
    margin: 0;
    color: var(--ink);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    white-space: pre-wrap;
    line-height: 1.55;
  }

  .empty {
    color: var(--ink-faint);
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    padding: 2rem 0;
    text-align: center;
  }
  .empty-spinner {
    color: var(--amber);
    margin-bottom: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    animation: dim 1.6s ease-in-out infinite alternate;
  }
  @keyframes dim {
    from { opacity: 0.5; }
    to { opacity: 1; }
  }

  .tok-table {
    border-collapse: collapse;
    width: 100%;
    font-size: 0.78rem;
  }
  .tok-table th,
  .tok-table td {
    text-align: left;
    padding: 0.32rem 0.6rem;
    border-bottom: 1px solid var(--rule);
  }
  .tok-table th {
    color: var(--ink-faint);
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 500;
    background: var(--bg-elevated);
    position: sticky;
    top: -1.1rem;
  }
  .tok-i { color: var(--ink-faint); font-size: 0.72rem; }
  .tok-type {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    padding: 0.05rem 0.4rem;
    border-radius: 2px;
    background: rgba(107,155,214,0.1);
    color: var(--pg-blue);
    border: 1px solid rgba(107,155,214,0.2);
    letter-spacing: 0.04em;
  }
  .tok-val {
    color: var(--phosphor);
    font-size: 0.78rem;
    white-space: pre;
  }

  /* ─────────────── RESPONSIVE ─────────────── */
  @media (max-width: 980px) {
    .lab-grid {
      grid-template-columns: 1fr;
      min-height: auto;
    }
    .pane { min-height: 44vh; }
  }
</style>
