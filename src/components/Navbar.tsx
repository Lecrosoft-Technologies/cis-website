import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center font-bold text-primary-foreground text-lg">
            CIS
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-sm text-foreground leading-tight block">CIS Limited</span>
            <span className="text-[10px] text-muted-foreground leading-tight block">Communication & Information Systems</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.children && dropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card/95 backdrop-blur-xl rounded-xl border border-border shadow-lg p-2 animate-fade-in">
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex gradient-brand text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border px-4 py-4 animate-fade-in">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  isActive(link.path) ? "text-primary bg-primary/5" : "text-foreground/70"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className="block px-8 py-2 text-sm text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/contact"
            className="block mt-4 gradient-brand text-primary-foreground text-center px-5 py-3 rounded-lg text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
