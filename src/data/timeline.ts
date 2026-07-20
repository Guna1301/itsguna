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

export const timeline: TimelineItem[] = [
    {
        id: "1",
        slug: "software-engineer-centific",
        title: "Software Engineer",
        organization: "Centific",
        duration: "May 2026 – Present",
        location: "Hyderabad, India",
        type: "work",
        description: "Building AI-powered automation systems and scalable backend infrastructure to enhance developer workflows and system reliability.",
        technologies: ["Java", "Spring Boot", "Docker", "Redis"],
        featured: true,
    },
    {
        id: "2",
        slug: "centific-premier-hackathon",
        title: "Centific Premier Hackathon Winner",
        organization: "Centific",
        duration: "March 2026",
        location: "Hyderabad, India",
        type: "achievement",
        description: "Built an innovative AI solution demonstrating intelligent context management and real-time processing capabilities.",
        featured: true,
    },
    {
        id: "3",
        slug: "btech-cse",
        title: "Bachelor of Technology",
        organization: "Computer Science and Engineering",
        duration: "2022 – 2026",
        location: "India",
        type: "education",
        description: "Graduated with a focus on core computer science principles, distributed systems, and software engineering.",
        technologies: ["Data Structures", "Algorithms", "System Design"],
        featured: true,
    }
];