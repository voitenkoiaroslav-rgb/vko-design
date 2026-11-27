"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export default function Reveal({ children, className, delay = 0, amount = 0.12 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(7px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
