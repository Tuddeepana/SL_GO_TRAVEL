import { useState } from "react";
import { Check, Users, Baby, MapPin, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { sendWhatsApp } from "@/lib/whatsapp";
import { countries, iso2ToFlag } from "@/data/countries";
import yalaSafari from "@/assets/yala-safari.jpg";

// Pricing configuration
const PRICING = {
  halfDay: {
    base: 80, // Base price per person USD
    child: 40, // Child price (50% discount)
    breakfast: 10,
    water: 5,
  },
  fullDay: {
    base: 140, // Base price per person USD
    child: 70, // Child price (50% discount)
    breakfast: 10,
    lunch: 15,
    water: 5,
  }
};

const SafariSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<'halfDay' | 'fullDay' | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [country, setCountry] = useState("United States");
  const [countrySearch, setCountrySearch] = useState("");
  const [date, setDate] = useState("");
  const [includeBreakfast, setIncludeBreakfast] = useState(true);
  const [includeLunch, setIncludeLunch] = useState(true);
  const [includeWater, setIncludeWater] = useState(true);

  const calculatePrice = () => {
    if (!selectedPackage) return 0;

    const pricing = PRICING[selectedPackage];
    let total = 0;

    // Base price for adults and children
    total += adults * pricing.base;
    total += children * pricing.child;

    // Add-ons
    if (includeBreakfast && pricing.breakfast) {
      total += (adults + children) * pricing.breakfast;
    }
    if (selectedPackage === 'fullDay' && includeLunch) {
      const fullDayPricing = PRICING.fullDay;
      total += (adults + children) * fullDayPricing.lunch;
    }
    if (includeWater && pricing.water) {
      total += (adults + children) * pricing.water;
    }

    return total;
  };

  const handleBooking = () => {
    const packageName = selectedPackage === 'halfDay' ? 'Half-Day' : 'Full-Day';
    const totalPrice = calculatePrice();

    const message = `
🦁 Yala Safari Booking Request

📦 Package: ${packageName} Safari
👥 Adults: ${adults}
👶 Children: ${children}
🌍 Country: ${country}
📅 Preferred Date: ${date || 'Not specified'}

🍽️ Inclusions:
${includeBreakfast ? '✅' : '❌'} Breakfast
${selectedPackage === 'fullDay' ? (includeLunch ? '✅' : '❌') + ' Lunch\n' : ''}${includeWater ? '✅' : '❌'} Bottled Water

💰 Estimated Total: $${totalPrice} USD

Please confirm availability and final pricing.
    `.trim();

    sendWhatsApp(message);
  };

  const resetForm = () => {
    setSelectedPackage(null);
    setAdults(2);
    setChildren(0);
    setDate("");
  };

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

          {!selectedPackage ? (
            // Package Selection - Responsive Grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
              {/* Half Day */}
              <div className="glass-card p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="tropical-gradient inline-block px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold text-secondary-foreground mb-3 sm:mb-4">
                  Popular Choice
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-2">Half Day Safari</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <span>⏰ 5:30 AM - 11:30 AM</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">6 hours</span>
                </p>

                <div className="mb-3 sm:mb-4 bg-muted/20 rounded-lg p-3">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">${PRICING.halfDay.base}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">per adult</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Children: ${PRICING.halfDay.child} <span className="text-green-600 font-semibold">(50% off)</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Private 4x4 safari jeep</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Park entrance fees included</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Breakfast box (+${PRICING.halfDay.breakfast}/person)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Bottled water (+${PRICING.halfDay.water}/person)</span>
                  </li>
                </ul>
                <Button
                  onClick={() => setSelectedPackage('halfDay')}
                  className="w-full ocean-gradient text-primary-foreground shadow-md text-sm sm:text-base py-5 sm:py-6"
                  size="lg"
                >
                  Select Half Day
                </Button>
              </div>

              {/* Full Day */}
              <div className="glass-card p-4 sm:p-6 md:p-8 border-2 border-secondary hover:shadow-2xl transition-all hover:-translate-y-1 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  BEST VALUE
                </div>
                <div className="ocean-gradient inline-block px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold text-primary-foreground mb-3 sm:mb-4 mt-2">
                  Most Popular
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-2">Full Day Safari</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <span>⏰ 5:30 AM - 6:00 PM</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">12+ hours</span>
                </p>

                <div className="mb-3 sm:mb-4 bg-secondary/10 rounded-lg p-3 border border-secondary/20">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-bold text-secondary">${PRICING.fullDay.base}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">per adult</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Children: ${PRICING.fullDay.child} <span className="text-green-600 font-semibold">(50% off)</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Private 4x4 safari jeep</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Park entrance fees included</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Breakfast box (+${PRICING.fullDay.breakfast}/person)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Packed lunch (+${PRICING.fullDay.lunch}/person)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Bottled water (+${PRICING.fullDay.water}/person)</span>
                  </li>
                </ul>
                <Button
                  onClick={() => setSelectedPackage('fullDay')}
                  className="w-full tropical-gradient text-secondary-foreground shadow-md text-sm sm:text-base py-5 sm:py-6"
                  size="lg"
                >
                  Select Full Day
                </Button>
              </div>
            </div>
          ) : (
            // Booking Form - Fully Responsive
            <div className="max-w-2xl mx-auto px-4 sm:px-0">
              <div className="glass-card p-4 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {selectedPackage === 'halfDay' ? 'Half-Day' : 'Full-Day'} Safari
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Fill in your details below
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={resetForm} className="w-full sm:w-auto text-xs sm:text-sm">
                    ← Change Package
                  </Button>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  {/* Adults & Children - Responsive Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-sm sm:text-base">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span>Adults</span>
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        max="20"
                        value={adults}
                        onChange={(e) => setAdults(Math.max(1, Number.parseInt(e.target.value) || 1))}
                        className="text-center text-base sm:text-lg font-semibold h-12 sm:h-14"
                      />
                      <p className="text-xs text-muted-foreground text-center">
                        ${PRICING[selectedPackage].base} each
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 text-sm sm:text-base">
                        <Baby className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span>Children</span>
                      </Label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        value={children}
                        onChange={(e) => setChildren(Math.max(0, Number.parseInt(e.target.value) || 0))}
                        className="text-center text-base sm:text-lg font-semibold h-12 sm:h-14"
                      />
                      <p className="text-xs text-muted-foreground text-center">
                        ${PRICING[selectedPackage].child} each
                      </p>
                    </div>
                  </div>

                  {/* Country Selection - Full Width on Mobile */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm sm:text-base">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span>Your Country</span>
                    </Label>
                    <Select value={country} onValueChange={(v) => { setCountry(v); setCountrySearch(""); }}>
                      <SelectTrigger className="h-12 sm:h-14 text-sm sm:text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px] sm:max-h-[400px]">
                        <div className="p-2 sticky top-0 bg-background z-10">
                          <input
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            placeholder="Search country..."
                            className="w-full rounded-md border border-input px-3 py-2 text-sm"
                          />
                        </div>
                        {countries
                          .filter((c) => {
                            const q = countrySearch.trim().toLowerCase();
                            if (!q) return true;
                            return c.name.toLowerCase().includes(q);
                          })
                          .map((c) => (
                            <SelectItem key={c.iso2} value={c.name} className="text-sm sm:text-base">
                              {`${iso2ToFlag(c.iso2)} ${c.name}`}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Selection - Full Width */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm sm:text-base">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span>Preferred Date</span>
                    </Label>
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="h-12 sm:h-14 text-sm sm:text-base"
                    />
                  </div>

                  {/* Meal Options - Better Mobile Layout */}
                  <div className="space-y-3">
                    <Label className="block font-semibold text-sm sm:text-base mb-3">
                      Meal & Refreshments
                    </Label>
                    <div className="space-y-2 sm:space-y-3">
                      {/* Breakfast */}
                      <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <Checkbox
                            id="breakfast"
                            checked={includeBreakfast}
                            onCheckedChange={(checked) => setIncludeBreakfast(checked as boolean)}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          />
                          <Label htmlFor="breakfast" className="cursor-pointer text-sm sm:text-base font-medium">
                            🥐 Breakfast Box
                          </Label>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap ml-2">
                          +${PRICING[selectedPackage].breakfast}/person
                        </span>
                      </div>

                      {/* Lunch - Full Day Only */}
                      {selectedPackage === 'fullDay' && (
                        <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-2 sm:gap-3 flex-1">
                            <Checkbox
                              id="lunch"
                              checked={includeLunch}
                              onCheckedChange={(checked) => setIncludeLunch(checked as boolean)}
                              className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                            <Label htmlFor="lunch" className="cursor-pointer text-sm sm:text-base font-medium">
                              🍱 Packed Lunch
                            </Label>
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap ml-2">
                            +${PRICING.fullDay.lunch}/person
                          </span>
                        </div>
                      )}

                      {/* Water */}
                      <div className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <Checkbox
                            id="water"
                            checked={includeWater}
                            onCheckedChange={(checked) => setIncludeWater(checked as boolean)}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          />
                          <Label htmlFor="water" className="cursor-pointer text-sm sm:text-base font-medium">
                            💧 Bottled Water (1.5L)
                          </Label>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap ml-2">
                          +${PRICING[selectedPackage].water}/person
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price Summary - Mobile Optimized */}
                  <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 sm:p-5 space-y-3 border-2 border-primary/10">
                    <div className="flex items-center gap-2 pb-2 border-b border-primary/20">
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <h4 className="font-bold text-base sm:text-lg">Price Breakdown</h4>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm">
                      {/* Safari Base */}
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          🚙 Safari ({adults} adult{adults > 1 ? 's' : ''})
                        </span>
                        <span className="font-semibold">${adults * PRICING[selectedPackage].base}</span>
                      </div>

                      {/* Children */}
                      {children > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            👶 Children ({children})
                          </span>
                          <span className="font-semibold">${children * PRICING[selectedPackage].child}</span>
                        </div>
                      )}

                      {/* Breakfast */}
                      {includeBreakfast && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            🥐 Breakfast ({adults + children})
                          </span>
                          <span className="font-semibold">${(adults + children) * PRICING[selectedPackage].breakfast}</span>
                        </div>
                      )}

                      {/* Lunch */}
                      {selectedPackage === 'fullDay' && includeLunch && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            🍱 Lunch ({adults + children})
                          </span>
                          <span className="font-semibold">${(adults + children) * PRICING.fullDay.lunch}</span>
                        </div>
                      )}

                      {/* Water */}
                      {includeWater && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            💧 Water ({adults + children})
                          </span>
                          <span className="font-semibold">${(adults + children) * PRICING[selectedPackage].water}</span>
                        </div>
                      )}
                    </div>

                    {/* Total */}
                    <div className="border-t-2 border-primary/30 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-base sm:text-lg">Total Price</span>
                        <span className="font-bold text-xl sm:text-2xl md:text-3xl text-primary">
                          ${calculatePrice()}
                          <span className="text-sm sm:text-base font-normal text-muted-foreground ml-1">USD</span>
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-right">
                        ✓ Final price confirmed upon booking
                      </p>
                    </div>
                  </div>

                  {/* Submit Button - Mobile Optimized */}
                  <Button
                    onClick={handleBooking}
                    className="w-full ocean-gradient text-primary-foreground text-base sm:text-lg font-semibold py-6 sm:py-7 shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    <span className="hidden sm:inline">📱 Send Booking Request via WhatsApp</span>
                    <span className="sm:hidden">📱 Book via WhatsApp</span>
                  </Button>

                  {/* Info Text */}
                  <p className="text-[10px] sm:text-xs text-center text-muted-foreground leading-relaxed">
                    Our team will confirm availability and finalize your booking within 2 hours.
                    <span className="hidden sm:inline"> You'll receive a confirmation message on WhatsApp.</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SafariSection;
