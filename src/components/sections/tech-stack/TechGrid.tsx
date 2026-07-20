import { motion, AnimatePresence } from "framer-motion";
import type { TechStackItem } from "@/types/tech-stack";
import { TechBadge } from "./TechBadge";

interface TechGridProps {
    items: TechStackItem[];
}

export function TechGrid({ items }: TechGridProps) {
    return (
        <motion.div 
            layout 
            className="mt-8 flex flex-wrap gap-3 sm:mt-12 sm:gap-4"
        >
            <AnimatePresence mode="popLayout">
                {items.map((item) => (
                    <TechBadge key={item.id} item={item} />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}