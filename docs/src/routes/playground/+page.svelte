<script lang="ts">
  import { onMount, untrack } from "svelte";
  import { browser } from "$app/environment";
  import Editor from "$lib/components/Editor.svelte";
  import AstTree from "$lib/components/AstTree.svelte";
  import type { Program } from "$parser/ast.ts";

  const examples: { name: string; sql: string }[] = [
    {
      name: "SELECT · JOIN · CTE",
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
      name: "CREATE TABLE",
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
      name: "Window function",
      sql: `SELECT
  user_id,
  amount,
  row_number() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn,
  sum(amount)  OVER (PARTITION BY user_id) AS total
FROM payments;`,
    },
    {
      name: "INSERT · RETURNING",
      sql: `INSERT INTO sessions (user_id, expires_at, token)
VALUES ($1, now() + INTERVAL '30 days', encode(gen_random_bytes(32), 'hex'))
ON CONFLICT (token) DO NOTHING
RETURNING id, expires_at;`,
    },
    {
      name: "Broken SQL",
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
    <h1>Playground</h1>
    <p class="lede">
      The actual parser, running in your browser via WebAssembly. Edit the SQL
      on the left to see the ESTree-shaped AST update on the right.
    </p>
  </div>
</section>

<section class="examples">
  <div class="shell ex-row">
    <span class="ex-label">Examples</span>
    {#each examples as ex (ex.name)}
      <button
        class="ex-btn"
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
    <div class="pane">
      <header class="pane-head">
        <span class="pane-title">SQL Source</span>
        <span class="pane-tag mono">.sql</span>
      </header>
      <div class="pane-body editor-wrap">
        <Editor value={code} onchange={onChange} />
      </div>
      <footer class="pane-foot">
        <span class={working ? "live working" : "live"}>
          <span class="dot"></span>
          {working ? "parsing…" : "ready"}
        </span>
        <span class="muted">type to re-parse</span>
      </footer>
    </div>

    <div class="pane">
      <header class="pane-head">
        <span class="pane-title">Output</span>
        <div class="view-toggle" role="tablist" aria-label="Output view">
          <button
            role="tab"
            class:active={view === "ast"}
            onclick={() => (view = "ast")}>AST</button
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
          <label class="pretty">
            <input type="checkbox" bind:checked={prettify} />
            <span>Pretty</span>
          </label>
        {/if}
      </header>

      <div class="pane-body output">
        {#if !ready}
          <div class="empty">Loading parser…</div>
        {/if}
        {#if result?.error}
          <div class="errpane">
            <div class="err-label">Syntax error</div>
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
                    <th>Type</th>
                    <th>Value</th>
                    <th>Range</th>
                    <th>Loc</th>
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
                      <td class="muted">{i}</td>
                      <td><span class="tok-type">{t.type}</span></td>
                      <td class="tok-val">{t.value}</td>
                      <td class="muted">[{t.range[0]}, {t.range[1]}]</td>
                      <td class="muted">
                        {t.loc.start.line}:{t.loc.start.column}
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            {:else}
              <div class="empty">No tokens.</div>
            {/if}
          </div>
        {/if}
      </div>

      <footer class="pane-foot">
        <span class="muted">ESTree-compatible · ranges and loc on every node</span>
      </footer>
    </div>
  </div>
</section>

<style>
  .head {
    padding: 2.5rem 0 1.2rem;
  }
  .head h1 {
    font-size: 2.4rem;
  }
  .lede {
    margin-top: 0.6rem;
    color: var(--fg-muted);
    max-width: 44rem;
  }

  /* Examples */
  .examples {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--rule);
  }
  .ex-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem;
  }
  .ex-label {
    font-size: 0.78rem;
    color: var(--fg-faint);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
    margin-right: 0.7rem;
  }
  .ex-btn {
    font-size: 0.82rem;
    color: var(--fg-muted);
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--rule);
    border-radius: 999px;
    background: var(--bg);
    transition:
      color 0.12s ease,
      border-color 0.12s ease,
      background 0.12s ease;
  }
  .ex-btn:hover {
    color: var(--fg-strong);
    border-color: var(--brand);
  }
  .ex-btn.active {
    color: #fff;
    background: var(--brand);
    border-color: var(--brand);
  }

  /* Lab */
  .lab {
    padding: 1.5rem 0 3rem;
  }
  .lab-grid {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 var(--gutter);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    min-height: 64vh;
  }
  .pane {
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: var(--bg);
    border: 1px solid var(--rule);
    border-radius: 8px;
    overflow: hidden;
    min-height: 0;
  }
  .pane-head {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.55rem 0.85rem;
    border-bottom: 1px solid var(--rule);
    background: var(--bg-soft);
  }
  .pane-title {
    font-weight: 700;
    color: var(--fg-strong);
    font-size: 0.92rem;
  }
  .pane-tag {
    font-size: 0.7rem;
    color: var(--fg-faint);
    margin-left: auto;
    letter-spacing: 0.06em;
  }
  .view-toggle {
    margin-left: auto;
    display: inline-flex;
    border: 1px solid var(--rule);
    border-radius: 5px;
    overflow: hidden;
    background: var(--bg);
  }
  .view-toggle button {
    font-size: 0.78rem;
    padding: 0.3rem 0.65rem;
    color: var(--fg-muted);
    font-weight: 600;
    border-right: 1px solid var(--rule);
  }
  .view-toggle button:last-child {
    border-right: none;
  }
  .view-toggle button:hover {
    color: var(--fg-strong);
  }
  .view-toggle button.active {
    background: var(--brand-tint);
    color: var(--brand);
  }
  .pretty {
    margin-left: 0.6rem;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.78rem;
    color: var(--fg-muted);
    cursor: pointer;
  }
  .pretty input {
    accent-color: var(--brand);
  }

  .pane-body {
    min-height: 0;
    overflow: hidden;
    position: relative;
  }
  .editor-wrap {
    height: 100%;
    background: var(--bg-code);
  }
  .output {
    overflow: auto;
    padding: 1rem 1.1rem;
    background: var(--bg);
  }

  .pane-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0.85rem;
    border-top: 1px solid var(--rule);
    font-size: 0.78rem;
    background: var(--bg-soft);
    color: var(--fg-muted);
  }
  .live {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--str);
    font-weight: 600;
  }
  .live .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
  .live.working {
    color: var(--brand);
  }
  .muted {
    color: var(--fg-faint);
  }

  /* Output views */
  .json {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.55;
    color: var(--fg);
    white-space: pre;
  }
  .ast {
    font-size: 0.83rem;
    line-height: 1.65;
  }
  .errpane {
    background: var(--err-bg);
    border: 1px solid var(--err-border);
    border-left: 3px solid var(--num);
    padding: 0.7rem 0.9rem;
    border-radius: 5px;
    margin-bottom: 0.9rem;
  }
  .err-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--num);
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
  .err-msg {
    margin: 0;
    color: var(--fg);
    font-family: var(--font-mono);
    font-size: 0.82rem;
    white-space: pre-wrap;
    line-height: 1.5;
  }

  .empty {
    color: var(--fg-faint);
    font-size: 0.85rem;
    padding: 1.5rem 0;
    text-align: center;
  }

  .tok-table {
    border-collapse: collapse;
    width: 100%;
    font-size: 0.8rem;
  }
  .tok-table th,
  .tok-table td {
    text-align: left;
    padding: 0.3rem 0.55rem;
    border-bottom: 1px solid var(--rule);
  }
  .tok-table th {
    color: var(--fg-faint);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    background: var(--bg-soft);
    position: sticky;
    top: -1.1rem;
  }
  .tok-type {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    padding: 0.05rem 0.4rem;
    border-radius: 3px;
    background: var(--brand-tint);
    color: var(--brand);
    border: 1px solid var(--brand-soft);
  }
  .tok-val {
    color: var(--str);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    white-space: pre;
  }

  @media (max-width: 980px) {
    .lab-grid {
      grid-template-columns: 1fr;
      min-height: auto;
    }
    .pane {
      min-height: 44vh;
    }
  }
</style>
