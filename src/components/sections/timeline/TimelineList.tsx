import type { TimelineItem as TimelineItemType } from "@/data/timeline";
import { TimelineItem } from "./TimelineItem";

interface TimelineListProps {
    items: TimelineItemType[];
}

export function TimelineList({ items }: TimelineListProps) {
    return (
        <div className="flex w-full flex-col">
            {items.map((item, index) => (
                <TimelineItem 
                    key={item.id} 
                    item={item} 
                    isLast={index === items.length - 1} 
                />
            ))}
        </div>
    );
}