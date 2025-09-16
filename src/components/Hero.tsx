import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onInternshipClick: () => void;
}

const Hero = ({ onInternshipClick }: HeroProps) => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center py-20 lg:py-32">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Leading Digital Innovation
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-4xl">
            Building{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Futures
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Transforming ideas into powerful digital solutions with cutting-edge
            technology and innovative design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              onClick={onInternshipClick}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-medium shadow-primary px-8 py-4 text-lg"
            >
              Apply for Internship
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">25+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;