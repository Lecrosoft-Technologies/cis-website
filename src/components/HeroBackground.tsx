const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    {/* Floating orbs */}
    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
    {/* Dots */}
    <div className="absolute top-20 right-20 w-2 h-2 bg-secondary rounded-full animate-float" />
    <div className="absolute bottom-32 right-40 w-1.5 h-1.5 bg-primary-foreground/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
    <div className="absolute top-40 left-20 w-1 h-1 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
  </div>
);

export default HeroBackground;
