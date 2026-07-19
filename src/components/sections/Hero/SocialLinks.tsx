import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";

export function SocialLinks() {
    return (
        <div className="border-t border-border/70 py-6 sm:py-8">
            <h2 className="mb-5 font-serif text-2xl text-foreground">
                Contact
            </h2>

            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {socials.map(({ label, href, icon: Icon }) => (
                    <Button
                        key={label}
                        asChild
                        variant="outline"
                        className="group h-12 w-full rounded-lg border-border/50 bg-transparent px-4 py-2 text-foreground/80 transition-all duration-300 hover:scale-105 hover:bg-muted hover:shadow-sm active:scale-95"
                    >
                        <a 
                            href={href} 
                            target={href.startsWith("/") ? undefined : "_blank"} 
                            rel={href.startsWith("/") ? undefined : "noreferrer"}
                            className="flex w-full items-center justify-between"
                        >
                            <div className="flex items-center gap-2.5">
                                <Icon className="size-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                            <ArrowUpRight className="size-3.5 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    );
}