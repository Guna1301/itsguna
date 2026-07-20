export interface Article {
    id: number;
    title: string;
    description: string;
    coverImage?: string;
    url: string;
    publishedAt: string;
    readingTime: number;
    tags: string[];
    canonicalUrl?: string;
}