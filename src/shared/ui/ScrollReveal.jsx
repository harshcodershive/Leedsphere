import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  // We use useInView for the entry animation to make it stick once visible (optional)
  // or useScroll for continuous parallax. 
  // Based on design: "Layered scroll system... Previous section moves slightly upward... Opacity reduces"
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 0"], // Start when top enters viewport, end when bottom leaves
  });

  // Entry: 0 -> 0.2
  // Active: 0.2 -> 0.8
  // Exit: 0.8 -> 1

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -20]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className={`will-change-transform ${className}`}
      transition={{ delay: delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
