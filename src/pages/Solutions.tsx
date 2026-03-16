import { Cloud, Layers, HardDrive, Database, ShieldCheck, AppWindow, Monitor as MonitorIcon, Activity } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger } from "@/hooks/useGsap";

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
  return (
    <div>
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">Our Solutions</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Enterprise-grade solutions engineered for performance and reliability</p>
        </div>
      </section>

      <Marquee items={["Cloud", "Virtualization", "Storage", "SAN", "Disaster Recovery", "Business Apps", "POS", "Monitoring"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Solutions" title="Technology Solutions" description="We design and deploy solutions that drive business transformation." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {solutions.map((s) => (
              <div key={s.title} className="gsap-stagger glass-card rounded-2xl p-7 hover-lift group">
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
    </div>
  );
};

export default Solutions;
