import { useSectionReveal } from "@/hooks/useSectionReveal";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C#", "Python", "TypeScript", "SQL", "Java"],
  },
  {
    title: "Frameworks",
    skills: [".NET / Blazor", "React", "Node.js", "Laravel"],
  },
  {
    title: "Data & Cloud",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "AWS", "Docker"],
  },
  {
    title: "Analytics & Low-code",
    skills: ["Power BI", "Power Apps", "SharePoint"],
  },
  {
    title: "AI & LLM Engineering",
    skills: [
      "RAG Pipelines",
      "AI Agents",
      "LLM APIs (Claude, OpenAI)",
      "Vector Databases",
      "Prompt Engineering",
      "Model Integration",
    ],
  },
];

const Skills = () => {
  const ref = useSectionReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section">
      <div ref={ref} className="section-content max-w-3xl">
        <div className="flex items-baseline gap-3 mb-16">
          <span className="section-index">03</span>
          <h2 className="text-3xl md:text-4xl font-semibold heading-font">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={group.title === "AI & LLM Engineering" ? "sm:col-span-2" : undefined}
            >
              <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-4 heading-font">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="mono-tag text-xs px-3 py-1 border border-border rounded-full text-foreground transition-colors duration-300 ease-expo hover:border-primary hover:text-primary"
                  >
                    {skill}
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

export default Skills;
