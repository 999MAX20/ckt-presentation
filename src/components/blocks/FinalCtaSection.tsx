"use client";

import { ArrowRight, FileCheck2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="w-full rounded-lg border border-white/10 bg-[#0B1728]/88 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            Infrastructure ready
          </div>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[48px]">
            Готовая платежная инфраструктура для быстрого выхода на рынок
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Лицензии, сертификации, банковские контуры и технологические вендоры собраны в единый актив, который можно оценивать, масштабировать и подключать к коммерческим сценариям.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button
            size="lg"
            className="h-12 rounded-lg bg-blue-500 px-6 font-semibold text-white hover:bg-blue-600"
            onClick={() => window.open("https://cardtechnologies.kz/", "_blank")}
          >
            Перейти на сайт
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-lg border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/[0.08]"
            onClick={() => document.getElementById("license")?.scrollIntoView({ behavior: "smooth" })}
          >
            <FileCheck2 className="h-4 w-4" />
            Смотреть документы
          </Button>
        </div>
      </div>
    </section>
  );
}
