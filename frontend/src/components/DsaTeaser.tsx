import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useDsaProblems } from "@/hooks/useDsa";
import { formatSolvedDate } from "@/lib/dsa";

const DsaTeaser = () => {
  const ref = useSectionReveal<HTMLDivElement>();
  const { data, isLoading } = useDsaProblems();
  const solved = data?.problems.length ?? 0;
  const lastSolved = data?.lastSolved ?? null;

  return (
    <section id="dsa" className="section">
      <div ref={ref} className="section-content max-w-3xl">
        <div className="flex items-baseline justify-between gap-4 mb-16">
          <div className="flex items-baseline gap-3">
            <span className="section-index">06</span>
            <h2 className="text-3xl md:text-4xl font-semibold heading-font">DSA</h2>
          </div>
          <Link
            to="/dsa"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ease-expo"
          >
            All problems
          </Link>
        </div>

        <div className="surface p-6 md:p-8">
          <Link to="/dsa" className="group block">
            <p className="text-5xl font-semibold heading-font text-foreground tabular-nums mb-2">
              {isLoading ? "—" : solved}
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl group-hover:text-foreground/80 transition-colors">
              {solved === 1 ? "problem solved" : "problems solved"} on the Striver A2Z
              track. Updates when I push to GitHub.
            </p>
          </Link>

          {lastSolved && (
            <Link
              to={`/dsa/${lastSolved.slug}`}
              className="group mt-8 pt-6 border-t border-white/[0.08] flex items-start justify-between gap-4"
            >
              <div>
                <p className="mono-tag text-xs text-primary mb-2">Last solved</p>
                <p className="heading-font text-xl text-foreground group-hover:text-primary transition-colors duration-300 ease-expo mb-1">
                  {lastSolved.title}
                </p>
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
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default DsaTeaser;
