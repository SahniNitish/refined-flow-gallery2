import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, Code2, Lightbulb, Heart } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(3, 200);
  
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science at Acadia University with consistent Dean's List recognition for academic excellence.",
      metric: "3.8+ GPA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Top 10 ranking at CyberSci Hackathon in Atlantic Canada, showcasing cybersecurity expertise.",
      metric: "Top 10",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active CACHE Tutor helping fellow students master Python and Java programming.",
      metric: "50+ Students",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const values = [
    {
      icon: Code2,
      title: "Innovation",
      description: "Building solutions that push the boundaries of what's possible"
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description: "Constantly exploring new technologies and methodologies"
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Creating technology that makes a meaningful difference"
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef as any}
      className="section-modern bg-background relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="section-content">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
            👨‍💻 Get to know me
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 display-font">
            About <span className="text-gradient">Me</span>
          </h2>
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
              className={`modern-card p-8 cursor-hover group transition-all duration-700 ${
                visibleItems.has(index) 
                  ? 'animate-reveal opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-3 display-font">{item.metric}</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground heading-font">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <Card className="modern-card p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-foreground mb-8 heading-font">My Journey</h3>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I'm a driven Computer Science student with a passion for building scalable, 
                    impactful applications. My journey spans from blockchain analytics and DeFi 
                    platforms to AI-powered tools and full-stack web applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Through my internships at <span className="text-primary font-semibold">Hermetik Trading Technologies</span> and <span className="text-primary font-semibold">RealMeta</span>, 
                    I've gained valuable experience in data engineering, API development, 
                    and cloud infrastructure while working with cutting-edge technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    When I'm not coding, you'll find me contributing to the academic 
                    community as a CACHE tutor, mentoring fellow students in programming 
                    fundamentals.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-foreground mb-8 heading-font">What Drives Me</h3>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/20 transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
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