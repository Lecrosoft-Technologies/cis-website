import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger } from "@/hooks/useGsap";

const partners = [
  "HP", "IBM", "Dell", "Cisco", "Microsoft", "VMware",
  "Oracle", "Hitachi", "NetApp", "EMC", "Acer", "Toshiba", "Avtech",
];

const Technologies = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Partners
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">Technology Partners</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Backed by the world's leading technology brands</p>
        </div>
      </section>

      <Marquee items={partners} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Our Partners" title="Global Technology Alliance" description="We maintain certified partnerships with industry-leading technology manufacturers." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((p) => (
              <div key={p} className="gsap-stagger glass-card rounded-2xl p-10 flex items-center justify-center hover-lift group aspect-[4/3]">
                <span className="text-2xl font-bold text-muted-foreground/25 group-hover:text-primary transition-colors duration-500 font-display">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
