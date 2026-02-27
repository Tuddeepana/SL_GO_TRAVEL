import { Shield, Users, Clock, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { icon: Users, value: "500+", label: "Happy Tourists" },
  { icon: Shield, value: "100%", label: "Safe Rides" },
  { icon: Clock, value: "24/7", label: "Available" },
  { icon: MapPin, value: "50+", label: "Destinations" },
];

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="section-title">
            About <span className="text-primary">Slanka Taxi</span>
          </h2>
          <div className="w-20 h-1 tropical-gradient rounded-full mx-auto mb-6" />
        </div>

        <div
          ref={textRef}
          className={`max-w-3xl mx-auto text-center mb-16 scroll-reveal ${textVisible ? 'revealed' : ''} delay-200`}
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            Slanka Taxi is a trusted startup transport and tourism service in Sri Lanka offering safe, reliable, and affordable travel solutions. Our experienced drivers ensure comfortable airport transfers, private tours, hotel transfers, and Yala safari experiences. We focus on customer safety, punctuality, and unforgettable travel memories across Sri Lanka.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-card p-6 text-center hover:shadow-xl transition-smooth scroll-reveal-scale ${statsVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
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
