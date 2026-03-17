import React from "react";
import { motion } from "framer-motion";

export function IntegrationCountriesList() {
  const countries = [
    { name: "Китай", flag: "🇨🇳" },
    { name: "Южная Корея", flag: "🇰🇷" },
    { name: "Вьетнам", flag: "🇻🇳" },
    { name: "Таиланд", flag: "🇹🇭" },
    { name: "Кыргызстан", flag: "🇰🇬" },
    { name: "Узбекистан", flag: "🇺🇿" },
    { name: "Россия", flag: "🇷🇺" },
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-[#E6EDF3] mb-6 flex items-center gap-3 font-display tracking-tight">
        <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
        Страны интеграций
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country, idx) => (
          <motion.div
            key={country.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6 p-8 rounded-[24px] bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-blue-500/20 transition-all group cursor-default min-h-[160px] text-center"
          >
            <span className="text-4xl sm:text-5xl transition-transform group-hover:scale-110 duration-500 shrink-0">
              {country.flag}
            </span>
            <span className="text-[#E6EDF3] text-xl sm:text-2xl font-bold group-hover:text-white transition-colors leading-tight font-display">
              {country.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
