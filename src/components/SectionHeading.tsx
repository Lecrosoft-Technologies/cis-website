interface Props {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, center = true, light = false }: Props) => (
  <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
    {label && (
      <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-primary-foreground/60" : "gradient-text"}`}>
        {label}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
