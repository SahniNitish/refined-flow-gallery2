import { useSectionReveal } from "@/hooks/useSectionReveal";

const Contact = () => {
  const ref = useSectionReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section">
      <div ref={ref} className="section-content max-w-3xl">
        <div className="flex items-baseline gap-3 mb-10">
          <span className="section-index">06</span>
          <h2 className="text-3xl md:text-4xl font-semibold heading-font">Contact</h2>
        </div>

        <div className="space-y-8">
          <a
            href="mailto:Nitishsahni884@gmail.com"
            className="glow-hover inline-block text-3xl md:text-5xl font-medium heading-font text-foreground hover:text-primary transition-colors duration-300 ease-expo"
          >
            Nitishsahni884@gmail.com
          </a>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
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
            <span>Nova Scotia, Canada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
