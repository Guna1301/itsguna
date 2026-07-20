import { Hero } from "@/components/sections/Hero/Hero";
import { FeaturedProjects } from "@/components/sections/Projects/FeaturedProjects";
import { Timeline } from "@/components/sections/timeline/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Timeline/>
    </>
  );
}
