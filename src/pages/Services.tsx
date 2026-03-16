import {
  ShoppingCart, Cpu, Lightbulb, GraduationCap, FolderKanban,
  Network, Cloud, Layers, HardDrive, ShieldCheck, Monitor,
  Thermometer, Server, Code
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const allServices = [
  { icon: ShoppingCart, title: "Sales", description: "Complete hardware and software sales for enterprise and SMB clients." },
  { icon: Cpu, title: "Technology", description: "Cutting-edge technology deployment and integration services." },
  { icon: Lightbulb, title: "Consultancy", description: "Strategic IT consulting to align technology with business goals." },
  { icon: GraduationCap, title: "Training", description: "Professional IT training and certification programs." },
  { icon: FolderKanban, title: "Project Management", description: "End-to-end project management for IT deployments." },
  { icon: Network, title: "Network Installation", description: "LAN, WAN, and wireless network design and installation." },
  { icon: Cloud, title: "Cloud Services", description: "Cloud migration, hosting, and managed cloud solutions." },
  { icon: Layers, title: "Virtualization", description: "Server and desktop virtualization solutions." },
  { icon: HardDrive, title: "Storage Solutions", description: "Enterprise storage and data management solutions." },
  { icon: ShieldCheck, title: "Disaster Recovery", description: "Business continuity and disaster recovery planning." },
  { icon: Monitor, title: "POS Systems", description: "Point-of-sale hardware and software solutions." },
  { icon: Thermometer, title: "Environmental Monitoring", description: "Data center and facility environmental monitoring." },
  { icon: Server, title: "Hardware Sales", description: "Servers, desktops, laptops, printers, and accessories." },
  { icon: Code, title: "Software Solutions", description: "Enterprise software licensing and custom applications." },
];

const Services = () => (
  <div>
    <section className="relative py-32 md:py-40 gradient-hero overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Comprehensive IT solutions tailored to your business needs</p>
      </div>
    </section>

    <section className="section-padding tech-grid">
      <div className="container mx-auto">
        <SectionHeading label="What We Offer" title="Full-Spectrum IT Services" description="From consultancy to deployment, we cover every aspect of your technology lifecycle." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
