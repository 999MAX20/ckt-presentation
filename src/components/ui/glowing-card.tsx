import { motion, HTMLMotionProps, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { MouseEvent } from "react";

interface GlowingCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingCard({
  children,
  className,
  glowColor = "rgba(255, 255, 255, 0.03)",
  ...props
}: GlowingCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative group rounded-2xl border border-white/5 bg-[#15223A] overflow-hidden transition-colors hover:border-white/10 shadow-sm",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
