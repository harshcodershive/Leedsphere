import { motion } from "framer-motion";
import {
  FolderOpen,
  Search,
  Shield,
  Globe,
  CheckCircle,
  Image,
  FileSpreadsheet,
  Presentation,
  TrendingUp,
  Link2,
  FileText
} from "lucide-react";

export default function Files() {
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

  const contextBenefits = [
    "Why the file exists",
    "Who shared it",
    "What it's related to",
    "How it should be used"
  ];

  const workflowBenefits = [
    "Share files directly inside channels",
    "Discuss files alongside related messages",
    "Revisit files with full conversation history"
  ];

  const useCases = [
    { icon: Image, label: "Design drafts", desc: "Share for feedback" },
    { icon: FileText, label: "Documents", desc: "Collaborate together" },
    { icon: Presentation, label: "Presentations", desc: "Review as a team" },
    { icon: FileSpreadsheet, label: "Resources", desc: "Distribute important files" }
  ];

  const findBenefits = [
    "Search for files by name or content",
    "Find files within specific channels",
    "Review files in the context of related discussions"
  ];

  const channelBenefits = [
    "Everyone sees the latest version",
    "Feedback stays centralized",
    "Decisions are documented alongside files"
  ];

  const whyChoose = [
    "Keeps files connected to conversations",
    "Improves clarity and collaboration",
    "Reduces duplication and confusion",
    "Supports secure access control",
    "Works naturally with team workflows"
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
            Product Feature
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            File Sharing
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            File Sharing with Context
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              File sharing in Leedsphere is designed to keep documents <span className="text-white font-semibold">connected to the conversations that matter</span>. Instead of files living in isolated folders or being shared without explanation, Leedsphere ensures that every file has context.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Context Benefits --- */}
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
                Every File Tells a Story
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  When files are shared inside conversations, team members immediately understand the full context. This approach removes confusion and keeps collaboration efficient.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Link2 className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Team members understand:</h3>
                <ul className="space-y-4">
                  {contextBenefits.map((benefit, i) => (
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

        {/* --- One Place --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">One Place for Files and Conversations</h2>
                <p className="text-lg text-slate-400 mb-8">
                  In many teams, files are scattered across email attachments, cloud drives, and private messages. Leedsphere brings files into the same space where discussions happen, creating a more cohesive workflow.
                </p>
              </div>

              <div className="space-y-4">
                {workflowBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-slate-300 mt-8 font-medium">
              This keeps work organized and easy to follow.
            </p>
          </div>
        </div>

        {/* --- Everyday Team Work --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for Everyday Team Work</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leedsphere file sharing supports the types of files teams use every day. Files are shared naturally as part of conversations, not as separate tasks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <useCase.icon className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.label}</h3>
                <p className="text-slate-400 text-sm">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={itemVariants} className="text-center text-slate-300 mt-8">
            Every file stays connected to the discussion it belongs to.
          </motion.p>
        </motion.div>

        {/* --- Easy to Find --- */}
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
              <Search className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Team members can:</h3>
              <ul className="space-y-4">
                {findBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 font-medium">
                This saves time and reduces frustration.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Keep Files Easy to Find
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                As teams grow, finding the right file becomes harder. Leedsphere makes file discovery simple by keeping files searchable and linked to conversations.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Reduce Duplicates --- */}
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
                  <FolderOpen className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reduce Duplicate Files</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Without structure, teams often end up with multiple versions of the same file. Leedsphere reduces duplication by keeping shared files visible and accessible to everyone who needs them.
              </p>
              <p className="text-slate-400 mb-4">By sharing files in channels:</p>
              <ul className="space-y-3">
                {channelBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-300 text-sm font-medium">
                This leads to clearer collaboration and fewer mistakes.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Secure File Access</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Security is a core part of file sharing in Leedsphere. Access to files follows the same permission model as conversations and channels.
              </p>
              <p className="text-slate-400 mb-4">Teams can:</p>
              <ul className="space-y-3">
                {["Control who can view or share files", "Keep sensitive files restricted", "Maintain privacy across workspaces"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 text-sm font-medium">
                Suitable for teams that handle confidential information.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Remote Teams --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Support for Remote and Distributed Teams
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                For remote teams, file sharing is essential. Leedsphere ensures that files are accessible to all team members, regardless of location or time zone.
              </p>
              <p>
                This supports flexible work while maintaining clarity.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <Globe className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Team members can:</h3>
              <ul className="space-y-4">
                {["Review files asynchronously", "Leave feedback without meetings", "Stay aligned without constant communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* --- Scales --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">File Sharing That Scales with Your Team</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                As organizations grow, file volume increases. Leedsphere is built to handle this growth by organizing files through channels and conversations instead of static folders.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {["Prevents file chaos", "Keeps collaboration manageable", "Supports long-term knowledge sharing"].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <CheckCircle className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Teams Choose Leedsphere File Sharing</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Teams rely on Leedsphere file sharing because it delivers real value.
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
            Leedsphere turns file sharing into a <span className="text-purple-400">seamless part of collaboration</span>, not a separate task.
          </p>
        </div>

      </div>
    </div>
  );
}
