import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  Users,
  Shield,
  Layers,
  Globe,
  Zap,
  FolderOpen,
  Eye,
  CheckCircle,
  ArrowRight,
  Building2,
  Rocket,
  Target
} from "lucide-react";

export default function Overview() {
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

  const problems = [
    "Important conversations are buried in private messages",
    "Files are shared without context and become hard to find",
    "Decisions are made but not documented",
    "New team members struggle to catch up",
    "Too many tools create confusion instead of productivity"
  ];

  const coreFeatures = [
    { icon: Layers, title: "Organized Channels", desc: "For focused conversations" },
    { icon: MessageSquare, title: "Direct Messaging", desc: "For quick discussions" },
    { icon: FolderOpen, title: "File Sharing", desc: "Connected to conversations" },
    { icon: Search, title: "Powerful Search", desc: "Across messages and documents" },
    { icon: Shield, title: "Role-based Access", desc: "For security and control" },
  ];

  const teamBenefits = {
    small: [
      "Simple setup",
      "Fast onboarding",
      "No unnecessary complexity"
    ],
    growing: [
      "Structured channels",
      "Clear ownership of conversations",
      "Better cross-team collaboration"
    ],
    large: [
      "Secure access control",
      "Workspace-level permissions",
      "Scalable communication across departments"
    ]
  };

  const trustReasons = [
    "Clear communication without noise",
    "Shared context for better decisions",
    "Faster onboarding for new members",
    "Reduced dependency on email and meetings",
    "Improved alignment across teams"
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl relative z-10">

        {/* --- Hero Section --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-24 md:mb-32"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-xs font-medium text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Product Overview
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            Leedsphere
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Team Collaboration Workspace
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Leedsphere is a modern collaboration platform built for teams that need <span className="text-white font-semibold">clarity, speed, and alignment</span> in their daily work. It brings together conversations, files, and shared knowledge into one structured workspace, helping teams move forward without friction.
            </p>
            <p>
              As teams scale, communication often becomes fragmented. Messages live in one tool, files in another, decisions in email threads, and updates scattered across platforms. Leedsphere was created to solve this problem by providing a single, reliable space where work happens openly and context is never lost.
            </p>
          </motion.div>
        </motion.div>

        {/* --- The Problem Section --- */}
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
                The Problem with Modern Team Communication
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8">
                Most teams struggle with the same challenges. These problems don't come from lack of effort—they come from lack of structure. Leedsphere addresses this by organizing communication around work, not around individuals.
              </motion.p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-orange-500/10 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <ul className="space-y-4">
                  {problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Single Source of Truth --- */}
        <div className="mb-32">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-400" />
                A Single Source of Truth
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-6">
                Leedsphere acts as a shared source of truth for your team. Every conversation, file, and update lives inside your workspace and remains accessible when you need it.
              </p>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <p className="text-slate-400 mb-4">Instead of asking:</p>
                <ul className="space-y-2 text-slate-300 italic">
                  <li>"Where was that discussion?"</li>
                  <li>"Who shared that file?"</li>
                  <li>"Why was this decision made?"</li>
                </ul>
                <p className="text-purple-300 mt-4 font-medium">
                  Your team can simply search and find the full context in seconds.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 bg-purple-500/20 w-40 h-40 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                Built for Focus
              </h3>
              <p className="text-slate-300">
                Unlike traditional chat tools that encourage endless streams of messages, Leedsphere helps teams communicate with intention.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- How It Works --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How Leedsphere Works</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              At the core of Leedsphere is a workspace designed around clarity. Each workspace includes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <feature.icon className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={itemVariants} className="text-center text-slate-300 mt-12 text-lg max-w-3xl mx-auto">
            This structure ensures that communication remains transparent while still giving teams flexibility. Conversations are grouped by topic, project, or team, making it easy to follow relevant discussions, avoid unnecessary noise, and keep everyone aligned.
          </motion.p>
        </motion.div>

        {/* --- Collaboration That Grows --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Collaboration That Grows with You</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto text-center mb-12">
              Leedsphere is designed to support teams at every stage of growth. No matter your size, Leedsphere adapts without forcing you to change how you work.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                  <Rocket className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">For Small Teams</h3>
                <ul className="space-y-3">
                  {teamBenefits.small.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">For Growing Teams</h3>
                <ul className="space-y-3">
                  {teamBenefits.growing.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                  <Building2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">For Large Organizations</h3>
                <ul className="space-y-3">
                  {teamBenefits.large.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- Remote & Hybrid Work --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <Globe className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Remote & Hybrid Ready</h3>
              <p className="text-slate-300 mb-6">Team members can:</p>
              <ul className="space-y-4">
                {[
                  "Catch up on conversations asynchronously",
                  "Review past discussions without meetings",
                  "Stay aligned even when working at different hours"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Supporting Remote and Hybrid Work
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Modern teams are no longer limited to a single office. Leedsphere supports distributed work by making communication visible, searchable, and accessible across time zones.
              </p>
              <p>
                This reduces reliance on constant meetings and helps teams stay productive without burnout.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Transparency Section --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transparency Without Overexposure</h2>
            <p className="text-lg text-slate-400 mb-8">
              Leedsphere balances openness with control. While transparency improves collaboration, not every conversation needs to be public.
            </p>
            <p className="text-slate-300 mb-6">With flexible permissions, teams can:</p>
            <div className="space-y-4">
              {[
                "Create public channels for shared visibility",
                "Use private spaces for sensitive discussions",
                "Control access based on roles and responsibilities"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              This ensures that information is shared responsibly without sacrificing clarity.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl" />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative">
              <Eye className="w-16 h-16 text-slate-700 mb-6 mx-auto" />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="h-2 flex-1 bg-slate-800 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="h-2 w-1/2 bg-slate-800 rounded-full" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium">
                  Flexible Access Control
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Why Teams Trust --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Teams Trust Leedsphere</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                Teams choose Leedsphere because it delivers real value. Leedsphere doesn't try to replace how teams think—it simply gives them a better space to work together.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {trustReasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-purple-400 mb-3 mx-auto" />
                    <p className="text-slate-300 text-sm">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Future of Work --- */}
        <div className="text-center border-t border-slate-800 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A Platform Built for the Future of Work</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
            As work continues to evolve, teams need tools that support flexibility, clarity, and collaboration. Leedsphere is built with these principles at its core.
          </p>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            By combining structured communication with ease of use, Leedsphere helps teams focus on what matters most—<span className="text-purple-400">doing great work together.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
