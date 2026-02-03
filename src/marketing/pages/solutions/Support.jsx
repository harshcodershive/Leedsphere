import { motion } from "framer-motion";
import {
  Headphones,
  MessageSquare,
  Users,
  Clock,
  Search,
  Shield,
  Zap,
  CheckCircle,
  RefreshCw,
  UserPlus,
  TrendingUp,
  GitBranch,
  BookOpen
} from "lucide-react";

export default function Support() {
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

  const centralizedBenefits = [
    "Discuss customer issues in dedicated channels",
    "Share context quickly with teammates",
    "Keep updates visible to everyone involved",
    "Avoid scattered conversations across tools"
  ];

  const contextBenefits = [
    "Understand issues faster",
    "Avoid asking customers to repeat themselves",
    "Provide consistent responses"
  ];

  const crossTeamExamples = [
    "Escalating bugs to engineering channels",
    "Sharing customer feedback with product teams",
    "Tracking resolution progress transparently"
  ];

  const knowledgeBenefits = [
    "Search past discussions for similar issues",
    "Share proven solutions internally",
    "Build a shared understanding of common problems"
  ];

  const shiftBenefits = [
    "Review past conversations when starting a shift",
    "Pick up issues without lengthy briefings",
    "Stay aligned without overlapping schedules"
  ];

  const noiseBenefits = [
    "Focused channels per issue or topic",
    "Clear ownership of conversations",
    "Fewer distractions from unrelated discussions"
  ];

  const whyChoose = [
    "Keeps support conversations organized",
    "Preserves customer context",
    "Improves cross-team collaboration",
    "Supports shift-based work",
    "Scales with growing support needs"
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
            Support Teams
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Built for Support Teams That Handle Real Customers
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Support teams are on the front line of customer experience. They manage incoming issues, collaborate with internal teams, and ensure customers receive timely, accurate responses.
            </p>
            <p>
              Leedsphere is designed to support this work by giving support teams a shared workspace where <span className="text-white font-semibold">conversations, context, and knowledge stay connected</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Centralized Communication --- */}
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
                Centralized Communication for Customer Issues
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  Customer support often involves multiple people and systems. Leedsphere centralizes internal support communication so teams can collaborate effectively behind the scenes.
                </p>
                <p className="text-slate-300 font-medium">
                  This leads to faster resolution and fewer mistakes.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Headphones className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Support teams can:</h3>
                <ul className="space-y-4">
                  {centralizedBenefits.map((benefit, i) => (
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

        {/* --- Clear Context & Cross-Team --- */}
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
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Clear Context for Every Issue</h3>
              </div>
              <p className="text-slate-300 mb-6">
                One of the biggest challenges in support is missing context. Leedsphere ensures that conversations around customer issues include all relevant information—previous discussions, files, and decisions.
              </p>
              <p className="text-slate-400 mb-4">With clear context, support teams can:</p>
              <ul className="space-y-3">
                {contextBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 text-sm font-medium">
                Improves both efficiency and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <GitBranch className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Collaboration with Product & Engineering</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Support teams often rely on product and engineering teams to resolve complex issues. Leedsphere makes cross-team collaboration easier by keeping discussions open and organized.
              </p>
              <p className="text-slate-400 mb-4">Common workflows include:</p>
              <ul className="space-y-3">
                {crossTeamExamples.map((example, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {example}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 text-sm font-medium">
                Reduces delays and improves collaboration across departments.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Knowledge Sharing --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <BookOpen className="w-12 h-12 text-purple-400 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Knowledge Sharing and Reuse</h2>
                <p className="text-lg text-slate-400 mb-6">
                  Support teams answer many of the same questions repeatedly. Leedsphere helps teams capture and reuse knowledge by preserving conversations and solutions.
                </p>
                <p className="text-slate-300 font-medium">
                  This reduces repetitive work and improves response quality.
                </p>
              </div>
              <div className="space-y-4">
                {knowledgeBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Shift-Based & Reduce Noise --- */}
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
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <RefreshCw className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Support for Shift-Based Teams</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Many support teams work in shifts or across time zones. Leedsphere supports asynchronous collaboration so handoffs are smooth and information is never lost.
              </p>
              <p className="text-slate-400 mb-4">Team members can:</p>
              <ul className="space-y-3">
                {shiftBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-300 text-sm font-medium">
                Ensures continuity and reliability in customer support.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reduce Internal Noise and Stress</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Support work can be high-pressure. Leedsphere helps reduce noise by organizing conversations and limiting unnecessary interruptions.
              </p>
              <p className="text-slate-400 mb-4">Support teams benefit from:</p>
              <ul className="space-y-3">
                {noiseBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-cyan-300 text-sm font-medium">
                Creates a calmer, more effective support environment.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Security & Onboarding --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Secure Handling of Customer Information</h2>
            <p className="text-lg text-slate-400 mb-8">
              Customer support often involves sensitive information. Leedsphere ensures that access to conversations and files is controlled through workspace permissions.
            </p>
            <p className="text-slate-300 mb-6">Teams can:</p>
            <div className="space-y-4">
              {["Restrict access to sensitive discussions", "Collaborate securely", "Maintain customer trust"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              Security supports collaboration without slowing teams down.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <UserPlus className="w-10 h-10 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Faster Onboarding for New Agents</h3>
              <p className="text-slate-300 mb-6">
                New support agents need to learn quickly. Leedsphere helps by preserving historical conversations and documented solutions.
              </p>
              <ul className="space-y-4">
                {["Review past cases", "Learn from real examples", "Understand team workflows faster"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 font-medium">
                Shortens onboarding time and builds confidence.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scalable Support Collaboration</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                As customer bases grow, support volume increases. Leedsphere scales with support teams by keeping communication structured and manageable.
              </p>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Whether your team handles dozens or thousands of tickets, Leedsphere helps maintain clarity and efficiency.
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Support Teams Choose Leedsphere</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Support teams rely on Leedsphere because it delivers real value.
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
            Leedsphere helps support teams deliver <span className="text-purple-400">better service</span>—without added stress or complexity.
          </p>
        </div>

      </div>
    </div>
  );
}
