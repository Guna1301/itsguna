import type { TechStackItem } from "@/types/tech-stack";
import { TechBadge } from "./TechBadge";

interface TechGridProps {
    items: TechStackItem[];
}

export function TechGrid({ items }: TechGridProps) {
    return (
        <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            {items.map((item) => (
                <TechBadge key={item.id} item={item} />
            ))}
        </div>
    );
}