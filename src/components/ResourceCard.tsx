import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
}

const ResourceCard = ({ title, description, link }: ResourceCardProps) => (
  <div className="bg-muted rounded-xl p-5 sm:p-6 flex flex-col gap-2 shadow-sm">
    <h3 className="text-lg font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground flex-1">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 mt-2 self-start px-4 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
    >
      Click here <ExternalLink size={14} />
    </a>
  </div>
);

export default ResourceCard;
