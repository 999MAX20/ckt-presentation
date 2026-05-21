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
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-4 tracking-normal font-display section-title">
          Международные интеграции
        </h2>
        <p className="text-[#E6EDF3]/75 max-w-2xl mx-auto text-lg leading-relaxed font-sans">
          Глобальная сеть платежных коридоров для мгновенных трансграничных переводов и выплат.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Unit: One container for Map + Overlay */}
        <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#07111F]/80 backdrop-blur-sm shadow-2xl h-[500px] sm:h-[600px] lg:h-[700px] mb-24">
          
          {/* Layer 1: Background Map */}
          <div className="absolute inset-0 z-0">
             {/* Gradient glow to make map feel integrated */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2B] via-transparent to-transparent pointer-events-none z-10 hidden lg:block w-1/3" />
            
            <IntegrationMap />
          </div>

          {/* Subtle glow layer */}
          <div className="absolute left-6 top-6 z-20 hidden rounded-md border border-white/10 bg-[#071227]/82 px-4 py-3 text-xs text-slate-300 backdrop-blur-xl sm:block">
            <div className="font-bold uppercase tracking-wide text-slate-500">Network intelligence</div>
            <div className="mt-2 flex gap-4">
              <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-blue-400" /> Hub</span>
              <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-400" /> Active corridor</span>
            </div>
          </div>


          {/* Layer 3: Desktop Absolute Glass Panel (Right) */}
          <div className="hidden lg:flex absolute top-8 right-8 bottom-8 w-[380px] z-20 flex-col gap-0 p-8 rounded-lg bg-[#071227]/78 backdrop-blur-xl border border-white/10 shadow-3xl overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-8 h-full">
              {/* Countries Block */}
              <div className="group">
                <IntegrationCountriesList />
              </div>
            </div>
          </div>

          {/* Layer 4: Desktop/Tablet Absolute Glass Panel (Bottom Left) */}
          <div className="hidden sm:flex absolute bottom-8 left-8 w-[340px] z-20 p-6 rounded-lg bg-[#071227]/86 backdrop-blur-xl border border-white/10 shadow-3xl">
            <TransferMethodsCard isCompact={true} />
          </div>
        </div>

        {/* Mobile stacking view */}
        <div className="lg:hidden flex flex-col gap-6 mt-8">
           <div className="p-6 sm:p-8 rounded-lg bg-[#0B1A2B]/60 border border-white/10 backdrop-blur-md">
            <IntegrationCountriesList />
          </div>
          {/* Mobile Methods Block (Stacked) */}
          <div className="sm:hidden p-6 rounded-lg bg-[#0B1A2B]/60 border border-white/10 backdrop-blur-md">
            <TransferMethodsCard isCompact={true} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
