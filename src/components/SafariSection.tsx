import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsApp } from "@/lib/whatsapp";
import yalaSafari from "@/assets/yala-safari.jpg";

const halfDayIncludes = [
  "Private luxury 4x4 safari jeep",
  "Fuel charges",
  "Park entrance fees",
  "Breakfast",
  "Bottled water",
];

const fullDayIncludes = [
  "Private luxury 4x4 safari jeep",
  "Fuel charges",
  "Park entrance fees",
  "Breakfast & Lunch",
  "Bottled water",
];

const SafariSection = () => {
  return (
    <section id="safari" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={yalaSafari} alt="Yala Safari" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-primary-foreground">
              Book <span className="text-secondary">Yala Safari</span>
            </h2>
            <div className="w-20 h-1 tropical-gradient rounded-full mx-auto mb-6" />
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Experience the thrill of spotting leopards, elephants, and exotic birds in Yala National Park
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Half Day */}
            <div className="glass-card p-6 md:p-8">
              <div className="tropical-gradient inline-block px-4 py-1 rounded-full text-sm font-semibold text-secondary-foreground mb-4">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display mb-4">Half Day Safari</h3>
              <ul className="space-y-3 mb-6">
                {halfDayIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => sendWhatsApp("I would like to book Half Day Yala Safari package.")}
                className="w-full ocean-gradient text-primary-foreground shadow-md hover:opacity-90"
              >
                Book Half Day Safari
              </Button>
            </div>

            {/* Full Day */}
            <div className="glass-card p-6 md:p-8 border-2 border-secondary">
              <div className="ocean-gradient inline-block px-4 py-1 rounded-full text-sm font-semibold text-primary-foreground mb-4">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display mb-4">Full Day Safari</h3>
              <ul className="space-y-3 mb-6">
                {fullDayIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => sendWhatsApp("I would like to book Full Day Yala Safari package.")}
                className="w-full tropical-gradient text-secondary-foreground shadow-md hover:opacity-90"
              >
                Book Full Day Safari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariSection;
