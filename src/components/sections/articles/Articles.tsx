import { useArticles } from "@/hooks/useArticles";

import { Section } from "@/components/common/Section";
import { ArticlesGrid } from "./ArticlesGrid";
import { ArrowUpRight} from "lucide-react";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";

export function Articles() {
    const { data: articles, isLoading, isError } = useArticles();

    return (
        <Section>
            <div className="mx-auto max-w-6xl">
                
                <div className="mb-10 flex flex-col gap-4 border-b border-border/70 pb-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                            Latest Articles
                        </h2>
                        <p className="mt-3 max-w-lg text-sm text-foreground/60 sm:text-base">
                            Sharing what I'm learning about software engineering, backend systems, and AI.
                        </p>
                    </div>

                    <a 
                        href="/articles" 
                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                    >
                        View all 
                        <ArrowUpRight className="size-3.5 opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                </div>

                {isLoading && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-[4/3] w-full animate-pulse rounded-xl bg-muted/50" />
                        ))}
                    </div>
                )}

                {isError && (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/20 py-12 text-center">
                        <p className="mb-3 text-sm text-foreground/60">Unable to load articles.</p>
                        <a 
                            href="https://dev.to/guna01" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
                        >
                            Visit my Dev.to profile
                            <ArrowUpRightIcon className="size-3.5" />
                        </a>
                    </div>
                )}

                {articles && !isError && (
                    <ArticlesGrid articles={articles.slice(0, 3)} />
                )}

            </div>
        </Section>
    );
}