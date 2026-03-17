import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Top CTA strip */}
    <div className="gradient-brand py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground font-display">Ready to Start Your Project?</h3>
          <p className="text-primary-foreground/60 text-sm mt-1">Get in touch today for a free consultation.</p>
        </div>
        <Link to="/contact" className="btn-pill bg-primary-foreground text-foreground font-semibold text-sm hover:bg-primary-foreground/90 shadow-lg">
          Get a Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>

    {/* Main footer */}
    <div className="section-dark">
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
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300">
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
                { label: "Technologies", path: "/technologies" },
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
              {["Cloud Services", "Network Installation", "Virtualization", "Disaster Recovery", "Consultancy", "Training"].map((s) => (
                <Link key={s} to="/services" className="block text-sm text-primary-foreground/50 hover:text-secondary transition-colors duration-300">{s}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-xs uppercase tracking-[0.15em] text-primary-foreground/40 font-display">Contact</h4>
            <div className="space-y-4 text-sm text-primary-foreground/50">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <span>6, Oyefeso Avenue, Obanikoro, Lagos Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span>234-1-7616165</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
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
            <span className="hover:text-primary-foreground/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary-foreground/50 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
