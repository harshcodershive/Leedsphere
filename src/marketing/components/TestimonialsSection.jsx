import RevealSection from "./RevealSection";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const logos = ["AlphaCorp", "BetaTech", "GammaSystems", "DeltaForce", "EpsilonInc", "ZetaSpace"];
  
  const testimonials = [
    {
      quote: "DocModel transformed how we handle internal SOPs. The AI answers cut our onboarding time in half.",
      author: "Sarah Jenkins",
      role: "VP of Operations",
      company: "TechFlow",
      delay: 0.1
    },
    {
      quote: "Finally, a documentation tool that scales. We migrated 5,000 articles with zero downtime.",
      author: "Michael Chen",
      role: "CTO",
      company: "DataSphere",
      delay: 0.2
    },
    {
      quote: "The ability to customize the portal to match our brand was a game changer for our customer experience.",
      author: "Jessica Wu",
      role: "Head of Product",
      company: "CreativeSoft",
      delay: 0.3
    }
  ];

  const metrics = [
    { value: "10k+", label: "Teams" },
    { value: "2M+", label: "Articles" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-24 bg-white/40 dark:bg-slate-950/20 border-t border-slate-100/30 dark:border-slate-800/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <RevealSection effect="cinematic">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Trusted by innovative teams
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Join thousands of companies using DocModel to power their internal and external documentation.
            </p>
          </RevealSection>
        </div>

        {/* Logos Row */}
        <RevealSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale mb-20 pointer-events-none select-none">
             {logos.map((logo, idx) => (
               <span key={idx} className="text-xl md:text-2xl font-bold text-slate-300 dark:text-slate-600">
                 {logo}
               </span>
             ))}
          </div>
        </RevealSection>

        {/* Testimonials Grid (Desktop) / Scroll (Mobile) */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
           {testimonials.map((t, idx) => (
             <TestimonialCard key={idx} {...t} />
           ))}
        </div>

        {/* Metrics Row */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-16">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {metrics.map((m, idx) => (
                <RevealSection key={idx} delay={0.1 * idx}>
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{m.value}</span>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">{m.label}</span>
                  </div>
                </RevealSection>
              ))}
           </div>
        </div>
        </RevealSection>

      </div>
    </section>
  );
}
