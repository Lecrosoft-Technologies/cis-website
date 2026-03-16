import { Server, Monitor, Laptop, Printer, Battery, ScanLine, Copy, CreditCard, Plug, Package } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapStagger } from "@/hooks/useGsap";

const products = [
  { icon: Server, title: "Servers", desc: "Enterprise rack, tower, and blade servers from HP, Dell, IBM." },
  { icon: Monitor, title: "Desktops", desc: "Business-class desktop computers for office productivity." },
  { icon: Laptop, title: "Laptops", desc: "Professional laptops and notebooks for mobile workforce." },
  { icon: Printer, title: "Printers", desc: "Laser, inkjet, and multifunction printers for all environments." },
  { icon: Battery, title: "UPS / Inverters", desc: "Uninterruptible power supply and inverter systems." },
  { icon: ScanLine, title: "Scanners", desc: "Document and flatbed scanners for digitization." },
  { icon: Copy, title: "Photocopiers", desc: "High-volume photocopiers and multifunction devices." },
  { icon: CreditCard, title: "ID Card Printers", desc: "Professional ID card printing solutions." },
  { icon: Plug, title: "Accessories", desc: "Cables, peripherals, and computing accessories." },
  { icon: Package, title: "Printer Consumables", desc: "Toners, cartridges, and printer maintenance supplies." },
];

const Products = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Products
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">Products & Sales</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Quality IT hardware from world-leading manufacturers</p>
        </div>
      </section>

      <Marquee items={["Servers", "Desktops", "Laptops", "Printers", "UPS", "Scanners", "Accessories"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Our Products" title="Hardware & Equipment" description="We supply and service a comprehensive range of IT and telecom equipment." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((p) => (
              <div key={p.title} className="gsap-stagger glass-card rounded-2xl p-6 text-center hover-lift group">
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <p.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-sm text-foreground mb-1 font-display">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
