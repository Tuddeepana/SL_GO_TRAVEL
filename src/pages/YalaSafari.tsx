import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/FAQSection";
import { useEffect } from "react";
import { Check, Clock, Binoculars, Phone, Camera, Star, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";
import yalaSafari from "@/assets/yala-safari.jpg";

const YalaSafari = () => {
  useEffect(() => {
    document.title = "Yala Safari Booking | Leopard Safari Sri Lanka | Best Yala Tours | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book Yala National Park safari in Sri Lanka. See leopards, elephants & wildlife. Half-day & full-day jeep safaris with experienced guides. Best prices guaranteed. Call +94716520690");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Yala safari, Yala National Park, Yala safari booking, Yala leopard safari, Sri Lanka safari, Yala jeep safari, Yala wildlife tour, Yala safari price, Yala safari package, best Yala safari");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://slgotravel.com/yala-safari");
  }, []);

  const halfDayIncludes = [
    "Private luxury 4x4 safari jeep",
    "Experienced wildlife tracker/guide",
    "Park entrance fees included",
    "Complimentary breakfast box",
    "Bottled water & refreshments",
    "Hotel pickup from Tissamaharama area",
    "Binoculars available on request",
    "Photography guidance"
  ];

  const fullDayIncludes = [
    "Private luxury 4x4 safari jeep",
    "Expert wildlife tracker/guide",
    "Park entrance fees included",
    "Full breakfast & packed lunch",
    "Bottled water & refreshments",
    "Hotel pickup from Tissamaharama area",
    "Binoculars & wildlife checklist",
    "Multiple zones coverage",
    "Best chance for rare species"
  ];

  const wildlife = [
    { name: "Sri Lankan Leopard", description: "Highest density in the world - 1 leopard per km²", chance: "High" },
    { name: "Asian Elephant", description: "Herds of 50+ elephants, especially near water", chance: "Very High" },
    { name: "Sloth Bear", description: "Rare but possible, especially in dry season", chance: "Moderate" },
    { name: "Spotted Deer", description: "Large herds throughout the park", chance: "Guaranteed" },
    { name: "Wild Boar", description: "Common throughout all zones", chance: "Very High" },
    { name: "Crocodile", description: "Mugger & saltwater species at water bodies", chance: "High" },
    { name: "Peacock", description: "Stunning displays, especially mornings", chance: "Guaranteed" },
    { name: "Water Buffalo", description: "Wild herds at grasslands & lakes", chance: "High" }
  ];

  const bestTimes = [
    { month: "February - April", description: "Peak dry season, best for leopards", rating: "★★★★★" },
    { month: "May - July", description: "Good wildlife viewing, fewer crowds", rating: "★★★★☆" },
    { month: "August - October", description: "Partial closure for breeding", rating: "★★☆☆☆" },
    { month: "November - January", description: "Reopening, good bird watching", rating: "★★★☆☆" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={yalaSafari} alt="Yala Safari Leopard" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4 text-white">
              <Binoculars className="w-4 h-4" />
              <span>Sri Lanka's #1 Wildlife Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Yala National Park Safari
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience the thrill of spotting leopards, elephants, and exotic wildlife in Yala -
              home to the highest density of leopards in the world. Professional guides, luxury jeeps, all-inclusive packages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => sendWhatsApp("Hi, I want to book a Yala Safari.")}
                className="tropical-gradient text-secondary-foreground px-8 py-3 rounded-full font-semibold shadow-lg text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Safari Now
              </Button>
              <a href="tel:+94716520690">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 rounded-full text-lg">
                  Call: +94 71 652 0690
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>500+ Happy Tourists</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Licensed Operators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Yala Safari <span className="text-primary">Packages</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose your perfect wildlife adventure. All packages include private jeep, guide, meals, and park fees.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Half Day */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="tropical-gradient inline-block px-4 py-1 rounded-full text-sm font-semibold text-secondary-foreground mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Half-Day Safari</h3>
              <p className="text-muted-foreground mb-4">
                <Clock className="w-4 h-4 inline mr-1" />
                5:30 AM - 11:30 AM (6 hours)
              </p>
              <ul className="space-y-3 mb-6">
                {halfDayIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => sendWhatsApp("I want to book Half-Day Yala Safari package.")}
                className="w-full ocean-gradient text-primary-foreground shadow-md text-lg py-6"
              >
                Book Half-Day Safari
              </Button>
            </div>

            {/* Full Day */}
            <div className="glass-card p-8 border-2 border-secondary relative overflow-hidden">
              <div className="ocean-gradient inline-block px-4 py-1 rounded-full text-sm font-semibold text-primary-foreground mb-4">
                Best Value - Full Experience
              </div>
              <h3 className="text-2xl font-bold mb-2">Full-Day Safari</h3>
              <p className="text-muted-foreground mb-4">
                <Clock className="w-4 h-4 inline mr-1" />
                5:30 AM - 6:00 PM (12+ hours)
              </p>
              <ul className="space-y-3 mb-6">
                {fullDayIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => sendWhatsApp("I want to book Full-Day Yala Safari package.")}
                className="w-full tropical-gradient text-secondary-foreground shadow-md text-lg py-6"
              >
                Book Full-Day Safari
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Wildlife at <span className="text-primary">Yala National Park</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Yala is home to 44 mammal species and 215 bird species. Here's what you can expect to see:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wildlife.map((animal) => (
              <div key={animal.name} className="glass-card p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    animal.chance === 'Guaranteed' ? 'bg-green-100 text-green-700' :
                    animal.chance === 'Very High' ? 'bg-blue-100 text-blue-700' :
                    animal.chance === 'High' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {animal.chance}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{animal.name}</h3>
                <p className="text-sm text-muted-foreground">{animal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Best Time to Visit <span className="text-primary">Yala</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Plan your safari for the best wildlife encounters. Peak season is February to July.
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {bestTimes.map((period) => (
              <div key={period.month} className="glass-card p-5 text-center">
                <p className="font-semibold mb-1">{period.month}</p>
                <p className="text-yellow-500 mb-2">{period.rating}</p>
                <p className="text-sm text-muted-foreground">{period.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-primary">Yala Safari - The Ultimate Sri Lanka Wildlife Experience</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Yala National Park</strong> is Sri Lanka's most visited and second-largest national park,
                  covering nearly 1,000 km² of protected wilderness. Famous for having the <strong>highest density
                  of leopards</strong> in the world (approximately 1 leopard per square kilometer), Yala offers
                  unparalleled wildlife viewing opportunities.
                </p>
                <p>
                  Our <strong>Yala safari packages</strong> are designed for optimal wildlife sightings. We use
                  experienced trackers who know the park intimately - leopard territories, elephant corridors,
                  and the best waterholes for wildlife photography.
                </p>
                <p>
                  <strong>Book your Yala safari</strong> with Slanka Taxi for a complete experience. We handle
                  everything: transport from your hotel, safari jeep, park permits, meals, and expert guidance.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Yala Safari Tips</h3>
                <ul className="space-y-2">
                  {[
                    "Start early (5:30 AM) - leopards are most active at dawn",
                    "Wear neutral colors - avoid bright clothing",
                    "Bring binoculars and camera with zoom lens",
                    "Stay quiet and patient for best sightings",
                    "February-July offers best dry season viewing",
                    "Full-day safaris explore more zones",
                    "Book 1-2 days in advance during peak season",
                    "Combine with Bundala for birding"
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{tip}</span>
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

export default YalaSafari;

