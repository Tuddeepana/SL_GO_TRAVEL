import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEOContentSection from "@/components/SEOContentSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const AirportTransfer = () => {
  useEffect(() => {
    document.title = "Airport Transfer Sri Lanka | Colombo Airport Pickup | SL Go Travel";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Book reliable airport transfers from Katunayake Airport. Safe, comfortable, and affordable private pickups across Sri Lanka with SL Go Travel.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="py-12 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-primary">Sri Lanka Airport Transfer Service</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Pre-book your Colombo airport pickup and drop-off. We provide private, direct transfers to any destination in Sri Lanka. 
          Enjoy a stress-free transition from the airport to your hotel or safari destination.
        </p>
      </div>
      <SEOContentSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AirportTransfer;
