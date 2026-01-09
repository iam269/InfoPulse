import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = '/api/v2';

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

const searchNews = async (query: string): Promise<Article[]> => {
  if (!query.trim()) return [];

  const response = await fetch(`${BASE_URL}/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}&language=en&pageSize=20`);
  if (!response.ok) {
    console.error('Search fetch error:', await response.text());
    return []; // Return empty array instead of throwing
  }
  const data: NewsResponse = await response.json();

  return data.articles.map(article => ({
    category: 'Search',
    title: article.title,
    excerpt: article.description || 'No description available',
    content: article.content || article.description || 'No content available',
    author: article.author || article.source.name || 'Unknown',
    time: formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true }),
    imageUrl: article.urlToImage || '/placeholder.svg',
    url: article.url,
  }));
};

export const useSearchNews = (query: string) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => searchNews(query),
    enabled: !!query.trim(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};