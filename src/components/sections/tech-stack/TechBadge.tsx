import type { TechStackItem } from "@/types/tech-stack";

interface TechBadgeProps {
    item: TechStackItem;
}

export function TechBadge({ item: { name, icon: Icon } }: TechBadgeProps) {
    return (
        <div className="flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/30 px-2.5 py-1 cursor-pointer transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm">
            <Icon className="size-3.5 shrink-0 text-foreground/70 transition-colors group-hover:text-foreground" />
            <span className="text-xs text-foreground/80">
                {name}
            </span>
        </div>
    );
}