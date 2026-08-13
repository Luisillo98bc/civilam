"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function UXFeatures() {
  // Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent-red origin-[0%] z-[9999]"
      style={{ scaleX }}
    />
  );
}
