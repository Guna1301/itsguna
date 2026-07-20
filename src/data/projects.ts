import Arbiter from "@/assets/images/projects/Arbiter.png";
import Conlea from "@/assets/images/projects/Conlea.png";

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

export const projects: Project[] = [
    {
        id: "1",
        slug: "arbiter",
        title: "Arbiter",
        subtitle: "Distributed Rate Limiting Platform",
        description: "A distributed rate limiting platform designed for scalable APIs. It provides real-time traffic control and spike mitigation.",
        technologies: ["Node.js", "Redis", "Docker", "Lua"],
        github: "https://github.com/gsxvoid/arbiter",
        live: "https://arbiter.gsxvoid.dev", 
        featured: true,
        image: Arbiter,
    },
    {
        id: "2",
        slug: "context-engine",
        title: "Context Engine",
        subtitle: "AI Context Management System",
        description: "An intelligent middleware layer that dynamically aggregates, prunes, and injects relevant context into LLM prompts.",
        technologies: ["Python", "FastAPI", "LangChain"],
        github: "https://github.com/gsxvoid/context-engine",
        featured: true,
        image: "/assets/images/projects/context.jpg",
    },
    {
        id: "3",
        slug: "conlea",
        title: "Conlea",
        subtitle: "Developer Infrastructure Tooling",
        description: "A lightweight infrastructure-as-code wrapper designed to simplify the provisioning of ephemeral development environments.",
        technologies: ["Go", "Terraform", "AWS"],
        github: "https://github.com/gsxvoid/conlea",
        live: "https://conlea.dev",
        featured: true,
        image: Conlea,
    },
    {
        id: "4",
        slug: "echoo",
        title: "Echoo",
        subtitle: "Real-time Communication App",
        description: "A modern, real-time messaging application with end-to-end encryption and a focus on minimal, distraction-free design.",
        technologies: ["React", "Tailwind CSS", "Socket.io"],
        github: "https://github.com/gsxvoid/echoo",
        featured: false, // Won't show on homepage, but will show on /projects
        image: "/assets/images/projects/echoo.jpg",
    }
];