import { Link } from "react-router-dom";
import {
  ArrowRight, Cloud, Server, Shield, Monitor, Users, Headphones,
  CheckCircle2, Globe, Award, Zap, BarChart3, ArrowUpRight
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Marquee from "@/components/Marquee";
import { useGsapHero, useGsapFadeUp, useGsapStagger, useGsapCounter } from "@/hooks/useGsap";

import heroTeam from "@/assets/hero-team.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import aboutDatacenter from "@/assets/about-datacenter.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import servicesCloud from "@/assets/services-cloud.jpg";
import servicesNetwork from "@/assets/services-network.jpg";
import servicesSecurity from "@/assets/services-security.jpg";

const services = [
  { icon: Cloud, title: "Cloud Services", description: "Scalable cloud infrastructure and migration solutions for modern enterprises.", image: servicesCloud },
  { icon: Server, title: "Network Installation", description: "End-to-end network design, deployment, and management services.", image: servicesNetwork },
  { icon: Shield, title: "Disaster Recovery", description: "Business continuity planning and disaster recovery solutions.", image: servicesSecurity },
  { icon: Monitor, title: "Virtualization", description: "Server and desktop virtualization to optimize IT resources." },
  { icon: Headphones, title: "Consultancy", description: "Expert IT consultancy and strategic technology advisory." },
  { icon: BarChart3, title: "POS Solutions", description: "Point-of-sale systems for retail and enterprise environments." },
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
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="hero-badge inline-flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-medium text-primary-foreground/70">Trusted IT Partner Since 1995</span>
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-primary-foreground leading-[1.08] mb-7 font-display">
                Empowering Your Success with{" "}
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

            {/* Hero Images - Reference style grid */}
            <div className="relative hidden lg:block">
              <div className="hero-image relative z-10">
                <img src={heroTeam} alt="CIS Team in data center" className="rounded-3xl w-full h-[400px] object-cover shadow-2xl" />
                {/* Floating badge */}
                <div className="hero-float absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border/50">
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
              </div>
              <div className="hero-image-2 absolute -bottom-8 right-0 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-card">
                <img src={heroOffice} alt="IT Office" className="w-full h-full object-cover" />
              </div>
              {/* Decorative circle */}
              <div className="hero-float absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-dashed border-secondary/30 animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeItems} dark />

      {/* About Preview */}
      <section ref={aboutRef} className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="gsap-fade-up grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="img-overlay rounded-2xl h-52">
                  <img src={aboutDatacenter} alt="Data Center" />
                </div>
                <div className="img-overlay rounded-2xl h-36">
                  <img src={aboutTeam} alt="Our Team" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="img-overlay rounded-2xl h-36">
                  <img src={heroOffice} alt="Office" />
                </div>
                <div className="img-overlay rounded-2xl h-52">
                  <img src={heroTeam} alt="Server Room" />
                </div>
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
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
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

      {/* Stats */}
      <div ref={statsRef} className="bg-muted/50 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 25, label: "Years Experience", suffix: "+" },
              { num: 500, label: "Projects Delivered", suffix: "+" },
              { num: 200, label: "Enterprise Clients", suffix: "+" },
              { num: 50, label: "Tech Experts", suffix: "+" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number gradient-text counter-num" data-target={stat.num}>0+</div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section ref={servicesRef} className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <SectionHeading label="Our Services" title="Boost Your Business with Our Expertise" center={false} />
            </div>
            <Link to="/services" className="btn-pill-outline text-xs mt-4 md:mt-0 self-start md:self-auto">
              View All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section ref={solutionsRef} className="section-padding section-dark relative overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto relative z-10">
          <SectionHeading label="Solutions" title="Enterprise Solutions" description="Tailored technology solutions designed to transform your business operations." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {solutions.map((sol) => (
              <div key={sol} className="gsap-fade-up glass-card-dark rounded-2xl p-6 text-center text-primary-foreground hover:bg-primary-foreground/5 transition-all duration-500 cursor-default group">
                <CheckCircle2 className="w-7 h-7 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-muted/30">
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

      {/* Why Us */}
      <section ref={whyRef} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Why CIS" title="Why Choose Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {whyUs.map((item) => (
              <div key={item.title} className="gsap-stagger glass-card rounded-2xl p-8 text-center hover-lift group">
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

      {/* CTA */}
      <section className="section-padding section-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 font-display leading-tight">
            Ready to Transform Your<br />IT Infrastructure?
          </h2>
          <p className="text-primary-foreground/40 mb-10 max-w-xl mx-auto text-lg">
            Let's discuss how CIS Limited can help your organization achieve its technology goals.
          </p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl">
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
