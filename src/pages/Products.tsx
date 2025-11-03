import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Award, Home as HomeIcon, Grid3x3, DoorOpen, Layers, PaintBucket, Signpost, Gift, MoreHorizontal } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import geometricPanel from "@/assets/products/geometric-panel.jpg";
import illuminatedCabinet from "@/assets/products/illuminated-cabinet.jpg";
import carvedPanels from "@/assets/products/carved-wall-panels.jpg";
import poojaDoor from "@/assets/products/pooja-door.jpg";
import islamicClock from "@/assets/products/islamic-clock.jpg";
import jaaliScreen from "@/assets/products/jaali-screen-large.jpg";
import whiteDivider from "@/assets/products/white-divider.jpg";
import carvedCabinet from "@/assets/products/carved-cabinet.jpg";
import ayatulKursi from "@/assets/products/ayatul-kursi.jpg";
import asmaulHusna from "@/assets/products/asmaul-husna.jpg";
import bismillahGold from "@/assets/products/bismillah-gold.jpg";
import jaaliPanel from "@/assets/products/jaali-panel.jpg";
import customNameplate from "@/assets/products/custom-nameplate-darul.jpg";
import luxuryDoor from "@/assets/products/luxury-door.jpg";
import sportsTrophies from "@/assets/products/sports-trophies.jpg";
import wallShelf from "@/assets/products/wall-shelf.jpg";
import awardPlaque from "@/assets/products/award-plaque.jpg";
import islamicMetalArt from "@/assets/products/islamic-metal-art.jpg";
import decorativeBoxArabic from "@/assets/products/decorative-box-arabic.jpg";
import mementosCollection from "@/assets/products/mementos-collection.jpg";
import woodenPodium from "@/assets/products/wooden-podium.jpg";
import studentMementos from "@/assets/products/student-mementos.jpg";
import mosqueInterior from "@/assets/products/mosque-interior.jpg";
import islamicGlassFrame from "@/assets/products/islamic-glass-frame.jpg";
import radialDoorPanel from "@/assets/products/radial-door-panel.jpg";
import radialDoorFull from "@/assets/products/radial-door-full.jpg";
import mosquePodiumJaali from "@/assets/products/mosque-podium-jaali.jpg";
import customSignRed from "@/assets/products/custom-sign-red.jpg";
import basketweaveDoor from "@/assets/products/basketweave-door.jpg";
import cityDriveSign from "@/assets/products/city-drive-sign.jpg";
import arabicWhiteNameplate from "@/assets/products/arabic-white-nameplate.jpg";
import omTriangleDecor from "@/assets/products/om-triangle-decor.jpg";
import varshamSign from "@/assets/products/varsham-sign.jpg";
import weddingMementoGold from "@/assets/products/wedding-memento-gold.jpg";
import islamicCalligraphyGold from "@/assets/products/islamic-calligraphy-gold.jpg";
import deskNameplate from "@/assets/products/desk-nameplate.jpg";
import arabicColorfulMementos from "@/assets/products/arabic-colorful-mementos.jpg";
import roundNameplate from "@/assets/products/round-nameplate.jpg";
import businessCardHolders from "@/assets/products/business-card-holders.jpg";
import portraitMemento from "@/assets/products/portrait-memento.jpg";
import bismillahPanelLarge from "@/assets/products/bismillah-panel-large.jpg";
import omPanelWhite from "@/assets/products/om-panel-white.jpg";
import omPanelRed from "@/assets/products/om-panel-red.jpg";
import templePanelFrame from "@/assets/products/temple-panel-frame.jpg";
import peacockFeatherPanels from "@/assets/products/peacock-feather-panels.jpg";
import customMementosPhoto from "@/assets/products/custom-mementos-photo.jpg";
import customTrophyAward from "@/assets/products/custom-trophy-award.jpg";
import studioLogoSign from "@/assets/products/studio-logo-sign.jpg";
import acrylicNameplateGold from "@/assets/products/acrylic-nameplate-gold.jpg";
import luxuryGiftBoxOpen from "@/assets/products/luxury-gift-box-open.jpg";
import luxuryGiftBoxClosed from "@/assets/products/luxury-gift-box-closed.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { name: "All", icon: Grid3x3 },
    { name: "Doors", icon: DoorOpen },
    { name: "Mementos", icon: Award },
    { name: "Panels", icon: Layers },
    { name: "Wall Decor", icon: PaintBucket },
    { name: "Pooja Room", icon: HomeIcon },
    { name: "Mosque", icon: Package },
    { name: "Signage", icon: Signpost },
    { name: "Gifts", icon: Gift },
    { name: "Other", icon: MoreHorizontal },
  ];

  const products = [
    {
      title: "Islamic Metal Calligraphy",
      category: "Mosque",
      description: "Stunning metallic Islamic calligraphy wall art with golden finish. Intricate laser-cut Arabic script perfect for prayer rooms and Islamic décor.",
      image: islamicMetalArt,
      featured: true,
      materials: "Metal, Gold Finish"
    },
    {
      title: "Wooden Podium",
      category: "Mosque",
      description: "Elegant wooden podium with intricate jaali panel design. Perfect for mosques, prayer halls, and ceremonial spaces.",
      image: woodenPodium,
      featured: true,
      materials: "Premium Hardwood"
    },
    {
      title: "Award Plaque Collection",
      category: "Mementos",
      description: "Custom laser-engraved wooden award plaques with Arabic text and logo branding. Perfect for recognition ceremonies and special achievements.",
      image: awardPlaque,
      featured: true,
      materials: "Premium Wood, Laser Engraving"
    },
    {
      title: "Geometric Jaali Panel",
      category: "Panels",
      description: "Intricate laser-cut geometric patterns perfect for modern interiors and partitions. Features complex Greek key and floral motifs in high-quality wood.",
      image: geometricPanel,
      featured: false,
      materials: "Premium Wood, MDF"
    },
    {
      title: "Illuminated Cabinet",
      category: "Wall Decor",
      description: "Beautiful backlit Islamic pattern cabinet with integrated LED lighting. Perfect for showcasing decorative items with ambient illumination.",
      image: illuminatedCabinet,
      featured: true,
      materials: "Wood, Acrylic, LED"
    },
    {
      title: "Carved Wall Panels Set",
      category: "Wall Decor",
      description: "Set of three ornate wooden wall art panels featuring traditional carved designs with intricate floral and geometric patterns.",
      image: carvedPanels,
      featured: true,
      materials: "Premium Wood"
    },
    {
      title: "Pooja Room Glass Door",
      category: "Doors",
      description: "Custom etched glass door with Hindu religious symbols including Ganesha, swastik, bells, and mandala patterns. Framed in rich wood.",
      image: poojaDoor,
      featured: false,
      materials: "Etched Glass, Wood Frame"
    },
    {
      title: "Islamic Crescent Wall Clock",
      category: "Wall Decor",
      description: "Crescent moon design wall clock featuring mosque silhouette with intricate jaali pattern details. Functional art piece.",
      image: islamicClock,
      featured: false,
      materials: "Wood, Clock Mechanism"
    },
    {
      title: "Large Jaali Screen Panels",
      category: "Panels",
      description: "Premium cream-colored jaali panels in traditional Islamic geometric patterns. Ideal for creating elegant space divisions or decorative backdrops.",
      image: jaaliScreen,
      featured: false,
      materials: "Premium MDF, Wood"
    },
    {
      title: "White Decorative Divider",
      category: "Panels",
      description: "Elegant white standing room divider panels with flowing floral and geometric laser-cut patterns. Freestanding design.",
      image: whiteDivider,
      featured: false,
      materials: "MDF, Paint Finish"
    },
    {
      title: "Luxury Carved Cabinet",
      category: "Wall Decor",
      description: "Ornate wooden cabinet with exquisite hand-carved floral patterns on three panel doors. Museum-quality craftsmanship.",
      image: carvedCabinet,
      featured: false,
      materials: "Premium Hardwood"
    },
    {
      title: "Ayatul Kursi Calligraphy",
      category: "Mosque",
      description: "Exquisite Ayatul Kursi wall art with intricate Arabic calligraphy and gold accents on premium wood backdrop.",
      image: ayatulKursi,
      featured: false,
      materials: "Wood, Gold Acrylic"
    },
    {
      title: "Asmaul Husna Collection",
      category: "Mosque",
      description: "Complete 99 Names of Allah displayed in honeycomb hexagonal pattern. Contemporary design meets traditional calligraphy.",
      image: asmaulHusna,
      featured: false,
      materials: "Acrylic, PVC"
    },
    {
      title: "Bismillah Gold Edition",
      category: "Mosque",
      description: "Stunning gold-finished Bismillah calligraphy wall art on dark premium wood. Perfect for modern Islamic interiors.",
      image: bismillahGold,
      featured: false,
      materials: "Wood, Gold Acrylic Finish"
    },
    {
      title: "Traditional Jaali Panel",
      category: "Panels",
      description: "Classic Islamic geometric pattern jaali panel for windows, doors, or decorative wall elements.",
      image: jaaliPanel,
      featured: false,
      materials: "Wood, MDF, Plywood"
    },
    {
      title: "Custom Wooden Nameplate",
      category: "Signage",
      description: "Handcrafted wooden nameplate 'Darul Hamd' with elegant brass inlay lettering and decorative border.",
      image: customNameplate,
      featured: false,
      materials: "Wood, Brass Inlay"
    },
    {
      title: "Luxury Wooden Door",
      category: "Doors",
      description: "Premium CNC-carved wooden door with intricate traditional patterns. Perfect for luxury homes and offices.",
      image: luxuryDoor,
      featured: false,
      materials: "Premium Hardwood"
    },
    {
      title: "Sports Trophy Collection",
      category: "Mementos",
      description: "Custom laser-engraved acrylic trophies and awards for sports achievements and special recognition.",
      image: sportsTrophies,
      featured: false,
      materials: "Acrylic, Wood Base"
    },
    {
      title: "Hexagonal Wall Shelf",
      category: "Wall Decor",
      description: "Modern geometric shelving unit combining white hexagonal compartments with wood accents. Functional art storage.",
      image: wallShelf,
      featured: false,
      materials: "Wood, MDF, Paint"
    },
    {
      title: "Decorative Arabic Box",
      category: "Mementos",
      description: "Premium wooden box with Arabic calligraphy engraving and logo branding. Perfect for awards, gifts, and special recognition items.",
      image: decorativeBoxArabic,
      featured: false,
      materials: "Premium Wood, Laser Engraving"
    },
    {
      title: "Wooden Memento Boxes",
      category: "Mementos",
      description: "Collection of elegantly crafted wooden boxes with intricate laser-cut jaali patterns on lids. Ideal for corporate gifts and awards.",
      image: mementosCollection,
      featured: false,
      materials: "Premium Wood, Brass Hardware"
    },
    {
      title: "Student Achievement Mementos",
      category: "Mementos",
      description: "Personalized photo mementos for student recognition with custom printing and professional design. Perfect for schools and institutions.",
      image: studentMementos,
      featured: false,
      materials: "Acrylic, UV Print"
    },
    {
      title: "Complete Mosque Interior",
      category: "Mosque",
      description: "Stunning full mosque interior featuring intricate jaali wall panels, custom wooden podium with jaali patterns, and traditional arched entrance. Complete Islamic architectural design.",
      image: mosqueInterior,
      featured: false,
      materials: "Premium Wood, Jaali Panels"
    },
    {
      title: "Islamic Calligraphy Glass Frame",
      category: "Mosque",
      description: "Elegant Islamic calligraphy art piece in premium glass frame with wooden stand. Perfect for Islamic prayer rooms and home décor.",
      image: islamicGlassFrame,
      featured: false,
      materials: "Glass, Wood Frame, Engraving"
    },
    {
      title: "Radial Sunburst Door Panel",
      category: "Doors",
      description: "Intricate CNC-carved wooden door with stunning radiating sunburst pattern. Precision laser-cut concentric circles create a mesmerizing 3D effect.",
      image: radialDoorFull,
      featured: false,
      materials: "Premium Hardwood, CNC Carving"
    },
    {
      title: "Mosque Podium with Jaali",
      category: "Mosque",
      description: "Custom wooden podium featuring Islamic jaali geometric patterns and pointed arch design. Perfect for mosques and prayer halls.",
      image: mosquePodiumJaali,
      featured: false,
      materials: "Hardwood, Jaali Work"
    },
    {
      title: "Basket Weave Pattern Door",
      category: "Doors",
      description: "Elegant wooden door featuring intricate basket weave laser-cut pattern strips. Contemporary design meets traditional craftsmanship.",
      image: basketweaveDoor,
      featured: false,
      materials: "Premium Wood, Laser Cutting"
    },
    {
      title: "City Drive Custom Sign",
      category: "Signage",
      description: "Large custom wooden signage for 'City Drive Pre Loved Cars' with decorative border. Professional CNC-engraved lettering.",
      image: cityDriveSign,
      featured: false,
      materials: "Wood, CNC Engraving"
    },
    {
      title: "Arabic Calligraphy Nameplate",
      category: "Signage",
      description: "Elegant white nameplate with Arabic calligraphy and decorative borders. Wood backing provides beautiful depth and contrast.",
      image: arabicWhiteNameplate,
      featured: false,
      materials: "Wood, White Finish, Laser Cut"
    },
    {
      title: "Om Symbol Triangle Décor",
      category: "Pooja Room",
      description: "Beautiful triangular wall art featuring Om symbol with intricate decorative borders. Perfect for Hindu prayer rooms and meditation spaces.",
      image: omTriangleDecor,
      featured: false,
      materials: "Wood, Laser Cut, White Inlay"
    },
    {
      title: "Custom Red Acrylic Sign",
      category: "Signage",
      description: "Custom-shaped acrylic signage with white lettering. Durable outdoor/indoor signage solution with vibrant colors.",
      image: customSignRed,
      featured: false,
      materials: "Acrylic, Vinyl Letters"
    },
    {
      title: "Varsham Metal Sign",
      category: "Signage",
      description: "Elegant cursive metal sign with 'Varsham' lettering. Perfect for home décor, garden displays, and personalized signage.",
      image: varshamSign,
      featured: false,
      materials: "Metal, Powder Coating"
    },
    {
      title: "Wedding Memento Gold Frame",
      category: "Gifts",
      description: "Premium acrylic wedding memento with gold accents, custom photo printing, and wooden base. Perfect for celebrating special occasions.",
      image: weddingMementoGold,
      featured: false,
      materials: "Acrylic, Gold Print, Wood Base"
    },
    {
      title: "Islamic Calligraphy Wall Art",
      category: "Mosque",
      description: "Stunning metallic Islamic calligraphy with gold finish on dark background. Large decorative piece perfect for mosques and prayer rooms.",
      image: islamicCalligraphyGold,
      featured: false,
      materials: "Metal, Gold Finish, Acrylic"
    },
    {
      title: "Desk Nameplate",
      category: "Signage",
      description: "Professional acrylic desk nameplate with logo and title. Perfect for office desks and corporate branding.",
      image: deskNameplate,
      featured: false,
      materials: "Acrylic, Wood Base, Vinyl Print"
    },
    {
      title: "Arabic Calligraphy Mementos",
      category: "Mementos",
      description: "Vibrant Arabic calligraphy awards with colorful design and photo integration. Perfect for student achievements and recognition.",
      image: arabicColorfulMementos,
      featured: false,
      materials: "Acrylic, UV Print, Wood Base"
    },
    {
      title: "Round Wooden Nameplate",
      category: "Signage",
      description: "Circular wooden nameplate with white engraved lettering and decorative leaf borders. Elegant personalized home signage.",
      image: roundNameplate,
      featured: false,
      materials: "Premium Wood, White Inlay"
    },
    {
      title: "Business Card Holders",
      category: "Signage",
      description: "Professional wooden business card holders with logo engraving. Perfect for corporate gifts and office desk accessories.",
      image: businessCardHolders,
      featured: false,
      materials: "Premium Wood, Laser Engraving"
    },
    {
      title: "Portrait Memento",
      category: "Mementos",
      description: "Custom wooden memento with portrait engraving and gold acrylic frame. Perfect for recognition awards and special honors.",
      image: portraitMemento,
      featured: false,
      materials: "Wood, Gold Acrylic, Engraving"
    },
    {
      title: "Bismillah Large Panel",
      category: "Mosque",
      description: "Large CNC-carved wooden panel featuring complete Bismillah calligraphy with decorative border. Premium Islamic wall art.",
      image: bismillahPanelLarge,
      featured: false,
      materials: "Premium Wood, CNC Carving"
    },
    {
      title: "Om Panel White Design",
      category: "Pooja Room",
      description: "Sacred Om symbol panel with bells and decorative motifs in white. Traditional Hindu prayer room décor with intricate laser-cut details.",
      image: omPanelWhite,
      featured: false,
      materials: "Wood, White Acrylic, Laser Cut"
    },
    {
      title: "Om Panel Red Colored",
      category: "Pooja Room",
      description: "Vibrant red Om symbol panel with Hindu religious symbols. Bold design perfect for pooja rooms and spiritual spaces.",
      image: omPanelRed,
      featured: false,
      materials: "Wood, Colored Acrylic, Laser Cut"
    },
    {
      title: "Temple Panel with Frame",
      category: "Pooja Room",
      description: "Beautiful temple-themed decorative panel in wooden frame featuring lotus, bells, and traditional Hindu motifs. Perfect for pooja room wall art.",
      image: templePanelFrame,
      featured: false,
      materials: "Wood Frame, White Acrylic, Multi-layer Design"
    },
    {
      title: "Peacock Feather Panels",
      category: "Pooja Room",
      description: "Elegant pair of white panels with peacock feather designs. Symbol of Lord Krishna, perfect for spiritual and decorative purposes.",
      image: peacockFeatherPanels,
      featured: false,
      materials: "Wood, White Finish, Laser Cut"
    },
    {
      title: "Custom Photo Mementos",
      category: "Gifts",
      description: "Personalized wooden awards with photo portraits and custom Malayalam text. Perfect for professional recognition and honors.",
      image: customMementosPhoto,
      featured: false,
      materials: "Premium Wood, Photo Engraving, Acrylic"
    },
    {
      title: "Custom Trophy Award",
      category: "Gifts",
      description: "Premium carved wooden trophy with hands motif and Malayalam text. Unique recognition award for special achievements.",
      image: customTrophyAward,
      featured: false,
      materials: "Premium Wood, CNC Carving, Wood Base"
    },
    {
      title: "Studio Logo Sign",
      category: "Signage",
      description: "Professional studio signage with artistic Shiva logo design. Large format laser-cut sign perfect for business branding.",
      image: studioLogoSign,
      featured: false,
      materials: "Wood, White Finish, Laser Engraving"
    },
    {
      title: "Acrylic Nameplate Gold",
      category: "Signage",
      description: "Elegant black acrylic nameplate with gold lettering. Premium curved design for homes and businesses.",
      image: acrylicNameplateGold,
      featured: false,
      materials: "Black Acrylic, Gold Vinyl Lettering"
    },
    {
      title: "Luxury Gift Box Open",
      category: "Gifts",
      description: "Premium wooden gift box with intricate jaali lid and personalized message engraving. Perfect for special occasions and corporate gifting.",
      image: luxuryGiftBoxOpen,
      featured: false,
      materials: "Premium Wood, Jaali Work, Laser Engraving"
    },
    {
      title: "Luxury Gift Box Closed",
      category: "Gifts",
      description: "Elegant decorative gift box with ornate laser-cut wooden lid on gold base. Perfect for high-end gifting and presentations.",
      image: luxuryGiftBoxClosed,
      featured: false,
      materials: "Wood, Gold Acrylic Base, Laser Cut Lid"
    },
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Premium Craftsmanship
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of CNC laser cutting, jaali work, and precision-cut masterpieces
          </p>
        </div>

        {/* Category Filter Shortcuts */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  variant={selectedCategory === cat.name ? "default" : "outline"}
                  size="lg"
                  className="group transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {cat.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Stunning Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.filter(p => p.featured).map((product, index) => {
              const featuredColors = [
                'bg-gradient-to-br from-emerald-100 to-teal-100',
                'bg-gradient-to-br from-green-100 to-emerald-100',
                'bg-gradient-to-br from-teal-100 to-cyan-100'
              ];
              return (
              <Card 
                key={index} 
                className={`overflow-hidden border-2 border-primary/20 hover:shadow-2xl transition-all duration-500 group cursor-pointer ${featuredColors[index]}`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2 uppercase tracking-wide">{product.category}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="text-xs text-primary font-medium">Materials: {product.materials}</div>
                </div>
              </Card>
            )})}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            {selectedCategory === "All" ? "More Products" : `${selectedCategory} Products`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.filter(p => !p.featured).map((product, index) => {
              const colors = [
                'bg-gradient-to-br from-emerald-50 to-teal-50',
                'bg-gradient-to-br from-green-50 to-emerald-50',
                'bg-gradient-to-br from-teal-50 to-cyan-50',
                'bg-gradient-to-br from-lime-50 to-green-50',
                'bg-gradient-to-br from-emerald-50 to-green-50',
                'bg-gradient-to-br from-teal-50 to-emerald-50',
                'bg-gradient-to-br from-cyan-50 to-teal-50',
                'bg-gradient-to-br from-green-50 to-teal-50',
                'bg-gradient-to-br from-lime-50 to-emerald-50'
              ];
              return (
              <Card 
                key={index} 
                className={`overflow-hidden border-2 border-primary/20 hover:shadow-xl transition-all duration-500 group cursor-pointer ${colors[index % colors.length]}`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-accent font-semibold mb-1 uppercase">{product.category}</div>
                  <h3 className="text-base font-semibold mb-1 text-foreground line-clamp-1">{product.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{product.description}</p>
                  <div className="text-xs text-primary font-medium">Materials: {product.materials}</div>
                </div>
              </Card>
            )})}
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
                Custom orders welcome. Share your design and we'll create it with precision and excellence
              </p>
              <Button asChild size="lg" variant="secondary" className="shadow-xl">
                <Link to="/contact">
                  Request Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto">
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-accent font-semibold mb-2 uppercase tracking-wider">
                    {selectedProduct.category}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{selectedProduct.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-lg mb-2">Materials Used</h3>
                  <p className="text-muted-foreground">{selectedProduct.materials}</p>
                </div>
                <div className="pt-4">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">
                      Get Custom Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
