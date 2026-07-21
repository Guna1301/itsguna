import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import { profile } from "@/data/profile";

export function Contact() {
    const mailLink = profile.email ? `mailto:${profile.email}` : undefined;

    return (
        <Section >
            <Container>
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    
                    <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        What's Next?
                    </h2>
                    
                    <div className="mb-10 flex flex-col space-y-1.5 font-sans text-base text-foreground/70 sm:text-lg">
                        <span>I'm always open to new opportunities,</span>
                        <span>creative collaborations,</span>
                        <span>or just a quick chat.</span>
                        <span className="pt-3 font-medium text-foreground">Feel free to reach out.</span>
                    </div>
                    
                    <a 
                        href={mailLink} 
                        className="group flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-all hover:scale-105 active:scale-95"
                    >
                        Email Me
                        <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                </div>
            </Container>
        </Section>
    );
}