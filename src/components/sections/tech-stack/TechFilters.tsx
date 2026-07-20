import type { Category } from "@/types/tech-stack";

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
        <div className="flex w-full gap-1 overflow-x-auto pb-2 md:w-auto md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {FILTERS.map(({ label, value }) => {
                const isActive = activeFilter === value;
                return (
                    <button
                        key={value}
                        onClick={() => onFilterChange(value)}
                        className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${
                            isActive
                                ? "bg-background text-foreground shadow-sm border border-border/50"
                                : "text-foreground/60 hover:text-foreground hover:bg-muted/50 border border-transparent"
                        }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}