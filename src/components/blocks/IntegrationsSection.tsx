"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { IntegrationMap } from "@/components/ui/IntegrationMap";
import { TransferMethodsCard } from "@/components/ui/TransferMethodsCard";
import { IntegrationCountriesList } from "@/components/ui/IntegrationCountriesList";

export function IntegrationsSection() {
  return (
    <AnimatedSection className="w-full py-12 md:py-24" id="integrations">
      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-4 tracking-[-0.02em] font-display">
          Международные интеграции
        </h2>
        <p className="text-[#E6EDF3]/75 max-w-2xl mx-auto text-lg leading-relaxed font-sans">
          Глобальная сеть платежных коридоров для мгновенных трансграничных переводов и выплат.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Countries Block */}
        <div className="relative p-8 sm:p-12 rounded-[40px] bg-[#0B1A2B]/40 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />
          
          <IntegrationCountriesList />
        </div>

        {/* Transfer Methods Block */}
        <div className="relative p-8 sm:p-12 rounded-[40px] bg-[#0B1A2B]/40 backdrop-blur-sm border border-white/10 shadow-2xl">
          <TransferMethodsCard isCompact={false} />
        </div>
      </div>
    </AnimatedSection>
  );
}
