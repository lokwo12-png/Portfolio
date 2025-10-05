import { Code2, Lightbulb, Rocket, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my priority.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding creative solutions.",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Always exploring new technologies and staying ahead of trends.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-primary/50 shadow-glow hover:shadow-accent-glow transition-all duration-300">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
                With expertise in modern web technologies, I transform ideas into reality through code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in development started several years ago, and since then, I've been continuously learning 
                and growing. I specialize in building responsive, user-friendly applications that make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 gap-2"
                asChild
              >
                <a href="/resume.pdf" download="Your-Name-Resume.pdf">
                  <Download className="w-5 h-5" />
                  Download My CV
                </a>
              </Button>
            </div>

            <div className="grid gap-6 animate-fade-in">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
