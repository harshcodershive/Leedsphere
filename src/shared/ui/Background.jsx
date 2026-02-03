import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 25), 50);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around smoothly
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 116, 139, ${p.opacity})`; // Slate-500-ish for visibility on light/dark
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50 transition-colors duration-500">
      {/* CSS Ambient Blobs - Animated via index.css classes */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-200/40 rounded-full blur-[120px] animate-blob mix-blend-multiply" />
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-200/40 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply" />
      
      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
