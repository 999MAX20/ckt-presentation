"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Server, ShieldCheck, ArrowRight, Laptop, CreditCard, Building, Activity, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function TechArchitectureSection() {
  return (
    <AnimatedSection className="w-full" id="architecture">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-4 font-display tracking-tight">
          Технологическая архитектура
        </h2>
        <p className="text-[#E6EDF3]/75 max-w-2xl mx-auto text-base sm:text-lg font-sans">
          Надежная и масштабируемая инфраструктура, опирающаяся на проверенных вендоров.
        </p>
      </div>

      {/* Vendors Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
        {/* Digital Initiatives Card */}
        <GlowingCard className="p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-6 sm:gap-8 items-start lg:items-center bg-[#1A2642] relative overflow-hidden group">
          {/* Logo Background */}
          <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105">
            <img 
              src="/logos/digital_logo.png" 
              alt="Digital Initiatives Logo" 
              className="w-full h-full object-cover opacity-10 grayscale brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2642] via-[#1A2642]/80 to-transparent" />
          </div>

          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white/10 backdrop-blur-md rounded-[20px] p-4 flex items-center justify-center border border-white/10 shadow-lg transition-all group-hover:bg-white/15">
            <img 
              src="/logos/digital_logo.png" 
              alt="Digital Initiatives Logo" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl font-bold mb-2 font-display">ТОО "Digital Initiatives LLP"</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Инфраструктура PCI DSS 4.0.1
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Интеграция со всеми банками РК
              </li>
            </ul>
          </div>
        </GlowingCard>

        {/* Intervale Card */}
        <GlowingCard className="p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-6 sm:gap-8 items-start lg:items-center bg-[#1A2642] relative overflow-hidden group">
          {/* Logo Background */}
          <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105">
            <img 
              src="/logos/intervale_logo.jpg" 
              alt="Intervale Logo" 
              className="w-full h-full object-cover opacity-10 grayscale brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2642] via-[#1A2642]/80 to-transparent" />
          </div>

          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white rounded-[20px] p-4 flex items-center justify-center border border-white/10 shadow-lg transition-all group-hover:bg-white/95">
            <img 
              src="/logos/intervale_logo.jpg" 
              alt="Intervale Logo" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl font-bold mb-2 font-display">ТОО "Intervale"</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                Международные интеграции
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                Cross-border платежи
              </li>
            </ul>
          </div>
        </GlowingCard>
      </div>

      {/* Payment Flow Flowchart */}
      <div className="mt-16 bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 lg:p-12">
        <h4 className="text-center text-slate-300 font-medium mb-12 flex items-center justify-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          Жизненный цикл транзакции
        </h4>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
          {/* Animated connection line across all nodes (Desktop) */}
          <div className="hidden md:block absolute top-[50%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

          {/* Nodes */}
          {[
            { label: "Client", detail: "Инициатор" },
            { label: "Merchant", detail: "Точка продаж" },
            { label: "Gateway", detail: "ЦКТ / Вендоры" },
            { label: "Bank", detail: "Эквайер" },
            { label: "Settlement", detail: "Расчеты" },
          ].map((node, i, arr) => (
            <div key={i} className="flex flex-col items-center gap-2 relative z-10">
              <motion.div
                className="w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-xl relative group px-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(0, 210, 255, 0.5)" }}
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-semibold text-[#E6EDF3] font-sans text-xs sm:text-sm md:text-base">{node.label}</span>
              </motion.div>
              <span className="text-[10px] text-[#E6EDF3]/60 uppercase tracking-widest font-sans font-bold">{node.detail}</span>

              {/* Mobile Arrows */}
              {i < arr.length - 1 && (
                <div className="md:hidden flex justify-center py-2 text-primary/50">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
