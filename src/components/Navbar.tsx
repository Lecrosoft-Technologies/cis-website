import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/cis_logo.jpg";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services", path: "/services",
    children: [
      { label: "All Services", path: "/services" },
      { label: "Solutions", path: "/solutions" },
      { label: "Products & Sales", path: "/products" },
    ],
  },
  { label: "Technologies", path: "/technologies" },
  { label: "Clients", path: "/clients" },
  { label: "Organization", path: "/organization" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar - matches reference */}
      <div className="hidden lg:block bg-foreground text-primary-foreground/80 text-xs">
        <div className="container mx-auto flex items-center justify-between h-10 px-4">
          <div className="flex items-center gap-6">
            <a href="tel:234-1-7616165" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone className="w-3.5 h-3.5 text-secondary" /> 234-1-7616165
            </a>
            <a href="mailto:info@cislimited.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail className="w-3.5 h-3.5 text-secondary" /> info@cislimited.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-secondary" /> 6, Oyefeso Avenue, Obanikoro, Lagos Nigeria
            </span>
          </div>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <button key={i} className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Icon className="w-3 h-3" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-2xl shadow-lg border-b border-border/50"
          : "bg-card/80 backdrop-blur-xl"
      }`}>
        <div className="container mx-auto flex items-center justify-between h-18 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="CIS Limited" className="flex items-center justify-center w-52" />
         
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    isActive(link.path)
                      ? "text-primary bg-primary/8"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {link.children && dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card backdrop-blur-2xl rounded-2xl border border-border shadow-xl p-2 animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - rounded pill matching reference */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex btn-pill-primary text-xs shadow-lg"
          >
            Get a Quote
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border px-4 py-6 animate-fade-in space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.path) ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-4 btn-pill-primary text-center text-xs"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
