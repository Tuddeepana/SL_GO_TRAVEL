import BookingCard from "./BookingCard";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sri Lanka beach safari"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Reliable Tourist Transport &{" "}
              <span className="text-secondary">Yala Safari</span> in Sri Lanka
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Airport Transfers • Private Tours • Yala Safari Packages
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#services">
                <button className="ocean-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
                  Explore Services
                </button>
              </a>
              <a href="#safari">
                <button className="tropical-gradient text-secondary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
                  Book Safari
                </button>
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
