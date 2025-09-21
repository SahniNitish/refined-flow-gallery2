import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="hero-text">Nitish</span>
            <br />
            <span className="text-foreground">Sahni</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in delay-300">
            Full-Stack Developer & AI Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in delay-500">
            Computer Science student at Acadia University crafting innovative solutions 
            in blockchain analytics, AI applications, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow px-8 py-6 text-lg font-medium"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="hover-lift border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                onClick={() => window.open('https://github.com/sahniNitish', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                onClick={() => window.open('https://linkedin.com/in/SahniNitish', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                onClick={() => window.open('mailto:Nitishsahni884@gmail.com')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;