import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  HowItWorksSection,
  Navigation,
  PricingSection,
  SecuritySection,
  StatsSection,
  TestimonialsSection,
  TrustedBySection,
} from "@/components/leadgravity-sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="skip" className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)]">
        <div className="min-h-screen">
          <HeroSection />
          <TrustedBySection />
          <HowItWorksSection />
          <StatsSection />
          <FeaturesSection />
          <SecuritySection />
          <PricingSection />
          <FaqSection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
