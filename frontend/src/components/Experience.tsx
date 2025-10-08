import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Hermetik Trading Technologies Inc",
      location: "Halifax",
      period: "June 2025 – Sep 2025",
      type: "Blockchain Analytics",
      achievements: [
        "Designed and developed a private investor dashboard (Hermetik Wallet Insights) using DeBank API to track crypto wallet performance, token balances, and DeFi positions.",
        "Implemented backend APIs in Node.js to fetch and store wallet analytics into PostgreSQL using scheduled data pipelines.",
        "Collaborated with the founding team to define product features and user experience for investor reporting."
      ],
      technologies: ["Node.js", "PostgreSQL", "DeBank API", "DeFi", "Blockchain"]
    },
    {
      title: "Backend Engineer Intern",
      company: "RealMeta",
      location: "New Minas",
      period: "April 2025 – June 2025",
      type: "Backend Development",
      achievements: [
        "Designed and maintained scalable RESTful APIs using PHP and Laravel framework.",
        "Deployed and managed cloud infrastructure on AWS, ensuring high availability and performance.",
        "Developed an AI-powered camera application for a museum, enabling real-time artwork scanning and identification."
      ],
      technologies: ["PHP", "Laravel", "AWS", "REST APIs", "AI Integration"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience building scalable solutions in blockchain analytics, 
            cloud infrastructure, and AI-powered applications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 hover-lift animate-fade-up" 
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mt-4 md:mt-0">
                  {exp.type}
                </Badge>
              </div>
              
              <div className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;