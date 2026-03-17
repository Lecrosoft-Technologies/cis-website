import { Target, Eye, Award, DollarSign, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import { useGsapFadeUp, useGsapStagger, useGsapCounter } from "@/hooks/useGsap";

import aboutDatacenter from "@/assets/about-datacenter.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import heroMeeting from "@/assets/hero-meeting.jpg";

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
      <InnerHero label="About Us" title="About CIS Limited" description="Delivering excellence in IT solutions since 1995" />

      <Marquee items={["Innovation", "Excellence", "Reliability", "Trust", "Quality", "Expertise", "Partnership"]} />

      {/* Who We Are - overlapping image layout */}
      <section ref={aboutRef} className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up relative">
              {/* Creative image layout */}
              <div className="relative">
                <div className="img-overlay rounded-3xl h-80 shadow-xl">
                  <img src={aboutDatacenter} alt="Data Center" />
                </div>
                <div className="absolute -bottom-8 -right-4 lg:right-8 w-60 h-48 img-overlay rounded-2xl shadow-xl border-4 border-background z-10">
                  <img src={aboutTeam} alt="Team" />
                </div>
                <div className="absolute -top-4 -left-4 w-48 h-36 img-overlay rounded-2xl shadow-xl border-4 border-background z-10">
                  <img src={heroMeeting} alt="Meeting" />
                </div>
              </div>
              {/* Decorative shapes */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-2 w-16 h-16 border-2 border-primary/15 rounded-full -z-10" />
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
              <div className="gsap-fade-up mt-6 space-y-3">
                {["Certified Technology Experts", "24/7 Support Available", "Enterprise-Grade Solutions"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="gsap-fade-up mt-8 btn-pill-primary text-xs inline-flex">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - dark section */}
      <div ref={statsRef} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 25, label: "Years Experience" },
              { num: 500, label: "Projects Delivered" },
              { num: 200, label: "Happy Clients" },
              { num: 50, label: "Tech Experts" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground counter-num font-display" data-target={stat.num}>0+</div>
                <div className="text-sm text-primary-foreground/40 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <section ref={valuesRef} className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <SectionHeading label="Our Foundation" title="What Drives Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {values.map((v, i) => (
              <div key={v.title} className={`gsap-stagger glass-card rounded-3xl p-8 hover-lift group ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
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
