import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Layers, Ruler, Settings, FileText, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "CNC / Jali / Laser Cutting",
      description: "High-precision cutting for wood, acrylic, and composite materials with tolerances up to 0.1mm",
      capabilities: [
        "Wood, Plywood, Multiwood",
        "Acrylic & PVC materials",
        "Complex geometric patterns",
        "Fast turnaround time"
      ]
    },
    {
      icon: Layers,
      title: "Wooden Engraving",
      description: "Detailed engraving on wood, plywood and multiwood for branding and personalization",
      capabilities: [
        "Logo engraving on wood",
        "Calligraphy artwork",
        "Decorative patterns",
        "Text personalization"
      ]
    },
    {
      icon: Ruler,
      title: "Interior Jali Works",
      description: "Traditional and modern jali designs for partitions, screens and decorative elements",
      capabilities: [
        "Room partition panels",
        "Geometric patterns",
        "Islamic designs",
        "Custom jali screens"
      ]
    },
    {
      icon: Package,
      title: "Custom Design & Engraving",
      description: "Personalized designs for signage, awards, nameplates and decorative pieces",
      capabilities: [
        "Custom wooden nameplates",
        "Trophies and mementos",
        "Interior jali panels",
        "Personalized wooden gifts"
      ]
    },
    {
      icon: Settings,
      title: "Architectural Elements",
      description: "Custom wooden doors, panels and architectural components for homes and offices",
      capabilities: [
        "Luxury wooden doors",
        "Wall panels & screens",
        "Designer shelving units",
        "Custom furniture pieces"
      ]
    },
    {
      icon: FileText,
      title: "Islamic Calligraphy Art",
      description: "Exquisite Islamic calligraphy pieces including Ayatul Kursi, Asmaul Husna, and custom designs",
      capabilities: [
        "Ayatul Kursi artwork",
        "99 Names of Allah",
        "Bismillah calligraphy",
        "Custom Islamic art"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Precision CNC / Jali / Laser Cutting Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in CNC routing, jali pattern work, and laser precision for wood, plywood, multiwood, and acrylic - from intricate Islamic art to modern architectural elements
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
