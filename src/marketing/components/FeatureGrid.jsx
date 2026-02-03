import { Zap, Users, Layers, Globe } from "lucide-react";
import RevealSection from "./RevealSection";

const Card = ({ icon: Icon, title, description, delay }) => (
  <RevealSection delay={delay} className="h-full">
    <div className="h-full p-8 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 backdrop-blur-md">
      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center mb-6 text-slate-900 dark:text-white">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </RevealSection>
);

export default function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: "Faster team communication",
      description: "Reach the right people instantly and keep conversations moving forward without delays.",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Stay aligned, effortlessly",
      description: "Everyone has the context they need — no more confusion, no more missed updates.",
      delay: 0.2
    },
    {
      icon: Layers,
      title: "All your work, one place",
      description: "Bring conversations, files, and tools together so your team can focus.",
      delay: 0.3
    },
    {
      icon: Globe,
      title: "Works for teams of any size",
      description: "From small teams to large organizations, collaboration stays simple and organized.",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-white/80 dark:bg-slate-950/40 backdrop-blur-sm relative overflow-hidden">
       {/* Section Header */}
       <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Built for the way teams work
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Teams move faster when conversations are organized. Keep everyone in sync and focused on what matters.
            </p>
          </RevealSection>
       </div>

       {/* Grid */}
       <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} {...feature} />
          ))}
       </div>
    </section>
  );
}
