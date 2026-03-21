import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import InnerHero from "@/components/InnerHero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import HeroBackground from "@/components/HeroBackground";
import { useGsapStagger } from "@/hooks/useGsap";
import { useBlogStore } from "@/hooks/useProductStore";

const Blog = () => {
  const { posts } = useBlogStore();
  const ref = useGsapStagger();

  return (
    <div>
      <InnerHero label="Blog" title="Insights & News" description="Stay updated with the latest in technology and IT solutions" />
      <Marquee items={["Cloud", "Security", "Networking", "Enterprise", "Innovation", "Digital"]} />

      <section ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto">
          <SectionHeading label="Latest Posts" title="From Our Blog" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={post.id} className={`gsap-stagger group bg-card rounded-3xl overflow-hidden border border-border/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
                <div className={`overflow-hidden relative ${i === 0 ? "h-72" : "h-48"}`}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{post.category}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className={`font-bold text-foreground mb-2 font-display ${i === 0 ? "text-xl" : "text-base"}`}>{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-3 h-3" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <HeroBackground />
        <div className="container mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-display">Have a Topic in Mind?</h2>
          <p className="text-primary-foreground/40 mb-8 max-w-lg mx-auto">Contact us and we'll cover it in our next article.</p>
          <Link to="/contact" className="btn-pill-primary text-sm shadow-xl shadow-primary/20">Contact Us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
