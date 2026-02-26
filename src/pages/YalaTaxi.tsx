import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEOContentSection from "@/components/SEOContentSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const YalaTaxi = () => {
  useEffect(() => {
    document.title = "Yala Taxi Service | Yala Safari Transport | Slanka Taxi";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Safe and affordable taxi service in Yala National Park area. Book your Yala taxi and safari transport with Slanka Taxi.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="py-12 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-primary">Yala Taxi Service & Safari Transport</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to the premier Yala taxi service. We provide reliable transportation to and from Yala National Park, 
          ensuring you have a comfortable journey through the wilderness of Sri Lanka.
        </p>
      </div>
      <SEOContentSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default YalaTaxi;
