import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Cog, Zap, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Islamic Calligraphy Art",
      description: "Exquisite laser-cut Islamic calligraphy and religious artwork in premium metal finishes. Custom designs available.",
      capabilities: ["Ayatul Kursi designs", "99 Names of Allah", "Custom Arabic text", "Gold & silver finishes"],
    },
    {
      icon: Cog,
      title: "Decorative Metal Panels",
      description: "Architectural laser-cut screens and partitions with intricate geometric patterns for modern interiors.",
      capabilities: ["Islamic geometric patterns", "Custom partition designs", "Various metal options", "Indoor & outdoor use"],
    },
    {
      icon: Scissors,
      title: "Custom Name Plates",
      description: "Personalized metal nameplates with premium finishes. Perfect for homes, offices, and special occasions.",
      capabilities: ["Brass inlay on wood", "Acrylic combinations", "Custom fonts & designs", "Small to large sizes"],
    },
    {
      icon: Settings,
      title: "Architectural Elements",
      description: "Designer furniture pieces and architectural elements including shelves, brackets, and decorative items.",
      capabilities: ["Wall-mounted shelves", "Custom brackets", "Signage solutions", "Furniture accents"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Precision Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intricate Islamic art to modern architectural elements, we bring your vision to life with precision
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
