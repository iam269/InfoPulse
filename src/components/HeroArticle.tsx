import { Badge } from "@/components/ui/badge";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useNews } from "@/hooks/useNews";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const HeroArticle = () => {
  const navigate = useNavigate();
  const { data: articles = [], isLoading } = useNews("General");
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroArticles = articles.slice(0, 5); // Show top 5 articles
  const currentArticle = heroArticles[currentIndex];

  useEffect(() => {
    if (heroArticles.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroArticles.length);
      }, 10000); // 10 seconds

      return () => clearInterval(interval);
    }
  }, [heroArticles.length]);

  const handleClick = () => {
    if (currentArticle) {
      navigate('/article', { state: currentArticle });
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroArticles.length) % heroArticles.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroArticles.length);
  };

  if (isLoading || heroArticles.length === 0) {
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
    <div className="relative">
      <article className="relative h-[600px] w-full overflow-hidden rounded-2xl group cursor-pointer" onClick={handleClick}>
        <img
          src={currentArticle.imageUrl}
          alt={currentArticle.title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <Badge className="mb-4 bg-accent hover:bg-accent/90 border-0">
            {currentArticle.category}
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">
            {currentArticle.title}
          </h2>

          <p className="text-lg text-white/90 mb-4 max-w-3xl">
            {currentArticle.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="font-medium">{currentArticle.author}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {currentArticle.time}
            </span>
          </div>
        </div>
      </article>

      {/* Navigation buttons */}
      {heroArticles.length > 1 && (
        <>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-0 text-white"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-0 text-white"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroArticles.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
