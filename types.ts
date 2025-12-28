
export type Category = 'Restaurant' | 'Place' | 'Airline' | 'Education' | 'Investment' | 'Others';

export interface Post {
  id: string;
  title: string;
  category: Category;
  summary: string;
  content: string;
  imageUrl: string;
  date: string;
  isFeatured: boolean;
}

export interface SiteConfig {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  pointColor: string;
}

export type AppView = 'user' | 'admin';
