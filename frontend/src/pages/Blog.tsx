import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { posts } from "@/lib/posts";

const Blog = () => {
  const ref = useSectionReveal<HTMLDivElement>();
  usePageMeta(
    "Blog — Nitish Sahni",
    "Notes on systems, AI tooling, and building things that last."
  );

  return (
    <section className="pt-28 pb-24 md:pt-32 md:pb-32">
      <div ref={ref} className="section-content max-w-3xl">
        <div className="flex items-baseline gap-3 mb-6">
          <span className="section-index">Blog</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold heading-font text-foreground mb-4">
          Writing
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-16">
          Notes on systems, AI tooling, and building things that last.
        </p>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="surface surface-hover group block p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs text-muted-foreground">
                <time dateTime={post.date} className="mono-tag">
                  {post.dateLabel}
                </time>
                <span aria-hidden>·</span>
                <span className="mono-tag">{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-medium heading-font text-foreground group-hover:text-primary transition-colors duration-300 ease-expo mb-3">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-5">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-tag text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
