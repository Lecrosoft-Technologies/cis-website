import { Target, Eye, Award, DollarSign, Clock, Users } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Mission", text: "To provide world-class IT and telecommunications solutions that empower organizations to achieve operational excellence and competitive advantage." },
  { icon: Eye, title: "Vision", text: "To be the leading provider of innovative and reliable technology solutions across Africa, recognized for excellence and customer satisfaction." },
  { icon: Award, title: "Quality Objective", text: "To consistently deliver solutions that meet international standards, ensuring reliability, efficiency, and value for our clients." },
  { icon: DollarSign, title: "Financial Strength", text: "Backed by strong financial foundations and strategic partnerships with global technology leaders, ensuring project delivery reliability." },
  { icon: Clock, title: "Experience", text: "Over two decades of proven track record delivering enterprise IT solutions across banking, oil & gas, government, and private sectors." },
  { icon: Users, title: "Manpower", text: "A team of certified professionals with expertise across networking, cloud, security, and enterprise application domains." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative py-32 md:py-40 gradient-hero overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About CIS Limited</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">Delivering excellence in IT solutions since 1995</p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="section-padding tech-grid">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Who We Are" title="Your Trusted Technology Partner" />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Communication & Information Systems Limited (CIS Limited)</strong> is a Limited liability company registered under the Company and Allied Matters decree of the Federal Government of Nigeria to operate the business of Computer, Telecommunications and Information technology.
            </p>
            <p>
              We provide End-to-End Business Solutions, Computer and Information services as well as sales and servicing of computer and telecom equipment. Our commitment to quality and innovation has made us a trusted partner for organizations across all sectors in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Grid */}
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <SectionHeading label="Our Foundation" title="What Drives Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-8 hover-lift">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
