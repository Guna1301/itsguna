import type { TimelineItem as TimelineItemType } from "@/data/timeline";
import { TimelineConnector } from "./TimelineConnector";

interface TimelineItemProps {
    item: TimelineItemType;
    isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
    return (
        <div className="relative flex w-full flex-col pb-10 sm:pb-14">
            
            <TimelineConnector isLast={isLast} />
            
            <div className="ml-7 mt-5 flex flex-col gap-3 sm:ml-9">
                <div className="flex flex-col gap-1">
                    <h3 className="font-sans text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {item.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground/60 sm:text-base">
                        {item.organization}
                        <span className="mx-2 text-foreground/30">•</span>
                        {item.duration}
                    </p>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {item.description}
                </p>

                {item.technologies && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                            <span 
                                key={tech} 
                                className="rounded-md border border-border/50 bg-muted/50 px-2.5 py-1 text-[10px] font-medium text-foreground/80 sm:text-xs"
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