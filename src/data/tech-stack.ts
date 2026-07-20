import { 
    SiReact, SiVite, SiTailwindcss, SiFramer, SiHtml5,
    SiSpringboot, SiNodedotjs, SiExpress, SiFastapi,
    SiPostgresql, SiMongodb, SiRedis,
    SiDocker, SiGit, SiGithub, SiPostman, SiLinux, SiNpm
} from "react-icons/si";
import { FaJava, FaPython, FaAws } from "react-icons/fa"; // AWS from FontAwesome
import { TbBrandVscode } from "react-icons/tb"; // VS Code from Tabler Icons
import { SiTypescript, SiJavascript } from "react-icons/si";

import type { TechStackItem } from "@/types/tech-stack";

export const techStack: TechStackItem[] = [
    // Languages
    { id: "java", name: "Java", icon: FaJava, category: "language" },
    { id: "ts", name: "TypeScript", icon: SiTypescript, category: "language" },
    { id: "js", name: "JavaScript", icon: SiJavascript, category: "language" },
    { id: "python", name: "Python", icon: FaPython, category: "language" },

    // Frontend
    { id: "react", name: "React", icon: SiReact, category: "frontend" },
    { id: "vite", name: "Vite", icon: SiVite, category: "frontend" },
    { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
    { id: "framer", name: "Framer Motion", icon: SiFramer, category: "frontend" },
    { id: "html", name: "HTML5", icon: SiHtml5, category: "frontend" },

    // Backend
    { id: "spring", name: "Spring Boot", icon: SiSpringboot, category: "backend" },
    { id: "node", name: "Node.js", icon: SiNodedotjs, category: "backend" },
    { id: "express", name: "Express.js", icon: SiExpress, category: "backend" },
    { id: "fastapi", name: "FastAPI", icon: SiFastapi, category: "backend" },

    // Database
    { id: "postgres", name: "PostgreSQL", icon: SiPostgresql, category: "database" },
    { id: "mongo", name: "MongoDB", icon: SiMongodb, category: "database" },
    { id: "redis", name: "Redis", icon: SiRedis, category: "database" },

    // DevOps & Cloud
    { id: "docker", name: "Docker", icon: SiDocker, category: "devops" },
    { id: "aws", name: "AWS", icon: FaAws, category: "devops" }, // Fixed AWS icon

    // Tools
    { id: "git", name: "Git", icon: SiGit, category: "tools" },
    { id: "github", name: "GitHub", icon: SiGithub, category: "tools" },
    { id: "postman", name: "Postman", icon: SiPostman, category: "tools" },
    { id: "vscode", name: "VS Code", icon: TbBrandVscode, category: "tools" }, // Fixed VS Code icon
    { id: "linux", name: "Linux", icon: SiLinux, category: "tools" },
    { id: "npm", name: "npm", icon: SiNpm, category: "tools" },
];