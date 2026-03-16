import { type LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: Props) => (
  <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift group cursor-default">
    <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-primary-foreground" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;
