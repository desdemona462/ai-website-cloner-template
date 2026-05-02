import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  HowItWorksSection,
  Navigation,
  PlansSection,
  SecuritySection,
  StatsSection,
  UseCasesSection,
} from "@/components/draffly-sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="skip" className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">
        <div className="min-h-screen">
          <HeroSection />
          <HowItWorksSection />
          <StatsSection />
          <FeaturesSection />
          <SecuritySection />
          <PlansSection />
          <FaqSection />
          <UseCasesSection />
          <CtaSection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
