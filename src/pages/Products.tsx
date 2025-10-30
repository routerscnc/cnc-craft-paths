import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const products = [
    {
      title: "Custom Metal Brackets",
      category: "Precision Parts",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
    },
    {
      title: "Decorative Panels",
      category: "Architectural",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop",
    },
    {
      title: "Industrial Components",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop",
    },
    {
      title: "Signage & Letters",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&auto=format&fit=crop",
    },
    {
      title: "Custom Enclosures",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
    },
    {
      title: "Prototype Parts",
      category: "R&D",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing precision craftsmanship across diverse industries and applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Looking for Similar Work?</h2>
            <p className="text-muted-foreground mb-6">
              These examples represent just a fraction of our capabilities. Contact us to discuss your specific project needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
