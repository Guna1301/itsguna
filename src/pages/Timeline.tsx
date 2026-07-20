import { timeline } from "@/data/timeline";
import { TimelineList } from "@/components/sections/timeline/TimelineList";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

export default function TimelinePage() {
    return (
        <Section>
            <Container>
            <div className="mx-auto max-w-4xl">
                
                <div className="mb-12 border-b border-border/70 pb-8 sm:mb-16">
                    <h1 className="font-serif text-2xl text-foreground">
                        My Timeline
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-foreground/60">
                        A chronological record of my professional experience, education, achievements, and milestones.
                    </p>
                </div>

                <div className="pl-1 sm:pl-2">
                    <TimelineList items={timeline} />
                </div>

            </div>
            </Container>
        </Section>
    );
}