import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function RevealSection({ 
  children, 
  className = "", 
  delay = 0, 
  effect = "reveal",
  viewport = { once: true, margin: "-10% 0px -10% 0px" }, // Default standard margin
  variants = null, // Default standard variants
  transition = null // Default standard transition
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // --- SCROLL-LINKED ANIMATION (Cinematic Section) ---
  // Tracks the element's journey through the viewport
  // offset: ["start end", "end start"] -> From "top of elem hits bottom of screen" to "bottom of elem hits top of screen"
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll value for a "fluid" feel (damped spring)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.5 });
  const p = shouldReduceMotion ? scrollYProgress : smoothProgress;

  // Cinematic State Mapping
  // 0.0 - 0.2: PRE-ENTER -> ACTIVE (Fade In, Slide Up)
  // 0.2 - 0.7: ACTIVE (Full Focus)
  // 0.7 - 1.0: ACTIVE -> DE-EMPHASIZED (Fade Out, Slide Up drift, Scale Down)
  const opacity = useTransform(p, [0, 0.2, 0.7, 1], [0, 1, 1, 0.4]);
  const y = useTransform(p, [0, 0.2, 0.7, 1], [60, 0, 0, -30]);
  const scale = useTransform(p, [0, 0.2, 0.7, 1], [0.98, 1, 1, 0.98]);

  // --- STANDARD REVEAL (One-shot) ---
  const standardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  // Render Cinematic Section
  if (effect === "cinematic" && !shouldReduceMotion) {
    return (
      <motion.div
        ref={ref}
        style={{ opacity, y, scale }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // Render Standard Reveal (or Fallback for Reduced Motion)
  return (
    <motion.div
      ref={ref}
      variants={variants || standardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={transition || { 
        duration: 0.8, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
