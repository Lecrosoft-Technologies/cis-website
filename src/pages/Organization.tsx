import { FolderKanban, TrendingUp, Lightbulb, ShoppingCart, Wrench, GraduationCap } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger } from "@/hooks/useGsap";

const departments = [
  { icon: FolderKanban, title: "Project & Planning", desc: "Project scoping, planning, and execution management for IT deployments." },
  { icon: TrendingUp, title: "Business Development", desc: "Market analysis, client acquisition, and strategic partnerships." },
  { icon: Lightbulb, title: "Consultancy Unit", desc: "IT consulting, solution architecture, and technology advisory." },
  { icon: ShoppingCart, title: "Sales / Accounts", desc: "Product sales, account management, and client relationship management." },
  { icon: Wrench, title: "Service Centre", desc: "Hardware repair, maintenance, and technical support services." },
  { icon: GraduationCap, title: "Training Department", desc: "Professional training, certifications, and skills development programs." },
];

const Organization = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Organization
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">Our Organization</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Structured for excellence and efficiency</p>
        </div>
      </section>

      <Marquee items={["Planning", "Development", "Consultancy", "Sales", "Service", "Training"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Departments" title="Our Team Structure" description="Each department is staffed with experienced professionals dedicated to delivering exceptional results." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {departments.map((d) => (
              <div key={d.title} className="gsap-stagger glass-card rounded-2xl p-8 hover-lift group">
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <d.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organization;
