import type { Article } from "@/types/articles";
import { ArticleCard } from "./ArticlesCard";

interface ArticlesGridProps {
    articles: Article[];
}

export function ArticlesGrid({ articles }: ArticlesGridProps) {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}