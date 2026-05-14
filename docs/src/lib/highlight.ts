/**
 * Build-time syntax highlighting via Shiki.
 *
 * Returns HTML annotated with both `--shiki-light` and `--shiki-dark` CSS
 * variables so the same markup can render under either theme (the CSS in
 * `app.css` picks which variable to use based on `data-theme`).
 *
 * Called from `+page.ts` load functions; with `prerender = true` and
 * `adapter-static` the result is baked into the page at build time and
 * shipped to the browser as plain HTML.
 */
import {
  createHighlighter,
  type Highlighter,
  type BundledLanguage,
} from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

const getHighlighter = (): Promise<Highlighter> => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["sql", "typescript", "javascript", "bash"],
    });
  }
  return highlighterPromise;
};

export const highlight = async (
  code: string,
  lang: BundledLanguage,
): Promise<string> => {
  const hi = await getHighlighter();
  return hi.codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
};
