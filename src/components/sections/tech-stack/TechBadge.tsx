import { motion } from "framer-motion";
import type { TechStackItem } from "@/types/tech-stack";

interface TechBadgeProps {
    item: TechStackItem;
}

export function TechBadge({ item: { name, icon: Icon } }: TechBadgeProps) {
    return (
        <motion.div
            layout // Animates position changes automatically
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex cursor-default items-center gap-2.5 rounded-lg border border-border/50 bg-muted/30 px-3.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm sm:px-4 sm:py-2.5"
        >
            <Icon className="size-4 shrink-0 text-foreground/70 transition-colors group-hover:text-foreground sm:size-4.5" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 sm:text-sm">
                {name}
            </span>
        </motion.div>
    );
}