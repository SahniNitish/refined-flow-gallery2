import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={aboutRef as any} className="section">
      <div
        className={`section-content max-w-3xl transition-all duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 heading-font">About</h2>

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
