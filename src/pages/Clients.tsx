import { Building2 } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
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
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Clients
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">Our Clients</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Trusted by leading organizations across Nigeria</p>
        </div>
      </section>

      <Marquee items={clients.slice(0, 8)} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Clients" title="Organizations We Serve" description="We are proud to serve a diverse portfolio of clients across banking, energy, government, and private sectors." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((c) => (
              <div key={c} className="gsap-stagger glass-card rounded-2xl p-7 flex flex-col items-center justify-center text-center hover-lift group min-h-[140px]">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <Building2 className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold text-foreground font-display">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
