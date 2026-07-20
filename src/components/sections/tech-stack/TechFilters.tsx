import { Category } from "@/types/tech-stack";

interface TechFiltersProps {
    activeFilter: Category;
    onFilterChange: (filter: Category) => void;
}

const FILTERS: { label: string; value: Category }[] = [
    { label: "All", value: "all" },
    { label: "Languages", value: "language" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Database", value: "database" },
    { label: "DevOps", value: "devops" },
    { label: "Tools", value: "tools" },
];

export function TechFilters({ activeFilter, onFilterChange }: TechFiltersProps) {
    return (
        // Hide scrollbar but allow horizontal scrolling on mobile
        <div className="flex w-full gap-2 overflow-x-auto pb-2 pl-1 pt-1 md:w-auto md:overflow-visible md:pb-0 md:pl-0 md:pt-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {FILTERS.map(({ label, value }) => (
                <button
                    key={value}
                    onClick={() => onFilterChange(value)}
                    className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                        activeFilter === value
                            ? "bg-foreground text-background"
                            : "bg-muted/50 text-foreground/60 hover:bg-muted hover:text-foreground"
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}