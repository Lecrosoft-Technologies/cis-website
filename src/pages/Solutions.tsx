import { Cloud, Layers, HardDrive, Database, ShieldCheck, AppWindow, Monitor as MonitorIcon, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger, useGsapFadeUp, useGsapScale } from "@/hooks/useGsap";
import { Link } from "react-router-dom";

import cloudServerImg from "@/assets/cloud-server.jpg";
import disasterRecoveryImg from "@/assets/disaster-recovery.jpg";
import productServer from "@/assets/product-server.jpg";
import productPos from "@/assets/product-pos.jpg";

const solutions = [
  { icon: Cloud, title: "Cloud Computing", desc: "Scalable cloud infrastructure, migration, and managed services.", image: cloudServerImg },
  { icon: Layers, title: "Virtualization", desc: "VMware and Hyper-V virtualization to maximize hardware utilization.", image: productServer },
  { icon: HardDrive, title: "Network Storage", desc: "High-performance NAS and unified storage solutions.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
  { icon: Database, title: "SAN Solutions", desc: "Storage Area Network design and implementation.", image: productServer },
  { icon: ShieldCheck, title: "Disaster Recovery", desc: "Comprehensive DR planning, replication, and failover.", image: disasterRecoveryImg },
  { icon: AppWindow, title: "Business Applications", desc: "ERP, CRM, and custom business application deployment.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" },
  { icon: MonitorIcon, title: "POS Solutions", desc: "End-to-end point-of-sale systems for retail.", image: productPos },
  { icon: Activity, title: "Monitoring Solutions", desc: "Infrastructure monitoring, alerting, and performance tools.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
];

const Solutions = () => {
  const ref = useGsapStagger();
  const ctaRef = useGsapFadeUp();
  return (
    <div>
      <InnerHero label="Solutions" title="Our Solutions" description="Enterprise-grade solutions engineered for performance and reliability" />
      <Marquee items={["Cloud", "Virtualization", "Storage", "SAN", "Disaster Recovery", "Business Apps", "POS", "Monitoring"]} />

      <section ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <SectionHeading label="Solutions" title="Technology Solutions" description="We design and deploy solutions that drive business transformation." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {solutions.map((s, i) => (
              <div key={s.title} className={`gsap-stagger group bg-card rounded-3xl overflow-hidden border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${i % 2 === 1 ? 'lg:mt-6' : ''}`}>
                <div className="h-40 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 font-display">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up relative">
              <div className="img-overlay rounded-3xl h-96 shadow-2xl overflow-hidden" style={{ borderRadius: '20px 100px 20px 100px' }}>
                <img src={cloudServerImg} alt="Data Center" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-36 img-overlay rounded-2xl shadow-2xl border-4 border-background z-10 overflow-hidden">
                <img src={disasterRecoveryImg} alt="Backup Systems" />
              </div>
            </div>
            <div>
              <SectionHeading label="Why Our Solutions" title="Built for Enterprise Performance" center={false} />
              <p className="gsap-fade-up text-muted-foreground leading-relaxed mb-8">Our solutions are designed with enterprise-grade reliability, scalability, and security at their core.</p>
              <div className="gsap-fade-up space-y-4 mb-8">
                {["99.9% Uptime Guarantee", "Scalable Architecture", "24/7 Expert Support", "Industry Compliance"].map(item => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="gsap-fade-up btn-pill-primary text-xs inline-flex shadow-lg shadow-primary/20">Get Started <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Let our experts design a tailored solution for your specific business requirements.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl shadow-primary/20">Contact Our Team <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
