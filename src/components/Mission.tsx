import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Zap } from "lucide-react";

const Mission = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At InnovaGrid, we're dedicated to transforming the digital landscape through innovative 
            solutions that empower businesses to reach their full potential.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver cutting-edge digital solutions that drive business growth and innovation. 
                We believe in creating technology that not only meets today's needs but anticipates 
                tomorrow's challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading force in digital transformation, enabling businesses worldwide 
                to thrive in an increasingly connected world through innovative technology solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Core Values
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-background shadow-md">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Client-Centric</h4>
              <p className="text-muted-foreground">
                We put our clients first, ensuring every solution is tailored to their unique needs and goals.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 rounded-xl bg-background shadow-md">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-muted-foreground">
                We embrace cutting-edge technologies and creative approaches to solve complex challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;