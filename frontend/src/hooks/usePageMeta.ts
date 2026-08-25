import { useEffect } from "react";

const DEFAULT_TITLE = "Nitish Sahni — Technical Systems Analyst";
const DEFAULT_DESCRIPTION =
  "Nitish Sahni builds production monitoring systems, data pipelines, and full-stack applications. Technical Systems Analyst at Irving Personal Care.";

export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ?? DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";
    if (description && meta) {
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (meta) {
        meta.setAttribute("content", previousDescription || DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
