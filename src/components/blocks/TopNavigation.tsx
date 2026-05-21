"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { label: "О компании", href: "#about" },
  { label: "Лицензия", href: "#license" },
  { label: "Инфраструктура", href: "#architecture" },
  { label: "Интеграции", href: "#integrations" },
  { label: "Актив", href: "#value" },
];

export function TopNavigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07101D]/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
            <Image src="/logos/ckt_logo.png" alt="ЦКТ" width={24} height={24} className="object-contain" />
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Центр карточных технологий</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          size="sm"
          className="h-9 rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white hover:bg-blue-600"
          onClick={() => window.open("https://cardtechnologies.kz/", "_blank")}
        >
          Сайт компании
        </Button>
      </div>
    </header>
  );
}
