import {
  ShoppingCart, Cpu, Lightbulb, GraduationCap, FolderKanban,
  Network, Cloud, Layers, HardDrive, ShieldCheck, Monitor,
  Thermometer, Server, Code, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger, useGsapFadeUp } from "@/hooks/useGsap";

const allServices = [
  { icon: ShoppingCart, title: "Sales", description: "Complete hardware and software sales for enterprise and SMB clients.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { icon: Cpu, title: "Technology", description: "Cutting-edge technology deployment and integration services.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
  { icon: Lightbulb, title: "Consultancy", description: "Strategic IT consulting to align technology with business goals.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
  { icon: GraduationCap, title: "Training", description: "Professional IT training and certification programs.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
  { icon: FolderKanban, title: "Project Management", description: "End-to-end project management for IT deployments.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" },
  { icon: Network, title: "Network Installation", description: "LAN, WAN, and wireless network design and installation.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80" },
  { icon: Cloud, title: "Cloud Services", description: "Cloud migration, hosting, and managed cloud solutions.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
  { icon: Layers, title: "Virtualization", description: "Server and desktop virtualization solutions.", image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80" },
  { icon: HardDrive, title: "Storage Solutions", description: "Enterprise storage and data management solutions.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
  { icon: ShieldCheck, title: "Disaster Recovery", description: "Business continuity and disaster recovery planning.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80" },
  { icon: Monitor, title: "POS Systems", description: "Point-of-sale hardware and software solutions.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
  { icon: Thermometer, title: "Environmental Monitoring", description: "Data center and facility environmental monitoring.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { icon: Server, title: "Hardware Sales", description: "Servers, desktops, laptops, printers, and accessories.", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80" },
  { icon: Code, title: "Software Solutions", description: "Enterprise software licensing and custom applications.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" },
];

const Services = () => {
  const ref = useGsapStagger();
  const ctaRef = useGsapFadeUp();
  return (
    <div>
      <InnerHero label="Services" title="Our Services" description="Comprehensive IT solutions tailored to your business needs" />
      <Marquee items={["Sales", "Technology", "Consultancy", "Training", "Cloud", "Network", "Virtualization", "Storage"]} />

      <section ref={ctaRef} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="What We Do" title="Full-Spectrum IT Services for Modern Enterprises" center={false} />
              <p className="gsap-fade-up text-muted-foreground leading-relaxed mb-6">From consultancy to deployment, we cover every aspect of your technology lifecycle.</p>
              <div className="gsap-fade-up grid grid-cols-2 gap-4 mb-8">
                {["14+ Services", "24/7 Support", "Certified Experts", "Global Partners"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="gsap-fade-up btn-pill-primary text-xs shadow-lg shadow-primary/20 inline-flex">Get Started <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="gsap-fade-up relative">
              <div className="img-overlay rounded-3xl h-[400px] shadow-2xl overflow-hidden" style={{ borderRadius: '120px 20px 120px 20px' }}>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="African professionals working" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-36 img-overlay rounded-2xl shadow-2xl border-4 border-background z-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="Consulting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <SectionHeading label="All Services" title="Everything You Need" description="Explore our complete range of IT services and solutions." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {allServices.map(s => (
              <div key={s.title} className="gsap-stagger group bg-card rounded-3xl overflow-hidden border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                <div className="h-44 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5 font-display">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Need a Custom Service?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Let our experts design a tailored solution for your specific requirements.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl shadow-primary/20">Contact Our Team <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
