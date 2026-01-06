import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';

const API_KEY = '935cecfe80e14bdcb5d1c000dad47acb';
const BASE_URL = 'https://newsapi.org/v2';

interface NewsArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export interface Article {
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  time: string;
  imageUrl: string;
  url: string;
}

const fetchNews = async (category: string): Promise<Article[]> => {
  const categoryMap: { [key: string]: string } = {
    Tech: 'technology',
    Economie: 'business',
    Sport: 'sports',
    Politic: 'general',
    Cultură: 'entertainment',
    Sănătate: 'health',
  };

  const apiCategory = categoryMap[category] || 'general';

  const response = await fetch(`${BASE_URL}/top-headlines?country=us&category=${apiCategory}&apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data: NewsResponse = await response.json();

  return data.articles.slice(0, 3).map(article => ({
    category,
    title: article.title,
    excerpt: article.description || 'No description available',
    content: article.content || article.description || 'No content available',
    author: article.author || article.source.name || 'Unknown',
    time: formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true }),
    imageUrl: article.urlToImage || '/placeholder.svg',
    url: article.url,
  }));
};

export const useNews = (category: string) => {
  return useQuery({
    queryKey: ['news', category],
    queryFn: () => fetchNews(category),
    refetchInterval: 5 * 60 * 1000, // 5 minutes
    staleTime: 4 * 60 * 1000, // 4 minutes
  });
};