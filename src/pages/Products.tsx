import { Server, Monitor, Laptop, Printer, Battery, ScanLine, Copy, CreditCard, Plug, Package } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";

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

const Products = () => (
  <div>
    <section className="relative py-32 md:py-40 gradient-hero overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Products & Sales</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Quality IT hardware from world-leading manufacturers</p>
      </div>
    </section>

    <section className="section-padding tech-grid">
      <div className="container mx-auto">
        <SectionHeading label="Our Products" title="Hardware & Equipment" description="We supply and service a comprehensive range of IT and telecom equipment." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((p) => (
            <div key={p.title} className="glass-card rounded-2xl p-6 text-center hover-lift group">
              <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
