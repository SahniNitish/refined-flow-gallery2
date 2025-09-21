import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS", "C"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: ["React", "Next.js", "Vue.js", "Node.js", "Spring Boot", "Laravel", "PostgreSQL", "MongoDB"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["AWS", "Docker", "Azure", "Git", "REST APIs", "Microservices", "CI/CD"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Postman", "PowerBI", "Jira", "Slack", "Linux", "Streamlit", "Tailwind CSS"],
      color: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud infrastructure, 
            and emerging technologies in AI and blockchain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 hover-lift animate-fade-up" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center animate-glow`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="bg-muted/50 hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-slide-up">
          <Card className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Always exploring the latest in web development, AI/ML, blockchain technologies, 
              and cloud computing. Currently diving deeper into advanced React patterns, 
              microservices architecture, and DeFi protocols.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;