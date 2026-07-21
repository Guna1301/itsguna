import { useState } from "react";
import type { Category } from "@/types/tech-stack";
import { techStack } from "@/data/tech-stack";

import { Section } from "@/components/common/Section";

import { TechFilters } from "./TechFilters";
import { TechGrid } from "./TechGrid";

export function TechStack() {
    const [activeFilter, setActiveFilter] = useState<Category>("all");

    const filteredItems = activeFilter === "all" 
        ? techStack 
        : techStack.filter((item) => item.category === activeFilter);

    return (
        <Section>
            <div className="mx-auto max-w-6xl">
                
                <div className="flex flex-col gap-6 border-b border-dashed border-border/70 pb-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-baseline gap-3">
                        <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                            Tech Stack
                        </h2>
                    </div>

                    <div className="-mx-4 px-4 md:mx-0 md:px-0">
                        <TechFilters 
                            activeFilter={activeFilter} 
                            onFilterChange={setActiveFilter} 
                        />
                    </div>
                </div>

                <TechGrid items={filteredItems} />

            </div>
        </Section>
    );
}