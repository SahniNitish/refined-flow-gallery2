const experiences = [
  {
    title: "Technical Systems Analyst",
    company: "Irving Personal Care (J.D. Irving)",
    period: "May 2026 – Present",
    achievements: [
      "Built Line-Heartbeat, a real-time production monitoring system for four manufacturing lines (.NET 8 Blazor, PI Web API, SQL Server)",
      "Migrated plant safety-audit workflows to Power Apps backed by SharePoint, used daily across departments",
      "Built Power BI compliance dashboards over SharePoint and SQL Server data",
    ],
    tags: ["C#", ".NET 8", "Blazor", "SQL Server", "Power Apps", "Power BI"],
  },
  {
    title: "Data Engineering Intern",
    company: "Hermetik Trading Technologies",
    period: "Jun 2025 – Sep 2025",
    achievements: [
      "Built a private investor dashboard tracking crypto wallet performance, token balances, and DeFi positions via the DeBank API",
      "Implemented Node.js backend APIs with scheduled pipelines to fetch and store wallet analytics in PostgreSQL",
      "Worked with the founding team to define product features and reporting for investors",
    ],
    tags: ["Node.js", "PostgreSQL", "DeFi APIs"],
  },
  {
    title: "Backend Engineer Intern",
    company: "RealMeta",
    period: "Apr 2025 – Jun 2025",
    achievements: [
      "Designed and maintained RESTful APIs in PHP and Laravel",
      "Deployed and managed cloud infrastructure on AWS",
      "Built an AI-powered camera application for a museum for real-time artwork scanning and identification",
    ],
    tags: ["PHP", "Laravel", "AWS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-content max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 heading-font">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.title + exp.company} className="border-l border-border pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                <h3 className="text-lg font-medium text-foreground heading-font">
                  {exp.title} <span className="text-muted-foreground font-normal">· {exp.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.achievements.map((item) => (
                  <li key={item} className="text-muted-foreground leading-relaxed text-sm">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mono-tag text-xs text-muted-foreground">{exp.tags.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
