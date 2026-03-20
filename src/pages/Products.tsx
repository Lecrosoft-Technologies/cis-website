import { Server, Monitor, Laptop, Printer, Battery, ScanLine, Copy, CreditCard, Plug, Package, ShoppingCart, ArrowRight, MessageCircle, Star } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger } from "@/hooks/useGsap";
import { Link } from "react-router-dom";

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

const WHATSAPP_NUMBER = "23417616165";

const products = [
  { icon: Server, title: "Servers", desc: "Enterprise rack, tower, and blade servers from HP, Dell, IBM.", image: serviceDatacenter, price: "From ₦2,500,000", badge: "Popular" },
  { icon: Monitor, title: "Desktops", desc: "Business-class desktop computers for office productivity.", image: heroOffice, price: "From ₦350,000", badge: null },
  { icon: Laptop, title: "Laptops", desc: "Professional laptops and notebooks for mobile workforce.", image: heroLaptop, price: "From ₦450,000", badge: "Best Seller" },
  { icon: Printer, title: "Printers", desc: "Laser, inkjet, and multifunction printers for all environments.", image: serviceConsulting, price: "From ₦120,000", badge: null },
  { icon: Battery, title: "UPS / Inverters", desc: "Uninterruptible power supply and inverter systems.", image: servicesNetwork, price: "From ₦85,000", badge: null },
  { icon: ScanLine, title: "Scanners", desc: "Document and flatbed scanners for digitization.", image: servicesCloud, price: "From ₦75,000", badge: null },
  { icon: Copy, title: "Photocopiers", desc: "High-volume photocopiers and multifunction devices.", image: heroMeeting, price: "From ₦350,000", badge: null },
  { icon: CreditCard, title: "ID Card Printers", desc: "Professional ID card printing solutions.", image: aboutDatacenter, price: "From ₦250,000", badge: null },
  { icon: Plug, title: "Accessories", desc: "Cables, peripherals, and computing accessories.", image: heroTeam, price: "From ₦5,000", badge: null },
  { icon: Package, title: "Printer Consumables", desc: "Toners, cartridges, and printer maintenance supplies.", image: serviceTraining, price: "From ₦15,000", badge: null },
];

const getWhatsAppLink = (product: string, price: string) => {
  const message = encodeURIComponent(
    `Hello CIS Limited,\n\nI am interested in ordering the following product:\n\n📦 Product: ${product}\n💰 Starting Price: ${price}\n\nPlease provide more details on availability, specifications, and pricing.\n\nThank you.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const Products = () => {
  const ref = useGsapStagger();
  return (
    <div>
      <InnerHero label="Products" title="Products & Sales" description="Quality IT hardware from world-leading manufacturers" />

      <Marquee items={["Servers", "Desktops", "Laptops", "Printers", "UPS", "Scanners", "Accessories"]} />

      <section ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <SectionHeading label="Our Products" title="Hardware & Equipment" description="We supply and service a comprehensive range of IT and telecom equipment." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {products.map((p) => (
              <div key={p.title} className="gsap-stagger group relative bg-card rounded-3xl overflow-hidden border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                {/* Badge */}
                {p.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {p.badge}
                  </div>
                )}
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center -mt-11 mb-4 relative z-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <p.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1 font-display">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.desc}</p>

                  {/* Price */}
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-lg font-bold text-primary font-display">{p.price}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={getWhatsAppLink(p.title, p.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25d366] text-primary-foreground text-xs font-semibold hover:bg-[#20bd5a] transition-all duration-300 shadow-lg shadow-[#25d366]/20 hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Order Now
                    </a>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-1 px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Genuine Products", icon: Star },
              { label: "Warranty Included", icon: ShoppingCart },
              { label: "Fast Delivery", icon: Package },
              { label: "Expert Support", icon: MessageCircle },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello CIS Limited, I need a custom quote for bulk IT equipment. Please contact me.")}`} target="_blank" rel="noopener noreferrer" className="btn-pill bg-[#25d366] text-primary-foreground text-sm shadow-xl hover:-translate-y-1 transition-transform">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <Link to="/contact" className="btn-pill-light text-sm">
              Request Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
