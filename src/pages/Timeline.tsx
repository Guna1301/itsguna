import { timeline } from "@/data/timeline";
import { TimelineList } from "@/components/sections/timeline/TimelineList";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

export default function TimelinePage() {
    return (
        <Section>
            <Container>
                <div className="mx-auto max-w-3xl">
                    
                    {/* Header Section */}
                    <div className="mb-10 border-b border-border/70 pb-6 sm:mb-12">
                        <h1 className="font-serif text-2xl text-foreground sm:text-3xl">
                            My Timeline
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-foreground/60 sm:text-base">
                            A chronological record of my professional experience, education, achievements, and milestones.
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="pl-1 sm:pl-2">
                        <TimelineList items={timeline} />
                    </div>

                </div>
            </Container>
        </Section>
    );
}