import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(3, 200);
  
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science at Acadia University with consistent Dean's List recognition for academic excellence.",
      metric: "3.8+ GPA"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Top 10 ranking at CyberSci Hackathon in Atlantic Canada, showcasing cybersecurity expertise.",
      metric: "Top 10"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active CACHE Tutor helping fellow students master Python and Java programming.",
      metric: "50+ Students"
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef as any}
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            👨‍💻 Get to know me
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions at the intersection of 
            technology and user experience. Currently pursuing Computer Science 
            while gaining hands-on experience through impactful internships.
          </p>
        </div>
        
        {/* Highlights Grid */}
        <div ref={containerRef as any} className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className={`glass-card p-8 hover-lift border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl group cursor-hover transition-all duration-700 ${
                visibleItems.has(index) 
                  ? 'animate-reveal opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-18 h-18 bg-gradient-primary rounded-3xl flex items-center justify-center mb-6 group-hover:animate-glow shadow-lg">
                  <item.icon className="h-9 w-9 text-background" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="max-w-5xl mx-auto animate-slide-up">
          <Card className="glass-card p-10 md:p-16 border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a driven Computer Science student with a passion for building scalable, 
                  impactful applications. My journey spans from blockchain analytics and DeFi 
                  platforms to AI-powered tools and full-stack web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through my internships at <span className="text-primary font-medium">Hermetik Trading Technologies</span> and <span className="text-primary font-medium">RealMeta</span>, 
                  I've gained valuable experience in data engineering, API development, 
                  and cloud infrastructure while working with cutting-edge technologies 
                  in the blockchain and AI spaces.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to the academic 
                  community as a CACHE tutor, mentoring fellow students in programming 
                  fundamentals, or exploring the latest developments in web3 and artificial intelligence.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">What Drives Me</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                      <p className="text-sm text-muted-foreground">Building solutions that push the boundaries of what's possible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Learning</h4>
                      <p className="text-sm text-muted-foreground">Constantly exploring new technologies and methodologies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Impact</h4>
                      <p className="text-sm text-muted-foreground">Creating technology that makes a meaningful difference</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Community</h4>
                      <p className="text-sm text-muted-foreground">Sharing knowledge and helping others grow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;