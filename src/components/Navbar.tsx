import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-foreground text-primary-foreground/80 text-xs">
        <div className="container mx-auto flex items-center justify-between h-9 px-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> 234-1-7616165</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> info@cislimited.com</span>
          </div>
          <span>6, Oyefeso Avenue, Obanikoro, Lagos Nigeria</span>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-2xl shadow-lg border-b border-border/50"
          : "bg-card/80 backdrop-blur-xl"
      }`}>
        <div className="container mx-auto flex items-center justify-between h-18 md:h-20 px-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center font-bold text-primary-foreground text-lg tracking-tight shadow-lg group-hover:scale-105 transition-transform">
              CIS
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm text-foreground leading-tight block font-display">CIS Limited</span>
              <span className="text-[10px] text-muted-foreground leading-tight block">Communication & Information Systems</span>
            </div>
          </Link>

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

          <Link
            to="/contact"
            className="hidden lg:inline-flex btn-pill-primary text-xs shadow-lg"
          >
            Get a Quote
          </Link>

          <button
            className="lg:hidden p-2 text-foreground rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
