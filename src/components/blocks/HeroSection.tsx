"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CheckCircle2, CreditCard, Globe, Landmark, LayoutGrid, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
  };

  const rightCards = [
    { text: "НБРК", detail: "Платежная организация", icon: Landmark },
    { text: "Visa PF", detail: "Прямое подключение", icon: CreditCard },
    { text: "PCI DSS", detail: "4.0.1 certified", icon: LayoutGrid },
    { text: "Банки РК", detail: "Расчеты и processing", icon: Building2 },
    { text: "Corridors", detail: "6+ стран", icon: Globe },
  ];

  const metrics = [
    { value: "2021", label: "регистрация НБРК" },
    { value: "PCI 4.0.1", label: "сертификация" },
    { value: "Visa PF", label: "статус партнера" },
  ];

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-28 pb-16 lg:pt-32">
      <motion.div
        className="flex-1 z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-md border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-200"
        >
          <CheckCircle2 className="h-4 w-4" />
          Licensed fintech infrastructure
        </motion.div>

        <motion.h1
          variants={textRevealVariants}
          className="text-4xl sm:text-5xl md:text-[68px] font-semibold tracking-normal mb-8 font-display flex flex-col items-start text-[#F8FAFC]"
        >
          <span className="block leading-[0.9]">Центр</span>
          <span className="block leading-[0.92] -mt-0 md:-mt-0">карточных</span>
          <span className="block leading-[0.92] -mt-0 md:-mt-0">технологий</span>
        </motion.h1>

        <div className="overflow-hidden mb-6">
          <motion.p
            variants={textRevealVariants}
            className="text-lg sm:text-xl md:text-3xl text-blue-100 font-medium max-w-2xl font-display leading-tight tracking-normal"
          >
            Платежная инфраструктура для стратегического роста
          </motion.p>
        </div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[#E6EDF3]/70 mb-10 max-w-xl leading-relaxed font-sans"
        >
          Лицензированная fintech-компания с Visa PF, PCI DSS-инфраструктурой,
          банковскими интеграциями и международными платежными коридорами.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <Button
            size="lg"
            className="text-md h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-[0_16px_40px_-18px_rgba(59,130,246,0.9)] transition-all"
            onClick={() => window.open("https://cardtechnologies.kz/", "_blank")}
          >
            Наш сайт
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-md h-14 px-8 border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:text-white rounded-lg flex items-center gap-2"
            onClick={() => {
              document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Смотреть инфраструктуру
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.value} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <div className="text-xl font-bold text-white">{metric.value}</div>
              <div className="mt-1 text-xs text-slate-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex-1 w-full relative min-h-[520px] flex items-center justify-center">
        <div className="relative z-10 w-full max-w-[540px] rounded-lg border border-white/10 bg-[#081322]/84 p-5 shadow-[0_28px_110px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Infrastructure map</div>
              <div className="mt-1 text-lg font-semibold text-white">ЦКТ Core</div>
            </div>
            <ShieldCheck className="h-6 w-6 text-emerald-300" />
          </div>

          <div className="relative grid gap-3 sm:grid-cols-2">
            <div className="absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-blue-400/20 sm:block" />
            {rightCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.text}
                variants={itemVariants}
                className="relative rounded-lg border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-500/12 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{card.text}</div>
                    <div className="mt-1 text-xs text-slate-400">{card.detail}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>

          <div className="mt-5 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
            Готовый контур: лицензия, compliance, банковские подключения и международная маршрутизация.
          </div>
        </div>
      </div>
    </section>
  );
}
