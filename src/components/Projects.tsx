import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Code2, Workflow } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CodeSynth – AI-Powered Web App Generator",
      description: "An innovative AI platform that generates responsive web applications from user commands, built with modern microservices architecture.",
      icon: Code2,
      technologies: ["TypeScript", "Node.js", "React", "API Integration", "Microservices"],
      features: [
        "AI-powered code generation from natural language",
        "Responsive web app creation with modern frameworks",
        "Containerized architecture for scalability",
        "Seamless API integration and authentication"
      ],
      github: "https://github.com/sahniNitish",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Research Paper Summarizer",
      description: "AI-powered tool that extracts key insights from research papers, streamlining the academic review process for researchers and students.",
      icon: Brain,
      technologies: ["Python", "Streamlit", "Cohere API", "NLP"],
      features: [
        "Advanced NLP for accurate content extraction",
        "Concise summaries of complex academic content",
        "Optimized performance for research productivity",
        "Interactive web interface for easy use"
      ],
      github: "https://github.com/sahniNitish",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Task Flow – Work-Flow Management App",
      description: "Full-stack task management application with seamless user experience and efficient database management.",
      icon: Workflow,
      technologies: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Tailwind CSS"],
      features: [
        "Complete CRUD operations for task management",
        "Server-side routing without page reloads",
        "Interactive Vue.js frontend",
        "Eloquent ORM for efficient data handling"
      ],
      github: "https://github.com/sahniNitish",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative applications spanning AI, blockchain, and full-stack development.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift group animate-fade-up overflow-hidden" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:animate-glow`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;