"use client";

import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={cn("w-full py-16 md:py-24", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
