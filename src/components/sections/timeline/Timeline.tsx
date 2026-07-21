import { ArrowUpRight } from "lucide-react";
import { timeline } from "@/data/timeline";
import { TimelineList } from "./TimelineList";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

export function Timeline() {
    const featuredMilestones = timeline.filter((item) => item.featured);

    return (
        <Section>
            <div>
                <div className="mb-8 flex items-end justify-between sm:mb-10">
                    <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                        Timeline
                    </h2>
                    
                    <a 
                        href="/timeline" 
                        className="group flex items-center gap-1.5 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                    >
                        View full
                        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>

                <div className="pl-1 sm:pl-2">
                    <TimelineList items={featuredMilestones} />
                </div>
            </div>
        </Section>
    );
}