import { FolderKanban, TrendingUp, Lightbulb, ShoppingCart, Wrench, GraduationCap, ArrowRight, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger, useGsapScale } from "@/hooks/useGsap";

const CEO_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80";
const ADMIN_IMG = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80";
const BD_IMG = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80";
const SOLUTIONS_IMG = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80";

const departments = [
  { icon: FolderKanban, title: "Project & Planning", desc: "Project scoping, planning, and execution management.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" },
  { icon: TrendingUp, title: "Business Development", desc: "Market analysis, client acquisition, and partnerships.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
  { icon: Lightbulb, title: "Consultancy Unit", desc: "IT consulting, solution architecture, and advisory.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
  { icon: ShoppingCart, title: "Sales / Accounts", desc: "Product sales, account management.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { icon: Wrench, title: "Service Centre", desc: "Hardware repair, maintenance, and support.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" },
  { icon: GraduationCap, title: "Training Department", desc: "Professional training and certifications.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
];

const leadership = [
  { name: "Mr. Tunde Oyefeso", role: "CEO", image: CEO_IMG },
  { name: "Mr. Samuel George", role: "Admin / Finance", image: ADMIN_IMG },
  { name: "Mrs. Grace Fapohunda", role: "Business Development", image: BD_IMG },
  { name: "Mr. Ayoola Akanbi", role: "Enterprise Solutions", image: SOLUTIONS_IMG },
];

const Organization = () => {
  const ref = useGsapStagger();
  const teamRef = useGsapScale();
  return (
    <div>
      <InnerHero label="Organization" title="Our Organization" description="Structured for excellence and efficiency" />
      <Marquee items={["Planning", "Development", "Consultancy", "Sales", "Service", "Training"]} />

      <section ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <SectionHeading label="Departments" title="Our Team Structure" description="Each department is staffed with experienced professionals." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {departments.map(d => (
              <div key={d.title} className="gsap-stagger group bg-card rounded-3xl overflow-hidden border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                <div className="h-48 overflow-hidden relative">
                  <img src={d.image} alt={d.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <d.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-display">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading label="Leadership" title="Our Management Team" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, i) => (
              <div key={member.name} className={`gsap-scale group ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden mb-5 aspect-[3/4] shadow-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex gap-2">
                      {[Linkedin, Mail, Phone].map((Icon, j) => (
                        <button key={j} className="w-8 h-8 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-foreground font-display text-base">{member.name}</h3>
                <p className="text-sm text-secondary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Want to Work With Us?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Reach out about partnership and career opportunities.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl shadow-primary/20">Contact Us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Organization;
