import { profile } from "@/data/profile";

export function HeroContent() {
    return (
        <div className="border-t border-border/70 py-6 sm:py-8">
            <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
                    About
                </h2>

                <ul className="space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {profile.about.map((item, index) => (
                        <li key={index} className="flex gap-3">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}