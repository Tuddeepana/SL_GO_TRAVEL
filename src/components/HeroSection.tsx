import BookingCard from "./BookingCard";
import heroBg from "@/assets/hero-bg.webp";
import { Star, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Sri Lanka Taxi Service Hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sri Lanka scenic landscape - Yala safari and beach transport"
          className="w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                4.9/5 Rated
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                <Shield className="w-3 h-3" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                <Clock className="w-3 h-3" />
                24/7 Service
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              #1 Sri Lanka Taxi Service &{" "}
              <span className="text-secondary">Yala Safari</span> Booking
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-xl font-medium">
              Colombo Airport Transfers • Private Tours • Yala Safari Packages
            </p>
            <p className="text-base text-primary-foreground/70 mb-8 max-w-xl">
              Safe, reliable & affordable transport across Sri Lanka. Trusted by 500+ tourists from UK, Germany, Australia & worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#services">
                <button className="ocean-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
                  Explore Services
                </button>
              </a>
              <a href="#safari">
                <button className="tropical-gradient text-secondary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
                  Book Yala Safari
                </button>
              </a>
            </div>

            {/* Quick contact */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-primary-foreground/80">
              <a href="tel:+94716520690" className="hover:text-secondary transition-colors">
                📞 +94 71 652 0690
              </a>
              <a href="https://wa.me/94716520690" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="flex-shrink-0 w-full lg:w-auto animate-slide-in-right delay-200">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
