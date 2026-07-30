import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const NAME = "Nitish Sahni";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const chars = nameRef.current?.querySelectorAll(".char");
        if (!chars?.length) return;

        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(chars, {
            opacity: 0,
            y: 20,
            rotateX: -40,
            stagger: 0.015,
            duration: 0.8,
          })
          .from(
            ".hero-fade",
            { opacity: 0, y: 16, stagger: 0.1, duration: 0.6 },
            "-=0.4"
          );
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="section-content max-w-3xl">
        <div className="hero-fade flex items-center gap-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <p className="text-xl md:text-2xl text-foreground heading-font">
            Technical Systems Analyst @ Irving Personal Care
          </p>
        </div>

        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl font-semibold mb-6 heading-font text-foreground [perspective:600px]"
        >
          {NAME.split("").map((ch, i) => (
            <span
              key={i}
              className="char inline-block"
              style={ch === " " ? { whiteSpace: "pre" } : undefined}
            >
              {ch}
            </span>
          ))}
        </h1>

        <p className="hero-fade text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
          I build production monitoring systems, data pipelines, and full-stack apps.
        </p>

        <div className="hero-fade flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
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
