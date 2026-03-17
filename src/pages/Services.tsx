import {
  ShoppingCart, Cpu, Lightbulb, GraduationCap, FolderKanban,
  Network, Cloud, Layers, HardDrive, ShieldCheck, Monitor,
  Thermometer, Server, Code
} from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger } from "@/hooks/useGsap";

import servicesCloud from "@/assets/services-cloud.jpg";
import servicesNetwork from "@/assets/services-network.jpg";
import servicesSecurity from "@/assets/services-security.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import serviceDatacenter from "@/assets/service-datacenter.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import heroMeeting from "@/assets/hero-meeting.jpg";
import heroStrategy from "@/assets/hero-strategy.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutDatacenter from "@/assets/about-datacenter.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";

const allServices = [
  { icon: ShoppingCart, title: "Sales", description: "Complete hardware and software sales for enterprise and SMB clients.", image: heroMeeting },
  { icon: Cpu, title: "Technology", description: "Cutting-edge technology deployment and integration services.", image: servicesCloud },
  { icon: Lightbulb, title: "Consultancy", description: "Strategic IT consulting to align technology with business goals.", image: serviceConsulting },
  { icon: GraduationCap, title: "Training", description: "Professional IT training and certification programs.", image: serviceTraining },
  { icon: FolderKanban, title: "Project Management", description: "End-to-end project management for IT deployments.", image: heroStrategy },
  { icon: Network, title: "Network Installation", description: "LAN, WAN, and wireless network design and installation.", image: servicesNetwork },
  { icon: Cloud, title: "Cloud Services", description: "Cloud migration, hosting, and managed cloud solutions.", image: serviceDatacenter },
  { icon: Layers, title: "Virtualization", description: "Server and desktop virtualization solutions.", image: heroLaptop },
  { icon: HardDrive, title: "Storage Solutions", description: "Enterprise storage and data management solutions.", image: aboutDatacenter },
  { icon: ShieldCheck, title: "Disaster Recovery", description: "Business continuity and disaster recovery planning.", image: servicesSecurity },
  { icon: Monitor, title: "POS Systems", description: "Point-of-sale hardware and software solutions.", image: heroOffice },
  { icon: Thermometer, title: "Environmental Monitoring", description: "Data center and facility environmental monitoring.", image: aboutTeam },
  { icon: Server, title: "Hardware Sales", description: "Servers, desktops, laptops, printers, and accessories.", image: heroTeam },
  { icon: Code, title: "Software Solutions", description: "Enterprise software licensing and custom applications.", image: servicesCloud },
];

const Services = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <InnerHero label="Services" title="Our Services" description="Comprehensive IT solutions tailored to your business needs" />

      <Marquee items={["Sales", "Technology", "Consultancy", "Training", "Cloud", "Network", "Virtualization", "Storage"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="What We Offer" title="Full-Spectrum IT Services" description="From consultancy to deployment, we cover every aspect of your technology lifecycle." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {allServices.map((s) => (
              <div key={s.title} className="gsap-stagger service-card-premium group">
                <div className="card-img relative">
                  <img src={s.image} alt={s.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
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
    </div>
  );
};

export default Services;
