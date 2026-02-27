import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendWhatsApp } from "@/lib/whatsapp";
import { countries, iso2ToFlag } from "@/data/countries";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = ["Airport Transfer", "Day Tour", "Long Tour", "Hotel Transfer", "Yala Safari", "Custom Request"];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [countryCode, setCountryCode] = useState("+94");
  const [countrySearch, setCountrySearch] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 });

  // Using a compact common-country list from src/data/countries

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    const fullWhatsApp = `${countryCode} ${whatsapp}`.trim();
    const msg = `Hello Slanka Taxi,\n\nName: ${name}\nEmail: ${email}\nWhatsApp: ${fullWhatsApp}\nService: ${service}\nMessage: ${message}`;
    sendWhatsApp(msg);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="section-title">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 tropical-gradient rounded-full mx-auto mb-6" />
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info + Map */}
          <div className={`space-y-6 scroll-reveal-left ${contentVisible ? 'revealed' : ''}`}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 ocean-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">379 Jayasirimawatha, Thissamaharama, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 ocean-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+94716520690" className="text-sm text-primary hover:underline">+94 716520690</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 ocean-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:info@slgotravel.com" className="text-sm text-primary hover:underline">info@slgotravel.com</a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                title="Slanka Taxi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d81.2882!3d6.2834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTcnMDAuMiJOIDgxwrAxNycxNy41IkU!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={`glass-card p-6 md:p-8 space-y-4 scroll-reveal-right ${contentVisible ? 'revealed' : ''} delay-200`}>
            <h3 className="text-xl font-bold text-foreground font-display mb-2">Send Us a Message</h3>

            <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={(v) => { setCountryCode(v); setCountrySearch(""); }}>
                <SelectTrigger className="w-20 md:w-24">
                  <span className="text-sm text-center w-full">{countryCode}</span>
                </SelectTrigger>
                <SelectContent>
                  <div className="p-2">
                    <input
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search country or code..."
                      className="w-full rounded-md border border-input px-2 py-1 text-sm"
                    />
                  </div>
                  {countries
                    .filter((c) => {
                      const q = countrySearch.trim().toLowerCase();
                      if (!q) return true;
                      return (
                        c.name.toLowerCase().includes(q) ||
                        c.dial.includes(q) ||
                        c.iso2.toLowerCase().includes(q)
                      );
                    })
                    .map((c) => (
                      <SelectItem key={c.dial + c.iso2} value={c.dial}>
                        {`${iso2ToFlag(c.iso2)} ${c.name} ${c.dial}`}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <Input placeholder="WhatsApp Number" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="flex-1" />
            </div>

            <Select value={service} onValueChange={setService}>
              <SelectTrigger><SelectValue placeholder="Select Service" /></SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <textarea
              className="w-full h-28 rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <Button type="submit" className="w-full ocean-gradient text-primary-foreground gap-2 shadow-md hover:opacity-90">
              <Send className="w-4 h-4" /> Send via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
