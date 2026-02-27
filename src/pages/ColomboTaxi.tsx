import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingCard from "@/components/BookingCard";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";
import { Check, MapPin, Clock, Car, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";

const ColomboTaxi = () => {
  useEffect(() => {
    document.title = "Colombo Taxi Service | Airport Transfer & City Tours | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book reliable Colombo taxi service. Airport transfers from Bandaranaike International Airport, city tours, hotel pickups & island-wide transport. 24/7 service. Call +94716520690");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Colombo taxi, Colombo airport taxi, taxi Colombo Sri Lanka, Colombo taxi service, Colombo airport transfer, Colombo cab service, taxi from Colombo airport, Colombo to Kandy taxi, Colombo to Galle taxi, Colombo private driver");
    }
    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://slgotravel.com/colombo-taxi");
  }, []);

  const features = [
    "24/7 airport pickup & drop service",
    "Fixed prices - no hidden charges",
    "Professional English-speaking drivers",
    "Air-conditioned, modern vehicles",
    "Free waiting time at airport (60 mins)",
    "Flight tracking for delayed arrivals",
    "Child seats available on request",
    "Island-wide destination coverage"
  ];

  const routes = [
    { from: "Colombo Airport", to: "Colombo City (Fort/Pettah)", price: "$35-40", time: "45 mins" },
    { from: "Colombo Airport", to: "Negombo", price: "$20-25", time: "20 mins" },
    { from: "Colombo Airport", to: "Kandy", price: "$70-85", time: "3.5 hours" },
    { from: "Colombo Airport", to: "Galle", price: "$65-80", time: "2.5 hours" },
    { from: "Colombo Airport", to: "Ella", price: "$120-140", time: "6 hours" },
    { from: "Colombo Airport", to: "Yala/Tissamaharama", price: "$100-120", time: "5 hours" },
    { from: "Colombo City", to: "Sigiriya", price: "$80-95", time: "4 hours" },
    { from: "Colombo City", to: "Nuwara Eliya", price: "$90-110", time: "5 hours" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 ocean-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Serving Colombo & All Sri Lanka</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Colombo Taxi Service & Airport Transfer
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Sri Lanka's most trusted taxi service. Safe, reliable airport pickups from Bandaranaike International Airport (CMB) to any destination. Available 24/7.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => sendWhatsApp("Hi, I need a Colombo taxi service.")}
                  className="tropical-gradient text-secondary-foreground px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book via WhatsApp
                </Button>
                <a href="tel:+94716520690">
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 rounded-full">
                    Call: +94 71 652 0690
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <BookingCard />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our <span className="text-primary">Colombo Taxi Service</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 glass-card p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Colombo Taxi <span className="text-primary">Prices & Routes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden charges. All prices include air-conditioned vehicle, professional driver, fuel, and tolls.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((route) => (
              <div key={`${route.from}-${route.to}`} className="glass-card p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Car className="w-4 h-4" />
                  <span className="text-xs font-medium">Private Transfer</span>
                </div>
                <p className="font-semibold text-sm mb-1">{route.from}</p>
                <p className="text-xs text-muted-foreground mb-2">→ {route.to}</p>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-lg font-bold text-primary">{route.price}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {route.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Prices are estimates for sedan vehicles. Van prices available on request.
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2 className="text-2xl font-bold mb-6 text-primary">Colombo Airport Taxi - Your Gateway to Sri Lanka</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Slanka Taxi</strong> provides the most reliable <strong>Colombo taxi service</strong> in
                  Sri Lanka. Our <strong>Colombo airport transfer</strong> service operates 24 hours a day, 7 days
                  a week from <strong>Bandaranaike International Airport (BIA/CMB)</strong> to all destinations.
                </p>
                <p>
                  Whether you need a <strong>taxi from Colombo airport</strong> to your hotel, or a
                  <strong> Colombo to Kandy taxi</strong>, our professional drivers ensure a safe, comfortable journey.
                  We track all incoming flights and adjust pickup times for delays - no extra charge.
                </p>
                <p>
                  Our Colombo taxi fleet includes sedans for couples, vans for families, and luxury vehicles for
                  business travelers. All vehicles are air-conditioned, clean, and equipped with GPS navigation.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Popular Colombo Taxi Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Airport Pickup:</strong> Meet & greet at arrival hall with name board</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><strong>City Tours:</strong> Colombo sightseeing with experienced local guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Hotel Transfers:</strong> Seamless transport between hotels & attractions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Day Trips:</strong> Colombo to Kandy, Galle, Sigiriya & more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Corporate Travel:</strong> Business transport & executive services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ColomboTaxi;

