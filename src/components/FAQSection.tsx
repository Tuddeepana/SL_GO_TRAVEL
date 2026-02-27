import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    question: "How much does a taxi from Colombo Airport cost?",
    answer: "Taxi prices from Colombo Bandaranaike International Airport vary by destination. Colombo city: $35-45 USD, Kandy: $70-85 USD, Galle: $65-80 USD, Ella: $120-140 USD, Yala/Tissamaharama: $100-120 USD. All prices are for private, air-conditioned vehicles with professional drivers."
  },
  {
    question: "How do I book a Yala Safari in Sri Lanka?",
    answer: "Book your Yala Safari with Slanka Taxi via WhatsApp at +94716520690 or through our website. We offer half-day (6 AM - 12 PM) and full-day safari packages including private 4x4 jeep, park entrance fees, breakfast/lunch, bottled water, and experienced wildlife guides. Morning safaris offer the best chances of leopard sightings."
  },
  {
    question: "Is Slanka Taxi available 24/7?",
    answer: "Yes! Slanka Taxi operates 24 hours a day, 7 days a week, 365 days a year. We provide airport pickups at any time, including late-night and early-morning flights. Our drivers are always ready to assist you. Contact us anytime via WhatsApp or phone at +94716520690."
  },
  {
    question: "What areas does Slanka Taxi cover in Sri Lanka?",
    answer: "We cover all major tourist destinations across Sri Lanka including: Colombo, Kandy, Galle, Ella, Sigiriya, Nuwara Eliya, Yala National Park, Mirissa, Trincomalee, Negombo, Bentota, Unawatuna, Hikkaduwa, Arugam Bay, Jaffna, Anuradhapura, Polonnaruwa, Dambulla, and all airports (Colombo BIA, Mattala, Jaffna)."
  },
  {
    question: "What types of vehicles are available?",
    answer: "We offer a diverse fleet: Compact cars (Toyota Aqua/Vitz) for couples, Sedans (Toyota Premio/Axio) for small families, KDH vans for groups up to 8 passengers, and High-roof KDH vans for larger groups with extra luggage space. All vehicles are air-conditioned, GPS-equipped, clean, and well-maintained."
  },
  {
    question: "Do I need to pay in advance?",
    answer: "No advance payment is required for most services. You can pay the driver directly in cash (Sri Lankan Rupees or USD) at the end of your trip. For multi-day tours or during peak season, we may request a small deposit to confirm your booking."
  },
  {
    question: "Are your drivers English speaking?",
    answer: "Yes, all our drivers speak conversational English and are trained in customer service. Many also speak basic German, French, or other languages. Our drivers are knowledgeable about local attractions, restaurants, and can provide helpful travel tips."
  },
  {
    question: "What is the best time to visit Yala National Park?",
    answer: "The best time to visit Yala is from February to July when water levels are low and wildlife congregates around water holes. The park is partially closed from September to mid-October for wildlife breeding. Peak leopard sighting season is February to April."
  },
  {
    question: "Can I customize my tour itinerary?",
    answer: "Absolutely! We specialize in customized tours. Tell us your interests, timeframe, and budget, and we'll create a personalized itinerary. Whether you want wildlife safaris, cultural sites, beaches, hill country, or a combination - we'll plan it for you."
  },
  {
    question: "Is it safe to travel with Slanka Taxi?",
    answer: "Safety is our top priority. All drivers are licensed, insured, and background-checked. Our vehicles undergo regular maintenance and safety inspections. We have GPS tracking, 24/7 customer support, and comprehensive travel insurance. We maintain a 100% safe journey record."
  }
];

const FAQSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="section-title">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-20 h-1 ocean-gradient rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Everything you need to know about taxi services and travel in Sri Lanka
          </p>
        </div>

        <div
          ref={accordionRef}
          className={`max-w-3xl mx-auto scroll-reveal ${accordionVisible ? 'revealed' : ''} delay-200`}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional SEO Text */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions? Contact us via WhatsApp at{" "}
            <a href="https://wa.me/94716520690" className="text-primary font-medium hover:underline">
              +94 71 652 0690
            </a>{" "}
            or email us at{" "}
            <a href="mailto:info@slgotravel.com" className="text-primary font-medium hover:underline">
              info@slgotravel.com
            </a>
            . We're available 24/7 to help plan your Sri Lanka adventure!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

