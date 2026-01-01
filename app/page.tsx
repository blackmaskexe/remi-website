import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <StatsSection />
      <FeaturesSection />
    </main>
  );
}
