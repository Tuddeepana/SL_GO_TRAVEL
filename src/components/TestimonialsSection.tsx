import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    name: "Emma Wilson",
    country: "United Kingdom",
    text: "Fantastic safari experience! The driver was very knowledgeable about wildlife and the jeep was comfortable. Highly recommend Slanka Taxi!",
    rating: 5,
  },
  {
    name: "Hans Mueller",
    country: "Germany",
    text: "We booked airport transfer and a 3-day tour. Everything was perfectly organized. Punctual, professional, and great value for money.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    country: "Australia",
    text: "The Yala safari was a once-in-a-lifetime experience. We saw leopards, elephants and so many birds. Our driver was amazing!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="section-title">
            What Our <span className="text-secondary">Guests Say</span>
          </h2>
          <div className="w-20 h-1 ocean-gradient rounded-full mx-auto mb-6" />
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`glass-card p-6 hover:shadow-xl transition-smooth scroll-reveal-scale ${cardsVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
