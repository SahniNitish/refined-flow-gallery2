import { useSectionReveal } from "@/hooks/useSectionReveal";

const About = () => {
  const ref = useSectionReveal<HTMLDivElement>();

  return (
    <section id="about" className="section">
      <div ref={ref} className="section-content max-w-3xl">
        <div className="flex items-baseline gap-3 mb-10">
          <span className="section-index">04</span>
          <h2 className="text-3xl md:text-4xl font-semibold heading-font">About</h2>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-2xl">
          <p>
            I studied Computer Science at Acadia University and now work as a Technical
            Systems Analyst at Irving Personal Care, where I build the software that keeps
            production running — monitoring dashboards, data pipelines, and internal tools.
          </p>
          <p>
            I'm drawn to production systems, data, and where AI can make them smarter —
            turning raw sensor and process data into something people can actually act on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
