import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingCard from "@/components/BookingCard";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";
import { Check, MapPin, Clock, Car, Waves, Phone, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";

const GalleTaxi = () => {
  useEffect(() => {
    document.title = "Galle Taxi Service | Galle Fort & South Coast Tours | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book Galle taxi service in Sri Lanka. Galle Fort UNESCO tours, Unawatuna, Mirissa whale watching, Hikkaduwa beaches. Airport transfers. 24/7 service. Call +94716520690");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Galle taxi, taxi Galle Sri Lanka, Galle taxi service, Colombo to Galle taxi, Galle Fort taxi, Galle airport transfer, Mirissa taxi, Unawatuna taxi, Hikkaduwa taxi, south coast taxi Sri Lanka");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://slgotravel.com/galle-taxi");
  }, []);

  const attractions = [
    { name: "Galle Fort", description: "UNESCO Dutch colonial fortress", time: "City center" },
    { name: "Unawatuna Beach", description: "Palm-fringed swimming beach", time: "10 mins" },
    { name: "Jungle Beach", description: "Secluded snorkeling spot", time: "15 mins" },
    { name: "Japanese Peace Pagoda", description: "Hilltop Buddhist stupa", time: "20 mins" },
    { name: "Sea Turtle Hatchery", description: "Conservation center", time: "25 mins" },
    { name: "Mirissa Beach", description: "Whale watching base", time: "35 mins" },
    { name: "Hikkaduwa Coral Reef", description: "Snorkeling & diving", time: "30 mins" },
    { name: "Koggala Lake", description: "Boat safari & stilt fishing", time: "20 mins" }
  ];

  const routes = [
    { from: "Colombo Airport", to: "Galle", price: "$65-80", time: "2.5 hours" },
    { from: "Galle", to: "Mirissa", price: "$20-25", time: "35 mins" },
    { from: "Galle", to: "Unawatuna", price: "$10-15", time: "15 mins" },
    { from: "Galle", to: "Hikkaduwa", price: "$15-20", time: "25 mins" },
    { from: "Galle", to: "Yala/Tissamaharama", price: "$70-85", time: "3 hours" },
    { from: "Galle", to: "Ella", price: "$90-110", time: "4.5 hours" },
    { from: "Galle", to: "Colombo City", price: "$50-65", time: "2 hours" },
    { from: "Galle", to: "Bentota", price: "$30-40", time: "1 hour" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-cyan-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4">
                <Waves className="w-4 h-4" />
                <span>South Coast Specialist</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Galle Taxi Service & South Coast Tours
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Explore Sri Lanka's stunning south coast with our reliable Galle taxi service. Galle Fort, Unawatuna beaches, Mirissa whale watching & more.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => sendWhatsApp("Hi, I need a Galle taxi service.")}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
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

      {/* Attractions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Galle & South Coast <span className="text-primary">Attractions</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Beautiful beaches, colonial history, whale watching, and world-class surfing along Sri Lanka's southern coastline.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {attractions.map((attraction) => (
              <div key={attraction.name} className="glass-card p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Camera className="w-4 h-4" />
                  <span className="text-xs font-medium">Must Visit</span>
                </div>
                <h3 className="font-semibold mb-1">{attraction.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{attraction.description}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{attraction.time} from Galle</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Galle Taxi <span className="text-primary">Prices & Routes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fixed prices for all south coast destinations. Explore beaches, forts, and wildlife with ease.
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

      {/* SEO Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-primary">Galle Taxi - Your South Coast Transport Partner</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Galle</strong> is home to Sri Lanka's most iconic colonial landmark - the
                  <strong> Galle Fort</strong>, a UNESCO World Heritage Site built by the Dutch in the 17th century.
                  Our <strong>Galle taxi service</strong> provides seamless transport along the entire south coast.
                </p>
                <p>
                  The <strong>Colombo to Galle taxi</strong> journey takes just 2.5 hours via the Southern Expressway.
                  We offer airport pickups with scenic coastal route options, stopping at turtle hatcheries or
                  Bentota beach resorts upon request.
                </p>
                <p>
                  From Galle, explore world-famous beaches including <strong>Unawatuna</strong>,
                  <strong> Mirissa</strong> (for whale watching November-April), <strong>Hikkaduwa</strong> (surfing
                  and coral reefs), and the pristine sands of <strong>Tangalle</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">South Coast Experiences</h3>
                <ul className="space-y-2">
                  {[
                    "Galle Fort walking tour - colonial architecture",
                    "Mirissa whale & dolphin watching (Nov-Apr)",
                    "Hikkaduwa coral reef snorkeling",
                    "Unawatuna beach relaxation",
                    "Koggala Lake boat safari",
                    "Stilt fishermen photo stops",
                    "Sea turtle conservation centers",
                    "Galle to Yala safari transfers"
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

export default GalleTaxi;

