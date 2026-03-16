import { Building2 } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";

const clients = [
  "GNLD", "Kuramo Industries", "Intercontinental Bank", "Unity Bank",
  "Wema Bank", "Leadway Pension", "ARM Pension", "CMD",
  "Emerald Energy", "Lagos State Government", "Halogen Securities",
  "Insurance Companies", "Oil & Gas Companies", "Private Organizations",
];

const Clients = () => (
  <div>
    <section className="relative py-32 md:py-40 gradient-hero overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Clients</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Trusted by leading organizations across Nigeria</p>
      </div>
    </section>

    <section className="section-padding tech-grid">
      <div className="container mx-auto">
        <SectionHeading label="Clients" title="Organizations We Serve" description="We are proud to serve a diverse portfolio of clients across banking, energy, government, and private sectors." />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {clients.map((c) => (
            <div key={c} className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center hover-lift min-h-[120px]">
              <Building2 className="w-8 h-8 text-primary/30 mb-3" />
              <span className="text-sm font-medium text-foreground">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Clients;
