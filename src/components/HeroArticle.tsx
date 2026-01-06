import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useNews } from "@/hooks/useNews";

export const HeroArticle = () => {
  const navigate = useNavigate();
  const { data: articles = [], isLoading } = useNews("General");

  const heroArticle = articles[0];

  const handleClick = () => {
    if (heroArticle) {
      navigate('/article', { state: heroArticle });
    }
  };

  if (isLoading || !heroArticle) {
    return (
      <article className="relative h-[600px] w-full overflow-hidden rounded-2xl bg-muted animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="h-6 bg-white/20 rounded mb-4 w-32"></div>
          <div className="h-12 bg-white/20 rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-white/20 rounded mb-4 w-full max-w-2xl"></div>
          <div className="flex items-center gap-4">
            <div className="h-4 bg-white/20 rounded w-24"></div>
            <div className="h-4 bg-white/20 rounded w-20"></div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative h-[600px] w-full overflow-hidden rounded-2xl group cursor-pointer" onClick={handleClick}>
      <img
        src={heroArticle.imageUrl}
        alt={heroArticle.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
        <Badge className="mb-4 bg-accent hover:bg-accent/90 border-0">
          {heroArticle.category}
        </Badge>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">
          {heroArticle.title}
        </h2>

        <p className="text-lg text-white/90 mb-4 max-w-3xl">
          {heroArticle.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-white/80">
          <span className="font-medium">{heroArticle.author}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {heroArticle.time}
          </span>
        </div>
      </div>
    </article>
  );
};
