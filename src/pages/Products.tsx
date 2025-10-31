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
import jaaliPanel from "@/assets/products/jaali-panel.jpg";
import sportsTrophies from "@/assets/products/sports-trophies.jpg";
import bismillahCalligraphy from "@/assets/products/bismillah-calligraphy.jpg";
import luxuryDoor from "@/assets/products/luxury-door.jpg";
import customNameplateDarul from "@/assets/products/custom-nameplate-darul.jpg";
import nameplateMeghmalhar from "@/assets/products/nameplate-meghmalhar.jpg";
import bismillahGold from "@/assets/products/bismillah-gold.jpg";

const Products = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products = [
    {
      title: "Islamic Jaali Partition Panel",
      category: "Interior Jaali",
      description: "Exquisite geometric pattern partition panel for elegant interior spaces",
      image: jaaliPanel,
      featured: true,
      materials: "Wood, MDF, Plywood"
    },
    {
      title: "Ayatul Kursi Wall Artwork",
      category: "Islamic Calligraphy",
      description: "Premium wooden Ayatul Kursi with gold acrylic inlay finish",
      image: ayatulKursi,
      featured: true,
      materials: "Wood, Acrylic"
    },
    {
      title: "Asmaul Husna - 99 Names of Allah",
      category: "Wall Calligraphy",
      description: "Complete 99 Names displayed in honeycomb hexagonal pattern",
      image: asmaulHusna,
      featured: true,
      materials: "PVC, Acrylic"
    },
    {
      title: "Premium Sports Trophies",
      category: "Custom Awards",
      description: "Elegant laser-cut acrylic trophies for sports achievements",
      image: sportsTrophies,
      featured: false,
      materials: "Acrylic, Wood Base"
    },
    {
      title: "Bismillah Calligraphy Art",
      category: "Islamic Wall Art",
      description: "Beautiful Bismillah calligraphy with gold finish on premium wood",
      image: bismillahCalligraphy,
      featured: false,
      materials: "Wood, Gold Acrylic"
    },
    {
      title: "Luxury Carved Wooden Door",
      category: "Architectural",
      description: "Intricately carved luxury door with traditional craftsmanship",
      image: luxuryDoor,
      featured: false,
      materials: "Premium Wood"
    },
    {
      title: "Custom Wooden Nameplate - Darul Hamd",
      category: "Personalized Signs",
      description: "Handcrafted wooden nameplate with engraved brass lettering",
      image: customNameplateDarul,
      featured: false,
      materials: "Wood, Brass Inlay"
    },
    {
      title: "Elegant Name Sign - Meghmalhar",
      category: "Custom Nameplates",
      description: "Premium wooden nameplate with decorative brass inlay elements",
      image: nameplateMeghmalhar,
      featured: false,
      materials: "Wood, Brass"
    },
    {
      title: "Bismillah Golden Calligraphy",
      category: "Islamic Decor",
      description: "Stunning gold-finished Bismillah wall art on dark backdrop",
      image: bismillahGold,
      featured: false,
      materials: "Wood, Gold Acrylic"
    },
    {
      title: "Islamic Calligraphy Collection",
      category: "Religious Art",
      description: "Hand-finished Islamic calligraphy pieces with premium craftsmanship",
      image: islamicCalligraphy,
      featured: false,
      materials: "Wood, Acrylic"
    },
    {
      title: "Geometric Decorative Panels",
      category: "Room Partitions",
      description: "Modern Islamic geometric patterns for elegant space division",
      image: decorativePanel,
      featured: false,
      materials: "MDF, Plywood, Multiwood"
    },
    {
      title: "Custom Brass Nameplate",
      category: "Personalized",
      description: "Elegant brass inlay nameplates on premium wood finish",
      image: customNameplate,
      featured: false,
      materials: "Wood, Brass"
    },
    {
      title: "Designer Wall Shelves",
      category: "Interior Furniture",
      description: "Modern geometric shelving units with clean contemporary lines",
      image: wallShelf,
      featured: false,
      materials: "Wood, MDF"
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
                  <div className="text-sm text-accent font-semibold mb-2 uppercase tracking-wide">{product.category}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  <div className="text-xs text-primary font-medium">Materials: {product.materials}</div>
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
                  <div className="text-sm text-accent font-semibold mb-2 uppercase tracking-wide">{product.category}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  <div className="text-xs text-primary font-medium">Materials: {product.materials}</div>
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
