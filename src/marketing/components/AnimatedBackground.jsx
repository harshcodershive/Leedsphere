import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Reactive Reduced Motion Check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      } else {
        animate();
      }
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let resizeTimeout;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleResize = () => {
      // Debounce resize
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };

    const initParticles = () => {
      particles = [];
      const density = window.innerWidth < 768 ? 50 : 30; // Fewer particles on mobile
      const particleCount = Math.min(Math.floor(window.innerWidth / density), 40);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const animate = () => {
      if (prefersReducedMotion || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 116, 139, ${p.opacity})`; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* CSS Ambient Blobs - Static/CSS Only */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-4000" />
      
      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
}
