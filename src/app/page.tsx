import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { HowToBuySection } from "@/components/sections/HowToBuySection";
import { TokenomicsSection } from "@/components/sections/TokenomicsSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { LaunchCountdown } from "@/components/sections/LaunchCountdown";
import { WhyBuySection } from "@/components/sections/WhyBuySection";

export default function Home() {
  return (
    <>
      <LaunchCountdown />
      <HeroSection />
      <WhyBuySection />
      <ServicesSection />
      <HowToBuySection />
      <TokenomicsSection />
      <StatsSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
