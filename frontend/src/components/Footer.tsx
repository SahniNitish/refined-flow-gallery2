import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/5 border-t border-border/50 relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold hero-text">Nitish Sahni</h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science student passionate about building innovative solutions 
              in AI, blockchain, and full-stack development.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary rounded-xl"
                onClick={() => window.open('https://github.com/sahniNitish', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary rounded-xl"
                onClick={() => window.open('https://linkedin.com/in/SahniNitish', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary rounded-xl"
                onClick={() => window.open('mailto:Nitishsahni884@gmail.com')}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 Nitishsahni884@gmail.com</p>
              <p>📱 (782) 882-3291</p>
              <p>📍 Wolfville, NS</p>
              <p className="text-sm pt-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for Summer 2026 opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 md:mb-0">
            <span>© {currentYear} Nitish Sahni. Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:text-primary rounded-xl"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;