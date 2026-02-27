import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Navigation links - conditional based on current page
  const navLinks = isHomePage
    ? [
        { label: "Home", href: "#home", isAnchor: true },
        { label: "Services", href: "#services", isAnchor: true },
        { label: "Fleet", href: "#fleet", isAnchor: true },
        { label: "Safari", href: "#safari", isAnchor: true },
        { label: "About", href: "#about", isAnchor: true },
        { label: "Contact", href: "#contact", isAnchor: true },
      ]
    : [
        { label: "Home", href: "/", isAnchor: false },
        { label: "Services", href: "/#services", isAnchor: false },
        { label: "Safari", href: "/yala-safari", isAnchor: false },
        { label: "Airport", href: "/airport-transfer-sri-lanka", isAnchor: false },
        { label: "Contact", href: "/#contact", isAnchor: false },
      ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo - Always links to home */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo_s.png" alt="Slanka Taxi" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a href="tel:+94716520690">
            <Button size="sm" className="ocean-gradient text-primary-foreground gap-2 shadow-md hover:opacity-90">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <a href="tel:+94716520690">
              <Button className="ocean-gradient text-primary-foreground w-full gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
