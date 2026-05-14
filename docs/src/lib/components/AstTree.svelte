<script lang="ts">
  import Self from "./AstTree.svelte";

  interface Props {
    value: unknown;
    name?: string;
    depth?: number;
    expanded?: boolean;
  }

  let { value, name, depth = 0, expanded }: Props = $props();

  let open = $state(expanded ?? depth < 3);

  const kind = (v: unknown): "null" | "string" | "number" | "boolean" | "array" | "object" => {
    if (v === null) return "null";
    if (Array.isArray(v)) return "array";
    if (typeof v === "object") return "object";
    return typeof v as "string" | "number" | "boolean";
  };

  const previewOf = (v: unknown): string => {
    if (Array.isArray(v)) return `[${v.length}]`;
    if (v && typeof v === "object") {
      const obj = v as Record<string, unknown>;
      if (typeof obj.type === "string") return obj.type;
      const keys = Object.keys(obj);
      return `{${keys.length}}`;
    }
    return "";
  };

  const entries = $derived.by(() => {
    const k = kind(value);
    if (k === "array") return (value as unknown[]).map((v, i) => [String(i), v] as const);
    if (k === "object") return Object.entries(value as Record<string, unknown>);
    return [] as Array<readonly [string, unknown]>;
  });

  const branchable = $derived(kind(value) === "object" || kind(value) === "array");
</script>

{#if branchable}
  <div class="row branch" class:open data-depth={depth}>
    <button class="toggle" onclick={() => (open = !open)} aria-expanded={open}>
      <span class="chev mono">{open ? "▾" : "▸"}</span>
      {#if name !== undefined}
        <span class="key">{name}</span>
        <span class="colon mono">:</span>
      {/if}
      <span class="type-pill" data-kind={kind(value)}>
        {kind(value) === "array" ? "Array" : (value as { type?: string })?.type ?? "Object"}
      </span>
      <span class="preview mono">{previewOf(value)}</span>
    </button>

    {#if open}
      <div class="children">
        {#each entries as [k, v], i (k)}
          {@const last = i === entries.length - 1}
          <div class="rail" class:last={last}>
            <Self value={v} name={k} depth={depth + 1} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <div class="row leaf">
    {#if name !== undefined}
      <span class="key">{name}</span>
      <span class="colon mono">:</span>
    {/if}
    <span class="val" data-kind={kind(value)}>
      {#if kind(value) === "string"}
        <span class="quote">&quot;</span>{value}<span class="quote">&quot;</span>
      {:else if value === null}
        null
      {:else}
        {String(value)}
      {/if}
    </span>
  </div>
{/if}

<style>
  .row {
    font-family: var(--font-mono);
    font-size: 0.83rem;
    line-height: 1.6;
    color: var(--fg);
  }
  .toggle {
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
    padding: 0;
    color: inherit;
    text-align: left;
    border-radius: 2px;
  }
  .toggle:hover .key { color: var(--brand); }
  .chev {
    color: var(--fg-faint);
    width: 0.9rem;
    display: inline-block;
    font-size: 0.7rem;
  }
  .branch.open > .toggle > .chev { color: var(--brand); }
  .key {
    color: var(--typ);
    font-weight: 600;
  }
  .colon {
    color: var(--fg-faint);
    margin-right: 0.2rem;
  }
  .type-pill {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    padding: 0.05rem 0.45rem;
    border-radius: 3px;
    background: var(--brand-tint);
    color: var(--brand);
    border: 1px solid var(--brand-soft);
    letter-spacing: 0.02em;
    font-weight: 600;
  }
  .type-pill[data-kind="array"] {
    background: var(--bg-soft);
    color: var(--fg-muted);
    border-color: var(--rule);
  }
  .preview {
    color: var(--fg-faint);
    font-size: 0.75rem;
    margin-left: 0.2rem;
  }
  .children {
    margin-left: 0.55rem;
    border-left: 1px dashed var(--rule-strong);
    padding-left: 0.85rem;
  }
  .rail {
    position: relative;
  }
  .val[data-kind="string"] {
    color: var(--str);
  }
  .val[data-kind="number"] {
    color: var(--num);
  }
  .val[data-kind="boolean"] {
    color: var(--brand);
  }
  .val[data-kind="null"] {
    color: var(--fg-faint);
    font-style: italic;
  }
  .quote {
    color: var(--fg-faint);
    opacity: 0.6;
  }
  .leaf {
    padding-left: 1.25rem;
  }
</style>
