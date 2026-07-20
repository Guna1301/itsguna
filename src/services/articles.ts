import { fetchDevToArticles } from "./devto";
import type { Article } from "@/types/articles";

export async function getArticles(): Promise<Article[]> {
    const rawData = await fetchDevToArticles("guna01");

    const articles: Article[] = rawData.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        coverImage: item.cover_image || item.social_image,
        url: item.url,
        publishedAt: item.published_at,
        readingTime: item.reading_time_minutes,
        tags: item.tag_list,
        canonicalUrl: item.canonical_url,
    }));

    const validArticles: Article[] = articles.filter((article)=>{
        return article.readingTime > 1;
    })

    return validArticles.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}