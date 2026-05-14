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
    { tag: t.keyword, color: "var(--kw)", fontWeight: "600" },
    { tag: [t.string, t.special(t.string)], color: "var(--str)" },
    { tag: t.number, color: "var(--num)" },
    { tag: [t.bool, t.null], color: "var(--kw)" },
    { tag: t.comment, color: "var(--com)", fontStyle: "italic" },
    { tag: t.operator, color: "var(--punc)" },
    { tag: t.punctuation, color: "var(--punc)" },
    { tag: t.variableName, color: "var(--fg-strong)" },
    { tag: t.typeName, color: "var(--typ)" },
    { tag: t.function(t.variableName), color: "var(--typ)" },
  ]);

  const theme = EditorView.theme({
    "&": {
      backgroundColor: "transparent",
      color: "var(--fg)",
      height: "100%",
      fontSize: "0.86rem",
    },
    ".cm-content": {
      fontFamily: "var(--font-mono)",
      caretColor: "var(--brand)",
      padding: "0.9rem 0",
    },
    ".cm-line": { padding: "0 1rem" },
    ".cm-gutters": {
      backgroundColor: "transparent",
      border: "none",
      color: "var(--fg-faint)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      paddingRight: "0.6rem",
    },
    ".cm-activeLine": { backgroundColor: "var(--brand-tint)" },
    ".cm-activeLineGutter": {
      backgroundColor: "transparent",
      color: "var(--brand)",
    },
    ".cm-selectionBackground, ::selection": {
      backgroundColor: "var(--brand-soft) !important",
    },
    ".cm-cursor": { borderLeftColor: "var(--brand)" },
    "&.cm-focused": { outline: "none" },
    "&.cm-focused .cm-selectionBackground": {
      backgroundColor: "var(--brand-soft) !important",
    },
    ".cm-matchingBracket, .cm-nonmatchingBracket": {
      backgroundColor: "var(--bg-soft)",
      outline: "none",
      color: "var(--brand)",
    },
  });

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
