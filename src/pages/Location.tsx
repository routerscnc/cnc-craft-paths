import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Car } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Visit Our Shop</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come see our state-of-the-art CNC facility and discuss your project in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map Placeholder */}
          <Card className="overflow-hidden border-border">
            <div className="relative h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map will be integrated here</p>
                <p className="text-sm text-muted-foreground mt-2">123 Industrial Avenue, Manufacturing District</p>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Industrial Avenue<br />
                      Manufacturing District<br />
                      Your City, ST 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Operating Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Phone: (123) 456-7890</p>
                      <p>Email: info@cncpro.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Car className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parking</h3>
                    <p className="text-muted-foreground">
                      Free customer parking available in front of the building. Loading dock access for large deliveries.
                    </p>
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
