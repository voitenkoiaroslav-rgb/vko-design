"use client";

import { motion, useScroll } from "framer-motion";

export default function CaseProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="t92-reading-progress"
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
    />
  );
}
