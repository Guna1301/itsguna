import { ArrowUpRight} from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";


export function FeaturedProjects() {
    const featuredProjects = projects.filter(p => p.featured);

    return (
        <Section>
            <Container>
                <div>
                    <div className="mb-8 flex items-end justify-between sm:mb-10">
                        <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                            Projects
                        </h2>
                        
                        <a 
                            href="/projects" 
                            className="group flex items-center gap-1.5 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                        >
                            View all 
                            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}