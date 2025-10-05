import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 inline-block animate-slide-in">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer & Creative Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Building beautiful, functional web experiences with modern technologies. 
            Passionate about clean code and user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 gap-2"
              asChild
            >
              <a href="/resume.pdf" download="Your-Name-Resume.pdf">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border hover:bg-secondary/50"
            >
              Get In Touch
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
