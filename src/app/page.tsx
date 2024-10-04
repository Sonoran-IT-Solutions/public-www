import Hero from "@/components/marketing/landingPage/Hero";
import { FeaturesGrid } from "@/components/marketing/landingPage/Introduction";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Hero />
      <FeaturesGrid />
    </section>
  );
}
