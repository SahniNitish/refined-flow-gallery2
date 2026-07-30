const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08]">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span>© {currentYear} Nitish Sahni</span>
          <span>·</span>
          <a
            href="https://github.com/SahniNitish"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors duration-300 ease-expo"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/SahniNitish"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors duration-300 ease-expo"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="mailto:Nitishsahni884@gmail.com"
            className="hover:text-primary transition-colors duration-300 ease-expo"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
