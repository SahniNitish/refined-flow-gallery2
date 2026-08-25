import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { posts } from "@/lib/posts";

const Writing = () => {
  const ref = useSectionReveal<HTMLDivElement>();
  const latest = posts[0];

  if (!latest) return null;

  return (
    <section id="writing" className="section">
      <div ref={ref} className="section-content max-w-3xl">
        <div className="flex items-baseline justify-between gap-4 mb-16">
          <div className="flex items-baseline gap-3">
            <span className="section-index">05</span>
            <h2 className="text-3xl md:text-4xl font-semibold heading-font">Writing</h2>
          </div>
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ease-expo"
          >
            All posts
          </Link>
        </div>

        <Link
          to={`/blog/${latest.slug}`}
          className="surface surface-hover group block p-6 md:p-8"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <time dateTime={latest.date} className="mono-tag">
                {latest.dateLabel}
              </time>
              <span aria-hidden>·</span>
              <span className="mono-tag">{latest.readTime}</span>
            </div>
            <ArrowUpRight
              className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
              aria-hidden
            />
          </div>
          <h3 className="text-xl font-medium text-foreground heading-font mb-3 group-hover:text-primary transition-colors duration-300 ease-expo">
            {latest.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {latest.excerpt}
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Writing;
