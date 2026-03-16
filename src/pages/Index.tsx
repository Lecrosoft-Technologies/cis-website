import { Link } from "react-router-dom";
import {
  ArrowRight, Cloud, Server, Shield, Monitor, Users, Headphones,
  CheckCircle2, Globe, Award, Zap, BarChart3
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { icon: Cloud, title: "Cloud Services", description: "Scalable cloud infrastructure and migration solutions for modern enterprises." },
  { icon: Server, title: "Network Installation", description: "End-to-end network design, deployment, and management services." },
  { icon: Shield, title: "Disaster Recovery", description: "Business continuity planning and disaster recovery solutions." },
  { icon: Monitor, title: "Virtualization", description: "Server and desktop virtualization to optimize IT resources." },
  { icon: Headphones, title: "Consultancy", description: "Expert IT consultancy and strategic technology advisory." },
  { icon: BarChart3, title: "POS Solutions", description: "Point-of-sale systems for retail and enterprise environments." },
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

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground/80">Trusted IT Partner Since 1995</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              End-to-End IT, Telecom & Business Technology{" "}
              <span className="text-secondary">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              CIS Limited provides complete computer, telecom, cloud, and enterprise technology solutions for organizations in Nigeria.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/services" className="gradient-brand inline-flex items-center gap-2 bg-secondary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding tech-grid">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading label="About CIS Limited" title="Your Trusted Technology Partner" center={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Communication & Information Systems Limited is a leading IT company registered under the Company and Allied Matters decree of Nigeria. We deliver end-to-end business solutions, computer and information services, as well as sales and servicing of computer and telecom equipment.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "25+", label: "Years Experience" },
                { num: "500+", label: "Projects Delivered" },
                { num: "200+", label: "Enterprise Clients" },
                { num: "50+", label: "Tech Experts" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.num}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading label="Our Services" title="Comprehensive IT Solutions" description="From cloud infrastructure to network installations, we deliver enterprise-grade technology services." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 gradient-brand text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto relative z-10">
          <SectionHeading label="Solutions" title="Enterprise Solutions" description="Tailored technology solutions designed to transform your business operations." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {solutions.map((sol) => (
              <div key={sol} className="glass-card-dark rounded-xl p-5 text-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors cursor-default">
                <CheckCircle2 className="w-6 h-6 text-secondary mx-auto mb-2" />
                <span className="text-sm font-medium">{sol}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Technology Partners" title="Partnering with Global Leaders" />
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll-logos">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="flex-shrink-0 w-32 h-20 glass-card rounded-xl flex items-center justify-center">
                  <span className="font-bold text-lg text-muted-foreground/60">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading label="Why CIS" title="Why Choose Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center hover-lift">
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Let's discuss how CIS Limited can help your organization achieve its technology goals.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
