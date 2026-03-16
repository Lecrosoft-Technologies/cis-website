interface Props {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, center = true, light = false }: Props) => (
  <div className={`mb-14 md:mb-20 ${center ? "text-center" : ""}`}>
    {label && (
      <span className={`gsap-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full border ${
        light
          ? "text-secondary border-secondary/30 bg-secondary/10"
          : "text-primary border-primary/20 bg-primary/5"
      }`}>
        <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-secondary" : "bg-primary"}`} />
        {label}
      </span>
    )}
    <h2 className={`gsap-fade-up text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance font-display ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`gsap-fade-up mt-5 text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
