import {
  HeroSection,
  AdvantagesSection,
  AboutSection,
  LicenseSection,
  VisaPciSection,
  TechArchitectureSection,
  IntegrationsSection,
  BankingPartnersSection,
  AssetsSection,
  ComplianceSection,
  RevenueSection,
  ValueAssetSection,
  TopNavigation,
  TrustStrip,
  FinalCtaSection,
} from "@/components/blocks";

import DarkVeil from "@/components/ui/DarkVeil";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <TopNavigation />
      <div className="fixed inset-0 z-[-1] bg-[#080F1A] overflow-hidden">
        <DarkVeil
          hueShift={500}
          speed={0.7}
          warpAmount={0.08}
          noiseIntensity={0.01}
          scanlineIntensity={0.03}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,26,0.15)_0%,rgba(8,15,26,0.82)_56%,#080F1A_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 flex flex-col gap-14 sm:gap-20 md:gap-24 lg:gap-32 relative z-10">
        <HeroSection />
        <TrustStrip />
        <AdvantagesSection />
        <AboutSection />
        <LicenseSection />
        <VisaPciSection />
        <TechArchitectureSection />
        <IntegrationsSection />
        <BankingPartnersSection />
        <AssetsSection />
        <ComplianceSection />
        <RevenueSection />
        <ValueAssetSection />
        <FinalCtaSection />
      </div>
    </main>
  );
}
