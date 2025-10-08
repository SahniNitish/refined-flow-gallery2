import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 75 },
        { name: "HTML5", level: 95 },
        { name: "CSS", level: 90 },
        { name: "C", level: 70 }
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "Node.js", level: 85 },
        { name: "Spring Boot", level: 70 },
        { name: "Laravel", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Azure", level: 70 },
        { name: "Git", level: 90 },
        { name: "REST APIs", level: 85 },
        { name: "Microservices", level: 75 },
        { name: "CI/CD", level: 70 }
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Postman", level: 85 },
        { name: "PowerBI", level: 70 },
        { name: "Jira", level: 80 },
        { name: "Linux", level: 75 },
        { name: "Streamlit", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Figma", level: 70 }
      ],
      color: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-muted/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            🛠️ Technical Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, cloud infrastructure, 
            and emerging technologies in AI and blockchain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 hover-lift animate-fade-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl group" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:animate-glow shadow-lg`}>
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.slice(0, 6).map((skill, i) => (
                  <div key={i} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 150 + i * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
                
                {category.skills.length > 6 && (
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(6).map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="border-primary/20 text-primary/80 hover:bg-primary/10 text-xs px-2 py-1 hover:scale-105 transition-all duration-300"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Learning & Growth Section */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Card className="glass-card p-10 border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-3xl flex items-center justify-center mb-6 mx-auto animate-glow">
                <Brain className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Always exploring the latest in web development, AI/ML, blockchain technologies, 
                and cloud computing to stay at the forefront of innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Currently Learning</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Advanced React Patterns</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Microservices Architecture</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Exploring</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">DeFi Protocols</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover:bg-primary/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Machine Learning</span>
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

export default Skills;