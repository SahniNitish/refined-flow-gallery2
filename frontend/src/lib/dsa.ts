export const DSA_REPO = "SahniNitish/striver-dsa";
export const DSA_REPO_URL = `https://github.com/${DSA_REPO}`;
export const DSA_TREE_URL = `https://api.github.com/repos/${DSA_REPO}/git/trees/main?recursive=1`;
export const DSA_COMMITS_URL = `https://api.github.com/repos/${DSA_REPO}/commits`;

const SOLUTION_PATH = /^dsa\/problems\/([^/]+)\/solution\.md$/;
const GITHUB_JSON = { Accept: "application/vnd.github+json" };

export type DsaProblem = {
  slug: string;
  title: string;
  path: string;
  solvedAt?: string;
};

export type DsaCatalog = {
  problems: DsaProblem[];
  lastSolved: DsaProblem | null;
};

export type DsaSolution = {
  slug: string;
  title: string;
  description: string;
  language: string;
  code: string;
  problemUrl?: string;
  githubUrl: string;
  stats: {
    success?: boolean;
    testCases?: string;
    time?: string;
    memory?: string;
  };
};

export function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function titleToSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatSolvedDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function githubSolutionUrl(slug: string) {
  return `${DSA_REPO_URL}/blob/main/dsa/problems/${slug}/solution.md`;
}

export function rawSolutionUrl(slug: string) {
  return `https://raw.githubusercontent.com/${DSA_REPO}/main/dsa/problems/${slug}/solution.md`;
}

type GitTree = {
  tree?: { path: string; type: string }[];
};

type GitCommit = {
  commit: {
    message: string;
    author: { date: string };
  };
};

export async function fetchDsaProblems(): Promise<DsaCatalog> {
  const [treeRes, commitsRes] = await Promise.all([
    fetch(DSA_TREE_URL, { headers: GITHUB_JSON }),
    fetch(`${DSA_COMMITS_URL}?per_page=100`, { headers: GITHUB_JSON }),
  ]);

  if (!treeRes.ok) {
    throw new Error(`GitHub ${treeRes.status}`);
  }

  const tree = (await treeRes.json()) as GitTree;
  const bySlug = new Map<string, DsaProblem>();

  for (const node of tree.tree ?? []) {
    if (node.type !== "blob") continue;
    const match = node.path.match(SOLUTION_PATH);
    if (!match) continue;
    const slug = match[1];
    bySlug.set(slug, {
      slug,
      title: humanizeSlug(slug),
      path: node.path,
    });
  }

  if (commitsRes.ok) {
    const commits = (await commitsRes.json()) as GitCommit[];
    if (Array.isArray(commits)) {
      for (const commit of commits) {
        const solvedTitle = parseSolvedTitle(commit.commit.message);
        if (!solvedTitle) continue;
        const slug = titleToSlug(solvedTitle);
        const problem = bySlug.get(slug);
        if (!problem) continue;
        if (!problem.solvedAt) {
          problem.solvedAt = commit.commit.author.date;
          problem.title = solvedTitle;
        }
      }
    }
  }

  const problems = [...bySlug.values()].sort((a, b) => {
    if (a.solvedAt && b.solvedAt) {
      const byDate = b.solvedAt.localeCompare(a.solvedAt);
      if (byDate !== 0) return byDate;
    } else if (a.solvedAt) return -1;
    else if (b.solvedAt) return 1;
    return a.title.localeCompare(b.title);
  });

  const lastSolved =
    problems.find((problem) => problem.solvedAt) ?? problems[0] ?? null;

  return { problems, lastSolved };
}

export async function fetchDsaSolution(slug: string): Promise<DsaSolution> {
  const response = await fetch(rawSolutionUrl(slug));
  if (!response.ok) {
    throw new Error(response.status === 404 ? "not-found" : `GitHub ${response.status}`);
  }

  const markdown = await response.text();
  return parseSolution(slug, markdown);
}

function parseSolvedTitle(message: string) {
  const line = message.split("\n")[0]?.trim() ?? "";
  const match = line.match(/^Solved:\s*(.+)$/i);
  return match?.[1]?.trim() ?? null;
}

function sectionBody(markdown: string, heading: string) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = markdown.match(
    new RegExp(`## ${escaped}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`)
  );
  return match?.[1]?.trim() ?? "";
}

function parseSolution(slug: string, markdown: string): DsaSolution {
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || humanizeSlug(slug);
  const description = sectionBody(markdown, "Problem Description");
  const fence = markdown.match(/```(\w+)?\n([\s\S]*?)```/);
  const language = fence?.[1] || "text";
  const code = fence?.[2]?.replace(/\n$/, "") ?? "";
  const problemUrl = markdown.match(/https:\/\/takeuforward\.org\/[^\s)]+/)?.[0];
  const statsBlock = sectionBody(markdown, "Stats");
  const pick = (label: string) =>
    statsBlock.match(new RegExp(`-\\s*${label}:\\s*(.+)`, "i"))?.[1]?.trim();

  return {
    slug,
    title,
    description,
    language,
    code,
    problemUrl,
    githubUrl: githubSolutionUrl(slug),
    stats: {
      success: pick("Success")?.toLowerCase() === "true",
      testCases: pick("Test Cases"),
      time: pick("Time"),
      memory: pick("Memory"),
    },
  };
}
