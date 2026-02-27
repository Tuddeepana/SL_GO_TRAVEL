import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingCard from "@/components/BookingCard";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";
import { Check, MapPin, Clock, Car, Trees, Phone, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";

const YalaTaxi = () => {
  useEffect(() => {
    document.title = "Yala Taxi Service | Transport to Yala National Park | Safari Transfers | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book Yala taxi service for transport to Yala National Park. Transfers from Colombo, Ella, Galle to Yala. Combine with safari packages. Safe & reliable. Call +94716520690");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Yala taxi, Yala taxi service, taxi to Yala, Yala National Park transport, Colombo to Yala taxi, Ella to Yala taxi, Galle to Yala taxi, Yala transfer, Tissamaharama taxi");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://slgotravel.com/yala-taxi");
  }, []);

  const routes = [
    { from: "Colombo Airport", to: "Yala (Tissamaharama)", price: "$100-120", time: "5 hours" },
    { from: "Colombo City", to: "Yala (Tissamaharama)", price: "$95-110", time: "5 hours" },
    { from: "Ella", to: "Yala (Tissamaharama)", price: "$55-65", time: "2.5 hours" },
    { from: "Galle", to: "Yala (Tissamaharama)", price: "$70-85", time: "3 hours" },
    { from: "Mirissa", to: "Yala (Tissamaharama)", price: "$60-75", time: "2.5 hours" },
    { from: "Kandy", to: "Yala (Tissamaharama)", price: "$110-130", time: "5.5 hours" },
    { from: "Negombo", to: "Yala (Tissamaharama)", price: "$105-125", time: "5.5 hours" },
    { from: "Arugam Bay", to: "Yala (Tissamaharama)", price: "$65-80", time: "2.5 hours" }
  ];

  const features = [
    "Direct transfer to Yala National Park entrance",
    "Early morning pickup for safari (4:30 AM available)",
    "Experienced drivers who know the best routes",
    "Air-conditioned, comfortable vehicles",
    "Combined taxi + safari packages available",
    "Flexible return pickup after safari",
    "Multi-stop options (visit Ella, Mirissa en route)",
    "24/7 booking via WhatsApp"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-yellow-600 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4">
                <Trees className="w-4 h-4" />
                <span>Your Gateway to Yala Wildlife</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Yala Taxi Service & Safari Transport
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Reliable taxi service to Yala National Park from anywhere in Sri Lanka. Combine with safari packages for the ultimate wildlife experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => sendWhatsApp("Hi, I need a taxi to Yala National Park.")}
                  className="bg-white text-amber-700 hover:bg-white/90 px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Yala Taxi
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
            Why Choose Our <span className="text-primary">Yala Taxi Service</span>
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
            Yala Taxi <span className="text-primary">Prices & Routes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fixed prices from all major Sri Lanka destinations to Yala/Tissamaharama. No hidden charges.
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
        </div>
      </section>

      {/* Safari Add-on */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Binoculars className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Add a <span className="text-secondary">Yala Safari</span> to Your Trip
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't just travel to Yala - experience it! Book a combined taxi + safari package and
              see leopards, elephants, and exotic wildlife with our professional guides.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => sendWhatsApp("I want to book Yala taxi + safari package.")}
                className="ocean-gradient px-8 py-3 rounded-full"
              >
                Book Taxi + Safari Package
              </Button>
              <a href="/yala-safari">
                <Button variant="outline" className="px-8 py-3 rounded-full">
                  View Safari Details
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-primary">Getting to Yala National Park - Complete Transport Guide</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Yala National Park</strong> is located in the southeastern region of Sri Lanka,
                  near the town of <strong>Tissamaharama</strong> (Tissa). Our <strong>Yala taxi service</strong>
                  provides the most comfortable and reliable way to reach this world-famous wildlife destination.
                </p>
                <p>
                  The journey from <strong>Colombo to Yala</strong> takes approximately 5 hours via the
                  Southern Expressway. We can pick you up from Colombo Airport, your hotel, or any location,
                  and transport you directly to your accommodation near Yala.
                </p>
                <p>
                  For travelers coming from <strong>Ella</strong>, the scenic <strong>Ella to Yala</strong>
                  route takes just 2.5 hours, passing through beautiful hill country and southern plains.
                  This is one of the most popular routes for tourists exploring central Sri Lanka.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Planning Your Yala Trip</h3>
                <ul className="space-y-2">
                  {[
                    "Book your taxi at least 1 day in advance",
                    "Early pickup (4:30 AM) available for morning safaris",
                    "We recommend staying 1-2 nights near Yala",
                    "Best visited February to July (dry season)",
                    "Combine with Ella or Mirissa for a complete trip",
                    "Full-day safaris require early arrival",
                    "Return transfer can be booked separately",
                    "Multi-destination packages available"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
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

export default YalaTaxi;
