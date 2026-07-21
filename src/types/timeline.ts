export interface TimelineItem {
    id: string;
    slug: string;
    title: string;
    organization: string;
    duration: string;
    location?: string;
    type: "work" | "education" | "achievement";
    description: string;
    technologies?: string[];
    logo?: string;
    featured: boolean;
}