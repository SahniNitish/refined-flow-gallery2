export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dateLabel: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  cover: string;
  coverAlt: string;
};

export const posts: Post[] = [
  {
    slug: "how-graphify-gives-every-ai-agent-the-same-memory",
    title: "How Graphify Gives Every AI Agent the Same Memory on Your Project",
    subtitle:
      "Stop repeating the same prompts. One map. Every model. Shared understanding.",
    date: "2026-08-25",
    dateLabel: "August 25, 2026",
    readTime: "7 min read",
    excerpt:
      "Every new coding agent starts from zero. Graphify turns your codebase into persistent memory that Claude, Cursor, Codex, and the rest can all share.",
    tags: ["AI", "Developer Tools", "Knowledge Graphs"],
    cover: "/blog/graphify-communities.png",
    coverAlt:
      "Graphify community map of a codebase: colored node clusters on the left, a communities sidebar listing groups such as APIRouter, FastAPI, and ModelField on the right.",
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
