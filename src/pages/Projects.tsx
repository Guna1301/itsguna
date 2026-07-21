import { Section } from "@/components/common/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/Projects/ProjectCard";

export default function Projects() {
    return (
        <Section>
            <div className="mx-auto max-w-6xl">
                
                <div className="mb-10 border-b border-border/70 pb-6 sm:mb-12">
                    <h1 className="font-serif text-2xl text-foreground sm:text-3xl">
                        Projects
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm text-foreground/60 sm:text-base">
                        A complete list of my personal projects, open-source contributions, and technical explorations.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                
            </div>
        </Section>
    );
}