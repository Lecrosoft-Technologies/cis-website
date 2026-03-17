import { Link } from "react-router-dom";
import {
  ArrowRight, Cloud, Server, Shield, Monitor, Users, Headphones,
  CheckCircle2, Globe, Award, Zap, BarChart3, ArrowUpRight,
  GraduationCap, Cpu, Star
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapHero, useGsapFadeUp, useGsapStagger, useGsapCounter } from "@/hooks/useGsap";

import heroMeeting from "@/assets/hero-meeting.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroStrategy from "@/assets/hero-strategy.jpg";
import aboutDatacenter from "@/assets/about-datacenter.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import servicesCloud from "@/assets/services-cloud.jpg";
import servicesNetwork from "@/assets/services-network.jpg";
import servicesSecurity from "@/assets/services-security.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import serviceDatacenter from "@/assets/service-datacenter.jpg";
import serviceTraining from "@/assets/service-training.jpg";

const services = [
  { icon: Cloud, title: "Cloud Services", description: "Scalable cloud infrastructure and migration solutions for modern enterprises.", image: servicesCloud },
  { icon: Server, title: "Network Installation", description: "End-to-end network design, deployment, and management services.", image: servicesNetwork },
  { icon: Shield, title: "Disaster Recovery", description: "Business continuity planning and disaster recovery solutions.", image: servicesSecurity },
  { icon: Cpu, title: "Virtualization", description: "Server and desktop virtualization to optimize IT resources.", image: serviceDatacenter },
  { icon: Headphones, title: "Consultancy", description: "Expert IT consultancy and strategic technology advisory.", image: serviceConsulting },
  { icon: GraduationCap, title: "Training", description: "Professional IT training and certification programs.", image: serviceTraining },
];

const marqueeItems = [
  "Cloud Computing", "Network Installation", "Virtualization", "Disaster Recovery",
  "Enterprise Solutions", "IT Consultancy", "POS Systems", "Data Center",
];

const solutions = [
  "Cloud Computing", "Virtualization", "Network Storage", "SAN Solutions",
  "Disaster Recovery", "Business Applications", "POS Solutions", "Monitoring",
];

const partners = [
  "HP", "IBM", "Dell", "Cisco", "Microsoft", "VMware",
  "Oracle", "Hitachi", "NetApp", "EMC", "Acer", "Toshiba",
];

const whyUs = [
  { icon: Award, title: "Proven Expertise", desc: "20+ years delivering enterprise IT solutions across Nigeria." },
  { icon: Users, title: "Dedicated Team", desc: "Certified professionals across all technology domains." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile project management ensuring on-time deployments." },
  { icon: Globe, title: "Wide Coverage", desc: "Serving organizations across all sectors nationwide." },
];

const expertise = [
  { label: "Cloud & Infrastructure", pct: 95 },
  { label: "Network Solutions", pct: 90 },
  { label: "Enterprise Security", pct: 85 },
];

const Index = () => {
  const heroRef = useGsapHero();
  const aboutRef = useGsapFadeUp();
  const servicesRef = useGsapStagger();
  const solutionsRef = useGsapFadeUp();
  const whyRef = useGsapStagger();
  const statsRef = useGsapCounter();

  return (
    <div>
      {/* ===== HERO - Full height with curved D-shape image composition ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left - Text */}
            <div>
              <div className="hero-badge inline-flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-full px-5 py-2.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-medium text-primary-foreground/70">Elevate Your Business With Us</span>
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-bold text-primary-foreground leading-[1.08] mb-7 font-display">
                Empowering Your{" "}
                <br className="hidden md:block" />
                Success with{" "}
                <span className="text-secondary">IT Excellence</span>
              </h1>
              <p className="hero-desc text-base md:text-lg text-primary-foreground/50 leading-relaxed mb-10 max-w-lg">
                CIS Limited provides complete computer, telecom, cloud, and enterprise technology solutions for organizations in Nigeria.
              </p>
              <div className="hero-buttons flex flex-wrap gap-4">
                <Link to="/services" className="btn-pill-primary shadow-xl">
                  Explore More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-pill-light">
                  View All Services
                </Link>
              </div>
            </div>

            {/* Right - Creative D-shaped image composition */}
            <div className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 520 }}>
              {/* Main large image with rounded right side */}
              <div className="hero-image absolute left-0 top-0 w-[55%] h-full z-10">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroMeeting}
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* D-shaped curved image strip - 3 segments forming a curve */}
              <div className="hero-image-2 absolute right-0 top-0 w-[50%] h-full flex flex-col gap-3 z-20">
                {/* Top curved segment */}
                <div className="flex-1 overflow-hidden" style={{
                  borderRadius: '20px 120px 20px 20px',
                }}>
                  <img
                    src={heroLaptop}
                    alt="IT Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Middle curved segment - widest part of D */}
                <div className="flex-1 overflow-hidden" style={{
                  borderRadius: '20px 140px 140px 20px',
                }}>
                  <img
                    src={heroStrategy}
                    alt="Strategy session"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom curved segment */}
                <div className="flex-1 overflow-hidden" style={{
                  borderRadius: '20px 20px 120px 20px',
                }}>
                  <img
                    src={heroOffice}
                    alt="Office environment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="hero-float absolute -bottom-4 left-[25%] z-30 bg-card rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground font-display">500+</p>
                    <p className="text-[10px] text-muted-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>

              <div className="hero-float absolute -top-2 right-[15%] z-30 bg-card rounded-2xl px-4 py-3 shadow-xl border border-border/50">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  <span className="text-xs font-bold text-foreground font-display">Trusted Since 1995</span>
                </div>
              </div>

              {/* Decorative dot grid */}
              <div className="hero-float absolute -left-6 top-[30%] z-0 grid grid-cols-3 gap-2 opacity-30">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
                ))}
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-6 left-[40%] w-16 h-16 border-2 border-dashed border-secondary/20 rounded-full animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeItems} dark />

      {/* ===== ABOUT PREVIEW - Overlapping images + progress bars ===== */}
      <section ref={aboutRef} className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image collage with overlapping */}
            <div className="gsap-fade-up relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="img-overlay rounded-2xl h-56 shadow-lg">
                    <img src={aboutDatacenter} alt="Data Center" />
                  </div>
                  <div className="img-overlay rounded-2xl h-40 shadow-lg">
                    <img src={aboutTeam} alt="Our Team" />
                  </div>
                </div>
                <div className="space-y-4 pt-10">
                  <div className="img-overlay rounded-2xl h-40 shadow-lg">
                    <img src={heroOffice} alt="Office" />
                  </div>
                  <div className="img-overlay rounded-2xl h-56 shadow-lg">
                    <img src={heroTeam} alt="Server Room" />
                  </div>
                </div>
              </div>
              {/* Floating accent shape */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/20 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div>
              <SectionHeading label="About CIS Limited" title="Empowering Your Success with Digital Expertise" center={false} />
              <p className="gsap-fade-up text-muted-foreground leading-relaxed mb-8">
                Communication & Information Systems Limited is a leading IT company delivering end-to-end business solutions, computer and information services, as well as sales and servicing of computer and telecom equipment across Nigeria.
              </p>

              {/* Progress Bars */}
              <div className="gsap-fade-up space-y-5 mb-8">
                {expertise.map((e) => (
                  <div key={e.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-foreground">{e.label}</span>
                      <span className="text-primary font-bold">{e.pct}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div className="progress-fill h-full gradient-brand rounded-full" style={{ width: `${e.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="gsap-fade-up btn-pill-primary text-xs">
                About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS - Premium with icons ===== */}
      <div ref={statsRef} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 25, label: "Years Experience", icon: Award },
              { num: 500, label: "Projects Delivered", icon: Zap },
              { num: 200, label: "Happy Customers", icon: Users },
              { num: 50, label: "Tech Experts", icon: Globe },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-primary-foreground/5 border border-primary-foreground/10">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground counter-num font-display" data-target={stat.num}>0+</div>
                <div className="text-sm text-primary-foreground/40 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SERVICES - Cards with images ===== */}
      <section ref={servicesRef} className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <SectionHeading label="Our Services" title="Boost Your Business with Our Expertise" center={false} />
            </div>
            <Link to="/services" className="btn-pill-outline text-xs mt-4 md:mt-0 self-start md:self-auto">
              View All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="gsap-stagger service-card-premium group">
                <div className="card-img relative">
                  <img src={s.image} alt={s.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-display">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS - Dark diagonal section ===== */}
      <section ref={solutionsRef} className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto relative z-10 px-4">
          <SectionHeading label="Solutions" title="Enterprise Solutions" description="Tailored technology solutions designed to transform your business operations." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {solutions.map((sol) => (
              <div key={sol} className="gsap-fade-up glass-card-dark rounded-2xl p-6 text-center text-primary-foreground hover:bg-primary-foreground/5 transition-all duration-500 cursor-default group hover:-translate-y-1">
                <CheckCircle2 className="w-7 h-7 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Technology Partners" title="Partnering with Global Leaders" />
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {partners.map((p) => (
              <div key={p} className="glass-card rounded-2xl h-24 flex items-center justify-center hover-lift group">
                <span className="font-bold text-lg text-muted-foreground/30 group-hover:text-primary transition-colors duration-500 font-display">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US - Creative layout ===== */}
      <section ref={whyRef} className="section-padding bg-muted/30 relative overflow-hidden">
        {/* Background decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/3 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <SectionHeading label="Why CIS" title="Why Choose Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {whyUs.map((item, i) => (
              <div key={item.title} className={`gsap-stagger glass-card rounded-3xl p-8 text-center hover-lift group ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2 font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA - Premium gradient ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 font-display leading-tight">
            Ready to Transform Your<br />IT Infrastructure?
          </h2>
          <p className="text-primary-foreground/40 mb-10 max-w-xl mx-auto text-lg">
            Let's discuss how CIS Limited can help your organization achieve its technology goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-pill-primary text-sm shadow-xl">
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-pill-light text-sm">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
