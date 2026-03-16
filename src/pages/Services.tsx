import {
  ShoppingCart, Cpu, Lightbulb, GraduationCap, FolderKanban,
  Network, Cloud, Layers, HardDrive, ShieldCheck, Monitor,
  Thermometer, Server, Code
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Marquee from "@/components/Marquee";
import { useGsapStagger } from "@/hooks/useGsap";

import servicesCloud from "@/assets/services-cloud.jpg";
import servicesNetwork from "@/assets/services-network.jpg";
import servicesSecurity from "@/assets/services-security.jpg";

const allServices = [
  { icon: ShoppingCart, title: "Sales", description: "Complete hardware and software sales for enterprise and SMB clients." },
  { icon: Cpu, title: "Technology", description: "Cutting-edge technology deployment and integration services.", image: servicesCloud },
  { icon: Lightbulb, title: "Consultancy", description: "Strategic IT consulting to align technology with business goals." },
  { icon: GraduationCap, title: "Training", description: "Professional IT training and certification programs." },
  { icon: FolderKanban, title: "Project Management", description: "End-to-end project management for IT deployments." },
  { icon: Network, title: "Network Installation", description: "LAN, WAN, and wireless network design and installation.", image: servicesNetwork },
  { icon: Cloud, title: "Cloud Services", description: "Cloud migration, hosting, and managed cloud solutions." },
  { icon: Layers, title: "Virtualization", description: "Server and desktop virtualization solutions." },
  { icon: HardDrive, title: "Storage Solutions", description: "Enterprise storage and data management solutions." },
  { icon: ShieldCheck, title: "Disaster Recovery", description: "Business continuity and disaster recovery planning.", image: servicesSecurity },
  { icon: Monitor, title: "POS Systems", description: "Point-of-sale hardware and software solutions." },
  { icon: Thermometer, title: "Environmental Monitoring", description: "Data center and facility environmental monitoring." },
  { icon: Server, title: "Hardware Sales", description: "Servers, desktops, laptops, printers, and accessories." },
  { icon: Code, title: "Software Solutions", description: "Enterprise software licensing and custom applications." },
];

const Services = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">Our Services</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      <Marquee items={["Sales", "Technology", "Consultancy", "Training", "Cloud", "Network", "Virtualization", "Storage"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="What We Offer" title="Full-Spectrum IT Services" description="From consultancy to deployment, we cover every aspect of your technology lifecycle." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {allServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
