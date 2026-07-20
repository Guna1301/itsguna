import type { Article } from "@/types/articles";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";

interface ArticleCardProps {
    article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
    const formattedDate = new Intl.DateTimeFormat("en-US", { 
        month: "short", 
        day: "numeric",
        year: "numeric"
    }).format(new Date(article.publishedAt));

    return (
        <div className="group flex h-full flex-col gap-4">
            {article.coverImage && (
                <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block aspect-[2/1] w-full shrink-0 overflow-hidden rounded-xl border border-border/50 bg-muted"
                >
                    <img 
                        src={article.coverImage} 
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </a>
            )}

            <div className="flex flex-1 flex-col gap-3">
                <a href={article.url} target="_blank" rel="noreferrer" className="block">
                    <h3 className="font-sans text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                        {article.title}
                    </h3>
                </a>

                <p className="text-sm leading-relaxed text-foreground/70 line-clamp-2">
                    {article.description}
                </p>

                <div className="mt-auto flex flex-col gap-4 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 3).map((tag) => (
                            <span 
                                key={tag} 
                                className="rounded-md border border-border/50 bg-muted/50 px-2 py-1 text-[10px] font-medium text-foreground/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-border/50 pt-3">
                        <div className="text-xs font-medium text-foreground/60">
                            {article.readingTime} min read <span className="mx-1">•</span> {formattedDate}
                        </div>

                        <a 
                            href={article.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-foreground/80 transition-colors hover:text-foreground"
                        >
                            <span className="relative">
                                Read Article
                                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                            </span>
                            <ArrowUpRightIcon className="size-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}