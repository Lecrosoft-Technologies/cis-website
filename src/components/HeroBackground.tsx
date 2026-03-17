const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
    <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
    {/* Grid */}
    <div className="absolute inset-0 opacity-[0.03]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
    {/* Floating accent dots */}
    <div className="absolute top-20 right-[15%] w-3 h-3 bg-secondary rounded-full animate-float opacity-60" />
    <div className="absolute bottom-32 right-[30%] w-2 h-2 bg-primary-foreground/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
    <div className="absolute top-[40%] left-[10%] w-2 h-2 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
    <div className="absolute bottom-[15%] right-[8%] w-4 h-4 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "3s" }} />
    {/* Spinning rings */}
    <div className="absolute top-[20%] right-[10%] w-32 h-32 border border-primary-foreground/5 rounded-full animate-spin-slow" />
    <div className="absolute bottom-[20%] left-[5%] w-20 h-20 border border-secondary/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
    {/* Blob shapes */}
    <div className="absolute top-[10%] left-[60%] w-64 h-64 bg-secondary/5 animate-blob rounded-full blur-3xl" />
  </div>
);

export default HeroBackground;
