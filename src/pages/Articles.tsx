"use client";

import { useState } from "react";
import { useArticles } from "@/hooks/useArticles";
import { Section } from "@/components/common/Section";
import { ArticlesGrid } from "@/components/sections/articles/ArticlesGrid";
import {ArrowUpRightIcon} from "@/assets/icons/ArrowUpRightIcon";

export default function ArticlesPage() {
    const { data: articles, isLoading, isError } = useArticles();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = articles?.filter((article) => {
        const query = searchQuery.toLowerCase();
        return (
            article.title.toLowerCase().includes(query) ||
            article.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });

    return (
        <Section className="py-12 md:py-16">
            <div className="mx-auto max-w-6xl">
                
                <div className="mb-8 border-b border-border/70 pb-6 sm:mb-10">
                    <h1 className="font-serif text-2xl text-foreground sm:text-3xl">
                        Articles
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm text-foreground/60 sm:text-base">
                        Technical writing on software engineering, backend architecture, AI, and things I'm learning.
                    </p>
                </div>

                <div className="mb-10 sm:mb-12">
                    <input
                        type="text"
                        placeholder="Search articles by title or tag..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full max-w-md rounded-lg border border-border/70 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/50 transition-all"
                    />
                </div>

                {isLoading && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-[4/3] w-full animate-pulse rounded-xl bg-muted/50" />
                        ))}
                    </div>
                )}

                {isError && (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/20 py-16 text-center">
                        <p className="mb-3 text-sm text-foreground/60">Unable to load articles.</p>
                        <a href="https://dev.to/guna01" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                            Visit my Dev.to profile
                            <ArrowUpRightIcon />
                        </a>
                    </div>
                )}

                {filteredArticles && filteredArticles.length > 0 && !isError && (
                    <ArticlesGrid articles={filteredArticles} />
                )}

                {filteredArticles && filteredArticles.length === 0 && !isError && (
                    <div className="py-12 text-center text-sm text-foreground/60">
                        No articles found matching "{searchQuery}".
                    </div>
                )}

            </div>
        </Section>
    );
}