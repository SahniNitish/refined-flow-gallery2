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
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-content max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 heading-font">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-4 heading-font">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="mono-tag text-xs px-3 py-1 border border-border rounded-full text-foreground"
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
