"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Gem, Clock, ShieldCheck, TrendingUp, Briefcase } from "lucide-react";

export function ValueAssetSection() {
  const points = [
    { icon: Gem, title: "Лицензия", desc: "Уже получена и легализована" },
    { icon: Clock, title: "Visa PF", desc: "Быстрый старт эмиссии/эквайринга" },
    { icon: ShieldCheck, title: "PCI DSS", desc: "Полное соответствие стандартам" },
    { icon: TrendingUp, title: "Банки", desc: "Интеграции с ТОР-банками" },
    { icon: Briefcase, title: "Международные", desc: "Cross-border инфраструктура" },
    { icon: Gem, title: "Инфраструктура", desc: "Аппаратная и IT-база" },
  ];

  return (
    <AnimatedSection className="w-full py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 text-center lg:text-left">
          <div className="text-center lg:text-left mb-16 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-6 text-balance font-display tracking-tight leading-tight">
              Почему ЦКТ — ценный актив?
            </h2>
            <p className="text-[#E6EDF3]/75 text-lg max-w-xl font-sans">
              Входной билет на рынок стоимостью в десятки миллионов долларов с первого дня.
            </p>
          </div>
          
          <GlowingCard className="relative overflow-hidden p-8 lg:p-12 mb-12 bg-[#1A2642] flex flex-col items-center text-center" glowColor="rgba(59, 130, 246, 0.15)">
            <div className="flex justify-center mb-8">
              <div className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold tracking-widest uppercase shadow-sm text-sm">
                Ключевое преимущество
              </div>
            </div>
            
            <p className="text-lg text-[#E6EDF3]/80 leading-relaxed font-sans max-w-2xl mx-auto">
              <strong className="text-[#E6EDF3] font-bold">Time-to-market.</strong> Самостоятельное создание подобной инфраструктуры,
              прохождение комплаенса, подключение к МПС Visa и прохождение сертификации PCI DSS
              займет от 1.5 до 3 лет и потребует колоссальных инвестиций. ЦКТ предлагает готовое
              решение, работающее с первого дня.
            </p>
          </GlowingCard>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((pt, i) => (
            <GlowingCard key={i} className="p-6 flex flex-col gap-4 bg-[#1A2642]" glowColor="rgba(255, 255, 255, 0.05)">
              <div className="w-12 h-12 rounded-[12px] bg-[#25365A] flex items-center justify-center text-blue-400">
                <pt.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 font-display tracking-tight">{pt.title}</h3>
                <p className="text-sm text-[#E6EDF3]/60 font-sans">{pt.desc}</p>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
