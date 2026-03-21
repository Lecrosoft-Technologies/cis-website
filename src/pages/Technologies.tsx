import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger, useGsapFadeUp } from "@/hooks/useGsap";

const partners = [
  "HP", "IBM", "Dell", "Cisco", "Microsoft", "VMware",
  "Oracle", "Hitachi", "NetApp", "EMC", "Acer", "Toshiba", "Avtech",
];

const brandLogos: { name: string; logo: string }[] = [
  { name: "HP", logo: "https://logo.clearbit.com/hp.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "VMware", logo: "https://logo.clearbit.com/vmware.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Hitachi", logo: "https://logo.clearbit.com/hitachi.com" },
  { name: "NetApp", logo: "https://logo.clearbit.com/netapp.com" },
  { name: "Dell EMC", logo: "https://logo.clearbit.com/delltechnologies.com" },
  { name: "Acer", logo: "https://logo.clearbit.com/acer.com" },
  { name: "Toshiba", logo: "https://logo.clearbit.com/toshiba.com" },
  { name: "Avtech", logo: "https://logo.clearbit.com/avtech.com" },
];

const partnerTiers = [
  { tier: "Platinum Partners", names: ["HP", "IBM", "Dell", "Cisco"], desc: "Our top-tier strategic alliances" },
  { tier: "Gold Partners", names: ["Microsoft", "VMware", "Oracle"], desc: "Technology excellence partnerships" },
  { tier: "Silver Partners", names: ["Hitachi", "NetApp", "Dell EMC", "Acer", "Toshiba", "Avtech"], desc: "Extended technology ecosystem" },
];

const logoMap = Object.fromEntries(brandLogos.map(b => [b.name, b.logo]));

const Technologies = () => {
  const ref = useGsapStagger();
  const imgRef = useGsapFadeUp();
  return (
    <div>
      <InnerHero label="Partners" title="Technology Partners" description="Backed by the world's leading technology brands" />
      <Marquee items={partners} />

      <section ref={imgRef} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up relative">
              <div className="img-overlay rounded-3xl h-80 shadow-2xl overflow-hidden" style={{ borderRadius: '20px 100px 20px 100px' }}>
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" alt="Partnership meeting" />
              </div>
              <div className="absolute -bottom-6 -right-4 w-52 h-40 img-overlay rounded-2xl shadow-2xl border-4 border-background z-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Technology strategy" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-2xl -z-10" />
            </div>
            <div>
              <SectionHeading label="Our Partners" title="Global Technology Alliance" center={false} />
              <p className="gsap-fade-up text-muted-foreground leading-relaxed mb-6">
                We maintain certified partnerships with industry-leading technology manufacturers. These partnerships enable us to deliver cutting-edge solutions with full manufacturer support, competitive pricing, and access to the latest innovations.
              </p>
              <div className="gsap-fade-up grid grid-cols-3 gap-4">
                {[{ num: "13+", label: "Partners" }, { num: "100%", label: "Certified" }, { num: "20+", label: "Years" }].map(s => (
                  <div key={s.label} className="glass-card rounded-2xl p-4 text-center hover-lift">
                    <span className="text-2xl font-bold gradient-text font-display">{s.num}</span>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-muted/30 pt-0">
        <div className="container mx-auto space-y-16">
          {partnerTiers.map(tier => (
            <div key={tier.tier}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 gradient-brand rounded-full" />
                <div>
                  <h3 className="text-xl font-bold text-foreground font-display">{tier.tier}</h3>
                  <p className="text-sm text-muted-foreground">{tier.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {tier.names.map(p => (
                  <div key={p} className="gsap-stagger glass-card rounded-3xl p-8 flex flex-col items-center justify-center hover-lift group aspect-[4/3] relative overflow-hidden gap-3">
                    <div className="absolute inset-0 gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    <img src={logoMap[p] || `https://logo.clearbit.com/${p.toLowerCase().replace(/\s/g, '')}.com`} alt={p} className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-500" />
                    <span className="text-xs font-semibold text-muted-foreground/40 group-hover:text-primary transition-colors font-display">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
