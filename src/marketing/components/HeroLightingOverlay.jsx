import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroLightingOverlay() {
  const { scrollY } = useScroll();

  // Scroll Interaction
  // As user scrolls down:
  // - Opacity fades out (handoff focus)
  // - Moves slightly up (parallax-like feel)
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -50]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] max-w-[1200px] pointer-events-none z-0"
    >
      {/* 
         CORE SPOTLIGHT (Center)
         - Soft, diffused white/indigo light
         - Highlights the headline text area
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(99,102,241,0.05)_30%,transparent_70%)] blur-[60px] rounded-full mix-blend-overlay dark:mix-blend-normal" />

      {/* 
         AMBIENT GLOW (Wider)
         - Adds slight purple hue to the surrounding darkness
         - Very subtle (3-5% opacity)
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.04)_0%,transparent_60%)] blur-[100px] rounded-full" />
    </motion.div>
  );
}
