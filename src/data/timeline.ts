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
    // {
    //     id: "1",
    //     slug: "ai-engineer-centific",
    //     title: "AI Engineer",
    //     organization: "Centific",
    //     duration: "soon",
    //     location: "Hyderabad, India",
    //     type: "work",
    //     description: "Working on cutting-edge AI solutions, focusing on developing and deploying machine learning models, and contributing to innovative projects that leverage artificial intelligence to solve real-world problems.",
    //     technologies: ["Python", "FastAPI", "Docker"],
    //     featured: true,
    // },
    {
        id: "2",
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