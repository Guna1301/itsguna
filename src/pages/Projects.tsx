import { Section } from "@/components/common/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/Projects/ProjectCard";
import { Container } from "@/components/common/Container";

export default function Projects() {
    return (
        <Section>
            <Container>
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 border-b border-border/70 pb-8 sm:mb-16">
                        <h1 className="font-serif text-2xl text-foreground">
                            Projects
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-foreground/60">
                            A complete list of my personal projects, open-source contributions, and technical explorations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}