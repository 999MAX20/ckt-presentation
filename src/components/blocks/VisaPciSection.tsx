"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { CreditCard, ShieldCheck, CheckCircle2, Maximize2, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VisaPciSection() {
  const visaDocUrl = "/certs/cpa_agreement.pdf";
  const pciDocUrl = "/certs/digital_cert.jpeg";

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatedSection className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-6 font-display tracking-tight">
          Безопасность и Статус
        </h2>
        <p className="text-[#E6EDF3]/75 text-lg font-sans">
          Высшие стандарты работы с карточными данными и прямое партнерство с глобальными платежными системами.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Visa Column */}
        <div className="flex flex-col gap-8">
          <GlowingCard glowColor="rgba(59, 130, 246, 0.15)" className="p-6 sm:p-8 md:p-10 flex flex-col h-full bg-[#1A2642]">
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-[16px] flex items-center justify-center text-white shadow-sm">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="flex flex-col items-end">
                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold uppercase tracking-wider mb-2 font-sans">
                  Active Status
                </span>
                <span className="text-[#E6EDF3]/60 text-sm font-medium font-sans">Оплачено до 2026</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 font-display tracking-tight">Сертификация VISA</h3>
            <p className="text-[#E6EDF3]/70 mb-6 font-sans">
              Прямой доступ к сети Visa. Оплачено на 1 год.
            </p>

            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 pt-4 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <p>По достижении оборота требуется переход на <strong>Full Visa Certification</strong>.</p>
              </div>
            </div>
          </GlowingCard>

          {/* Visa Document Embed */}
          <div className="flex flex-col gap-4">
            <div className="relative group w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-slate-900/50">
              {/* Controls Overlay */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => window.open(visaDocUrl, "_blank")}
                  className="p-3 bg-blue-600/90 hover:bg-blue-500 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center backdrop-blur-md"
                  title="Полноэкранный просмотр"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleDownload(visaDocUrl, "Visa_CPA_Agreement.pdf")}
                  className="p-3 bg-slate-800/90 hover:bg-slate-700 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center backdrop-blur-md"
                  title="Скачать"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <iframe 
                src={`${visaDocUrl}#toolbar=0`} 
                className="w-full h-full border-none"
                title="Visa CPA Agreement"
              />
            </div>
            {/* Mobile View Button */}
            <div className="md:hidden">
              <Button 
                onClick={() => window.open(visaDocUrl, "_blank")}
                className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Просмотреть сертификат
              </Button>
            </div>
            <p className="text-center text-sm text-[#E6EDF3]/50 font-sans italic">CPA Extension Agreement</p>
          </div>
        </div>

        {/* PCI Column */}
        <div className="flex flex-col gap-8">
          <GlowingCard glowColor="rgba(168, 85, 247, 0.15)" className="p-6 sm:p-8 md:p-10 flex flex-col h-full bg-[#1A2642]">
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-purple-600 rounded-[16px] flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="flex flex-col items-end">
                <span className="px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-bold uppercase tracking-wider mb-2 font-sans">
                  Certified
                </span>
                <span className="text-[#E6EDF3]/60 text-sm font-medium font-sans">QSA: Digital Initiatives</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 font-display tracking-tight">PCI DSS 4.0.1</h3>
            <p className="text-[#E6EDF3]/70 mb-6 font-sans">
              Высший уровень защиты карточных данных (Вендор: Digital Initiatives LLP).
            </p>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-slate-400">Срок действия</span>
                <span className="text-white font-medium">до 25.09.2026</span>
              </div>
            </div>
          </GlowingCard>

          {/* PCI Document Embed */}
          <div className="flex flex-col gap-4">
            <div className="relative group w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-slate-900/50 flex items-center justify-center p-4">
              {/* Controls Overlay */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => window.open(pciDocUrl, "_blank")}
                  className="p-3 bg-purple-600/90 hover:bg-purple-500 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center backdrop-blur-md"
                  title="Полноэкранный просмотр"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleDownload(pciDocUrl, "PCI_DSS_Certificate.jpeg")}
                  className="p-3 bg-slate-800/90 hover:bg-slate-700 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center backdrop-blur-md"
                  title="Скачать"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <img 
                src={pciDocUrl} 
                alt="PCI DSS Certification" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-sm"
              />
            </div>
            {/* Mobile View Button */}
            <div className="md:hidden">
              <Button 
                onClick={() => window.open(pciDocUrl, "_blank")}
                className="w-full h-12 bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Просмотреть сертификат
              </Button>
            </div>
            <p className="text-center text-sm text-[#E6EDF3]/50 font-sans italic">PCI DSS Certificate</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
