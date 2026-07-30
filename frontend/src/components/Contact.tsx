const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-content max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 heading-font">Contact</h2>

        <div className="space-y-3 text-lg">
          <p>
            <a
              href="mailto:Nitishsahni884@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              Nitishsahni884@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/SahniNitish"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/SahniNitish"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-muted-foreground">Nova Scotia, Canada</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
