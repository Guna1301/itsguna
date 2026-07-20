import { timeline } from "@/data/timeline";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import { TimelineList } from "./TimelineList";

export function Timeline() {
    const featuredMilestones = timeline.filter((item) => item.featured);

    return (
        <section className="w-full border-t border-border/70 px-4 py-16 sm:px-6 md:px-8 md:py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex items-end justify-between sm:mb-12">
                    <h2 className="font-serif text-2xl text-foreground">
                        Timeline
                    </h2>
                    
                    <a 
                        href="/timeline" 
                        className="group flex items-center gap-1.5 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                    >
                        View all 
                        <ArrowUpRightIcon className="size-3.5 opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                </div>

                <div className="pl-1 sm:pl-2">
                    <TimelineList items={featuredMilestones} />
                </div>
            </div>
        </section>
    );
}