import { FolderKanban, TrendingUp, Lightbulb, ShoppingCart, Wrench, GraduationCap } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";

const departments = [
  { icon: FolderKanban, title: "Project & Planning", desc: "Project scoping, planning, and execution management for IT deployments." },
  { icon: TrendingUp, title: "Business Development", desc: "Market analysis, client acquisition, and strategic partnerships." },
  { icon: Lightbulb, title: "Consultancy Unit", desc: "IT consulting, solution architecture, and technology advisory." },
  { icon: ShoppingCart, title: "Sales / Accounts", desc: "Product sales, account management, and client relationship management." },
  { icon: Wrench, title: "Service Centre", desc: "Hardware repair, maintenance, and technical support services." },
  { icon: GraduationCap, title: "Training Department", desc: "Professional training, certifications, and skills development programs." },
];

const Organization = () => (
  <div>
    <section className="relative py-32 md:py-40 gradient-hero overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Organization</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Structured for excellence and efficiency</p>
      </div>
    </section>

    <section className="section-padding tech-grid">
      <div className="container mx-auto">
        <SectionHeading label="Departments" title="Our Team Structure" description="Each department is staffed with experienced professionals dedicated to delivering exceptional results." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d) => (
            <div key={d.title} className="glass-card rounded-2xl p-8 hover-lift group">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <d.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Organization;
