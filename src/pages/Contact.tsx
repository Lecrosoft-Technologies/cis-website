import { useState } from "react";
import { MapPin, Phone, Mail, User, Send, ArrowRight } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapFadeUp } from "@/hooks/useGsap";

const contacts = [
  { name: "Mr. Tunde Oyefeso", role: "CEO" },
  { name: "Mr. Samuel George", role: "Admin / Finance" },
  { name: "Mrs. Grace Fapohunda", role: "Business Development" },
  { name: "Mr. Ayoola Akanbi", role: "Enterprise Solutions" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const ref = useGsapFadeUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">Contact Us</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Get in touch with our team</p>
        </div>
      </section>

      <Marquee items={["Let's Talk", "Get a Quote", "Partnership", "Support", "Consultation"]} />

      <section ref={ref} className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <SectionHeading label="Get in Touch" title="We'd Love to Hear From You" center={false} />

              <div className="gsap-fade-up space-y-5 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "6, Oyefeso Avenue, Obanikoro, Ikorodu Road\nP.O Box 505, Yaba, Lagos Nigeria" },
                  { icon: Phone, label: "Phone", value: "234-1-7616165\n234-1-7655657" },
                  { icon: Mail, label: "Email", value: "info@cislimited.com" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                    <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center shrink-0 shadow-lg">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1 font-display">{item.label}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="gsap-fade-up font-bold text-foreground mb-5 font-display">Contact Persons</h4>
              <div className="gsap-fade-up grid grid-cols-2 gap-4">
                {contacts.map((c) => (
                  <div key={c.name} className="glass-card rounded-2xl p-5 hover-lift group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground font-display">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="gsap-fade-up glass-card rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-foreground mb-7 font-display">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Name", type: "text", key: "name", placeholder: "Your full name" },
                  { label: "Email", type: "email", key: "email", placeholder: "your@email.com" },
                  { label: "Subject", type: "text", key: "subject", placeholder: "How can we help?" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-semibold text-foreground mb-2 font-display">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2 font-display">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="w-full btn-pill-primary justify-center shadow-xl">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
