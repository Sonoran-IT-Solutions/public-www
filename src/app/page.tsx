import Hero from "@/components/marketing/landingPage/Hero";
import Introduction from "@/components/marketing/landingPage/Introduction";
import Services from "@/components/marketing/landingPage/Services";
import WhyChooseUsSection from "@/components/marketing/landingPage/WhyUs";

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <section className="flex flex-col items-center justify-center">
        <Hero />
        <Introduction />
        <Services />
        <WhyChooseUsSection />
      </section>
    </main>
  );
}
