import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { HeroBanner } from "./HeroBanner";
import { HeroContent } from "./HeroContent";
import { ProfileCard } from "./ProfileCard";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <Section className="pb-12 pt-6 md:pb-16 md:pt-10">
      <Container>
        <div className="flex w-full flex-col">
          <HeroBanner />
          <ProfileCard />
          <HeroContent />
          <SocialLinks />
        </div>
      </Container>
    </Section>
  );
}