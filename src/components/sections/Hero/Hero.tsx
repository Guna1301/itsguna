import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { HeroBanner } from "./HeroBanner";
import { HeroContent } from "./HeroContent";
import { ProfileCard } from "./ProfileCard";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <Section>
      <div className="flex w-full flex-col">
        <HeroBanner />
        <ProfileCard />
        <HeroContent />
        <SocialLinks />
      </div>
    </Section>
  );
}