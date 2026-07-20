interface ProjectTechStackProps {
    technologies: string[];
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
    return (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {technologies.map((tech, index) => (
                <span key={tech} className="flex items-center text-sm font-medium text-foreground/70 sm:text-base">
                    {tech}
                    {index !== technologies.length - 1 && (
                        <span className="ml-2 text-foreground/30">•</span>
                    )}
                </span>
            ))}
        </div>
    );
}