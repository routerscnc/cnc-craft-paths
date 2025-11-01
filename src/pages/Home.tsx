import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-cnc.jpg";
import ayatulKursi from "@/assets/products/ayatul-kursi.jpg";
import asmaulHusna from "@/assets/products/asmaul-husna.jpg";
import bismillahGold from "@/assets/products/bismillah-gold.jpg";
import jaaliPanel from "@/assets/products/jaali-panel.jpg";
import customNameplate from "@/assets/products/custom-nameplate-darul.jpg";
import luxuryDoor from "@/assets/products/luxury-door.jpg";
import sportsTrophies from "@/assets/products/sports-trophies.jpg";
import wallShelf from "@/assets/products/wall-shelf.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Precision Cutting",
      description: "Laser-accurate cuts with tolerances down to 0.001 inches for flawless results",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Premium materials and craftsmanship ensuring lasting excellence",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality and detail",
    },
  ];

  const featuredProducts = [
    {
      image: ayatulKursi,
      title: "Ayatul Kursi Calligraphy",
      description: "Exquisite Islamic wall art with intricate Arabic calligraphy",
    },
    {
      image: asmaulHusna,
      title: "Asmaul Husna",
      description: "Beautiful 99 Names of Allah in premium carved design",
    },
    {
      image: bismillahGold,
      title: "Bismillah Gold Edition",
      description: "Elegant gold-finished Islamic calligraphy for modern interiors",
    },
    {
      image: jaaliPanel,
      title: "Decorative Jaali Panel",
      description: "Traditional lattice work for doors, windows and partitions",
    },
    {
      image: customNameplate,
      title: "Custom Name Plates",
      description: "Personalized wooden nameplates with elegant designs",
    },
    {
      image: luxuryDoor,
      title: "Luxury Wooden Doors",
      description: "Premium CNC-carved doors with intricate patterns",
    },
    {
      image: sportsTrophies,
      title: "Sports Trophies",
      description: "Custom engraved trophies and awards for special achievements",
    },
    {
      image: wallShelf,
      title: "Decorative Wall Shelves",
      description: "Functional art pieces combining storage with elegant design",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Precision CNC & Laser Cutting
              <br />
              <span className="text-accent">In Wood, Plywood & Acrylic</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Crafting excellence from traditional Islamic calligraphy to contemporary decorative panels and custom wooden designs
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="default">
              <Link to="/contact">
                Request Quote <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose ROUTERS</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the perfect blend of traditional craftsmanship and modern technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Featured Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of premium CNC-cut designs, from Islamic calligraphy to custom decorative pieces
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="default">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Ready to Bring Your Vision to Life?</h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                Get a free consultation and quote today. Let's create something extraordinary together.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary shadow-lg">
                  <Link to="/products">Browse Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
