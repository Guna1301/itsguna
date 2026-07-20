import { Hero } from "@/components/sections/Hero/Hero";
import { FeaturedProjects } from "@/components/sections/Projects/FeaturedProjects";
import { TechStack } from "@/components/sections/tech-stack/TechStack";
import { Timeline } from "@/components/sections/timeline/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Timeline/>
      <TechStack/>
    </>
  );
}
