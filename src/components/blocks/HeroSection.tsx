"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CreditCard, LayoutGrid, Globe, Building2 } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { useState, useEffect } from "react";

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

  const floatVariants: Variants = {
    fixed: { y: 0 },
    floating: (custom: number) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + custom,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const rightCards = [
    { text: "Лицензия НБРК", icon: ShieldCheck, custom: 0 },
    { text: "Сертификация VISA", icon: CreditCard, custom: 1 },
    { text: "PCI DSS 4.0.1", icon: LayoutGrid, custom: 0.5 },
    { text: "Банки Казахстана", icon: Building2, custom: 1.5 },
    { text: "Cross-border", icon: Globe, custom: 0.8 },
  ];

  return (
    <section className="relative w-full min-h-[95vh] flex flex-col lg:flex-row items-center justify-between pt-44 pb-16 lg:pt-28">
      {/* Left Content */}
      <motion.div
        className="flex-1 z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >


        <motion.h1
          variants={textRevealVariants}
          className="text-4xl sm:text-5xl md:text-[68px] font-semibold tracking-[-0.03em] mb-8 font-display flex flex-col items-start"
        >
          <span className="block leading-[0.9]">Центр</span>
          <span className="block leading-[0.92] -mt-2 md:-mt-0">карточных</span>
          <span className="block leading-[0.92] -mt-2 md:-mt-0">технологий</span>
        </motion.h1>

        <div className="overflow-hidden mb-6">
          <motion.p
            variants={textRevealVariants}
            className="text-lg sm:text-xl md:text-3xl text-[#E6EDF3] font-medium max-w-2xl font-display leading-tight tracking-tight"
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
          className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0"
        >
          <Button
            size="lg"
            className="text-md h-14 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all"
            onClick={() => window.open("https://cardtechnologies.kz/", "_blank")}
          >
            Наш сайт
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-md h-14 px-8 border-white/10 hover:bg-white/5 hover:text-white rounded-xl flex items-center gap-2"
            onClick={() => {
              document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Смотреть инфраструктуру
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Content - Abstract Fintech Visual */}
      <div className="flex-1 w-full mt-32 sm:mt-20 lg:mt-0 relative h-[450px] sm:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* Glowing central orb */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-[60px]"
          />
        </div>

        {/* Floating Cards Diagram */}
        <div className="relative z-10 w-full h-full max-w-[500px]">
          {rightCards.map((card, i) => {
            const Icon = card.icon;
            // Position calculations for circular layout
            const angle = (i * (2 * Math.PI)) / rightCards.length - Math.PI / 2;

            // Responsive radius calculation
            const [radius, setRadius] = useState(220);
            useEffect(() => {
              const handleResize = () => {
                if (window.innerWidth < 480) setRadius(130);
                else if (window.innerWidth < 640) setRadius(160);
                else if (window.innerWidth < 1024) setRadius(200);
                else setRadius(220);
              };
              handleResize();
              window.addEventListener('resize', handleResize);
              return () => window.removeEventListener('resize', handleResize);
            }, []);

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
                style={{ x, y }}
              >
                <motion.div
                  variants={floatVariants}
                  initial="fixed"
                  animate="floating"
                  custom={card.custom}
                >
                  <div className="w-[140px] sm:w-[200px] p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-2 sm:gap-3 shadow-2xl relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="bg-primary/20 p-2 rounded-lg text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-sm font-medium text-slate-200 leading-tight">
                      {card.text}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center piece */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] flex items-center justify-center bg-slate-900/90 backdrop-blur-2xl border border-primary/40 rounded-full shadow-[0_0_80px_-10px_rgba(0,210,255,0.4)] z-20"
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-b from-white to-blue-400"
              style={{
                maskImage: 'url(/logos/ckt_logo.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: 'url(/logos/ckt_logo.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
