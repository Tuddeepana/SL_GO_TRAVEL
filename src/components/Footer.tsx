import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ocean-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img src="/logo_s.png" alt="Slanka Taxi - Sri Lanka Tourist Transport" className="h-14 md:h-17 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Sri Lanka's trusted taxi and safari service. Safe, reliable transport for tourists since 2020.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/slankatxi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/slankatxi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/slankatxi" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@slankatxi" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Taxi Services */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Taxi Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/colombo-taxi" className="hover:text-secondary transition-colors">Colombo Taxi</Link></li>
              <li><Link to="/airport-transfer-sri-lanka" className="hover:text-secondary transition-colors">Airport Transfer</Link></li>
              <li><Link to="/kandy-taxi" className="hover:text-secondary transition-colors">Kandy Taxi</Link></li>
              <li><Link to="/galle-taxi" className="hover:text-secondary transition-colors">Galle Taxi</Link></li>
              <li><Link to="/ella-taxi" className="hover:text-secondary transition-colors">Ella Taxi</Link></li>
              <li><Link to="/tissamaharama-taxi" className="hover:text-secondary transition-colors">Tissamaharama Taxi</Link></li>
            </ul>
          </div>

          {/* Safari & Tours */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Safari & Tours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/yala-safari" className="hover:text-secondary transition-colors">Yala Safari Booking</Link></li>
              <li><Link to="/yala-taxi" className="hover:text-secondary transition-colors">Yala Taxi Service</Link></li>
              <li><Link to="/#services" className="hover:text-secondary transition-colors">Day Tours</Link></li>
              <li><Link to="/#services" className="hover:text-secondary transition-colors">Multi-Day Tours</Link></li>
              <li><Link to="/#fleet" className="hover:text-secondary transition-colors">Our Fleet</Link></li>
              <li><Link to="/#about" className="hover:text-secondary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/#services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/#testimonials" className="hover:text-secondary transition-colors">Reviews</Link></li>
              <li><Link to="/#faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/#contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+94716520690" className="hover:text-secondary transition-colors">+94 71 652 0690</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:info@slgotravel.com" className="hover:text-secondary transition-colors">info@slgotravel.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>379 Jayasirimawatha,<br />Tissamaharama, Sri Lanka</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/94716520690"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Slanka Taxi. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-primary-foreground/50">
              <span>Sri Lanka Taxi Service</span>
              <span>•</span>
              <span>Yala Safari Booking</span>
              <span>•</span>
              <span>Airport Transfer</span>
              <span>•</span>
              <span>Private Tours</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
