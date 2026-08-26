import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useDsaProblems, useDsaSolution } from "@/hooks/useDsa";
import { usePageMeta } from "@/hooks/usePageMeta";
import { formatSolvedDate, humanizeSlug } from "@/lib/dsa";

const DsaProblem = () => {
  const { slug } = useParams();
  const { data, isLoading, isError, error } = useDsaSolution(slug);
  const { data: catalog } = useDsaProblems();
  const solvedAt = catalog?.problems.find((problem) => problem.slug === slug)?.solvedAt;
  const fallbackTitle = slug ? humanizeSlug(slug) : "Problem";
  const notFound = isError && error instanceof Error && error.message === "not-found";

  usePageMeta(
    data ? `${data.title} — DSA` : `${fallbackTitle} — DSA`,
    data?.description || "Striver A2Z DSA solution."
  );

  return (
    <article className="pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="section-content max-w-3xl">
        <Link
          to="/dsa"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ease-expo mb-10 min-h-11"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All problems
        </Link>

        {isLoading && (
          <div className="space-y-4" aria-hidden>
            <div className="h-4 w-40 bg-white/[0.05] rounded" />
            <div className="h-10 w-3/4 bg-white/[0.05] rounded" />
            <div className="h-40 bg-white/[0.03] border border-white/[0.06] rounded-xl" />
          </div>
        )}

        {(notFound || (!isLoading && isError && !data)) && (
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold heading-font text-foreground mb-4">
              Problem not found
            </h1>
            <p className="text-muted-foreground">
              That slug is not in the GitHub solutions repo yet.
            </p>
          </div>
        )}

        {data && (
          <>
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs text-muted-foreground">
                <span className="mono-tag">{data.slug}</span>
                {solvedAt && (
                  <>
                    <span aria-hidden>·</span>
                    <time dateTime={solvedAt} className="mono-tag">
                      Solved {formatSolvedDate(solvedAt)}
                    </time>
                  </>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold heading-font text-foreground leading-tight mb-6">
                {data.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {data.language && data.language !== "text" && (
                  <span className="mono-tag text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground">
                    {data.language}
                  </span>
                )}
                {data.stats.testCases && (
                  <span className="mono-tag text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground">
                    {data.stats.testCases} tests
                  </span>
                )}
                {data.stats.time && (
                  <span className="mono-tag text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground">
                    {data.stats.time}
                  </span>
                )}
                {data.stats.memory && (
                  <span className="mono-tag text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground">
                    {data.stats.memory}
                  </span>
                )}
              </div>
            </header>

            {data.description && (
              <section className="mb-10">
                <h2 className="heading-font text-xl font-medium text-foreground mb-3">
                  Problem
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
              </section>
            )}

            {data.code && (
              <section className="mb-10">
                <h2 className="heading-font text-xl font-medium text-foreground mb-3">
                  Solution
                </h2>
                <pre className="surface overflow-x-auto p-5 text-[13px] leading-relaxed text-foreground/90">
                  <code className="font-mono">{data.code}</code>
                </pre>
              </section>
            )}

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {data.problemUrl && (
                <a
                  href={data.problemUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-4"
                >
                  Open on TUF+
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              )}
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default DsaProblem;
