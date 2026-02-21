import { Shield, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Tourists" },
  { icon: Shield, value: "100%", label: "Safe Rides" },
  { icon: Clock, value: "24/7", label: "Available" },
  { icon: MapPin, value: "50+", label: "Destinations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            About <span className="text-primary">SL Go Travel</span>
          </h2>
          <div className="w-20 h-1 tropical-gradient rounded-full mx-auto mb-6" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg">
            SL Go Travel is a trusted startup transport and tourism service in Sri Lanka offering safe, reliable, and affordable travel solutions. Our experienced drivers ensure comfortable airport transfers, private tours, hotel transfers, and Yala safari experiences. We focus on customer safety, punctuality, and unforgettable travel memories across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
