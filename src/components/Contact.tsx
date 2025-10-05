import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com", color: "hover:text-accent" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">Let's work together on your next project</p>
          </div>

          <Card className="p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary shadow-glow mb-4">
                <Mail className="w-10 h-10 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of the platforms below.
              </p>

              <div className="flex justify-center gap-6 pt-6">
                {socials.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`border-border hover:border-primary/50 transition-all duration-300 ${social.color}`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href="mailto:your.email@example.com">
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
