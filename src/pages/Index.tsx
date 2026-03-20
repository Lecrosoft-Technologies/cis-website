import { Link } from "react-router-dom";
import {
  ArrowRight, Cloud, Server, Shield, Monitor, Users, Headphones,
  CheckCircle2, Globe, Award, Zap, BarChart3, ArrowUpRight,
  GraduationCap, Cpu, Star, Play, Sparkles, TrendingUp
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapHero, useGsapFadeUp, useGsapStagger, useGsapCounter, useGsapParallax, useGsapScale } from "@/hooks/useGsap";

import heroMeeting from "@/assets/hero-meeting.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";
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
  { icon: Award, title: "Proven Expertise", desc: "20+ years delivering enterprise IT solutions across Nigeria.", num: "20+" },
  { icon: Users, title: "Dedicated Team", desc: "Certified professionals across all technology domains.", num: "50+" },
  { icon: Zap, title: "Fast Delivery", desc: "Agile project management ensuring on-time deployments.", num: "99%" },
  { icon: Globe, title: "Wide Coverage", desc: "Serving organizations across all sectors nationwide.", num: "200+" },
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
  const whyRef = useGsapScale();
  const statsRef = useGsapCounter();
  const parallaxRef = useGsapParallax();

  return (
    <div>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left - Text */}
            <div>
              <div className="hero-badge inline-flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-full px-5 py-2.5 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-medium text-primary-foreground/70 tracking-wide">Nigeria's Leading IT Solutions Provider</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-bold text-primary-foreground leading-[1.08] mb-7 font-display">
                <span className="hero-title-line block">End-to-End IT,</span>
                <span className="hero-title-line block">Telecom & <span className="gradient-text">Business</span></span>
                <span className="hero-title-line block">Technology <span className="text-secondary">Solutions</span></span>
              </h1>
              <p className="hero-desc text-base md:text-lg text-primary-foreground/50 leading-relaxed mb-10 max-w-lg">
                CIS Limited provides complete computer, telecom, cloud, and enterprise technology solutions for organizations in Nigeria.
              </p>
              <div className="hero-buttons flex flex-wrap gap-4 items-center">
                <Link to="/services" className="btn-pill-primary shadow-xl shadow-primary/20">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-pill-light">
                  Contact Us
                </Link>
                <button className="flex items-center gap-3 ml-2 group">
                  <div className="w-12 h-12 rounded-full border-2 border-secondary/50 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-4 h-4 text-secondary fill-secondary" />
                  </div>
                  <span className="text-sm text-primary-foreground/50 group-hover:text-secondary transition-colors hidden sm:inline">Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right - Masked image composition */}
            <div className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 560 }}>
              {/* Primary blob-masked image */}
              <div className="hero-image-frame absolute top-[5%] right-[5%] w-[65%] h-[80%] z-20">
                <div className="w-full h-full overflow-hidden shadow-2xl shadow-primary/20" style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }}>
                  <img src={heroMeeting} alt="Business meeting" className="w-full h-full object-cover" />
                </div>
                {/* Glowing ring around image */}
                <div className="absolute -inset-3 rounded-full border-2 border-secondary/15 animate-spin-slow" style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }} />
              </div>

              {/* Secondary blob-masked image */}
              <div className="hero-image-frame-2 absolute bottom-[0%] left-[0%] w-[50%] h-[55%] z-10">
                <div className="w-full h-full overflow-hidden shadow-2xl shadow-secondary/20" style={{
                  borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                }}>
                  <img src={heroLaptop} alt="IT Professional" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-[30%] w-20 h-20 border-2 border-dashed border-secondary/20 rounded-full animate-spin-slow" />
              <div className="absolute bottom-[10%] right-[60%] grid grid-cols-3 gap-1.5 opacity-40">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-secondary" />
                ))}
              </div>

              {/* Floating stats cards */}
              <div className="hero-float hero-float-card absolute -bottom-2 right-[15%] z-30 bg-card/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground font-display">500+</p>
                    <p className="text-[10px] text-muted-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>

              <div className="hero-float hero-float-card absolute top-[5%] left-[5%] z-30 bg-card/95 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl border border-border/50">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-cis-lime fill-cis-lime" />
                  <Star className="w-4 h-4 text-cis-lime fill-cis-lime" />
                  <Star className="w-4 h-4 text-cis-lime fill-cis-lime" />
                  <Star className="w-4 h-4 text-cis-lime fill-cis-lime" />
                  <Star className="w-4 h-4 text-cis-lime fill-cis-lime" />
                  <span className="text-xs font-bold text-foreground font-display ml-1">Since 1995</span>
                </div>
              </div>

              <div className="hero-float absolute top-[40%] left-[-8%] z-30 w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center shadow-xl">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] text-primary-foreground/30 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-primary-foreground/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-secondary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeItems} dark />

      {/* ===== ABOUT PREVIEW ===== */}
      <section ref={aboutRef} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="gsap-fade-up relative">
              <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[480px]">
                <div className="col-span-7 row-span-4 img-overlay rounded-3xl shadow-xl overflow-hidden">
                  <img src={aboutDatacenter} alt="Data Center" />
                </div>
                <div className="col-span-5 row-span-3 img-overlay rounded-3xl shadow-xl overflow-hidden">
                  <img src={aboutTeam} alt="Our Team" />
                </div>
                <div className="col-span-5 row-span-3 img-overlay rounded-3xl shadow-xl overflow-hidden">
                  <img src={heroOffice} alt="Office" />
                </div>
                <div className="col-span-7 row-span-2 img-overlay rounded-3xl shadow-xl overflow-hidden">
                  <img src={heroTeam} alt="Server Room" />
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/8 rounded-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/10 rounded-full -z-10" />
              {/* Experience badge */}
              <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-border/50 z-20">
                <span className="text-3xl font-bold gradient-text font-display">25+</span>
                <p className="text-xs text-muted-foreground mt-1">Years of Excellence</p>
              </div>
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

              <Link to="/about" className="gsap-fade-up btn-pill-primary text-xs shadow-lg shadow-primary/20">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <div ref={statsRef} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 25, label: "Years Experience", icon: Award },
              { num: 500, label: "Projects Delivered", icon: Zap },
              { num: 200, label: "Happy Customers", icon: Users },
              { num: 50, label: "Tech Experts", icon: Globe },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center bg-primary-foreground/5 border border-primary-foreground/10 group-hover:bg-secondary/20 group-hover:border-secondary/30 transition-all duration-500">
                  <stat.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground counter-num font-display" data-target={stat.num}>0+</div>
                <div className="text-sm text-primary-foreground/40 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SERVICES ===== */}
      <section ref={servicesRef} className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px] -z-10" />
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
            {services.map((s, i) => (
              <div key={s.title} className={`gsap-stagger service-card-premium group ${i === 0 ? 'sm:row-span-2' : ''}`}>
                <div className={`card-img relative ${i === 0 ? '!h-72' : ''}`}>
                  <img src={s.image} alt={s.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Link to="/services" className="text-xs text-primary-foreground font-semibold flex items-center gap-2">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
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

      {/* ===== SOLUTIONS - Dark section with pinned effect ===== */}
      <section ref={solutionsRef} className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto relative z-10 px-4">
          <SectionHeading label="Solutions" title="Enterprise Solutions" description="Tailored technology solutions designed to transform your business operations." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {solutions.map((sol, i) => (
              <div key={sol} className="gsap-fade-up glass-card-dark rounded-2xl p-6 text-center text-primary-foreground group cursor-default transition-all duration-500 hover:bg-primary-foreground/8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
                  <CheckCircle2 className="w-7 h-7 text-secondary" />
                </div>
                <span className="text-sm font-semibold">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section ref={parallaxRef} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Technology Partners" title="Partnering with Global Leaders" />
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {partners.map((p) => (
              <div key={p} className="gsap-parallax glass-card rounded-2xl h-28 flex items-center justify-center hover-lift group cursor-default" data-speed="0.1">
                <span className="font-bold text-xl text-muted-foreground/20 group-hover:text-primary group-hover:scale-110 transition-all duration-500 font-display">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section ref={whyRef} className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/3 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <SectionHeading label="Why CIS" title="Why Choose Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {whyUs.map((item, i) => (
              <div key={item.title} className={`gsap-scale glass-card rounded-3xl p-8 text-center hover-lift group relative overflow-hidden ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
                {/* Background number */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-primary/5 font-display">{item.num}</span>
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative z-10">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2 font-display relative z-10">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-full px-5 py-2.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-medium text-primary-foreground/70">Let's Build Together</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 font-display leading-tight">
            Ready to Transform Your<br />IT Infrastructure?
          </h2>
          <p className="text-primary-foreground/40 mb-10 max-w-xl mx-auto text-lg">
            Let's discuss how CIS Limited can help your organization achieve its technology goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-pill-primary text-sm shadow-xl shadow-primary/20">
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
