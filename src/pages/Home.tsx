import { Link } from "react-router-dom";
import { Check, Zap, Shield, Award, ArrowRight, MapPin, MessageSquare, Package, Settings, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LaserAnimation from "@/components/LaserAnimation";
import heroCNC from "@/assets/hero-cnc-clean.jpg";
import heroCNC2 from "@/assets/hero-cnc.jpg";
import heroCNC3 from "@/assets/hero-cnc-blue.jpg";
import geometricPanel from "@/assets/products/geometric-panel.jpg";
import illuminatedCabinet from "@/assets/products/illuminated-cabinet.jpg";
import carvedPanels from "@/assets/products/carved-wall-panels.jpg";
import poojaDoor from "@/assets/products/pooja-door.jpg";
import islamicClock from "@/assets/products/islamic-clock.jpg";
import jaliScreen from "@/assets/products/jaali-screen-large.jpg";
import whiteDivider from "@/assets/products/white-divider.jpg";
import carvedCabinet from "@/assets/products/carved-cabinet.jpg";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
const Home = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const heroImages = [heroCNC, heroCNC2, heroCNC3];
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    setCurrent(carouselApi.selectedScrollSnap());
    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);
  const features = [{
    icon: Zap,
    title: "Precision Cutting",
    description: "CNC routing, jali pattern work, and laser-accurate cuts for intricate designs"
  }, {
    icon: Shield,
    title: "Quality Materials",
    description: "Premium wood, plywood & acrylic for lasting excellence"
  }, {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Years of experience creating custom designs"
  }];
  const featuredProducts = [{
    image: geometricPanel,
    title: "Geometric Jali Panel",
    description: "Intricate laser-cut patterns perfect for modern interiors and partitions"
  }, {
    image: illuminatedCabinet,
    title: "Illuminated Cabinet",
    description: "Beautiful backlit Islamic pattern cabinet with LED integration"
  }, {
    image: carvedPanels,
    title: "Carved Wall Panels",
    description: "Ornate wooden wall art panels with traditional carved designs"
  }, {
    image: poojaDoor,
    title: "Pooja Room Door",
    description: "Custom glass door with Hindu religious symbols and intricate patterns"
  }, {
    image: islamicClock,
    title: "Islamic Wall Clock",
    description: "Crescent moon design wall clock with mosque silhouette"
  }, {
    image: jaliScreen,
    title: "Large Jali Screen",
    description: "Premium cream-colored jali panels for room dividers and décor"
  }, {
    image: whiteDivider,
    title: "White Room Divider",
    description: "Elegant white decorative panels for space separation"
  }, {
    image: carvedCabinet,
    title: "Luxury Carved Cabinet",
    description: "Ornate wooden cabinet with exquisite floral carved patterns"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        <Carousel setApi={setCarouselApi} opts={{
        align: "start",
        loop: true
      }} plugins={[Autoplay({
        delay: 4000
      })]} className="w-full h-full absolute inset-0">
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => <CarouselItem key={index} className="h-full">
                <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{
              backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.3), rgba(30, 41, 59, 0.3)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background opacity-20" />
                </div>
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full font-bold text-base mb-6 border border-primary/20">
                <span className="text-cyan-400">CNC</span>
                <span className="text-white mx-2">|</span>
                <span className="text-emerald-400">Jali</span>
                <span className="text-white mx-2">|</span>
                <span className="text-amber-400">Laser Cutting</span>
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Precision </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">CNC</span>
              <span className="text-white"> | </span>
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">Jali</span>
              <span className="text-white"> | </span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Laser Cutting</span>
              <span className="text-white"> in </span>
              <span className="md:inline block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Wood, Plywood & Acrylic
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Crafting Excellence from Traditional to Contemporary Designs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/products">
                  <Package className="mr-2 w-5 h-5" />
                  Products
                </Link>
              </Button>
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/location">
                  <MapPin className="mr-2 w-5 h-5" />
                  Location
                </Link>
              </Button>
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/services">
                  <Settings className="mr-2 w-5 h-5" />
                  Services
                </Link>
              </Button>
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/catalog">
                  <Book className="mr-2 w-5 h-5" />
                  Catalog
                </Link>
              </Button>
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/contact">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>
          {/* Dot Indicators */}
          <div className="flex gap-2 justify-center mt-8 mb-4">
            {heroImages.map((_, index) => <button key={index} onClick={() => carouselApi?.scrollTo(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-primary w-8" : "bg-muted-foreground/50 hover:bg-muted-foreground"}`} aria-label={`Go to slide ${index + 1}`} />)}
          </div>
        </div>
      </section>

      {/* Laser Animation Section */}
      <LaserAnimation />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose ROUTERS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience unmatched quality and precision in every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our stunning collection of CNC & laser-cut masterpieces
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => {
            const colors = ['bg-gradient-to-br from-emerald-50 to-teal-50', 'bg-gradient-to-br from-green-50 to-emerald-50', 'bg-gradient-to-br from-teal-50 to-cyan-50', 'bg-gradient-to-br from-lime-50 to-green-50', 'bg-gradient-to-br from-emerald-50 to-green-50', 'bg-gradient-to-br from-teal-50 to-emerald-50', 'bg-gradient-to-br from-cyan-50 to-teal-50', 'bg-gradient-to-br from-green-50 to-teal-50'];
            return <Card key={index} className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 cursor-pointer ${colors[index % colors.length]}`}>
                <div className="relative aspect-square overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>;
          })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Get a custom quote for your CNC / Jali / Laser cutting project today. Our team is ready to help you create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Link to="/contact">
                  Request Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-white text-primary hover:bg-white/90">
                <a href="tel:+917012530677">
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;