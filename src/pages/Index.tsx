import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SEOContentSection from "@/components/SEOContentSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import SafariSection from "@/components/SafariSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SEOContentSection />
      <AboutSection />
      <ServicesSection />
      <FleetSection />
      <SafariSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
