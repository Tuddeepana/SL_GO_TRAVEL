import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";
import fleetMinicar from "@/assets/fleet-minicar.jpg";
import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetKdh from "@/assets/fleet-kdh.jpg";
import fleetKdhHighroof from "@/assets/fleet-kdh-highroof.jpg";

const fleet = [
  { type: "Mini Car", capacity: 3, pricePerKm: 120, image: fleetMinicar },
  { type: "Sedan", capacity: 4, pricePerKm: 150, image: fleetSedan },
  { type: "KDH Van", capacity: 9, pricePerKm: 200, image: fleetKdh },
  { type: "KDH High Roof", capacity: 14, pricePerKm: 230, image: fleetKdhHighroof },
];

const FleetSection = () => {
  const handleInquire = () => {
    sendWhatsApp("Hello, I would like to inquire about your vehicle fleet.");
  };

  return (
    <section id="fleet" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our Premium <span className="text-secondary">Fleet</span>
          </h2>
          <div className="w-20 h-1 ocean-gradient rounded-full mx-auto mb-6" />
          <p className="section-subtitle">Comfortable and well-maintained vehicles for every group size</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {fleet.map((v) => (
            <div key={v.type} className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden bg-muted/20">
                <img
                  src={v.image}
                  alt={v.type}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">{v.type}</h3>
                <div className="flex items-center justify-center gap-1 text-muted-foreground mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{v.capacity} passengers</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={handleInquire} size="lg" className="ocean-gradient text-primary-foreground shadow-lg hover:opacity-90 px-8">
            Inquire About Our Fleet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
