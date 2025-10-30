import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Cog, Zap, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Laser Cutting",
      description: "High-precision laser cutting for metals, plastics, and composites. Perfect for intricate designs and tight tolerances.",
      capabilities: ["Steel up to 1 inch", "Aluminum and stainless", "Acrylic and plastics", "Complex geometries"],
    },
    {
      icon: Cog,
      title: "CNC Milling",
      description: "Multi-axis CNC milling for complex parts and prototypes. From single pieces to production runs.",
      capabilities: ["3-axis and 5-axis milling", "Aluminum, steel, brass", "Prototyping services", "Production quantities"],
    },
    {
      icon: Scissors,
      title: "Plasma Cutting",
      description: "Heavy-duty plasma cutting for thick materials and large-format projects. Fast and economical.",
      capabilities: ["Steel up to 2 inches", "Large format sheets", "Quick turnaround", "Cost-effective solution"],
    },
    {
      icon: Settings,
      title: "Custom Fabrication",
      description: "End-to-end fabrication services including bending, welding, and finishing for complete solutions.",
      capabilities: ["Sheet metal bending", "TIG/MIG welding", "Powder coating", "Assembly services"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive CNC cutting and fabrication services to bring your designs to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Capabilities:</h4>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you choose the right cutting method for your project requirements and budget.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
