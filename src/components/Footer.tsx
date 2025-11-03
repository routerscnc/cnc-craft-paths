import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              ROUTERS
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium CNC laser cutting for wood, plywood & acrylic.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/routers__cnc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-[#E4405F]" />
              </a>
              <a href="https://www.facebook.com/routersjaalicutting" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </a>
              <a href="https://wa.me/917012530677" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+917012530677" className="hover:text-primary transition-colors">
                    +91 70125 30677
                  </a>
                  <br />
                  <a href="tel:+919497379175" className="hover:text-primary transition-colors">+91 94973 79175</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:routersjaalicutting@gmail.com" className="hover:text-primary transition-colors break-all">
                  routersjaalicutting@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Under Railway Over Bridge, Angadippuram, Perinthalmanna, Malappuram, Kerala 679321</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Working Hours</h3>
            <p className="text-sm mb-2">Monday - Saturday</p>
            <p className="text-sm text-muted-foreground mb-3">9:00 AM - 7:00 PM</p>
            <p className="text-sm mb-2">Sunday</p>
            <p className="text-sm text-muted-foreground mb-4">Closed</p>
            <Link to="/contact">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors font-semibold">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ROUTERS CNC Laser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
