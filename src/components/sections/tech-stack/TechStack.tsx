import { useState } from "react";
import { motion } from "framer-motion";

import type { Category } from "@/types/tech-stack";
import { techStack } from "@/data/tech-stack";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { TechFilters } from "./TechFilters";
import { TechGrid } from "./TechGrid";

export function TechStack() {
    const [activeFilter, setActiveFilter] = useState<Category>("all");

    // The filtering logic: flat, simple, no object traversal
    const filteredItems = activeFilter === "all" 
        ? techStack 
        : techStack.filter((item) => item.category === activeFilter);

    return (
        <Section className="border-t border-border/70 py-16 md:py-24">
            <Container>
                <div className="mx-auto max-w-6xl">
                    
                    {/* Header Row: Stacked on mobile, inline on desktop */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-border/70 pb-6 md:pb-8">
                        <div>
                            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                                Tech Stack
                            </h2>
                            <p className="mt-3 max-w-lg text-sm text-foreground/60 sm:text-base">
                                Building products with technologies I enjoy using.
                            </p>
                        </div>

                        {/* Filters push to the right on desktop */}
                        <div className="-mx-4 px-4 md:mx-0 md:px-0">
                            <TechFilters 
                                activeFilter={activeFilter} 
                                onFilterChange={setActiveFilter} 
                            />
                        </div>
                    </div>

                    <TechGrid items={filteredItems} />

                </div>
            </Container>
        </Section>
    );
}