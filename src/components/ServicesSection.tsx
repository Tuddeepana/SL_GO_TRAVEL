import { useState } from "react";
import { ChevronRight } from "lucide-react";
import serviceAirport from "@/assets/service-airport.jpg";
import serviceDaytour from "@/assets/service-daytour.jpg";
import serviceLongtour from "@/assets/service-longtour.jpg";
import serviceHotel from "@/assets/service-hotel.jpg";

const services = [
  {
    title: "Airport Transfer",
    description: "Safe and punctual airport pickup and drop service across Sri Lanka. Available 24/7 for all international and domestic flights.",
    image: serviceAirport,
  },
  {
    title: "Day Tours",
    description: "Explore Ella, Galle, Sigiriya and more with a private driver. Customizable itineraries for unforgettable day experiences.",
    image: serviceDaytour,
  },
  {
    title: "Long Tours",
    description: "Multi-day customized Sri Lanka travel packages. Cover the best destinations with comfortable accommodation arrangements.",
    image: serviceLongtour,
  },
  {
    title: "Hotel Transfer",
    description: "Comfortable and reliable hotel pickup and drop service. Seamless transfers between your hotel and any destination.",
    image: serviceHotel,
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 tropical-gradient rounded-full mx-auto mb-6" />
          <p className="section-subtitle">Professional transport & tourism services tailored for international travelers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">{service.title}</h3>
                <p className={`text-sm text-muted-foreground transition-all duration-300 ${expanded === i ? "" : "line-clamp-2"}`}>
                  {service.description}
                </p>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="mt-3 text-sm font-medium text-primary hover:text-ocean-light flex items-center gap-1 transition-colors"
                >
                  {expanded === i ? "Show Less" : "Learn More"}
                  <ChevronRight className={`w-4 h-4 transition-transform ${expanded === i ? "rotate-90" : ""}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
