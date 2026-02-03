import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Zap,
  Search,
  TrendingUp,
  CheckCircle,
  UserPlus,
  Target,
  RefreshCw,
  Layers,
  GitBranch
} from "lucide-react";

export default function Startups() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const simpleWorkspaceBenefits = [
    "Set up channels in minutes",
    "Invite teammates effortlessly",
    "Start collaborating without complex configuration"
  ];

  const alignmentBenefits = [
    "Keep discussions focused",
    "Share updates transparently",
    "Avoid important information getting lost"
  ];

  const toolSprawlBenefits = [
    "Discuss work in channels",
    "Share files in context",
    "Keep decisions documented"
  ];

  const decisionBenefits = [
    "Review past discussions",
    "Understand why decisions were made",
    "Avoid revisiting the same debates"
  ];

  const crossFunctionalBenefits = [
    "Share feedback openly",
    "Coordinate launches",
    "Align priorities quickly"
  ];

  const onboardingBenefits = [
    "Read past discussions",
    "Learn team workflows",
    "Get productive faster"
  ];

  const whyChoose = [
    "Enables fast, clear communication",
    "Reduces early chaos",
    "Keeps teams aligned during growth",
    "Supports cross-functional work",
    "Scales naturally as the company grows"
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-green-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl relative z-10">

        {/* --- Hero Section --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-24 md:mb-32"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-xs font-medium text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            For Startups
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            Startups
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Built for Startups That Need Speed Without Chaos
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Startups move fast. Teams iterate quickly, priorities change often, and communication happens constantly. While speed is essential, unstructured communication can easily turn into confusion.
            </p>
            <p>
              Leedsphere is built to help startups <span className="text-white font-semibold">move quickly without losing clarity</span>, giving teams a shared workspace where conversations, files, and decisions stay organized.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Simple Workspace --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Simple Workspace for Growing Teams
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  In the early stages, startups need tools that are easy to adopt and flexible enough to evolve. Leedsphere provides a simple workspace that works immediately but scales as your team grows.
                </p>
                <p className="text-slate-300 font-medium">
                  This allows teams to focus on building products instead of managing tools.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Rocket className="w-10 h-10 text-green-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Startups can:</h3>
                <ul className="space-y-4">
                  {simpleWorkspaceBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Stay Aligned & Reduce Tool Sprawl --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Keep Everyone Aligned as You Grow</h3>
              </div>
              <p className="text-slate-300 mb-6">
                As startups grow, communication complexity increases. What worked for a five-person team often breaks at fifteen or fifty. Leedsphere helps startups maintain alignment by organizing conversations around work.
              </p>
              <p className="text-slate-400 mb-4">With structured channels, teams can:</p>
              <ul className="space-y-3">
                {alignmentBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-purple-300 text-sm font-medium">
                Growth doesn't come at the cost of clarity.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <Layers className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reduce Tool Sprawl Early</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Many startups adopt new tools quickly, which often leads to fragmentation. Leedsphere helps reduce tool sprawl by acting as the central communication hub for the team.
              </p>
              <p className="text-slate-400 mb-4">Instead of switching between multiple platforms, startups can:</p>
              <ul className="space-y-3">
                {toolSprawlBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-300 text-sm font-medium">
                Creates a more focused and efficient workflow.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Faster Decision-Making --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Zap className="w-12 h-12 text-yellow-400 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Faster Decision-Making with Shared Context</h2>
                <p className="text-lg text-slate-400 mb-6">
                  Startups make decisions every day. Leedsphere preserves the context behind those decisions so teams can move forward confidently.
                </p>
                <p className="text-slate-300 font-medium">
                  This helps startups move faster without repeating mistakes.
                </p>
              </div>
              <div className="space-y-4">
                {decisionBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Cross-Functional & Onboarding --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <GitBranch className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Support Cross-Functional Collaboration</h3>
              </div>
              <p className="text-slate-300 mb-6">
                In startups, roles often overlap. Product, engineering, design, and marketing teams collaborate closely. Leedsphere makes this collaboration seamless by keeping conversations open and structured.
              </p>
              <p className="text-slate-400 mb-4">Cross-functional teams can:</p>
              <ul className="space-y-3">
                {crossFunctionalBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 text-sm font-medium">
                Improves teamwork and reduces miscommunication.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <UserPlus className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Onboard New Hires Quickly</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Hiring is a critical moment for startups. New hires need to understand the product, the team, and ongoing work as quickly as possible. Leedsphere helps by preserving conversations and decisions.
              </p>
              <p className="text-slate-400 mb-4">New team members can:</p>
              <ul className="space-y-3">
                {onboardingBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 text-sm font-medium">
                Reduces onboarding time and improves confidence.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Maintain Focus --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <RefreshCw className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Teams can:</h3>
              <ul className="space-y-4">
                {["Adjust channels as projects evolve", "Archive outdated discussions", "Keep attention on current work"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-cyan-300 font-medium">
                This flexibility supports experimentation without chaos.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Maintain Focus in Fast-Changing Environments
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Startups often face rapid changes in direction. Leedsphere helps teams stay focused by keeping communication organized, even when priorities shift.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Built to Scale --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built to Scale with Startup Growth</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                What starts as a small team can quickly become a growing organization. Leedsphere scales with startups by supporting more channels, users, and workflows without adding complexity.
              </p>
              <p className="text-slate-300 max-w-2xl mx-auto font-medium">
                As your startup grows, Leedsphere grows with you—without forcing you to change how you collaborate.
              </p>
            </div>
          </div>
        </div>

        {/* --- Why Startups Choose --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Startups Choose Leedsphere</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Startups rely on Leedsphere because it delivers real value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mb-3 mx-auto" />
                <p className="text-slate-300 text-sm">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Closing --- */}
        <div className="text-center border-t border-slate-800 pt-16">
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            Leedsphere helps startups build <span className="text-green-400">strong collaboration habits early</span>—setting the foundation for long-term success.
          </p>
        </div>

      </div>
    </div>
  );
}
