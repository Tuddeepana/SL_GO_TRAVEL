import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="ocean-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-3">
              <img src="/logo_s.png" alt="Slanka Taxi" className="h-14 md:h-17 w-auto" />
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted travel partner in Sri Lanka. Safe, reliable, and affordable transport & safari services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#fleet" className="hover:text-secondary transition-colors">Fleet</a></li>
              <li><a href="#safari" className="hover:text-secondary transition-colors">Yala Safari</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Airport Transfer</li>
              <li>Day Tours</li>
              <li>Long Tours</li>
              <li>Hotel Transfer</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>+94 716520690</li>
              <li>info@slgotravel.com</li>
              <li>Thissamaharama, Sri Lanka</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} SlankaTaxi </span>
            {/*<img src="/logo_s.png" alt="Slanka Taxi" className="inline h-6 w-auto" />*/}
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
