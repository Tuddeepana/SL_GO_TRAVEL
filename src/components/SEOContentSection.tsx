import { MapPin, Clock, Shield, Star, Car, Plane } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Safe & Reliable",
    description: "Licensed, insured drivers with verified backgrounds"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for all your travel needs"
  },
  {
    icon: Star,
    title: "Top-Rated Service",
    description: "4.9★ rating from 500+ satisfied tourists"
  },
  {
    icon: Car,
    title: "Modern Fleet",
    description: "Air-conditioned, GPS-equipped vehicles"
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Colombo BIA pickup & drop-off 24/7"
  },
  {
    icon: MapPin,
    title: "Island-Wide Coverage",
    description: "All destinations across Sri Lanka"
  }
];

const SEOContentSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-4">
              <div className="w-12 h-12 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main SEO Content */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Sri Lanka's Premier Taxi & Safari Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for safe, comfortable, and affordable travel across Sri Lanka
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Reliable Sri Lanka Taxi Service
              </h3>
              <p>
                <strong>Slanka Taxi</strong> is a leading <strong>Sri Lanka taxi service</strong> providing
                professional transport solutions for tourists and travelers. Based in Tissamaharama near
                <strong> Yala National Park</strong>, we specialize in <strong>airport transfers</strong>,
                <strong> Yala safari bookings</strong>, and private tours across the island.
              </p>
              <p>
                Whether you need a <strong>Colombo airport taxi</strong>, <strong>Ella taxi service</strong>,
                <strong> Kandy taxi</strong>, or <strong>Galle taxi</strong>, our experienced drivers provide
                safe, comfortable, and punctual transport. We serve all major tourist destinations including
                Sigiriya, Nuwara Eliya, Mirissa, Trincomalee, Negombo, and beyond.
              </p>
              <p>
                Our <strong>Sri Lanka airport transfer</strong> service operates 24/7 from
                <strong> Bandaranaike International Airport (CMB)</strong> to any destination. Pre-book your
                taxi online or via WhatsApp for a stress-free arrival.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Yala Safari & Wildlife Tours
              </h3>
              <p>
                Experience the thrill of a <strong>Yala safari</strong> with our professional 4x4 jeep tours.
                <strong> Yala National Park</strong> is home to the world's highest density of leopards,
                along with elephants, sloth bears, crocodiles, and over 200 bird species.
              </p>
              <p>
                Our <strong>Yala safari packages</strong> include private luxury jeeps, park entrance fees,
                meals, and experienced wildlife trackers. We offer both half-day morning safaris
                (5:30 AM - 11:30 AM) and full-day adventures for serious wildlife enthusiasts.
              </p>
              <p>
                <strong>Tissamaharama taxi</strong> services connect you from any location to Yala. We also
                arrange <strong>Udawalawe safari</strong>, <strong>Minneriya safari</strong>, and
                <strong> Wilpattu safari</strong> tours with comfortable transport from your hotel.
              </p>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6">Popular Taxi Routes in Sri Lanka</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Colombo Airport → Colombo City</p>
                <p className="text-muted-foreground text-xs mt-1">From $35 • 45 mins</p>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Colombo Airport → Kandy</p>
                <p className="text-muted-foreground text-xs mt-1">From $75 • 3.5 hours</p>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Colombo Airport → Galle</p>
                <p className="text-muted-foreground text-xs mt-1">From $70 • 2.5 hours</p>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Colombo Airport → Ella</p>
                <p className="text-muted-foreground text-xs mt-1">From $130 • 6 hours</p>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Colombo → Yala (Tissamaharama)</p>
                <p className="text-muted-foreground text-xs mt-1">From $100 • 5 hours</p>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Ella → Yala</p>
                <p className="text-muted-foreground text-xs mt-1">From $60 • 2.5 hours</p>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Kandy → Sigiriya</p>
                <p className="text-muted-foreground text-xs mt-1">From $50 • 2 hours</p>
              </div>
              <div className="glass-card p-4 text-center hover:shadow-lg transition-shadow">
                <p className="font-medium">Galle → Mirissa</p>
                <p className="text-muted-foreground text-xs mt-1">From $25 • 40 mins</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by travelers from</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="px-3 py-1 bg-muted rounded-full">🇬🇧 United Kingdom</span>
              <span className="px-3 py-1 bg-muted rounded-full">🇩🇪 Germany</span>
              <span className="px-3 py-1 bg-muted rounded-full">🇫🇷 France</span>
              <span className="px-3 py-1 bg-muted rounded-full">🇦🇺 Australia</span>
              <span className="px-3 py-1 bg-muted rounded-full">🇺🇸 United States</span>
              <span className="px-3 py-1 bg-muted rounded-full">🇨🇦 Canada</span>
              <span className="px-3 py-1 bg-muted rounded-full">🇳🇱 Netherlands</span>
              <span className="px-3 py-1 bg-muted rounded-full">🇨🇭 Switzerland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
