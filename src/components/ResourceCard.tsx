import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
}

const ResourceCard = ({ title, description, link }: ResourceCardProps) => (
  <div className="group bg-muted rounded-xl p-5 sm:p-6 flex flex-col gap-2 shadow-sm
                  border-l-4 border-transparent
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] hover:bg-background hover:border-primary">
    <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{title}</h3>
    <p className="text-sm text-muted-foreground flex-1">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 mt-2 self-start px-4 py-1.5 rounded-md
                 bg-secondary text-secondary-foreground text-sm font-medium
                 transition-all duration-200
                 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:scale-105
                 active:scale-95"
    >
      Click here
      <ExternalLink size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  </div>
);

export default ResourceCard;
