import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-brand-dark text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 flex items-center justify-center font-bold text-lg">
              CIS
            </div>
            <span className="font-bold">CIS Limited</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            End-to-End IT, Telecom & Business Technology Solutions for organizations across Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Solutions", path: "/solutions" },
              { label: "Products", path: "/products" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <div className="space-y-2">
            {["Cloud Services", "Network Installation", "Virtualization", "Disaster Recovery", "Consultancy"].map((s) => (
              <span key={s} className="block text-sm text-primary-foreground/60">{s}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>6, Oyefeso Avenue, Obanikoro, Lagos Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>234-1-7616165</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@cislimited.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Communication & Information Systems Limited. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
