export type Project = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    github?: string;
    live?: string;
    featured: boolean;
    image: string;
}