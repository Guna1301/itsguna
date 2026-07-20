export type Category =
    | "all"
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "tools";

export interface TechStackItem {
    id: string;
    name: string;
    icon: React.ElementType;
    category: Exclude<Category, "all">; 
}