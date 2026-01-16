import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  time: string;
  imageUrl: string;
  url: string;
  featured?: boolean;
}

export const ArticleCard = ({
  category,
  title,
  excerpt,
  content,
  author,
  time,
  imageUrl,
  url,
  featured = false,
}: ArticleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/article', { state: { category, title, excerpt, content, author, time, imageUrl, url } });
  };

  return (
    <article className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`} onClick={handleClick}>
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            featured ? 'h-[400px]' : 'h-[250px]'
          }`}
        />
      </div>
      
      <div className="space-y-3">
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
        
        <h3 className={`font-bold leading-tight group-hover:text-accent transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2">{content}</p>
        
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="font-medium">{author}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {time}
          </span>
        </div>
      </div>
    </article>
  );
};
