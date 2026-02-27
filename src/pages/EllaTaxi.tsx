import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingCard from "@/components/BookingCard";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";
import { Check, MapPin, Clock, Car, Mountain, Phone, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";

const EllaTaxi = () => {
  useEffect(() => {
    document.title = "Ella Taxi Service | Ella Sri Lanka Transport | Book Online | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book Ella taxi service in Sri Lanka. Transport to Nine Arch Bridge, Little Adam's Peak, Ella Rock & Ravana Falls. Airport transfers, Ella to Yala, Kandy & Colombo. Call +94716520690");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Ella taxi, taxi Ella Sri Lanka, Ella taxi service, Ella transport, Ella to Yala taxi, Ella to Colombo taxi, Nine Arch Bridge taxi, Ella airport transfer, Ella private driver, Ella tours, Ella Rock transport");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://slgotravel.com/ella-taxi");
  }, []);

  const attractions = [
    { name: "Nine Arch Bridge", description: "Iconic colonial railway viaduct", time: "10 mins" },
    { name: "Little Adam's Peak", description: "Easy scenic hiking trail", time: "15 mins" },
    { name: "Ella Rock", description: "Challenging hike with stunning views", time: "20 mins" },
    { name: "Ravana Falls", description: "Beautiful 25m waterfall", time: "5 mins" },
    { name: "Ravana Cave", description: "Legendary ancient cave", time: "10 mins" },
    { name: "Demodara Loop", description: "Famous railway spiral", time: "15 mins" },
    { name: "Lipton's Seat", description: "Panoramic tea plantation views", time: "45 mins" },
    { name: "Dowa Rock Temple", description: "Ancient Buddhist temple", time: "25 mins" }
  ];

  const routes = [
    { from: "Ella", to: "Yala National Park", price: "$55-65", time: "2.5 hours" },
    { from: "Ella", to: "Colombo Airport", price: "$120-140", time: "6 hours" },
    { from: "Ella", to: "Kandy", price: "$70-85", time: "4 hours" },
    { from: "Ella", to: "Nuwara Eliya", price: "$40-50", time: "1.5 hours" },
    { from: "Ella", to: "Galle", price: "$90-110", time: "4.5 hours" },
    { from: "Ella", to: "Mirissa", price: "$80-95", time: "3.5 hours" },
    { from: "Ella", to: "Sigiriya", price: "$100-120", time: "5 hours" },
    { from: "Ella", to: "Arugam Bay", price: "$65-80", time: "3 hours" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-green-600 to-emerald-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4">
                <Mountain className="w-4 h-4" />
                <span>Hill Country Transport Specialist</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Ella Taxi Service & Hill Country Tours
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Explore Sri Lanka's stunning hill country with our reliable Ella taxi service. Visit Nine Arch Bridge, Little Adam's Peak, tea plantations & more.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => sendWhatsApp("Hi, I need an Ella taxi service.")}
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
            Ella <span className="text-primary">Attractions & Tours</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide transport to all Ella attractions. Our drivers know the best times to visit and hidden viewpoints.
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
                  <span>{attraction.time} from Ella town</span>
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
            Ella Taxi <span className="text-primary">Prices & Routes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fixed prices for all routes from Ella. Air-conditioned vehicles with experienced hill country drivers.
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
            <h2 className="text-2xl font-bold mb-6 text-primary">Ella Taxi - Your Hill Country Transport Partner</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Ella</strong> is one of Sri Lanka's most beautiful destinations, nestled in the central
                  highlands. Our <strong>Ella taxi service</strong> provides reliable transport for tourists
                  exploring this stunning region.
                </p>
                <p>
                  Whether you're arriving from Colombo, heading to <strong>Yala National Park</strong> for a
                  safari, or exploring local attractions like the famous <strong>Nine Arch Bridge</strong>,
                  our experienced drivers know every route and scenic viewpoint.
                </p>
                <p>
                  The <strong>Ella to Yala taxi</strong> route is particularly popular. We can pick you up from
                  your Ella hotel in the early morning and have you at Yala National Park gates by 6 AM for
                  the best wildlife viewing.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Why Choose Our Ella Service?</h3>
                <ul className="space-y-2">
                  {[
                    "Experienced hill country drivers",
                    "Knowledge of all scenic routes & viewpoints",
                    "Flexible pickup times for sunrise/sunset tours",
                    "Safe driving on mountain roads",
                    "Air-conditioned comfort for winding roads",
                    "Local recommendations for cafes & restaurants",
                    "Tea factory & plantation tour arrangements",
                    "Combined Ella-Yala safari packages"
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

export default EllaTaxi;

