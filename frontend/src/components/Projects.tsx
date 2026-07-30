import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref: projectsRef, isVisible } = useScrollAnimation();

  return (
    <section id="work" ref={projectsRef as any} className="section">
      <div className="section-content max-w-3xl">
        <h2
          className={`text-3xl md:text-4xl font-semibold mb-16 heading-font transition-all duration-700 ${
            isVisible ? "animate-fade-up" : "opacity-0 translate-y-4"
          }`}
        >
          Selected Work
        </h2>

        <div className="divide-y divide-border">
          {projects.map((project) => (
            <div key={project.title} className="py-8 first:pt-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-xl font-medium text-foreground heading-font">
                  {project.title}
                </h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground shrink-0 mt-1">
                    {project.label}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>

              <p className="mono-tag text-xs text-muted-foreground">
                {project.tags.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
