import { motion } from "framer-motion";
import {
  Globe,
  Clock,
  Users,
  MessageSquare,
  Shield,
  Heart,
  CheckCircle,
  Eye,
  UserPlus,
  TrendingUp,
  Laptop,
  Building2
} from "lucide-react";

export default function Remote() {
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

  const asyncBenefits = [
    "Share updates without scheduling meetings",
    "Respond when it fits their schedule",
    "Catch up on conversations without missing context"
  ];

  const contextBenefits = [
    "Review past discussions before responding",
    "Understand decisions without asking for explanations",
    "Stay aligned even when joining late"
  ];

  const meetingBenefits = [
    "Share updates in channels",
    "Discuss topics asynchronously",
    "Use meetings only when real-time discussion is necessary"
  ];

  const hybridScenarios = [
    { icon: Building2, label: "In the office" },
    { icon: Laptop, label: "Working remotely" },
    { icon: Globe, label: "Switching between both" }
  ];

  const cultureBenefits = [
    "Celebrate wins in shared channels",
    "Share updates beyond work tasks",
    "Stay connected without forced interaction"
  ];

  const accountabilityBenefits = [
    "Clear ownership of conversations",
    "Transparent updates",
    "Reduced misunderstandings"
  ];

  const whyChoose = [
    "Supports asynchronous work",
    "Preserves shared context",
    "Reduces meeting overload",
    "Strengthens remote culture",
    "Scales across time zones"
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
            For Teams
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            Remote & Hybrid Teams
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Built for Teams That Work Anywhere
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Remote and hybrid teams face unique challenges. Team members work across locations, time zones, and schedules, making communication harder to coordinate.
            </p>
            <p>
              Leedsphere is designed to support this reality by providing a shared workspace where <span className="text-white font-semibold">conversations, files, and decisions remain accessible to everyone</span>—no matter where they are.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Time Zones --- */}
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
                Communication That Doesn't Depend on Time Zones
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  One of the biggest challenges for remote teams is time zone overlap. Leedsphere supports asynchronous communication so work can continue without requiring everyone to be online at the same time.
                </p>
                <p className="text-slate-300 font-medium">
                  This flexibility helps teams stay productive while respecting individual work hours.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Clock className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Remote teams can:</h3>
                <ul className="space-y-4">
                  {asyncBenefits.map((benefit, i) => (
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

        {/* --- Shared Context --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <Eye className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">With Leedsphere, remote teams can:</h3>
              <ul className="space-y-4">
                {contextBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 font-medium">
                This reduces confusion and improves collaboration quality.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Shared Context for Distributed Collaboration
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                In remote environments, context is easy to lose. Leedsphere ensures that conversations, files, and decisions stay connected so team members always understand what's happening.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Reduce Meetings --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reduce Meetings Without Losing Alignment</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Remote teams often rely heavily on meetings to stay aligned. Leedsphere reduces this dependency by enabling clear, documented communication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {meetingBenefits.map((benefit, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-300 mt-8 font-medium">
              This frees up time for focused work and reduces meeting fatigue.
            </p>
          </div>
        </div>

        {/* --- Hybrid Support --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Support for Hybrid Workflows</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Hybrid teams combine in-office and remote work, which can create information gaps. Leedsphere bridges this gap by ensuring that all communication happens in a shared space.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hybridScenarios.map((scenario, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors text-center"
              >
                <scenario.icon className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                <p className="text-white font-semibold text-lg">{scenario.label}</p>
                <p className="text-slate-400 mt-2 text-sm">Everyone has access to the same information and conversations.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Culture & Accountability --- */}
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
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
                  <Heart className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Build Strong Remote Team Culture</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Culture is harder to maintain in remote teams. Leedsphere helps foster connection by creating shared spaces where teams can communicate openly.
              </p>
              <p className="text-slate-400 mb-4">Teams can:</p>
              <ul className="space-y-3">
                {cultureBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-pink-300 text-sm font-medium">
                Helps maintain team culture even when working apart.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Clear Ownership and Accountability</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Remote work requires clarity. Leedsphere channels help teams define ownership and responsibility without micromanagement.
              </p>
              <p className="text-slate-400 mb-4">Teams benefit from:</p>
              <ul className="space-y-3">
                {accountabilityBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 text-sm font-medium">
                Accountability improves while maintaining trust and autonomy.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Onboarding & Security --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Onboarding Remote Team Members</h2>
            <p className="text-lg text-slate-400 mb-8">
              Onboarding remotely can be challenging. Leedsphere preserves context so new team members can learn independently.
            </p>
            <p className="text-slate-300 mb-6">New hires can:</p>
            <div className="space-y-4">
              {["Read past conversations", "Understand team workflows", "Get up to speed without constant calls"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <UserPlus className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              This shortens onboarding time and builds confidence.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <Shield className="w-10 h-10 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Secure Collaboration for Distributed Teams</h3>
              <p className="text-slate-300 mb-6">
                Remote teams often work across networks and locations. Leedsphere ensures secure access through role-based permissions and workspace controls.
              </p>
              <p className="text-green-300 font-medium">
                Teams can collaborate securely without compromising data protection.
              </p>
            </div>
          </div>
        </div>

        {/* --- Scales --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scales with Global Teams</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                As teams expand globally, communication complexity increases. Leedsphere scales with remote teams by keeping communication structured and searchable.
              </p>
              <p className="text-slate-300 max-w-2xl mx-auto">
                No matter how distributed your team becomes, Leedsphere helps keep everyone aligned.
              </p>
            </div>
          </div>
        </div>

        {/* --- Why Teams Choose --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Remote Teams Choose Leedsphere</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Remote teams rely on Leedsphere because it delivers real value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 mb-3 mx-auto" />
                <p className="text-slate-300 text-sm">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Closing --- */}
        <div className="text-center border-t border-slate-800 pt-16">
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            Leedsphere helps remote and hybrid teams <span className="text-purple-400">work together effectively</span>—without friction.
          </p>
        </div>

      </div>
    </div>
  );
}
