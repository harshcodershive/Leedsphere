import { motion, useScroll, useTransform } from "framer-motion";

export default function AtmosphericOverlay() {
  const { scrollY } = useScroll();
  
  // Opacity increases as user scrolls down to improve contrast for lower sections
  // Starts at 0 (hero is clear) and goes to 0.6 (content readability)
  const opacity = useTransform(scrollY, [0, 800], [0, 0.6]);
  
  // Subtle vertical gradient shift for depth feeling
  const y = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <motion.div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity, y }}
    >
       {/* 
          Cinematic Gradient Overlay
          - Top: Transparent (let stars shine in Hero)
          - Middle/Bottom: Darker to support text reading
          - Vignette: Edges serve focus
       */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/80" />
       
       {/* Constant vignette for focus */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)]" />
       
       {/* Noise texture for "film grain" feel (optional, keeps it organic) */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </motion.div>
  );
}
