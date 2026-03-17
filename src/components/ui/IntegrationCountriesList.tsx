import React from "react";
import { motion } from "framer-motion";

interface Country {
  name: string;
  flag: string;
  color: string;
  iconColor: string;
}

export function IntegrationCountriesList() {
  const countries: Country[] = [
    { name: "Китай", flag: "🇨🇳", color: "hover:border-red-500/30 hover:bg-red-500/5", iconColor: "text-red-400" },
    { name: "Южная Корея", flag: "🇰🇷", color: "hover:border-blue-500/30 hover:bg-blue-500/5", iconColor: "text-blue-400" },
    { name: "Вьетнам", flag: "🇻🇳", color: "hover:border-yellow-500/30 hover:bg-yellow-500/5", iconColor: "text-yellow-400" },
    { name: "Таиланд", flag: "🇹🇭", color: "hover:border-purple-500/30 hover:bg-purple-500/5", iconColor: "text-purple-400" },
    { name: "Кыргызстан", flag: "🇰🇬", color: "hover:border-emerald-500/30 hover:bg-emerald-500/5", iconColor: "text-emerald-400" },
    { name: "Узбекистан", flag: "🇺🇿", color: "hover:border-cyan-500/30 hover:bg-cyan-500/5", iconColor: "text-cyan-400" },
    { name: "Россия", flag: "🇷🇺", color: "hover:border-indigo-500/30 hover:bg-indigo-500/5", iconColor: "text-indigo-400" },
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-[#E6EDF3] mb-6 flex items-center gap-3 font-display tracking-tight">
        <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
        Страны интеграций
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {countries.map((country, idx) => (
          <motion.div
            key={country.name}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className={`flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 ${country.color} hover:bg-white/10 transition-all group cursor-default min-h-[72px]`}
          >
            <span className="text-2xl transition-transform group-hover:scale-110 duration-300 shrink-0">
              {country.flag}
            </span>
            <span className="text-[#E6EDF3] text-sm font-semibold group-hover:text-white transition-colors leading-tight whitespace-normal break-words font-sans">
              {country.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
