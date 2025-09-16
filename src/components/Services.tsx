import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Cog, ArrowRight } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies, optimized for performance and user experience.",
    features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern UI/UX"]
  }, {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "Cross-Platform", "User-Friendly", "Performance Optimized"]
  }, {
    icon: Cog,
    title: "Tech Solutions",
    description: "Custom digital solutions tailored to your business needs and technical requirements.",
    features: ["Custom Solutions", "API Integration", "Cloud Services", "Technical Consulting"]
  }];
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
                
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;