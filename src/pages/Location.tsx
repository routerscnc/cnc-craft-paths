import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Navigation as NavigationIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Location = () => {
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
          <h1 className="text-5xl font-bold mb-4">Visit Our Shop</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come see our state-of-the-art CNC facility and discuss your project in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Google Maps */}
          <div className="lg:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4927!2d76.2278!3d10.9889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzIwLjAiTiA3NsKwMTMnNDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ROUTERS CNC Laser Location"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Under Railway Over Bridge<br />
                      Angadippuram, Perinthalmanna<br />
                      Malappuram, Kerala, India<br />
                      PIN: 679321
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Angadippuram+Perinthalmanna+Malappuram+Kerala" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline mt-3 text-sm font-medium"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Working Hours</h3>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <p className="font-medium text-foreground">Monday - Saturday</p>
                      <p>9:00 AM - 7:00 PM</p>
                      <p className="font-medium text-foreground mt-3">Sunday</p>
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <p><a href="tel:+917012530677" className="hover:text-primary transition-colors">+91 70125 30677</a></p>
                      <p><a href="tel:+919497379175" className="hover:text-primary transition-colors">+91 94973 79175</a></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:routersjaalicutting@gmail.com" className="hover:text-primary transition-colors break-all">
                        routersjaalicutting@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <NavigationIcon className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Connect With Us</h3>
                    <div className="text-muted-foreground space-y-2 text-sm">
                      <p>
                        <a href="https://instagram.com/routers__cnc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                          📷 Instagram: @routers__cnc
                        </a>
                      </p>
                      <p>
                        <a href="https://wa.me/919048599981" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                          💬 WhatsApp: +91 90485 99981
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Schedule a Visit</h2>
            <p className="text-muted-foreground mb-6">
              Want to tour our facility or discuss your project in person? Give us a call to schedule an appointment.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Location;
