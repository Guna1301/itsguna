import type { TimelineItem as TimelineItemType } from "@/data/timeline";
import { TimelineConnector } from "./TimelineConnector";

interface TimelineItemProps {
    item: TimelineItemType;
    isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
    return (
        <div className="relative flex w-full flex-col pb-8 sm:pb-10">
            <TimelineConnector isLast={isLast} />
            
            {/* Reduced top margin and tightened gap to save vertical space */}
            <div className="ml-7 mt-3 flex flex-col gap-2 sm:ml-9">
                <div>
                    {/* Consistent font-sans and text-lg matched with ProjectCard */}
                    <h3 className="font-sans text-lg font-bold tracking-tight text-foreground">
                        {item.title}
                    </h3>
                    
                    {/* Consistent text-xs for the subtitle details */}
                    <p className="mt-0.5 text-xs font-medium text-foreground/60">
                        {item.organization}
                        <span className="mx-1.5 text-foreground/40">•</span>
                        {item.duration}
                    </p>
                </div>

                {/* Consistent text-sm for description */}
                <p className="text-sm leading-relaxed text-foreground/70">
                    {item.description}
                </p>

                {/* Tech Stack Pills matching the ProjectCard */}
                {item.technologies && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                            <span 
                                key={tech} 
                                className="rounded-md border border-border/50 bg-muted/50 px-2 py-1 text-[10px] font-medium text-foreground/80"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}