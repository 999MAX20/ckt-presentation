"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { RefreshCcw, Percent, CircleDollarSign, CloudCog } from "lucide-react";

export function RevenueSection() {
  const streams = [
    { title: "Processing fee", desc: "Комиссии за обработку транзакций банками и процессинговыми центрами.", icon: RefreshCcw, color: "text-blue-400" },
    { title: "Merchant commission", desc: "Процент с оборота мерчантов (эквайринг, интернет-эквайринг).", icon: Percent, color: "text-teal-400" },
    { title: "Cross-border payments", desc: "Доход с трансграничных переводов и конвертации валют.", icon: CircleDollarSign, color: "text-purple-400" },
    { title: "SaaS infrastructure", desc: "Аренда инфраструктуры и White-Label решения для других МФО/БВУ.", icon: CloudCog, color: "text-amber-400" },
  ];

  return (
    <AnimatedSection className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-4 font-display tracking-tight">
          Потенциал выручки
        </h2>
        <p className="text-[#E6EDF3]/75 max-w-2xl mx-auto text-lg font-sans">
          Многоканальная бизнес-модель с диверсифицированными источниками дохода.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {streams.map((stream, idx) => (
          <GlowingCard key={idx} className="p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className={`p-4 rounded-2xl bg-slate-800/50 border border-white/5 shrink-0 ${stream.color}`}>
              <stream.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-display tracking-tight">{stream.title}</h3>
              <p className="text-[#E6EDF3]/70 font-sans">{stream.desc}</p>
            </div>
          </GlowingCard>
        ))}
      </div>
    </AnimatedSection>
  );
}
