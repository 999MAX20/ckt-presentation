"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";

export function AboutSection() {
  const metrics = [
    { value: "2021", label: "Год регистрации" },
    { value: "2", label: "Технологических вендора" },
    { value: "6+", label: "Банков-партнеров" },
    { value: "6", label: "Стран интеграций" },
  ];

  return (
    <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-6 text-center lg:text-left font-display tracking-tight">
          О компании
        </h2>
        <div className="space-y-6 text-[#E6EDF3]/75 text-lg leading-relaxed text-center lg:text-left font-sans">
          <p>
            <strong className="text-[#E6EDF3] font-semibold">ТОО «Центр карточных технологий»</strong> —
            инновационная платежная организация, зарегистрированная Национальным банком
            Республики Казахстан 17 ноября 2021 года.
          </p>
          <p>
            Наша цель — предоставить надежную и масштабируемую инфраструктуру
            для обработки транзакций, как внутри страны, так и на международной арене.
            Мы объединяем передовые технологии безопасности, сертификацию PCI DSS
            и партнерство с крупнейшими банками.
          </p>
          <p>
            ЦКТ является стратегическим активом для любого бизнеса, стремящегося
            выйти на рынок платежей Центральной Азии без затрат лет на разработку
            с нуля и получение лицензий.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {metrics.map((metric, idx) => (
          <GlowingCard key={idx} className="p-6 md:p-8 flex flex-col items-center justify-center text-center bg-[#1A2642]">
            <div className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-2 font-sans">
              {metric.value}
            </div>
            <div className="text-sm md:text-base text-[#E6EDF3]/60 font-medium tracking-wide font-sans">
              {metric.label}
            </div>
          </GlowingCard>
        ))}
      </div>
    </AnimatedSection>
  );
}
