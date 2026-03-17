"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { motion } from "framer-motion";
import Image from "next/image";

interface BankCardProps {
  logo: string;
  name: string;
  type: string;
  description: string;
  status: string;
  statusColor: string;
  statusBg: string;
}

const BankPartnerCard = ({ 
  logo, 
  name, 
  type, 
  description, 
  status, 
  statusColor, 
  statusBg 
}: BankCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="h-full"
  >
    <GlowingCard className="relative p-6 sm:p-8 md:p-10 h-full bg-[#0A192F]/60 backdrop-blur-md border border-white/10 flex flex-col items-start gap-6 sm:gap-10 group overflow-hidden">
      {/* Logo Background */}
      <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
        <Image
          src={logo}
          alt={`${name} background`}
          fill
          className="object-cover opacity-[0.07] grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0A192F]/80 to-transparent" />
      </div>

      <div className="flex flex-col gap-2 sm:gap-3 relative z-10 pt-2 sm:pt-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#E6EDF3] font-display tracking-tight leading-tight">
          {name}
        </h3>
        <p className="text-blue-400/90 font-bold text-xs sm:text-sm uppercase tracking-widest font-sans">
          {type}
        </p>
      </div>

      <p className="text-[#E6EDF3]/70 text-base sm:text-lg font-sans leading-relaxed flex-grow relative z-10">
        {description}
      </p>

      <div className={`mt-4 px-6 py-2 ${statusBg} ${statusColor} rounded-xl text-xs font-bold uppercase tracking-widest border border-white/5 relative z-10`}>
        {status}
      </div>
    </GlowingCard>
  </motion.div>
);

export function BankingPartnersSection() {
  const partners = [
    {
      name: "RBK BANK",
      logo: "/logos/logo_rbk.svg",
      type: "E-commerce processing",
      description: "Договор на процессинг интернет-платежей.",
      status: "Активный",
      statusColor: "text-emerald-400",
      statusBg: "bg-emerald-500/10",
    },
    {
      name: "KwikPay",
      logo: "/logos/kwikpay_logo.png",
      type: "Cross-border processing",
      description: "Международная платежная инфраструктура.",
      status: "В процессе заключения договора",
      statusColor: "text-amber-400",
      statusBg: "bg-amber-500/10",
    },
    {
      name: "BCC BANK",
      logo: "/logos/logo_centercredit.webp",
      type: "Settlement infrastructure",
      description: "Транзитный расчетный счет для обработки платежных потоков.",
      status: "Активный",
      statusColor: "text-emerald-400",
      statusBg: "bg-emerald-500/10",
    },
  ];

  return (
    <AnimatedSection className="w-full py-24" id="banking-infrastructure">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold mb-6 md:mb-8 font-display tracking-tight bg-gradient-to-b from-white to-blue-400 bg-clip-text text-transparent inline-block">
          Банковская инфраструктура
        </h2>
        <p className="text-[#E6EDF3]/75 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-sans">
          Финансовые партнеры и расчетная инфраструктура, обеспечивающие обработку и маршрутизацию платежей.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-8">
        {partners.map((partner, idx) => (
          <BankPartnerCard key={idx} {...partner} />
        ))}
      </div>
    </AnimatedSection>
  );
}
