import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";

const partners = [
  "HP", "IBM", "Dell", "Cisco", "Microsoft", "VMware",
  "Oracle", "Hitachi", "NetApp", "EMC", "Acer", "Toshiba", "Avtech",
];

const Technologies = () => (
  <div>
    <section className="relative py-32 md:py-40 gradient-hero overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Technology Partners</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Backed by the world's leading technology brands</p>
      </div>
    </section>

    <section className="section-padding tech-grid">
      <div className="container mx-auto">
        <SectionHeading label="Our Partners" title="Global Technology Alliance" description="We maintain certified partnerships with industry-leading technology manufacturers." />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((p) => (
            <div key={p} className="glass-card rounded-2xl p-8 flex items-center justify-center hover-lift group aspect-[4/3]">
              <span className="text-2xl font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Technologies;
