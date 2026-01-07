import { Header } from "@/components/Header";
import { HeroArticle } from "@/components/HeroArticle";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNews } from "@/hooks/useNews";
import { useSearchNews } from "@/hooks/useSearchNews";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: techArticles = [], isLoading: techLoading, error: techError } = useNews("Tech");
  const { data: economyArticles = [], isLoading: economyLoading, error: economyError } = useNews("Economie");
  const { data: sportArticles = [], isLoading: sportLoading, error: sportError } = useNews("Sport");
  const { data: politicArticles = [], isLoading: politicLoading, error: politicError } = useNews("Politic");
  const { data: culturaArticles = [], isLoading: culturaLoading, error: culturaError } = useNews("Cultură");
  const { data: sanatateArticles = [], isLoading: sanatateLoading, error: sanatateError } = useNews("Sănătate");

  const { data: searchResults = [], isLoading: searchLoading, error: searchError } = useSearchNews(searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />

      <main className="container mx-auto px-4 py-8">
        {searchQuery ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Rezultate căutare pentru "{searchQuery}"</h2>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Șterge căutarea
              </Button>
            </div>
            <CategorySection
              title=""
              articles={searchResults}
              isLoading={searchLoading}
              error={searchError}
              id="search"
            />
            {searchResults.length === 0 && !searchLoading && (
              <p className="text-center text-muted-foreground mt-8">Nu s-au găsit articole pentru această căutare.</p>
            )}
          </div>
        ) : (
          <>
            <div className="mb-12">
              <HeroArticle />
            </div>

            <CategorySection title="Tehnologie" articles={techArticles} isLoading={techLoading} error={techError} id="tech" />
            <CategorySection title="Economie" articles={economyArticles} isLoading={economyLoading} error={economyError} id="economie" />
            <CategorySection title="Sport" articles={sportArticles} isLoading={sportLoading} error={sportError} id="sport" />
            <CategorySection title="Politic" articles={politicArticles} isLoading={politicLoading} error={politicError} id="politic" />
            <CategorySection title="Cultură" articles={culturaArticles} isLoading={culturaLoading} error={culturaError} id="cultură" />
            <CategorySection title="Sănătate" articles={sanatateArticles} isLoading={sanatateLoading} error={sanatateError} id="sănătate" />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
