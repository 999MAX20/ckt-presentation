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
} from "@/components/blocks";

import DarkVeil from "@/components/ui/DarkVeil";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 z-[-1] bg-[#080F1A] overflow-hidden">
        <DarkVeil
          hueShift={500}
          speed={0.7}
          warpAmount={0.08}
          noiseIntensity={0.01}
          scanlineIntensity={0.03}
        />
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vh] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vh] bg-blue-400/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-12 sm:gap-20 md:gap-24 lg:gap-32 relative z-10">
        <HeroSection />
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
      </div>
    </main>
  );
}
