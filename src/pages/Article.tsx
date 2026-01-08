import { useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const Article = () => {
  const location = useLocation();
  const article = location.state as {
    category: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    time: string;
    imageUrl: string;
    url: string;
  };

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Badge variant="secondary" className="text-xs mb-4">
            {article.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <span className="font-medium">{article.author}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.time}
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl mb-6">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>{article.content}</p>
          <div className="text-center">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition-colors"
            >
              Citește articolul complet
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;