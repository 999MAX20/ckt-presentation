import { Building2, CreditCard, Globe2, Landmark, ShieldCheck } from "lucide-react";

const items = [
  { label: "НБРК", detail: "Платежная организация", icon: Landmark },
  { label: "Visa PF", detail: "Прямой статус", icon: CreditCard },
  { label: "PCI DSS 4.0.1", detail: "Сертифицированная среда", icon: ShieldCheck },
  { label: "Банки РК", detail: "Расчетная инфраструктура", icon: Building2 },
  { label: "Cross-border", detail: "6+ направлений", icon: Globe2 },
];

export function TrustStrip() {
  return (
    <section className="grid grid-cols-1 gap-3 rounded-lg border border-white/10 bg-[#0B1728]/78 p-3 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.03] p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-500/12 text-blue-300">
            <item.icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{item.label}</div>
            <div className="text-xs text-slate-400">{item.detail}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
