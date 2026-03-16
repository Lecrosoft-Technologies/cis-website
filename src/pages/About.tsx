import { Target, Eye, Award, DollarSign, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapFadeUp, useGsapStagger, useGsapCounter } from "@/hooks/useGsap";

import aboutDatacenter from "@/assets/about-datacenter.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import heroTeam from "@/assets/hero-team.jpg";

const values = [
  { icon: Target, title: "Mission", text: "To provide world-class IT and telecommunications solutions that empower organizations to achieve operational excellence and competitive advantage." },
  { icon: Eye, title: "Vision", text: "To be the leading provider of innovative and reliable technology solutions across Africa, recognized for excellence and customer satisfaction." },
  { icon: Award, title: "Quality Objective", text: "To consistently deliver solutions that meet international standards, ensuring reliability, efficiency, and value for our clients." },
  { icon: DollarSign, title: "Financial Strength", text: "Backed by strong financial foundations and strategic partnerships with global technology leaders." },
  { icon: Clock, title: "Experience", text: "Over two decades of proven track record delivering enterprise IT solutions across banking, oil & gas, government, and private sectors." },
  { icon: Users, title: "Manpower", text: "A team of certified professionals with expertise across networking, cloud, security, and enterprise application domains." },
];

const About = () => {
  const aboutRef = useGsapFadeUp();
  const valuesRef = useGsapStagger();
  const statsRef = useGsapCounter();

  return (
    <div>
      {/* Hero */}
      <section className="relative py-36 md:py-44 gradient-hero overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 font-display">About CIS Limited</h1>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg">Delivering excellence in IT solutions since 1995</p>
        </div>
      </section>

      <Marquee items={["Innovation", "Excellence", "Reliability", "Trust", "Quality", "Expertise", "Partnership"]} />

      {/* Who We Are */}
      <section ref={aboutRef} className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up grid grid-cols-2 gap-4">
              <div className="img-overlay h-72 rounded-2xl">
                <img src={aboutDatacenter} alt="Data Center" />
              </div>
              <div className="img-overlay h-72 rounded-2xl mt-8">
                <img src={aboutTeam} alt="Team" />
              </div>
              <div className="img-overlay h-48 rounded-2xl col-span-2">
                <img src={heroTeam} alt="Server Room" />
              </div>
            </div>
            <div>
              <SectionHeading label="Who We Are" title="Your Trusted Technology Partner" center={false} />
              <div className="gsap-fade-up space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Communication & Information Systems Limited (CIS Limited)</strong> is a Limited liability company registered under the Company and Allied Matters decree of the Federal Government of Nigeria to operate the business of Computer, Telecommunications and Information technology.
                </p>
                <p>
                  We provide End-to-End Business Solutions, Computer and Information services as well as sales and servicing of computer and telecom equipment. Our commitment to quality and innovation has made us a trusted partner for organizations across all sectors in Nigeria.
                </p>
              </div>
              <Link to="/contact" className="gsap-fade-up mt-8 btn-pill-primary text-xs inline-flex">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div ref={statsRef} className="bg-muted/50 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 25, label: "Years Experience" },
              { num: 500, label: "Projects Delivered" },
              { num: 200, label: "Happy Clients" },
              { num: 50, label: "Tech Experts" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number gradient-text counter-num" data-target={stat.num}>0+</div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <section ref={valuesRef} className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Our Foundation" title="What Drives Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {values.map((v) => (
              <div key={v.title} className="gsap-stagger glass-card rounded-2xl p-8 hover-lift group">
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-display">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
