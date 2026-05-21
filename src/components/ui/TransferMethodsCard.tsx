import { CreditCard, Wallet, Phone } from "lucide-react";

interface TransferMethodsCardProps {
  isCompact?: boolean;
}

export function TransferMethodsCard({ isCompact = false }: TransferMethodsCardProps) {
  const methods = [
    { id: 1, icon: CreditCard, title: "На карту", desc: "Visa, Mastercard, UnionPay" },
    { id: 2, icon: Wallet, title: "На кошелек", desc: "Электронные кошельки партнеров" },
    { id: 3, icon: Phone, title: "По номеру телефона", desc: "Мгновенные переводы по СБП" },
  ];

  if (isCompact) {
    return (
      <div className="w-full h-full flex flex-col">
        <h3 className="text-lg font-bold text-[#E6EDF3] mb-4 flex items-center gap-2 font-display tracking-normal">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full" />
          Методы переводов
        </h3>
        <div className="space-y-3">
          {methods.map((method) => (
            <div 
              key={method.id}
              className="group/item flex items-center gap-3.5 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-300 shadow-sm shadow-emerald-500/10">
                <method.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[15px] font-semibold text-[#E6EDF3] group-hover/item:text-white transition-colors truncate font-sans">
                  {method.title}
                </h4>
                <p className="text-[12px] text-[#E6EDF3]/60 mt-0.5 truncate font-sans">
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto lg:max-w-md h-full relative group">
      <div className="relative w-full h-full flex flex-col items-center">
        <h3 className="text-2xl font-bold text-[#E6EDF3] mb-8 tracking-normal font-display text-center">
          Методы переводов
        </h3>

        <div className="space-y-4 flex-grow flex flex-col justify-center">
          {methods.map((method) => (
            <div 
              key={method.id}
              className="group/item flex items-center gap-5 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:scale-[1.02] hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1E293B] shadow-inner flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <method.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-[#E6EDF3] group-hover/item:text-white transition-colors font-sans">
                  {method.title}
                </h4>
                <p className="text-sm text-[#E6EDF3]/70 mt-0.5 font-sans">
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
