import { Header } from "@/components/Header";
import { HeroArticle } from "@/components/HeroArticle";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { useNews } from "@/hooks/useNews";

const Index = () => {
  const { data: techArticles = [], isLoading: techLoading, error: techError } = useNews("Tech");
  const { data: economyArticles = [], isLoading: economyLoading, error: economyError } = useNews("Economie");
  const { data: sportArticles = [], isLoading: sportLoading, error: sportError } = useNews("Sport");
  const { data: politicArticles = [], isLoading: politicLoading, error: politicError } = useNews("Politic");
  const { data: culturaArticles = [], isLoading: culturaLoading, error: culturaError } = useNews("Cultură");
  const { data: sanatateArticles = [], isLoading: sanatateLoading, error: sanatateError } = useNews("Sănătate");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <HeroArticle />
        </div>

        <CategorySection title="Tehnologie" articles={techArticles} isLoading={techLoading} error={techError} id="tech" />
        <CategorySection title="Economie" articles={economyArticles} isLoading={economyLoading} error={economyError} id="economie" />
        <CategorySection title="Sport" articles={sportArticles} isLoading={sportLoading} error={sportError} id="sport" />
        <CategorySection title="Politic" articles={politicArticles} isLoading={politicLoading} error={politicError} id="politic" />
        <CategorySection title="Cultură" articles={culturaArticles} isLoading={culturaLoading} error={culturaError} id="cultură" />
        <CategorySection title="Sănătate" articles={sanatateArticles} isLoading={sanatateLoading} error={sanatateError} id="sănătate" />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
