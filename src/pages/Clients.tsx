import { Building2, ArrowRight, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger, useGsapFadeUp } from "@/hooks/useGsap";

const clients = [
  "GNLD", "Kuramo Industries", "Intercontinental Bank", "Unity Bank",
  "Wema Bank", "Leadway Pension", "ARM Pension", "CMD",
  "Emerald Energy", "Lagos State Government", "Halogen Securities",
  "Insurance Companies", "Oil & Gas Companies", "Private Organizations",
];

const sectors = [
  { name: "Banking & Finance", count: 5 },
  { name: "Oil & Gas", count: 3 },
  { name: "Government", count: 2 },
  { name: "Insurance", count: 4 },
];

const testimonials = [
  { name: "Unity Bank", text: "CIS Limited transformed our IT infrastructure with world-class solutions and exceptional support.", rating: 5 },
  { name: "Emerald Energy", text: "Reliable, professional, and always delivering beyond expectations. A true technology partner.", rating: 5 },
  { name: "Lagos State Government", text: "Their expertise in enterprise solutions has been invaluable to our digital transformation initiatives.", rating: 5 },
];

const Clients = () => {
  const ref = useGsapStagger();
  const introRef = useGsapFadeUp();
  return (
    <div>
      <InnerHero label="Clients" title="Our Clients" description="Trusted by leading organizations across Nigeria" />
      <Marquee items={clients.slice(0, 8)} />

      <section ref={introRef} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up relative">
              <div className="img-overlay rounded-3xl h-80 shadow-2xl overflow-hidden" style={{ borderRadius: '20px 100px 20px 100px' }}>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Client meeting" />
              </div>
              <div className="absolute -bottom-6 -right-4 w-52 h-40 img-overlay rounded-2xl shadow-2xl border-4 border-background z-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Partnership" />
              </div>
            </div>
            <div>
              <SectionHeading label="Our Clients" title="Trusted Across Industries" center={false} />
              <p className="gsap-fade-up text-muted-foreground leading-relaxed mb-8">We are proud to serve a diverse portfolio of clients across banking, energy, government, and private sectors.</p>
              <div className="gsap-fade-up grid grid-cols-2 gap-4">
                {sectors.map(s => (
                  <div key={s.name} className="glass-card rounded-2xl p-4 hover-lift group">
                    <span className="text-2xl font-bold gradient-text font-display">{s.count}+</span>
                    <p className="text-xs text-muted-foreground mt-1">{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading label="Our Partners" title="Organizations We Serve" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map(c => (
              <div key={c} className="gsap-stagger glass-card rounded-3xl p-7 flex flex-col items-center justify-center text-center hover-lift group min-h-[140px] relative overflow-hidden">
                <div className="absolute inset-0 gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                  <Building2 className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold text-foreground font-display relative z-10">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map(t => (
              <div key={t.name} className="glass-card rounded-3xl p-8 hover-lift group relative overflow-hidden">
                <Quote className="w-10 h-10 text-primary/10 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-cis-lime fill-cis-lime" />)}
                </div>
                <p className="font-bold text-foreground font-display text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Join Our Growing Client Base</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Discover how CIS Limited can help your organization thrive.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl shadow-primary/20">Get Started <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Clients;
