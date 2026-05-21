"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { FileBadge2, CreditCard, ShieldCheck, Monitor, Building2, Globe } from "lucide-react";

export function AssetsSection() {
  const assets = [
    { icon: FileBadge2, title: "Лицензия Платёжной организации" },
    { icon: CreditCard, title: "Сертификация VISA" },
    { icon: ShieldCheck, title: "PCI DSS инфраструктура" },
    { icon: Monitor, title: "Корпоративный сайт" },
    { icon: Building2, title: "Банковские счета" },
    { icon: Globe, title: "Международные интеграции" },
  ];

  return (
    <AnimatedSection className="w-full relative py-20">
      <div className="absolute inset-0 surface-panel rounded-lg pointer-events-none" />

      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 section-title">
          Активы компании
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Комплексный портфель разрешений, технологий и партнерств.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
        {assets.map((asset, idx) => {
          const Icon = asset.icon;
          return (
            <GlowingCard key={idx} className="p-5 sm:p-6 md:p-8 min-h-[170px] flex flex-col items-center justify-center text-center bg-[#1A2642]">
              <div className="w-14 h-14 bg-[#25365A] rounded-lg flex items-center justify-center text-blue-400 mb-6 shadow-sm">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold">{asset.title}</h3>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
