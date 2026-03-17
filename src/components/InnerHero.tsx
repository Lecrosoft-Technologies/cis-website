import HeroBackground from "./HeroBackground";

interface Props {
  label: string;
  title: string;
  description: string;
}

const InnerHero = ({ label, title, description }: Props) => (
  <section className="inner-hero">
    <HeroBackground />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border text-secondary border-secondary/30 bg-secondary/10">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {label}
      </span>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 font-display">{title}</h1>
      <p className="text-primary-foreground/50 max-w-2xl mx-auto text-base md:text-lg">{description}</p>
    </div>
  </section>
);

export default InnerHero;
