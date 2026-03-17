"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { FileBadge2, CreditCard, ShieldCheck, Building2, Globe, Server } from "lucide-react";

export function AdvantagesSection() {
  const advantages = [
    {
      icon: FileBadge2,
      title: "Лицензия платежной организации",
      description: "Официальный статус НБРК, позволяющий легально оперировать на рынке РК.",
      className: "md:col-span-2 md:row-span-2 p-8 pt-10",
      glow: "rgba(0, 210, 255, 0.15)",
    },
    {
      icon: CreditCard,
      title: "Сертификация VISA",
      description: "Прямое подключение к Visa. Оплачено на 1 год вперед с возможностью перехода на Full Visa Certification.",
      className: "md:col-span-1 md:row-span-2 p-8",
      glow: "rgba(59, 130, 246, 0.15)",
    },
    {
      icon: ShieldCheck,
      title: "PCI DSS 4.0.1",
      description: "Высший стандарт безопасности карточных данных через Digital Initiatives LLP.",
      className: "md:col-span-1 p-6 md:p-8",
      glow: "rgba(139, 92, 246, 0.15)", // purple glow
    },
    {
      icon: Building2,
      title: "Интеграция со всеми банками РК",
      description: "Полное покрытие банковской инфраструктуры Казахстана для локального процессинга.",
      className: "md:col-span-2 p-6 md:p-8",
      glow: "rgba(168, 85, 247, 0.15)",
    },
    {
      icon: Globe,
      title: "Международные коридоры",
      description: "Cross-border платежи в 6+ стран (Китай, Южная Корея, Вьетнам, Таиланд и др.).",
      className: "md:col-span-2 p-6 md:p-8",
      glow: "rgba(45, 212, 191, 0.15)", // teal glow
    },
    {
      icon: Server,
      title: "Готовая инфраструктура",
      description: "Полностью настроенный стек технологий, готовый к масштабированию и обработке транзакций.",
      className: "md:col-span-1 p-6 md:p-8",
      glow: "rgba(16, 185, 129, 0.15)",
    },
  ];

  return (
    <AnimatedSection className="flex flex-col gap-12" id="advantages">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-6 font-display tracking-tight">
          Ключевые преимущества
        </h2>
        <p className="text-[#E6EDF3]/75 text-lg font-sans">
          Комплексное fintech-решение, объединяющее легальный статус, высшие стандарты безопасности и глобальную связность.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-auto gap-4 md:gap-6 auto-rows-min">
        {advantages.map((adv, idx) => {
          // Extra color logic to match HGG solid containers
          let iconBg = "bg-blue-600";
          if (idx === 1) iconBg = "bg-blue-500";
          if (idx === 2) iconBg = "bg-purple-600";
          if (idx === 3) iconBg = "bg-purple-500";
          if (idx === 4) iconBg = "bg-teal-500";
          if (idx === 5) iconBg = "bg-emerald-500";

          return (
            <GlowingCard key={idx} className={`flex flex-col gap-4 ${adv.className}`} glowColor={adv.glow}>
              <div className={`w-14 h-14 ${iconBg} rounded-[14px] flex items-center justify-center text-white mb-2 shadow-sm`}>
                <adv.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mt-auto font-sans tracking-tight">{adv.title}</h3>
              <p className="text-[#E6EDF3]/70 leading-relaxed text-sm md:text-base mt-2 font-sans">
                {adv.description}
              </p>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
