import { Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger } from "@/hooks/useGsap";

const clients = [
  "GNLD", "Kuramo Industries", "Intercontinental Bank", "Unity Bank",
  "Wema Bank", "Leadway Pension", "ARM Pension", "CMD",
  "Emerald Energy", "Lagos State Government", "Halogen Securities",
  "Insurance Companies", "Oil & Gas Companies", "Private Organizations",
];

const Clients = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <InnerHero label="Clients" title="Our Clients" description="Trusted by leading organizations across Nigeria" />

      <Marquee items={clients.slice(0, 8)} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Clients" title="Organizations We Serve" description="We are proud to serve a diverse portfolio of clients across banking, energy, government, and private sectors." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((c) => (
              <div key={c} className="gsap-stagger glass-card rounded-3xl p-7 flex flex-col items-center justify-center text-center hover-lift group min-h-[140px]">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <Building2 className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold text-foreground font-display">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Join Our Growing Client Base</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Discover how CIS Limited can help your organization thrive with enterprise technology solutions.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Clients;
