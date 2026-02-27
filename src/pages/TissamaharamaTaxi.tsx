import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingCard from "@/components/BookingCard";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";
import { Check, MapPin, Clock, Car, Trees, Phone, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";

const TissamaharamaTaxi = () => {
  useEffect(() => {
    document.title = "Tissamaharama Taxi | Yala Safari Transport & Tissa Tours | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book Tissamaharama taxi service. Your gateway to Yala National Park safari. Airport transfers, Kataragama temple, Bundala bird sanctuary. Local experts. Call +94716520690");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Tissamaharama taxi, Tissa taxi, Yala taxi, Tissamaharama to Yala, Tissa safari, Tissamaharama airport transfer, Kataragama taxi, Bundala taxi, Tissamaharama transport, Yala National Park taxi");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://slgotravel.com/tissamaharama-taxi");
  }, []);

  const attractions = [
    { name: "Yala National Park", description: "Leopard capital of the world", time: "30 mins" },
    { name: "Tissa Wewa Lake", description: "Ancient irrigation reservoir", time: "5 mins" },
    { name: "Kataragama Temple", description: "Sacred multi-faith shrine", time: "20 mins" },
    { name: "Bundala National Park", description: "UNESCO bird sanctuary", time: "25 mins" },
    { name: "Kirinda Beach", description: "Ancient temple & lighthouse", time: "15 mins" },
    { name: "Sithulpawwa Temple", description: "2000-year-old rock temple", time: "25 mins" },
    { name: "Yala Block 5", description: "Less crowded safari zone", time: "45 mins" },
    { name: "Kumana National Park", description: "Bird paradise wetland", time: "1 hour" }
  ];

  const routes = [
    { from: "Colombo Airport", to: "Tissamaharama", price: "$100-120", time: "5 hours" },
    { from: "Ella", to: "Tissamaharama", price: "$55-65", time: "2.5 hours" },
    { from: "Galle", to: "Tissamaharama", price: "$70-85", time: "3 hours" },
    { from: "Mirissa", to: "Tissamaharama", price: "$60-75", time: "2.5 hours" },
    { from: "Tissamaharama", to: "Yala Gate", price: "$15-20", time: "30 mins" },
    { from: "Tissamaharama", to: "Kataragama", price: "$15-20", time: "20 mins" },
    { from: "Tissamaharama", to: "Arugam Bay", price: "$65-80", time: "2.5 hours" },
    { from: "Tissamaharama", to: "Kandy", price: "$110-130", time: "5.5 hours" }
  ];

  const safariPackages = [
    {
      name: "Half-Day Safari",
      time: "5:30 AM - 11:30 AM",
      includes: ["4x4 Jeep", "Park fees", "Breakfast", "Water"],
      best: "Leopard sightings"
    },
    {
      name: "Full-Day Safari",
      time: "5:30 AM - 6:00 PM",
      includes: ["4x4 Jeep", "Park fees", "Breakfast & Lunch", "Water"],
      best: "Complete wildlife experience"
    }
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
                <span>Gateway to Yala Safari</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Tissamaharama Taxi & Yala Safari Service
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Your local experts for Yala National Park safari. Based in Tissamaharama, we offer the best wildlife experiences with professional transport.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => sendWhatsApp("Hi, I need Tissamaharama taxi and Yala safari.")}
                  className="bg-white text-amber-700 hover:bg-white/90 px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Safari & Taxi
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

      {/* Safari Packages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Yala Safari <span className="text-primary">Packages</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience world-class wildlife safaris in Yala National Park - home to the highest density of leopards in the world.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {safariPackages.map((pkg) => (
              <div key={pkg.name} className="glass-card p-6 hover:shadow-lg transition-shadow border-2 border-primary/20">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Binoculars className="w-5 h-5" />
                  <span className="font-semibold">{pkg.name}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 inline mr-1" />{pkg.time}
                </p>
                <ul className="space-y-2 mb-4">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground">Best for: {pkg.best}</p>
                <Button
                  onClick={() => sendWhatsApp(`I want to book ${pkg.name} at Yala.`)}
                  className="w-full mt-4 ocean-gradient"
                >
                  Book {pkg.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Tissamaharama <span className="text-primary">Attractions</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Beyond Yala - discover ancient temples, bird sanctuaries, and pristine beaches in the deep south.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {attractions.map((attraction) => (
              <div key={attraction.name} className="glass-card p-5 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-1">{attraction.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{attraction.description}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{attraction.time} from Tissa</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Tissamaharama Taxi <span className="text-primary">Routes & Prices</span>
          </h2>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-primary">Tissamaharama - The Heart of Sri Lanka's Wildlife Country</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Tissamaharama</strong> (Tissa) is the gateway town to <strong>Yala National Park</strong>,
                  Sri Lanka's most famous wildlife reserve. Our <strong>Tissamaharama taxi service</strong> is
                  operated by locals who know every road, viewpoint, and the best safari timing.
                </p>
                <p>
                  We provide complete <strong>Yala safari packages</strong> including transport from any Sri Lanka
                  destination to Tissamaharama, hotel arrangements, and early morning safari pickup. Our
                  partnerships with the best safari jeep operators guarantee quality wildlife experiences.
                </p>
                <p>
                  The best time for <strong>Yala safari</strong> is February to July when water is scarce and
                  animals gather at waterholes. Morning safaris (5:30 AM start) offer the best chance of
                  spotting elusive <strong>Sri Lankan leopards</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What You Can See at Yala</h3>
                <ul className="space-y-2">
                  {[
                    "Sri Lankan Leopard - highest density in the world",
                    "Asian Elephants - herds of 50+",
                    "Sloth Bears - rare sightings possible",
                    "Spotted Deer & Sambar Deer",
                    "Wild Boar & Water Buffalo",
                    "Crocodiles - mugger & saltwater",
                    "200+ bird species including peacocks",
                    "Endemic species found nowhere else"
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

export default TissamaharamaTaxi;

