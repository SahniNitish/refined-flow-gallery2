import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Particles from "@/components/ui/particles";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={heroRef as any}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-16"
    >
      {/* Interactive Particles */}
      <Particles 
        count={60} 
        color="#ff8c00" 
        speed={0.2} 
        size={2} 
        opacity={0.4}
        className="opacity-30"
      />

      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-glow"></div>
      </div>
      
      <div className="section-content text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8 animate-fade-in">
              👋 Welcome to my digital space
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 tracking-tight leading-none display-font">
            <span className="block text-foreground mb-4">Nitish</span>
            <span className="block text-gradient animate-glow">Sahni</span>
          </h1>
          
          <div className="space-y-6 mb-12 max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl font-semibold text-foreground animate-fade-in delay-300 heading-font">
              Full-Stack Developer & 
              <span className="text-primary"> AI Enthusiast</span>
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in delay-500">
              Computer Science student at <span className="text-primary font-medium">Acadia University</span> crafting innovative solutions 
              in blockchain analytics, AI applications, and modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-700">
            <Button 
              className="btn-primary group relative overflow-hidden cursor-hover text-lg"
              onClick={() => scrollToSection('projects')}
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            
            <Button
              variant="outline"
              className="btn-secondary cursor-hover group"
              onClick={() => scrollToSection('contact')}
            >
              <span className="flex items-center">
                Let's Connect
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-12 animate-fade-in delay-1000">
            <Button
              variant="ghost"
              size="lg"
              className="w-14 h-14 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 cursor-hover group transition-all duration-300"
              onClick={() => window.open('https://github.com/sahniNitish', '_blank')}
            >
              <Github className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-14 h-14 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 cursor-hover group transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/SahniNitish', '_blank')}
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-14 h-14 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 cursor-hover group transition-all duration-300"
              onClick={() => window.open('mailto:Nitishsahni884@gmail.com')}
            >
              <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;