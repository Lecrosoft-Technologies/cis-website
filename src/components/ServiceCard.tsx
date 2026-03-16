import { type LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, image }: Props) => (
  <div className="gsap-stagger glass-card rounded-2xl overflow-hidden hover-lift group cursor-default">
    {image && (
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
    )}
    <div className="p-6 md:p-8">
      <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 font-display">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
