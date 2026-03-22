import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger, useGsapFadeUp } from "@/hooks/useGsap";

import africanTeamMeeting from "@/assets/african-team-meeting.jpg";
import africanWomanTech from "@/assets/african-woman-tech.jpg";

const partners = [
  "HP", "IBM", "Dell", "Cisco", "Microsoft", "VMware",
  "Oracle", "Hitachi", "NetApp", "EMC", "Acer", "Toshiba", "Avtech",
];

const brandLogos: { name: string; logo: string }[] = [
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/150px-HP_logo_2012.svg.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png" },
  { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/200px-Vmware.svg.png" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png" },
  { name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hitachi_logo.svg/200px-Hitachi_logo.svg.png" },
  { name: "NetApp", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/NetApp_logo.svg/200px-NetApp_logo.svg.png" },
  { name: "Dell EMC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dell_EMC_logo.svg/200px-Dell_EMC_logo.svg.png" },
  { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png" },
  { name: "Toshiba", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/200px-Toshiba_logo.svg.png" },
  { name: "Avtech", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/AVTECH_logo.svg/200px-AVTECH_logo.svg.png" },
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
                <img src={africanTeamMeeting} alt="Partnership meeting" />
              </div>
              <div className="absolute -bottom-6 -right-4 w-52 h-40 img-overlay rounded-2xl shadow-2xl border-4 border-background z-10 overflow-hidden">
                <img src={africanWomanTech} alt="Technology strategy" />
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
                    <img
                      src={logoMap[p] || `https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/${p}_logo.svg/200px-${p}_logo.svg.png`}
                      alt={p}
                      className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
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
