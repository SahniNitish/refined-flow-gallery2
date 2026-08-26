import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useDsaProblems } from "@/hooks/useDsa";
import { usePageMeta } from "@/hooks/usePageMeta";
import { DSA_REPO_URL, formatSolvedDate } from "@/lib/dsa";

const Dsa = () => {
  const { data, isLoading, isError } = useDsaProblems();
  const [query, setQuery] = useState("");
  const problems = data?.problems ?? [];
  const lastSolved = data?.lastSolved ?? null;

  usePageMeta(
    "DSA — Nitish Sahni",
    "Striver A2Z DSA solutions, synced from GitHub on every accepted submission."
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return problems;
    return problems.filter(
      (problem) =>
        problem.title.toLowerCase().includes(needle) ||
        problem.slug.toLowerCase().includes(needle)
    );
  }, [problems, query]);

  const solved = problems.length;

  return (
    <section className="pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="section-content max-w-3xl">
        <div className="flex items-baseline gap-3 mb-6">
          <span className="section-index">DSA</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold heading-font text-foreground mb-4">
          Problems
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
          Striver A2Z track on TUF+. Each accepted solution is auto-pushed to{" "}
          <a
            href={DSA_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline underline-offset-4"
          >
            GitHub
          </a>
          , and this list updates from there.
        </p>

        <div className="flex items-end gap-4 mb-10">
          <span className="text-5xl md:text-6xl font-semibold heading-font text-foreground tabular-nums">
            {isLoading ? "—" : solved}
          </span>
          <span className="text-muted-foreground pb-1.5">
            {solved === 1 ? "problem solved" : "problems solved"}
          </span>
        </div>

        {lastSolved && (
          <Link
            to={`/dsa/${lastSolved.slug}`}
            className="surface surface-hover group block p-6 md:p-8 mb-10"
          >
            <p className="mono-tag text-xs text-primary mb-3">Last solved</p>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-medium heading-font text-foreground group-hover:text-primary transition-colors duration-300 ease-expo mb-2">
                  {lastSolved.title}
                </h2>
                {lastSolved.solvedAt && (
                  <p className="text-sm text-muted-foreground">
                    {formatSolvedDate(lastSolved.solvedAt)}
                  </p>
                )}
              </div>
              <ArrowUpRight
                className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                aria-hidden
              />
            </div>
          </Link>
        )}

        <label className="sr-only" htmlFor="dsa-filter">
          Filter problems
        </label>
        <input
          id="dsa-filter"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter problems"
          className="w-full mb-8 bg-transparent border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/[0.2]"
        />

        {isError && (
          <p className="text-muted-foreground mb-8">
            Could not load solutions from GitHub right now.{" "}
            <a
              href={DSA_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline underline-offset-4"
            >
              Open the repo
            </a>
            .
          </p>
        )}

        {isLoading && (
          <div className="space-y-3" aria-hidden>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-14 rounded-xl bg-white/[0.03] border border-white/[0.06]" />
            ))}
          </div>
        )}

        {!isLoading && !isError && filtered.length === 0 && (
          <p className="text-muted-foreground">No problems match that filter.</p>
        )}

        {!isLoading && filtered.length > 0 && (
          <ul className="border-t border-white/[0.08]">
            {filtered.map((problem, index) => (
              <li key={problem.slug} className="border-b border-white/[0.08]">
                <Link
                  to={`/dsa/${problem.slug}`}
                  className="group flex items-center gap-4 py-4 min-h-11"
                >
                  <span className="mono-tag text-xs text-muted-foreground w-8 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block heading-font text-lg text-foreground group-hover:text-primary transition-colors duration-300 ease-expo">
                      {problem.title}
                    </span>
                    {problem.solvedAt && (
                      <time
                        dateTime={problem.solvedAt}
                        className="mono-tag text-xs text-muted-foreground sm:hidden"
                      >
                        {formatSolvedDate(problem.solvedAt)}
                      </time>
                    )}
                  </span>
                  {problem.solvedAt && (
                    <time
                      dateTime={problem.solvedAt}
                      className="mono-tag text-xs text-muted-foreground shrink-0 hidden sm:block"
                    >
                      {formatSolvedDate(problem.solvedAt)}
                    </time>
                  )}
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Dsa;
