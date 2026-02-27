import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingCard from "@/components/BookingCard";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";
import { Check, MapPin, Clock, Car, Landmark, Phone, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";

const KandyTaxi = () => {
  useEffect(() => {
    document.title = "Kandy Taxi Service | Temple of Tooth & Cultural Tours | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book Kandy taxi service in Sri Lanka. Temple of the Tooth, Peradeniya Gardens, Sigiriya tours. Airport transfers from Colombo to Kandy. 24/7 service. Call +94716520690");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Kandy taxi, taxi Kandy Sri Lanka, Kandy taxi service, Colombo to Kandy taxi, Kandy airport transfer, Kandy private driver, Temple of Tooth taxi, Kandy to Sigiriya taxi, Kandy tours, Peradeniya taxi");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://slgotravel.com/kandy-taxi");
  }, []);

  const attractions = [
    { name: "Temple of the Tooth", description: "Sacred Buddhist relic temple", time: "City center" },
    { name: "Peradeniya Gardens", description: "Royal Botanic Gardens", time: "15 mins" },
    { name: "Kandy Lake", description: "Scenic artificial lake", time: "City center" },
    { name: "Bahirawakanda Temple", description: "Giant Buddha statue & views", time: "10 mins" },
    { name: "Kandy Cultural Show", description: "Traditional dance performances", time: "City center" },
    { name: "Tea Museum", description: "Ceylon tea history", time: "20 mins" },
    { name: "Udawattakele Forest", description: "Royal forest sanctuary", time: "10 mins" },
    { name: "Gadaladeniya Temple", description: "14th-century stone temple", time: "25 mins" }
  ];

  const routes = [
    { from: "Colombo Airport", to: "Kandy", price: "$70-85", time: "3.5 hours" },
    { from: "Kandy", to: "Sigiriya", price: "$50-60", time: "2 hours" },
    { from: "Kandy", to: "Dambulla", price: "$40-50", time: "1.5 hours" },
    { from: "Kandy", to: "Nuwara Eliya", price: "$45-55", time: "2.5 hours" },
    { from: "Kandy", to: "Ella", price: "$70-85", time: "4 hours" },
    { from: "Kandy", to: "Anuradhapura", price: "$80-95", time: "3.5 hours" },
    { from: "Kandy", to: "Polonnaruwa", price: "$65-80", time: "3 hours" },
    { from: "Kandy", to: "Colombo City", price: "$55-70", time: "3 hours" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-amber-600 to-orange-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4">
                <Landmark className="w-4 h-4" />
                <span>Cultural Capital Transport</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Kandy Taxi Service & Cultural Triangle Tours
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Explore Sri Lanka's cultural heartland with our reliable Kandy taxi service. Temple of the Tooth, Sigiriya, Dambulla & Peradeniya transfers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => sendWhatsApp("Hi, I need a Kandy taxi service.")}
                  className="bg-white text-amber-700 hover:bg-white/90 px-8 py-3 rounded-full font-semibold shadow-lg"
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
            Kandy <span className="text-primary">Attractions & Temples</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            UNESCO World Heritage city with ancient temples, colonial architecture, and stunning natural beauty.
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
                  <MapPin className="w-3 h-3" />
                  <span>{attraction.time}</span>
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
            Kandy Taxi <span className="text-primary">Prices & Routes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fixed prices for all routes to and from Kandy. Perfect gateway to the Cultural Triangle.
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
            <h2 className="text-2xl font-bold mb-6 text-primary">Kandy Taxi - Gateway to Sri Lanka's Cultural Triangle</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Kandy</strong>, the last royal capital of Sri Lanka, is a UNESCO World Heritage Site
                  and home to the sacred <strong>Temple of the Tooth Relic</strong>. Our <strong>Kandy taxi
                  service</strong> provides comfortable transport throughout this cultural region.
                </p>
                <p>
                  The <strong>Colombo to Kandy taxi</strong> route takes approximately 3.5 hours via the
                  scenic expressway. We offer airport pickups with direct transfers to Kandy hotels,
                  including stops at spice gardens and elephant orphanages upon request.
                </p>
                <p>
                  Kandy is the perfect base for exploring the <strong>Cultural Triangle</strong> - including
                  <strong> Sigiriya Rock Fortress</strong>, <strong>Dambulla Cave Temple</strong>, and the
                  ancient cities of <strong>Anuradhapura</strong> and <strong>Polonnaruwa</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Cultural Triangle Day Tours from Kandy</h3>
                <ul className="space-y-2">
                  {[
                    "Sigiriya Rock Fortress - UNESCO World Heritage",
                    "Dambulla Golden Cave Temple - Ancient frescoes",
                    "Polonnaruwa - Medieval capital ruins",
                    "Anuradhapura - Sacred ancient city",
                    "Minneriya Safari - Elephant gathering",
                    "Pinnawala Elephant Orphanage",
                    "Royal Botanic Gardens Peradeniya",
                    "Kandy Lake & Temple of Tooth combo tour"
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

export default KandyTaxi;

