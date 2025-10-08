import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Code2, Workflow } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref: projectsRef, isVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(3, 300);
  
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
      live: "https://codesynth-demo.com",
      gradient: "from-blue-500 to-purple-600",
      status: "In Development"
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
      live: "https://research-summarizer.streamlit.app",
      gradient: "from-green-500 to-teal-600",
      status: "Live"
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
      live: "https://taskflow-demo.com",
      gradient: "from-orange-500 to-red-600",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-muted/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            💼 My Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative applications spanning AI, blockchain, and full-stack development, 
            each solving real-world problems with modern technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift group animate-fade-up overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center group-hover:animate-glow shadow-lg`}>
                    <project.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="border-primary/20 text-primary/80 hover:bg-primary/10 text-xs px-2 py-1 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="border-muted-foreground/20 text-muted-foreground text-xs px-2 py-1">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 rounded-xl"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:scale-105 transition-all duration-300 rounded-xl shadow-lg"
                    onClick={() => window.open(project.live || project.github, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {project.live ? 'Live Demo' : 'View'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 rounded-xl px-8"
            onClick={() => window.open('https://github.com/sahniNitish', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;