import { useState } from "react";
import { MapPin, Phone, Mail, User, Send, ArrowRight, Clock, MessageCircle, Linkedin } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapFadeUp } from "@/hooks/useGsap";

import heroMeeting from "@/assets/hero-meeting.jpg";
import teamCeo from "@/assets/team-ceo.jpg";
import teamAdmin from "@/assets/team-admin.jpg";
import teamBd from "@/assets/team-bd.jpg";
import teamSolutions from "@/assets/team-solutions.jpg";

const contacts = [
  { name: "Mr. Tunde Oyefeso", role: "CEO", image: teamCeo },
  { name: "Mr. Samuel George", role: "Admin / Finance", image: teamAdmin },
  { name: "Mrs. Grace Fapohunda", role: "Business Development", image: teamBd },
  { name: "Mr. Ayoola Akanbi", role: "Enterprise Solutions", image: teamSolutions },
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
      <InnerHero label="Contact" title="Contact Us" description="Get in touch with our team" />

      <Marquee items={["Let's Talk", "Get a Quote", "Partnership", "Support", "Consultation"]} />

      <section ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <SectionHeading label="Get in Touch" title="We'd Love to Hear From You" center={false} />

              {/* Image */}
              <div className="gsap-fade-up img-overlay rounded-3xl h-52 shadow-xl mb-8 overflow-hidden" style={{ borderRadius: '20px 80px 20px 80px' }}>
                <img src={heroMeeting} alt="Contact us" />
              </div>

              <div className="gsap-fade-up space-y-4 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "6, Oyefeso Avenue, Obanikoro, Ikorodu Road\nP.O Box 505, Yaba, Lagos Nigeria" },
                  { icon: Phone, label: "Phone", value: "234-1-7616165 / 234-1-7655657" },
                  { icon: Mail, label: "Email", value: "info@cislimited.com" },
                  { icon: Clock, label: "Hours", value: "Mon - Fri: 8:00 AM - 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
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
                  <div key={c.name} className="glass-card rounded-2xl p-4 hover-lift group">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
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
            <div className="gsap-fade-up">
              <div className="glass-card rounded-3xl p-8 md:p-10 sticky top-28 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/3 rounded-full blur-3xl" />
                <h3 className="text-xl font-bold text-foreground mb-7 font-display relative z-10">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
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
                  <button type="submit" className="w-full btn-pill-primary justify-center shadow-xl shadow-primary/20">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Prefer to Chat?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Reach us instantly via WhatsApp or phone.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/23417616165" target="_blank" rel="noopener noreferrer" className="btn-pill bg-[#25d366] text-primary-foreground text-sm shadow-xl hover:-translate-y-1 transition-transform">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a href="tel:234-1-7616165" className="btn-pill-light text-sm">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
