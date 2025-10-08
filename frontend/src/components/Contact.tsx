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
      action: () => window.open('tel:+17828823291'),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Nitishsahni884@gmail.com",
      action: () => window.open('mailto:Nitishsahni884@gmail.com'),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Wolfville, NS",
      action: null,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sahniNitish",
      username: "sahniNitish",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/SahniNitish",
      username: "SahniNitish",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            📬 Get in touch
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 hero-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Open to new opportunities, collaborations, and interesting conversations 
            about technology and innovation. Let's build something amazing together!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className={`glass-card p-8 hover-lift animate-fade-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl group ${
                  item.action ? 'cursor-pointer' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={item.action || undefined}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow shadow-lg`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Main CTA */}
            <Card className="glass-card p-10 animate-fade-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 animate-glow">
                <Send className="h-7 w-7 text-background" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a passionate developer for your team, 
                want to collaborate on an exciting project, or just want to chat 
                about the latest in tech – I'd love to hear from you!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
                    Available for Opportunities
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Interested in:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20">Full-Stack Development</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20">AI/ML Projects</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20">Blockchain</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20">Consulting</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow rounded-xl py-6 text-lg font-semibold"
                  onClick={() => window.open('mailto:Nitishsahni884@gmail.com?subject=Let\'s Connect&body=Hi Nitish, I\'d like to connect with you about...')}
                >
                  <Send className="h-5 w-5 mr-3" />
                  Send Message
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 rounded-xl py-6"
                  onClick={() => {
                    window.open('mailto:Nitishsahni884@gmail.com?subject=Resume Request', '_blank');
                  }}
                >
                  <Download className="h-5 w-5 mr-3" />
                  Request Resume
                </Button>
              </div>
            </Card>
            
            {/* Social & Status */}
            <div className="space-y-8">
              {/* Social Links */}
              <Card className="glass-card p-8 animate-fade-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-bold text-foreground mb-6">Connect Online</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                          <social.icon className={`h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm text-muted-foreground">@{social.username}</p>
                        </div>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        →
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Status */}
              <Card className="glass-card p-8 animate-slide-up border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-glow">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Current Status</h4>
                  <p className="text-muted-foreground mb-4">
                    Seeking Summer 2026 internship opportunities
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground/80">
                    <p>📅 Expected graduation: September 2026</p>
                    <p>🌍 Open to remote and on-site positions</p>
                    <p>🚀 Ready to make an impact</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;