import Arbiter from "@/assets/images/projects/Arbiter.png";
import BrainWave from "@/assets/images/projects/BrainWave.png";
import Conlea from "@/assets/images/projects/conlea.png";
import VisitorManagement from "@/assets/images/projects/VisitorManagement.png";

import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "1",
        slug: "arbiter",
        title: "Arbiter",
        subtitle: "Distributed Rate Limiting Platform",
        description:
            "A distributed rate limiting platform for modern APIs featuring multiple rate limiting algorithms, Redis-backed state management, and a lightweight Node.js SDK for seamless integration.",
        technologies: [
            "Node.js",
            "Redis",
            "Docker",
            "AWS",
            "Lua"
        ],
        github: "https://github.com/Guna1301/arbiter",
        live: "https://arbiterapp.vercel.app/",
        featured: true,
        image: Arbiter,
    },
    {
        id: "2",
        slug: "brainwave",
        title: "BrainWave",
        subtitle: "AI-Powered Cognitive Retraining Platform",
        description:
            "An AI-powered cognitive retraining platform featuring interactive brain games, a RAG-powered AI assistant, and machine learning models for early cognitive risk assessment, helping identify the likelihood of conditions such as dyslexia and autism through user responses.",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "RAG",
            "Machine Learning"
        ],
        github: "https://github.com/Guna1301/cognitive",
        live: "https://brainwaveprod.vercel.app/",
        featured: true,
        image: BrainWave,
    },
    {
        id: "3",
        slug: "conlea",
        title: "Conlea",
        subtitle: "Language Exchange Social Platform",
        description:
            "A language exchange platform that connects learners with native speakers based on their language goals, enabling real-time messaging and video conversations for immersive language practice.",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Stream",
            "WebRTC"
        ],
        github: "https://github.com/Guna1301/conlea",
        live: "https://conlea.vercel.app/",
        featured: true,
        image: Conlea,
    },
    {
        id: "4",
        slug: "visitor-management-system",
        title: "Visitor Management System",
        subtitle: "Smart Parking & Visitor Management",
        description:
            "An IoT-powered smart parking and visitor management system that detects vehicle number plates, monitors parking slot occupancy, updates slot indicators in real time, and records vehicle information for secure access management.",
        technologies: [
            "ESP32",
            "OpenCV",
            "Flask",
            "React",
            "MongoDB"
        ],
        github: "https://github.com/Guna1301/G-39",
        featured: false,
        image: VisitorManagement,
    }
];