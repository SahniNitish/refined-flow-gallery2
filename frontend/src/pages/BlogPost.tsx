import { useEffect, type ComponentType } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import GraphifyArticle from "@/content/GraphifyArticle";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getPost } from "@/lib/posts";

const articles: Record<string, ComponentType> = {
  "how-graphify-gives-every-ai-agent-the-same-memory": GraphifyArticle,
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  const Article = slug ? articles[slug] : undefined;

  usePageMeta(
    post ? `${post.title} — Nitish Sahni` : undefined,
    post?.excerpt
  );

  useEffect(() => {
    if (!post) return;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: `https://www.sahninitish.codes${post.cover}`,
      author: {
        "@type": "Person",
        name: "Nitish Sahni",
        url: "https://www.sahninitish.codes",
      },
      url: `https://www.sahninitish.codes/blog/${post.slug}`,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-jsonld";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.getElementById("blog-jsonld")?.remove();
    };
  }, [post]);

  if (!post || !Article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="section-content max-w-2xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ease-expo mb-10 min-h-11"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All writing
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-xs text-muted-foreground">
            <time dateTime={post.date} className="mono-tag">
              {post.dateLabel}
            </time>
            <span aria-hidden>·</span>
            <span className="mono-tag">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold heading-font text-foreground leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {post.subtitle}
          </p>
        </header>
      </div>

      <figure className="section-content max-w-3xl mb-14">
        <img
          src={post.cover}
          alt={post.coverAlt}
          width={1400}
          height={692}
          className="w-full h-auto rounded-xl border border-white/[0.08]"
        />
        <figcaption className="mt-3 text-sm text-muted-foreground">
          A Graphify community map — related code clustered by color, with a
          labeled sidebar of detected communities.
        </figcaption>
      </figure>

      <div className="section-content max-w-2xl">
        <Article />
      </div>
    </article>
  );
};

export default BlogPost;
