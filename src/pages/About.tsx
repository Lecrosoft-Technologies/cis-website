import { Target, Eye, Award, DollarSign, Clock, Users, ArrowRight, CheckCircle2, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import HeroBackground from "@/components/HeroBackground";
import { useGsapFadeUp, useGsapStagger, useGsapCounter, useGsapScale } from "@/hooks/useGsap";

import aboutDatacenter from "@/assets/about-datacenter.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import heroMeeting from "@/assets/hero-meeting.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import teamCeo from "@/assets/team-ceo.jpg";
import teamAdmin from "@/assets/team-admin.jpg";
import teamBd from "@/assets/team-bd.jpg";
import teamSolutions from "@/assets/team-solutions.jpg";

const values = [
  { icon: Target, title: "Mission", text: "To provide world-class IT and telecommunications solutions that empower organizations to achieve operational excellence and competitive advantage.", color: "from-primary to-secondary" },
  { icon: Eye, title: "Vision", text: "To be the leading provider of innovative and reliable technology solutions across Africa, recognized for excellence and customer satisfaction.", color: "from-secondary to-cis-lime" },
  { icon: Award, title: "Quality Objective", text: "To consistently deliver solutions that meet international standards, ensuring reliability, efficiency, and value for our clients.", color: "from-primary to-primary" },
  { icon: DollarSign, title: "Financial Strength", text: "Backed by strong financial foundations and strategic partnerships with global technology leaders.", color: "from-cis-lime to-secondary" },
  { icon: Clock, title: "Experience", text: "Over two decades of proven track record delivering enterprise IT solutions across banking, oil & gas, government, and private sectors.", color: "from-secondary to-primary" },
  { icon: Users, title: "Manpower", text: "A team of certified professionals with expertise across networking, cloud, security, and enterprise application domains.", color: "from-primary to-cis-lime" },
];

const team = [
  { name: "Mr. Tunde Oyefeso", role: "CEO", image: teamCeo, bio: "Over 25 years of leadership in IT and telecommunications." },
  { name: "Mr. Samuel George", role: "Admin / Finance", image: teamAdmin, bio: "Expert in financial management and corporate administration." },
  { name: "Mrs. Grace Fapohunda", role: "Business Development", image: teamBd, bio: "Driving strategic growth and client partnerships." },
  { name: "Mr. Ayoola Akanbi", role: "Enterprise Solutions", image: teamSolutions, bio: "Specialist in enterprise architecture and IT solutions." },
];

const About = () => {
  const aboutRef = useGsapFadeUp();
  const valuesRef = useGsapStagger();
  const statsRef = useGsapCounter();
  const teamRef = useGsapScale();

  return (
    <div>
      <InnerHero label="About Us" title="About CIS Limited" description="Delivering excellence in IT solutions since 1995" />

      <Marquee items={["Innovation", "Excellence", "Reliability", "Trust", "Quality", "Expertise", "Partnership"]} />

      {/* Who We Are */}
      <section ref={aboutRef} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up relative">
              <div className="relative">
                <div className="img-overlay rounded-3xl h-[420px] shadow-2xl overflow-hidden" style={{
                  borderRadius: '20px 120px 20px 120px',
                }}>
                  <img src={aboutDatacenter} alt="Data Center" />
                </div>
                <div className="absolute -bottom-8 -right-4 lg:right-8 w-56 h-44 img-overlay rounded-2xl shadow-2xl border-4 border-background z-10 overflow-hidden">
                  <img src={aboutTeam} alt="Team" />
                </div>
                <div className="absolute -top-4 -left-4 w-44 h-32 img-overlay rounded-2xl shadow-2xl border-4 border-background z-10 overflow-hidden">
                  <img src={heroMeeting} alt="Meeting" />
                </div>
              </div>
              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-border/50 z-20">
                <span className="text-4xl font-bold gradient-text font-display">25+</span>
                <p className="text-xs text-muted-foreground mt-1">Years of Excellence</p>
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-secondary/8 rounded-3xl -z-10" />
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
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="gsap-fade-up mt-8 btn-pill-primary text-xs inline-flex shadow-lg shadow-primary/20">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div ref={statsRef} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 25, label: "Years Experience" },
              { num: 500, label: "Projects Delivered" },
              { num: 200, label: "Happy Clients" },
              { num: 50, label: "Tech Experts" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground counter-num font-display group-hover:text-secondary transition-colors duration-500" data-target={stat.num}>0+</div>
                <div className="text-sm text-primary-foreground/40 mt-2 font-medium">{stat.label}</div>
                <div className="w-12 h-0.5 gradient-brand mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <section ref={valuesRef} className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto">
          <SectionHeading label="Our Foundation" title="What Drives Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {values.map((v, i) => (
              <div key={v.title} className={`gsap-stagger glass-card rounded-3xl p-8 hover-lift group relative overflow-hidden ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${v.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative z-10">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-display">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <SectionHeading label="Our Team" title="Meet the Leadership" description="Experienced professionals driving innovation and excellence" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={member.name} className={`gsap-scale group ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden mb-5 aspect-[3/4] shadow-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Social overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-xs text-primary-foreground/70 mb-3">{member.bio}</p>
                    <div className="flex gap-2">
                      {[Linkedin, Mail, Phone].map((Icon, j) => (
                        <button key={j} className="w-8 h-8 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary-foreground" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-foreground font-display text-base">{member.name}</h3>
                <p className="text-sm text-secondary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
