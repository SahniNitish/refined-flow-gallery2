import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(782) 882-3291",
      action: () => window.open('tel:+17828823291')
    },
    {
      icon: Mail,
      label: "Email",
      value: "Nitishsahni884@gmail.com",
      action: () => window.open('mailto:Nitishsahni884@gmail.com')
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Wolfville, NS",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sahniNitish",
      username: "sahniNitish"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/SahniNitish",
      username: "SahniNitish"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to new opportunities, collaborations, and interesting conversations 
            about technology and innovation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="glass-card p-8 animate-fade-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                      item.action ? 'hover:bg-muted/20 cursor-pointer' : ''
                    }`}
                    onClick={item.action || undefined}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Social Links</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <social.icon className="h-4 w-4 mr-2" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* Call to Action */}
            <Card className="glass-card p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Work Together</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for a passionate developer for your team, 
                want to collaborate on an exciting project, or just want to chat 
                about the latest in tech – I'd love to hear from you!
              </p>
              
              <div className="space-y-4 mb-8">
                <Badge variant="outline" className="border-green-500/30 text-green-400">
                  Available for Opportunities
                </Badge>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Full-Stack Development</Badge>
                  <Badge variant="secondary">AI/ML Projects</Badge>
                  <Badge variant="secondary">Blockchain</Badge>
                  <Badge variant="secondary">Consulting</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow"
                  onClick={() => window.open('mailto:Nitishsahni884@gmail.com?subject=Let\'s Connect&body=Hi Nitish, I\'d like to connect with you about...')}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  onClick={() => {
                    // In a real implementation, you'd have the resume file
                    window.open('mailto:Nitishsahni884@gmail.com?subject=Resume Request', '_blank');
                  }}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Request Resume
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Status Card */}
          <Card className="glass-card p-6 text-center animate-slide-up">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-muted-foreground">Currently seeking Summer 2026 internship opportunities</p>
            </div>
            <p className="text-sm text-muted-foreground/80">
              Expected graduation: September 2026 • Open to remote and on-site positions
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;