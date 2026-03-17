import { Server, Monitor, Laptop, Printer, Battery, ScanLine, Copy, CreditCard, Plug, Package } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger } from "@/hooks/useGsap";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import heroTeam from "@/assets/hero-team.jpg";
import serviceDatacenter from "@/assets/service-datacenter.jpg";
import servicesNetwork from "@/assets/services-network.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import aboutDatacenter from "@/assets/about-datacenter.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import servicesCloud from "@/assets/services-cloud.jpg";
import heroMeeting from "@/assets/hero-meeting.jpg";
import serviceTraining from "@/assets/service-training.jpg";

const products = [
  { icon: Server, title: "Servers", desc: "Enterprise rack, tower, and blade servers from HP, Dell, IBM.", image: serviceDatacenter },
  { icon: Monitor, title: "Desktops", desc: "Business-class desktop computers for office productivity.", image: heroOffice },
  { icon: Laptop, title: "Laptops", desc: "Professional laptops and notebooks for mobile workforce.", image: heroLaptop },
  { icon: Printer, title: "Printers", desc: "Laser, inkjet, and multifunction printers for all environments.", image: serviceConsulting },
  { icon: Battery, title: "UPS / Inverters", desc: "Uninterruptible power supply and inverter systems.", image: servicesNetwork },
  { icon: ScanLine, title: "Scanners", desc: "Document and flatbed scanners for digitization.", image: servicesCloud },
  { icon: Copy, title: "Photocopiers", desc: "High-volume photocopiers and multifunction devices.", image: heroMeeting },
  { icon: CreditCard, title: "ID Card Printers", desc: "Professional ID card printing solutions.", image: aboutDatacenter },
  { icon: Plug, title: "Accessories", desc: "Cables, peripherals, and computing accessories.", image: heroTeam },
  { icon: Package, title: "Printer Consumables", desc: "Toners, cartridges, and printer maintenance supplies.", image: serviceTraining },
];

const Products = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <InnerHero label="Products" title="Products & Sales" description="Quality IT hardware from world-leading manufacturers" />

      <Marquee items={["Servers", "Desktops", "Laptops", "Printers", "UPS", "Scanners", "Accessories"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Our Products" title="Hardware & Equipment" description="We supply and service a comprehensive range of IT and telecom equipment." />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((p) => (
              <div key={p.title} className="gsap-stagger service-card-premium group">
                <div className="card-img !h-36">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="p-5 text-center">
                  <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center mx-auto mb-3 -mt-9 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <p.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1 font-display">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Need a Custom Quote?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Contact us for pricing on bulk orders and enterprise procurement.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl">
            Request Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
