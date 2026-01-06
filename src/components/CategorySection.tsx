import { ArticleCard } from "./ArticleCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Article } from "@/hooks/useNews";

interface CategorySectionProps {
  title: string;
  articles: Article[];
  isLoading?: boolean;
  error?: Error | null;
  id?: string;
}

export const CategorySection = ({ title, articles, isLoading = false, error = null, id }: CategorySectionProps) => {
  if (error) {
    return (
      <section className="mb-16" id={id}>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-red-500">Eroare la încărcarea știrilor: {error.message}</p>
      </section>
    );
  }

  return (
    <section className="mb-16" id={id}>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-[250px] w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            ))
          : articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
      </div>
    </section>
  );
};
