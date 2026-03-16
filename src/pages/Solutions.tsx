import { Cloud, Layers, HardDrive, Database, ShieldCheck, AppWindow, Monitor as MonitorIcon, Activity } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";

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

const Solutions = () => (
  <div>
    <section className="relative py-32 md:py-40 gradient-hero overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Solutions</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Enterprise-grade solutions engineered for performance and reliability</p>
      </div>
    </section>

    <section className="section-padding tech-grid">
      <div className="container mx-auto">
        <SectionHeading label="Solutions" title="Technology Solutions" description="We design and deploy solutions that drive business transformation." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-6 hover-lift group">
              <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Solutions;
