import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЦКТ | Центр карточных технологий",
  description: "Платежная инфраструктура для стратегического роста",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#0D1524] text-[#E6EDF3] overflow-x-hidden`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
