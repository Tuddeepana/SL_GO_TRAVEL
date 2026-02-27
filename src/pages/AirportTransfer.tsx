import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingCard from "@/components/BookingCard";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import { Check, Plane, Clock, Car, Shield, Phone, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";

const AirportTransfer = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sri Lanka Airport Transfer Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Slanka Taxi"
    },
    "serviceType": "Airport Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "description": "24/7 airport pickup and transfer service from Colombo Bandaranaike International Airport to all destinations in Sri Lanka."
  };

  const features = [
    { icon: Plane, title: "Flight Tracking", description: "We monitor your flight and adjust pickup time for delays - no extra charge" },
    { icon: Clock, title: "24/7 Service", description: "Arrivals at any time - midnight, early morning, or late evening" },
    { icon: Shield, title: "Meet & Greet", description: "Driver waits at arrival hall with your name on a sign" },
    { icon: Users, title: "60 Min Free Wait", description: "Complimentary waiting time from flight landing" },
    { icon: CreditCard, title: "Fixed Prices", description: "No surprises - price agreed before booking" },
    { icon: Car, title: "Private Transfer", description: "Direct to your destination, no sharing with others" }
  ];

  const routes = [
    { destination: "Colombo City (Fort/Pettah)", price: "$35-40", time: "45 mins", popular: false },
    { destination: "Negombo", price: "$20-25", time: "20 mins", popular: true },
    { destination: "Kandy", price: "$70-85", time: "3.5 hours", popular: true },
    { destination: "Galle", price: "$65-80", time: "2.5 hours", popular: true },
    { destination: "Ella", price: "$120-140", time: "6 hours", popular: true },
    { destination: "Yala / Tissamaharama", price: "$100-120", time: "5 hours", popular: true },
    { destination: "Sigiriya / Dambulla", price: "$85-100", time: "4 hours", popular: false },
    { destination: "Nuwara Eliya", price: "$95-115", time: "5 hours", popular: false },
    { destination: "Bentota / Beruwala", price: "$50-60", time: "1.5 hours", popular: false },
    { destination: "Hikkaduwa", price: "$60-75", time: "2 hours", popular: false },
    { destination: "Mirissa", price: "$75-90", time: "2.5 hours", popular: false },
    { destination: "Trincomalee", price: "$130-150", time: "6 hours", popular: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sri Lanka Airport Transfer | Colombo Airport Taxi | 24/7 Pickup"
        description="Book Colombo airport transfer & taxi service. 24/7 pickup from Bandaranaike International Airport (CMB). Fixed prices to Colombo, Kandy, Galle, Ella, Yala. Flight tracking included. Call +94716520690"
        keywords="Sri Lanka airport transfer, Colombo airport taxi, Bandaranaike airport pickup, CMB airport transfer, airport taxi Sri Lanka, Colombo airport to Kandy, airport to Galle, airport to Ella, Sri Lanka airport pickup, Katunayake airport taxi"
        canonicalUrl="/airport-transfer-sri-lanka"
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 ocean-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-4">
                <Plane className="w-4 h-4" />
                <span>24/7 Airport Pickup Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Sri Lanka Airport Transfer & Taxi Service
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Stress-free airport pickup from Colombo Bandaranaike International Airport (CMB).
                Pre-book your private taxi and start your Sri Lanka adventure the right way.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => sendWhatsApp("Hi, I need an airport transfer from Colombo Airport.")}
                  className="tropical-gradient text-secondary-foreground px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Airport Pickup
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
            Why Book <span className="text-primary">Airport Transfer</span> With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 ocean-gradient rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Airport Transfer <span className="text-primary">Prices</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fixed prices from Colombo Bandaranaike International Airport (CMB/BIA) to all destinations.
            Prices include vehicle, driver, fuel, tolls, and 60 minutes free waiting time.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((route) => (
              <div key={route.destination} className={`glass-card p-5 hover:shadow-lg transition-shadow ${route.popular ? 'border-2 border-primary/30' : ''}`}>
                {route.popular && (
                  <span className="inline-block text-xs font-medium text-primary mb-2">⭐ Popular</span>
                )}
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Plane className="w-4 h-4" />
                  <span className="text-xs">From Colombo Airport</span>
                </div>
                <p className="font-semibold mb-2">→ {route.destination}</p>
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
            * Prices shown are for sedan vehicles (up to 3 passengers). Van prices for groups available on request.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Book <span className="text-primary">Airport Pickup</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Contact Us", description: "WhatsApp or call with your flight details" },
              { step: "2", title: "Confirm Booking", description: "We confirm price, vehicle, and pickup time" },
              { step: "3", title: "Flight Tracking", description: "We monitor your flight and adjust if delayed" },
              { step: "4", title: "Meet & Greet", description: "Driver waits at arrivals with your name" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Colombo Airport Transfer - Your Complete Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Bandaranaike International Airport (BIA)</strong>, also known as Colombo Airport or
                  Katunayake Airport (CMB), is Sri Lanka's main international gateway. Located 35 km north of
                  Colombo city, our <strong>airport transfer service</strong> provides the most convenient way
                  to reach your destination.
                </p>
                <p>
                  Unlike taxis at the airport, pre-booking with <strong>Slanka Taxi</strong> guarantees a
                  fixed price, professional driver, and zero hassle. We track your flight and wait at
                  arrivals - even if your flight is delayed.
                </p>
                <p>
                  Popular routes include <strong>Colombo airport to Kandy</strong> (3.5 hours via expressway),
                  <strong>airport to Galle</strong> (2.5 hours), <strong>airport to Ella</strong> (6 hours),
                  and <strong>airport to Yala</strong> (5 hours). All transfers are private - no sharing.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What to Expect</h3>
                <ul className="space-y-2">
                  {[
                    "Driver meets you at arrival hall with name board",
                    "Help with luggage to vehicle",
                    "Air-conditioned, comfortable vehicles",
                    "Clean bottled water provided",
                    "WiFi hotspot available (on request)",
                    "Child seats available (request in advance)",
                    "Scenic route options for photography",
                    "Recommendations for restaurants/stops"
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

export default AirportTransfer;
