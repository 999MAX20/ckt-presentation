"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Shield, CheckCircle2, Maximize2, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LicenseSection() {
  const docUrl = "/certs/nbrk_cert.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = docUrl;
    link.download = "NBRK_License.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatedSection className="w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-8 sm:mb-12 font-display tracking-tight">
          Лицензия и регулирование
        </h2>

        <GlowingCard className="relative w-full max-w-2xl p-6 sm:p-8 md:p-12 overflow-hidden flex flex-col items-center text-center bg-[#1A2642] mb-12" glowColor="rgba(59, 130, 246, 0.2)">
          {/* Background decorative shield icon */}
          <Shield className="absolute text-blue-500/5 -z-10 w-96 h-96 -top-20 -right-20 transform rotate-12" />

          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-[32px] font-bold mb-6 font-display leading-tight tracking-tight">
            Национальный банк <br className="hidden md:block" /> Республики Казахстан
          </h3>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center mt-8 font-sans">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[#E6EDF3]/60 text-xs uppercase tracking-widest font-bold">Дата регистрации</span>
              <span className="text-xl font-semibold text-[#E6EDF3] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                17.11.2021
              </span>
            </div>
            <div className="hidden md:block w-px bg-white/10" />
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[#E6EDF3]/60 text-xs uppercase tracking-widest font-bold">Официальный статус</span>
              <span className="text-xl font-semibold text-[#E6EDF3] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                Платежная организация
              </span>
            </div>
          </div>
        </GlowingCard>

        {/* Embedded PDF License */}
        <div className="relative group w-full max-w-2xl h-[450px] md:h-[550px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
          {/* Controls Overlay */}
          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => window.open(docUrl, "_blank")}
              className="p-3 bg-blue-600/90 hover:bg-blue-500 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center backdrop-blur-md"
              title="Полноэкранный просмотр"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
            <button 
              onClick={handleDownload}
              className="p-3 bg-slate-800/90 hover:bg-slate-700 text-white rounded-xl shadow-lg transition-colors flex items-center justify-center backdrop-blur-md"
              title="Скачать"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>

          <iframe 
            src={`${docUrl}#toolbar=0`} 
            className="w-full h-full border-none"
            title="Лицензия НБРК"
          />
        </div>

        {/* Mobile View Button */}
        <div className="mt-6 md:hidden w-full px-4">
          <Button 
            onClick={() => window.open(docUrl, "_blank")}
            className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <ExternalLink className="w-5 h-5" />
            Просмотреть лицензию
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
