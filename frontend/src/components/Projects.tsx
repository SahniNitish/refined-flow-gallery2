import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const projects = [
  {
    title: "Line-Heartbeat",
    description:
      "Real-time production monitoring for four manufacturing lines — live OEE (availability, performance, quality) computed from PI sensor data, JDE work orders, and downtime systems.",
    tags: [".NET 8", "Blazor Server", "PI Web API", "SQL Server", "SQLite"],
    link: null,
    label: "Internal · Irving Personal Care",
  },
  {
    title: "npm-guardian",
    description: "Multi-layer supply-chain security scanner for npm packages.",
    tags: ["Node.js", "Security"],
    link: "https://github.com/SahniNitish/npm-gaurdian",
    label: null,
  },
  {
    title: "LMAT",
    description:
      "Labour Market Analysis Tool built for Cornerstone Occupational Therapy — React + Express with Firebase auth, deployed on Vercel/Render.",
    tags: ["React", "Express", "Firebase"],
    link: null,
    label: "Client project",
  },
  {
    title: "RealMeta-Museum",
    description: "AI-powered museum experience built during my RealMeta internship.",
    tags: ["TypeScript", "AI"],
    link: "https://github.com/SahniNitish/RealMeta-Museum",
    label: null,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".project-card", {
          opacity: 0,
          y: 24,
          stagger: 0.08,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const { clientX, clientY } = e;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${clientX - rect.left}px`);
      card.style.setProperty("--y", `${clientY - rect.top}px`);
      rafRef.current = undefined;
    });
  };

  return (
    <section id="work" ref={sectionRef} className="section">
      <div className="section-content max-w-3xl">
        <div className="flex items-baseline gap-3 mb-16">
          <span className="section-index">01</span>
          <h2 className="text-3xl md:text-4xl font-semibold heading-font">Selected Work</h2>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              onMouseMove={handleMouseMove}
              className="project-card spotlight-card surface surface-hover group relative p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-baseline gap-3">
                  <span className="mono-tag text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-medium text-foreground heading-font">
                    {project.title}
                  </h3>
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative text-muted-foreground group-hover:text-primary transition-all duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                ) : (
                  <span className="relative text-xs text-muted-foreground shrink-0 mt-1">
                    {project.label}
                  </span>
                )}
              </div>

              <p className="relative text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>

              <div className="relative flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-tag text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
