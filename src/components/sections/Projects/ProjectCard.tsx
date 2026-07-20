import type { Project } from "@/data/projects";

import { GithubIcon } from "@/assets/icons/GithubIcon";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-3.5">
            <a 
                href={project.live || project.github || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-muted"
            >
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </a>

            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="font-sans text-lg font-bold tracking-tight text-foreground">
                            {project.title}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-foreground/60">
                            {project.subtitle}
                        </p>
                    </div>
                    {project.live && (
                        <div className="flex items-center gap-1.5 pt-1">
                            <span className="size-1.5 rounded-full bg-green-500" />
                            <span className="text-[10px] font-medium uppercase tracking-wider text-foreground/70">Live</span>
                        </div>
                    )}
                </div>

                <p className="text-sm leading-relaxed text-foreground/70 line-clamp-2">
                    {project.description}
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                            <span 
                                key={tech} 
                                className="rounded-md border border-border/50 bg-muted/50 px-2 py-1 text-[10px] font-medium text-foreground/80"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {project.github && (
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="group flex size-8 items-center justify-center rounded-full bg-muted/50 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:bg-muted hover:shadow-sm"
                            >
                                <GithubIcon className="size-5 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>
                        )}
                        {project.live && (
                            <a 
                                href={project.live} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="group inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-foreground/80 transition-colors hover:text-foreground"
                            >
                                <span className="relative">
                                    View Project
                                    <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                                </span>
                                <ArrowUpRightIcon className="size-3.5 opacity-70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}