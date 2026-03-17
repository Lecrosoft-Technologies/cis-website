import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger, useGsapFadeUp } from "@/hooks/useGsap";

import heroMeeting from "@/assets/hero-meeting.jpg";
import heroStrategy from "@/assets/hero-strategy.jpg";

const partners = [
  "HP", "IBM", "Dell", "Cisco", "Microsoft", "VMware",
  "Oracle", "Hitachi", "NetApp", "EMC", "Acer", "Toshiba", "Avtech",
];

const Technologies = () => {
  const ref = useGsapStagger();
  const imgRef = useGsapFadeUp();
  return (
    <div>
      <InnerHero label="Partners" title="Technology Partners" description="Backed by the world's leading technology brands" />

      <Marquee items={partners} />

      {/* Image + text intro */}
      <section ref={imgRef} className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up relative">
              <div className="img-overlay rounded-3xl h-80 shadow-xl">
                <img src={heroMeeting} alt="Partnership meeting" />
              </div>
              <div className="absolute -bottom-6 -right-4 w-52 h-40 img-overlay rounded-2xl shadow-xl border-4 border-background z-10">
                <img src={heroStrategy} alt="Technology strategy" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-2xl -z-10" />
            </div>
            <div>
              <SectionHeading label="Our Partners" title="Global Technology Alliance" center={false} />
              <p className="gsap-fade-up text-muted-foreground leading-relaxed">
                We maintain certified partnerships with industry-leading technology manufacturers. These partnerships enable us to deliver cutting-edge solutions with full manufacturer support, competitive pricing, and access to the latest innovations in enterprise technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner grid */}
      <section ref={ref} className="section-padding bg-muted/30 pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partners.map((p) => (
              <div key={p} className="gsap-stagger glass-card rounded-3xl p-10 flex items-center justify-center hover-lift group aspect-[4/3]">
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
