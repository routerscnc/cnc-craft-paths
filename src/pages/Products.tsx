import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import islamicCalligraphy from "@/assets/products/islamic-calligraphy.jpg";
import decorativePanel from "@/assets/products/decorative-panel.jpg";
import ayatulKursi from "@/assets/products/ayatul-kursi.jpg";
import customNameplate from "@/assets/products/custom-nameplate.jpg";
import wallShelf from "@/assets/products/wall-shelf.jpg";
import asmaulHusna from "@/assets/products/asmaul-husna.jpg";

const Products = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = [
    {
      title: "Islamic Calligraphy Wall Art",
      category: "Religious Decor",
      description: "Exquisite laser-cut Islamic calligraphy in premium metal finish",
      image: islamicCalligraphy,
      featured: true,
    },
    {
      title: "Ayatul Kursi Artwork",
      category: "Islamic Art",
      description: "Beautiful Ayatul Kursi design with intricate details",
      image: ayatulKursi,
      featured: true,
    },
    {
      title: "Asmaul Husna - 99 Names",
      category: "Wall Calligraphy",
      description: "Complete 99 Names of Allah in honeycomb pattern design",
      image: asmaulHusna,
      featured: true,
    },
    {
      title: "Geometric Decorative Panels",
      category: "Architectural",
      description: "Modern Islamic geometric patterns for partitions and screens",
      image: decorativePanel,
      featured: false,
    },
    {
      title: "Custom Name Plates",
      category: "Personalized",
      description: "Elegant brass inlay nameplates on premium wood",
      image: customNameplate,
      featured: false,
    },
    {
      title: "Designer Wall Shelves",
      category: "Furniture",
      description: "Modern geometric shelving units with clean lines",
      image: wallShelf,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Premium Craftsmanship
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of precision-cut masterpieces, from Islamic art to modern architectural elements
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.featured).map((product, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-gradient-to-b from-card to-muted/30"
                onClick={() => setSelectedImage(product.image)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2 uppercase tracking-wide">{product.category}</div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h2 className="text-3xl font-bold mb-8">More Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => !p.featured).map((product, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:shadow-xl transition-all duration-500 group cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2 uppercase tracking-wide">{product.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-2xl p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent opacity-95" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Bring Your Design to Life
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Custom orders welcome. Share your design and we will create it with precision and excellence
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Product preview"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
