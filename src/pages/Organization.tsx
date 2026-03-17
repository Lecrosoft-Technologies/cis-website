import { FolderKanban, TrendingUp, Lightbulb, ShoppingCart, Wrench, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger } from "@/hooks/useGsap";

import heroMeeting from "@/assets/hero-meeting.jpg";
import heroStrategy from "@/assets/hero-strategy.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import servicesNetwork from "@/assets/services-network.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const departments = [
  { icon: FolderKanban, title: "Project & Planning", desc: "Project scoping, planning, and execution management for IT deployments.", image: heroStrategy },
  { icon: TrendingUp, title: "Business Development", desc: "Market analysis, client acquisition, and strategic partnerships.", image: heroMeeting },
  { icon: Lightbulb, title: "Consultancy Unit", desc: "IT consulting, solution architecture, and technology advisory.", image: serviceConsulting },
  { icon: ShoppingCart, title: "Sales / Accounts", desc: "Product sales, account management, and client relationship management.", image: servicesNetwork },
  { icon: Wrench, title: "Service Centre", desc: "Hardware repair, maintenance, and technical support services.", image: aboutTeam },
  { icon: GraduationCap, title: "Training Department", desc: "Professional training, certifications, and skills development programs.", image: serviceTraining },
];

const Organization = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <InnerHero label="Organization" title="Our Organization" description="Structured for excellence and efficiency" />

      <Marquee items={["Planning", "Development", "Consultancy", "Sales", "Service", "Training"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Departments" title="Our Team Structure" description="Each department is staffed with experienced professionals dedicated to delivering exceptional results." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {departments.map((d) => (
              <div key={d.title} className="gsap-stagger service-card-premium group">
                <div className="card-img relative">
                  <img src={d.image} alt={d.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
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

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Want to Work With Us?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Reach out to learn about partnership and career opportunities.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Organization;
