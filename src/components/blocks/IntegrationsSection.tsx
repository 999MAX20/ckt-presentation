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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Unit: One container for Map + Overlay */}
        <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0B1A2B]/40 backdrop-blur-sm shadow-2xl h-[500px] sm:h-[600px] lg:h-[700px] mb-24">
          
          {/* Layer 1: Background Map */}
          <div className="absolute inset-0 z-0">
             {/* Gradient glow to make map feel integrated */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2B] via-transparent to-transparent pointer-events-none z-10 hidden lg:block w-1/3" />
            
            <IntegrationMap />
          </div>

          {/* Subtle glow layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(59,130,246,0.05),transparent_70%)] pointer-events-none z-10" />


          {/* Layer 3: Desktop Absolute Glass Panel (Right) */}
          <div className="hidden lg:flex absolute top-8 right-8 bottom-8 w-[380px] z-20 flex-col gap-0 p-8 rounded-[24px] bg-[#071227]/78 backdrop-blur-xl border border-white/10 shadow-3xl overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-8 h-full">
              {/* Countries Block */}
              <div className="group">
                <IntegrationCountriesList />
              </div>
            </div>
          </div>

          {/* Layer 4: Desktop/Tablet Absolute Glass Panel (Bottom Left) */}
          <div className="hidden sm:flex absolute bottom-8 left-8 w-[340px] z-20 p-6 rounded-[24px] bg-[#071227]/78 backdrop-blur-xl border border-white/10 shadow-3xl">
            <TransferMethodsCard isCompact={true} />
          </div>
        </div>

        {/* Mobile stacking view */}
        <div className="lg:hidden flex flex-col gap-6 mt-8">
           <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1A2B]/60 border border-white/10 backdrop-blur-md">
            <IntegrationCountriesList />
          </div>
          {/* Mobile Methods Block (Stacked) */}
          <div className="sm:hidden p-6 rounded-3xl bg-[#0B1A2B]/60 border border-white/10 backdrop-blur-md">
            <TransferMethodsCard isCompact={true} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
