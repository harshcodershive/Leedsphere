import { useEffect, useRef } from "react";

export default function UniverseBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Reduced Motion Check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = mediaQuery.matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    // Data Containers
    let stars = [];
    let nebulae = [];
    
    // Dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    
    // Scroll State
    let speedMultiplier = 1;
    let lastScrollY = window.scrollY;

    // Configuration
    const STAR_COUNT = Math.min(Math.floor(width / 6), 250); 
    const NEBULA_COUNT = 4; // Large, subtle glow blobs
    const LAYERS = 3;

    // --- Initialization ---

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        const layer = Math.floor(Math.random() * LAYERS); // 0 (far), 1 (mid), 2 (near)
        
        const baseSpeed = 0.05 + (layer * 0.05); 
        const baseSize = 0.5 + (layer * 0.4); 
        const baseOpacity = 0.3 + (layer * 0.25);

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: baseSize + (Math.random() * 0.3),
          opacity: baseOpacity + (Math.random() * 0.2), 
          speed: baseSpeed + (Math.random() * 0.02),
          layer: layer, 
          color: Math.random() > 0.9 ? "200, 220, 255" : Math.random() > 0.9 ? "230, 210, 255" : "255, 255, 255",
          // Pre-calculate rendering vars to avoid object creation in loop
          renderX: 0,
          renderY: 0
        });
      }
    };

    const initNebulae = () => {
      nebulae = [];
      for (let i = 0; i < NEBULA_COUNT; i++) {
        nebulae.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 300 + Math.random() * 400, // Very large
          color: Math.random() > 0.5 ? "49, 46, 129" : "88, 28, 135", // Indigo vs Purple
          speedX: (Math.random() - 0.5) * 0.05, // Extremely slow drift
          speedY: (Math.random() - 0.5) * 0.05,
          opacity: 0.02 + Math.random() * 0.04 // 2-6% opacity
        });
      }
    };

    // --- Resizing ---

    let resizeTimeout;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
      initNebulae();
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };

    // --- Interaction ---

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / width) * 2 - 1;
      targetMouseY = (e.clientY / height) * 2 - 1;
    };

    // --- Animation Loop ---

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Physics Update
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      const targetSpeedMultiplier = scrollDelta > 0 
        ? 1 + Math.min(scrollDelta * 0.02, 1) 
        : 1;

      speedMultiplier += (targetSpeedMultiplier - speedMultiplier) * 0.05;
      if (Math.abs(speedMultiplier - 1) < 0.001) speedMultiplier = 1;

      // 2. Draw Nebula (Background Layer)
      nebulae.forEach(nebula => {
        // Very slow natural drift
        nebula.x += nebula.speedX;
        nebula.y += nebula.speedY;

        // Soft boundaries
        if (nebula.x < -nebula.radius) nebula.x = width + nebula.radius;
        if (nebula.x > width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = height + nebula.radius;
        if (nebula.y > height + nebula.radius) nebula.y = -nebula.radius;

        // Draw Gradient
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius);
        gradient.addColorStop(0, `rgba(${nebula.color}, ${nebula.opacity})`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Update Star Positions (Physics)
      stars.forEach(star => {
         star.y -= star.speed * speedMultiplier;

         const parallaxX = mouseX * (star.layer + 1) * 0.8; 
         const parallaxY = mouseY * (star.layer + 1) * 0.8;
         
         star.renderX = star.x + parallaxX;
         star.renderY = star.y + parallaxY;

         // Wrap
         if (star.renderY < -50) {
           star.y = height + 50;
           star.x = Math.random() * width; 
         }
         if (star.renderX < -50) star.x = width + 50 - parallaxX;
         if (star.renderX > width + 50) star.x = -50 - parallaxX;
      });

      // 4. Draw Constellations (Middle Layer)
      // Only for mid-layer stars (Layer 1)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        const p1 = stars[i];
        if (p1.layer !== 1) continue;

        let connections = 0;
        // Check only forward to avoid duplicates
        for (let j = i + 1; j < stars.length; j++) {
            const p2 = stars[j];
            if (p2.layer !== 1) continue;

            const dx = p1.renderX - p2.renderX;
            const dy = p1.renderY - p2.renderY;
            const distSq = dx * dx + dy * dy;
            
            // Threshold ~120px
            if (distSq < 14400) {
                const dist = Math.sqrt(distSq);
                const opacity = (1 - dist / 120) * 0.12;

                ctx.beginPath();
                ctx.moveTo(p1.renderX, p1.renderY);
                ctx.lineTo(p2.renderX, p2.renderY);
                ctx.strokeStyle = `rgba(200, 225, 255, ${opacity})`;
                ctx.stroke();

                connections++;
                if (connections >= 2) break; // Intelligent structure, not messy mesh
            }
        }
      }

      // 5. Draw Stars (Top Layer)
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.renderX, star.renderY, star.size, 0, Math.PI * 2);
        
        // Twinkle (Top layer only)
        let alpha = star.opacity;
        if (star.layer === 2) {
            alpha += Math.sin(Date.now() * 0.001 + star.x) * 0.1;
        }
        
        ctx.fillStyle = `rgba(${star.color}, ${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // --- Start ---
    resize();
    
    if (!reducedMotion) {
      window.addEventListener("resize", handleResize);
      window.addEventListener("mousemove", handleMouseMove);
      animate();
    } else {
        // Redraw static once
        ctx.clearRect(0, 0, width, height);
        // Draw static nebulae
        nebulae.forEach(n => {
            const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
            g.addColorStop(0, `rgba(${n.color}, ${n.opacity})`);
            g.addColorStop(1, "transparent");
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2); ctx.fill();
        });
        // Draw static stars
        stars.forEach(s => {
            ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${s.color}, ${s.opacity})`; ctx.fill();
        });
        window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* 
         DEEP UNIVERSE GRADIENT LAYER
         - Base: Slate-950 (Very dark navy)
         - Mid:  Purple/Indigo bleed for "nebula" feel
         - Top:  Vignette for focus
      */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B0B15] to-black opacity-100" />
      
      {/* Canvas Layer: Nebulae -> Constellations -> Stars */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-100" // Opacity full, canvas handles internal opacities
      />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,_black_100%)] opacity-40" />
    </div>
  );
}
