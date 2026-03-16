import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="section-dark">
    <div className="container mx-auto px-4 pt-20 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center font-bold text-primary-foreground text-lg shadow-lg">
              CIS
            </div>
            <div>
              <span className="font-bold text-sm text-primary-foreground block font-display">CIS Limited</span>
              <span className="text-[10px] text-primary-foreground/50">Since 1995</span>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/50 leading-relaxed mb-6">
            End-to-End IT, Telecom & Business Technology Solutions for enterprises across Nigeria.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <button key={i} className="w-10 h-10 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all duration-300">
                <Icon className="w-4 h-4 text-primary-foreground/60" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.15em] text-primary-foreground/40 font-display">Navigate</h4>
          <div className="space-y-3">
            {[
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Solutions", path: "/solutions" },
              { label: "Products", path: "/products" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="group flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-secondary transition-colors duration-300">
                {l.label}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.15em] text-primary-foreground/40 font-display">Services</h4>
          <div className="space-y-3">
            {["Cloud Services", "Network Installation", "Virtualization", "Disaster Recovery", "Consultancy"].map((s) => (
              <span key={s} className="block text-sm text-primary-foreground/50">{s}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.15em] text-primary-foreground/40 font-display">Contact</h4>
          <div className="space-y-4 text-sm text-primary-foreground/50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
              </div>
              <span>6, Oyefeso Avenue, Obanikoro, Lagos Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-secondary" />
              </div>
              <span>234-1-7616165</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5 text-secondary" />
              </div>
              <span>info@cislimited.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Communication & Information Systems Limited. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-primary-foreground/30">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
