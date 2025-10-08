import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
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
        count={80} 
        color="#3b82f6" 
        speed={0.3} 
        size={3} 
        opacity={0.6}
        className="opacity-30"
      />

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
        
        {/* New Dynamic Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-primary opacity-20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 font-mono text-sm animate-float">{'<code/>'}</div>
        <div className="absolute top-40 right-20 text-accent/20 font-mono text-sm animate-float-delayed">{'{ }'}</div>
        <div className="absolute bottom-40 left-20 text-primary/20 font-mono text-sm animate-float">{'</>'}</div>
        <div className="absolute bottom-20 right-10 text-accent/20 font-mono text-sm animate-float-delayed">{'[]'}</div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
              👨‍💻 Welcome to Nitish's portfolio
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-8 tracking-wide leading-none">
            <span className="name-font glitch-text inline-block animate-pulse" data-text="Nitish Sahni" style={{ animationDuration: '4s' }}>
              Nitish Sahni
            </span>
          </h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl font-semibold text-foreground animate-fade-in delay-300">
              Full-Stack Developer & AI Enthusiast
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
              Computer Science student at <span className="text-primary font-medium">Acadia University</span> crafting innovative solutions 
              in blockchain analytics, AI applications, and modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow px-10 py-6 text-lg font-semibold rounded-xl cursor-hover group relative overflow-hidden"
              onClick={() => scrollToSection('projects')}
            >
              <span className="relative z-10">View My Work</span>
              <ArrowDown className="ml-3 h-5 w-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="hover-lift border-primary/30 hover:border-primary/50 hover:bg-primary/10 rounded-xl px-6 py-6"
                onClick={() => window.open('https://github.com/sahniNitish', '_blank')}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift border-primary/30 hover:border-primary/50 hover:bg-primary/10 rounded-xl px-6 py-6"
                onClick={() => window.open('https://linkedin.com/in/SahniNitish', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift border-primary/30 hover:border-primary/50 hover:bg-primary/10 rounded-xl px-6 py-6"
                onClick={() => window.open('mailto:Nitishsahni884@gmail.com')}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;