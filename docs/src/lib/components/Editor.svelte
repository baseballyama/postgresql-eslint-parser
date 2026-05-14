<script lang="ts">
  import { onMount, untrack } from "svelte";
  import { EditorState } from "@codemirror/state";
  import {
    EditorView,
    keymap,
    lineNumbers,
    highlightActiveLine,
    drawSelection,
  } from "@codemirror/view";
  import { defaultKeymap, history, historyKeymap, indentWithTab } from "@codemirror/commands";
  import { sql, PostgreSQL } from "@codemirror/lang-sql";
  import {
    HighlightStyle,
    syntaxHighlighting,
    bracketMatching,
  } from "@codemirror/language";
  import { tags as t } from "@lezer/highlight";

  interface Props {
    value: string;
    onchange: (next: string) => void;
  }

  let { value = $bindable(""), onchange }: Props = $props();

  let host: HTMLDivElement;
  let view: EditorView | null = null;

  const highlight = HighlightStyle.define([
    { tag: t.keyword, color: "var(--amber)", fontWeight: "500" },
    { tag: [t.string, t.special(t.string)], color: "var(--phosphor)" },
    { tag: t.number, color: "var(--terracotta)" },
    { tag: [t.bool, t.null], color: "var(--plum)" },
    { tag: t.comment, color: "var(--ink-faint)", fontStyle: "italic" },
    { tag: t.operator, color: "var(--pg-blue)" },
    { tag: t.punctuation, color: "var(--ink-muted)" },
    { tag: t.variableName, color: "var(--ink-strong)" },
    { tag: t.typeName, color: "var(--pg-blue)" },
    { tag: t.function(t.variableName), color: "var(--amber)" },
  ]);

  const theme = EditorView.theme(
    {
      "&": {
        backgroundColor: "transparent",
        color: "var(--ink)",
        height: "100%",
        fontSize: "0.86rem",
      },
      ".cm-content": {
        fontFamily: "var(--font-mono)",
        caretColor: "var(--amber)",
        padding: "1.2rem 0",
      },
      ".cm-line": { padding: "0 1rem" },
      ".cm-gutters": {
        backgroundColor: "transparent",
        border: "none",
        color: "var(--ink-faint)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        paddingRight: "0.6rem",
      },
      ".cm-activeLine": { backgroundColor: "rgba(244,185,66,0.04)" },
      ".cm-activeLineGutter": {
        backgroundColor: "transparent",
        color: "var(--amber)",
      },
      ".cm-selectionBackground, ::selection": {
        backgroundColor: "rgba(244,185,66,0.25) !important",
      },
      ".cm-cursor": { borderLeftColor: "var(--amber)" },
      "&.cm-focused": { outline: "none" },
      "&.cm-focused .cm-selectionBackground": {
        backgroundColor: "rgba(244,185,66,0.28) !important",
      },
      ".cm-matchingBracket, .cm-nonmatchingBracket": {
        backgroundColor: "rgba(107,155,214,0.12)",
        outline: "none",
        color: "var(--amber)",
      },
    },
    { dark: true },
  );

  onMount(() => {
    const initial = untrack(() => value);
    const state = EditorState.create({
      doc: initial,
      extensions: [
        lineNumbers(),
        history(),
        drawSelection(),
        bracketMatching(),
        highlightActiveLine(),
        sql({ dialect: PostgreSQL, upperCaseKeywords: true }),
        syntaxHighlighting(highlight),
        theme,
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        EditorView.updateListener.of((upd) => {
          if (upd.docChanged) {
            const next = upd.state.doc.toString();
            value = next;
            onchange(next);
          }
        }),
      ],
    });

    view = new EditorView({ state, parent: host });

    return () => {
      view?.destroy();
      view = null;
    };
  });

  $effect(() => {
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
      });
    }
  });
</script>

<div class="editor" bind:this={host}></div>

<style>
  .editor {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  :global(.editor .cm-editor) {
    height: 100%;
  }
</style>
