import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science at Acadia University with consistent Dean's List recognition for academic excellence."
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Top 10 ranking at CyberSci Hackathon in Atlantic Canada, showcasing cybersecurity expertise."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active CACHE Tutor helping fellow students master Python and Java programming."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions at the intersection of 
            technology and user experience. Currently pursuing Computer Science 
            while gaining hands-on experience through impactful internships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="glass-card p-8 hover-lift animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 animate-glow">
                  <item.icon className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Card className="glass-card p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a driven Computer Science student with a passion for building scalable, 
                impactful applications. My journey spans from blockchain analytics and DeFi 
                platforms to AI-powered tools and full-stack web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Through my internships at Hermetik Trading Technologies and RealMeta, 
                I've gained valuable experience in data engineering, API development, 
                and cloud infrastructure while working with cutting-edge technologies 
                in the blockchain and AI spaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to the academic 
                community as a CACHE tutor, mentoring fellow students in programming 
                fundamentals, or exploring the latest developments in web3 and artificial intelligence.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;