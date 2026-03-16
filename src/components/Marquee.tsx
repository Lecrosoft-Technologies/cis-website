import { Star } from "lucide-react";

interface Props {
  items: string[];
  dark?: boolean;
}

const Marquee = ({ items, dark = false }: Props) => {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden py-5 ${dark ? "bg-foreground" : "bg-muted"}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-8 whitespace-nowrap">
            <Star className={`w-3.5 h-3.5 ${dark ? "text-secondary" : "text-primary"} fill-current`} />
            <span className={`text-sm font-semibold uppercase tracking-widest ${dark ? "text-primary-foreground" : "text-foreground/70"}`}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
