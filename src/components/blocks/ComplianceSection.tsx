"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { GradientText } from "@/components/ui/gradient-text";
import { Fingerprint, Search, ShieldAlert, FileKey2, Network, Scan } from "lucide-react";

export function ComplianceSection() {
  const complianceFeatures = [
    { icon: Fingerprint, title: "KYC", desc: "Know Your Customer процедуры", glow: "rgba(16,185,129,0.2)" },
    { icon: ShieldAlert, title: "AML", desc: "Anti-Money Laundering политика", glow: "rgba(239,68,68,0.2)" },
    { icon: FileKey2, title: "ПОД/ФТ", desc: "Противодействие отмыванию доходов", glow: "rgba(245,158,11,0.2)" },
    { icon: Search, title: "Compliance", desc: "Полный правовой контроль", glow: "rgba(59,130,246,0.2)" },
    { icon: Network, title: "Мониторинг транзакций", desc: "24/7 анализ операций", glow: "rgba(139,92,246,0.2)" },
    { icon: Scan, title: "Anti-fraud логика", desc: "Скоринг и блокировка угроз", glow: "rgba(14,165,233,0.2)" },
  ];

  return (
    <AnimatedSection className="w-full bg-slate-900/40 rounded-3xl p-8 md:p-12 lg:p-16 border border-white/5 my-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          Compliance и <GradientText>Аналитика</GradientText>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Надежная защита от финансовых рисков и полное соответствие нормативным требованиям.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {complianceFeatures.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <GlowingCard key={idx} glowColor={feat.glow} className="p-6">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-white/10 mb-4">
                <Icon className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
              <p className="text-slate-400 text-sm">{feat.desc}</p>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
