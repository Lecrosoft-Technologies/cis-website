import { Cloud, Layers, HardDrive, Database, ShieldCheck, AppWindow, Monitor as MonitorIcon, Activity } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger, useGsapFadeUp } from "@/hooks/useGsap";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import servicesCloud from "@/assets/services-cloud.jpg";
import serviceDatacenter from "@/assets/service-datacenter.jpg";

const solutions = [
  { icon: Cloud, title: "Cloud Computing", desc: "Scalable cloud infrastructure, migration, and managed services for enterprises of all sizes." },
  { icon: Layers, title: "Virtualization", desc: "VMware and Hyper-V virtualization to maximize hardware utilization and reduce costs." },
  { icon: HardDrive, title: "Network Storage", desc: "High-performance NAS and unified storage solutions for enterprise data management." },
  { icon: Database, title: "SAN Solutions", desc: "Storage Area Network design and implementation for mission-critical workloads." },
  { icon: ShieldCheck, title: "Disaster Recovery", desc: "Comprehensive DR planning, replication, and failover solutions." },
  { icon: AppWindow, title: "Business Applications", desc: "ERP, CRM, and custom business application deployment and support." },
  { icon: MonitorIcon, title: "POS Solutions", desc: "End-to-end point-of-sale systems for retail and hospitality sectors." },
  { icon: Activity, title: "Monitoring Solutions", desc: "Infrastructure monitoring, alerting, and performance management tools." },
];

const Solutions = () => {
  const ref = useGsapStagger();
  const ctaRef = useGsapFadeUp();
  return (
    <div>
      <InnerHero label="Solutions" title="Our Solutions" description="Enterprise-grade solutions engineered for performance and reliability" />

      <Marquee items={["Cloud", "Virtualization", "Storage", "SAN", "Disaster Recovery", "Business Apps", "POS", "Monitoring"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Solutions" title="Technology Solutions" description="We design and deploy solutions that drive business transformation." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {solutions.map((s, i) => (
              <div key={s.title} className={`gsap-stagger glass-card rounded-3xl p-7 hover-lift group ${i % 2 === 1 ? 'lg:mt-6' : ''}`}>
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + text section */}
      <section ref={ctaRef} className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up relative">
              <div className="img-overlay rounded-3xl h-96 shadow-xl">
                <img src={serviceDatacenter} alt="Data Center Solutions" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-36 img-overlay rounded-2xl shadow-xl border-4 border-background z-10">
                <img src={servicesCloud} alt="Cloud Solutions" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-2xl -z-10" />
            </div>
            <div>
              <SectionHeading label="Why Our Solutions" title="Built for Enterprise Performance" center={false} />
              <p className="gsap-fade-up text-muted-foreground leading-relaxed mb-8">
                Our solutions are designed with enterprise-grade reliability, scalability, and security at their core. We partner with the world's leading technology providers to deliver infrastructure that grows with your business.
              </p>
              <Link to="/contact" className="gsap-fade-up btn-pill-primary text-xs inline-flex">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Let our experts design a tailored solution for your specific business requirements.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl">
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
