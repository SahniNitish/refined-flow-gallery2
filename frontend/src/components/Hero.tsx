import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="hero"
      ref={heroRef as any}
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div
        className={`section-content max-w-3xl transition-all duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 heading-font text-foreground">
          Nitish Sahni
        </h1>

        <p className="text-xl md:text-2xl text-foreground mb-4 heading-font">
          Technical Systems Analyst @ Irving Personal Care
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
          I build production monitoring systems, data pipelines, and full-stack apps.
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <a
            href="https://github.com/SahniNitish"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/SahniNitish"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="mailto:Nitishsahni884@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
          <span>·</span>
          <span>Nova Scotia, Canada</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
