import { motion } from "framer-motion";
import {
  Hash,
  Lock,
  Globe,
  Search,
  BellOff,
  GitBranch,
  Clock,
  UserPlus,
  TrendingUp,
  CheckCircle,
  Eye,
  EyeOff,
  Building2,
  Briefcase,
  Megaphone
} from "lucide-react";

export default function Channels() {
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

  const channelBenefits = [
    "Follow conversations that matter to them",
    "Avoid unnecessary notifications",
    "Understand the full context of work",
    "Catch up easily after time away"
  ];

  const channelTypes = [
    { icon: Briefcase, label: "Projects", example: "product-launch, website-redesign" },
    { icon: Building2, label: "Departments", example: "engineering, support, marketing" },
    { icon: Megaphone, label: "Ongoing Topics", example: "announcements, releases" },
    { icon: GitBranch, label: "Cross-functional", example: "collaboration across teams" }
  ];

  const publicUses = [
    "Share updates",
    "Discuss company-wide initiatives",
    "Keep teams aligned on important work"
  ];

  const privateUses = [
    "Confidential projects",
    "Leadership discussions",
    "Limited-access collaborations"
  ];

  const longTermBenefits = [
    "Reviewing past decisions",
    "Onboarding new team members",
    "Understanding project history",
    "Reducing repeated questions"
  ];

  const crossTeamExamples = [
    "Product and engineering teams can align on features",
    "Support teams can share customer insights",
    "Marketing can collaborate with design and content teams"
  ];

  const whyChoose = [
    { icon: Eye, text: "Bring clarity to communication" },
    { icon: Clock, text: "Preserve context over time" },
    { icon: Lock, text: "Support transparency and privacy" },
    { icon: TrendingUp, text: "Scale with team growth" },
    { icon: BellOff, text: "Reduce reliance on meetings and emails" }
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
            Team Channels
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The foundation of collaboration inside Leedsphere
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Team Channels are shared spaces where conversations stay focused around a specific <span className="text-white font-semibold">topic, project, department, or goal</span>. Instead of messages being scattered across private chats or long email threads, channels bring clarity by giving every discussion a clear home.
            </p>
            <p>
              Each channel represents <span className="text-purple-400 font-medium">what your team is working on</span>, not who is talking. This shift makes communication more transparent, searchable, and easier to follow over time.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Why Channels Matter --- */}
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
                Why Channels Matter for Modern Teams
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  As teams grow, communication becomes harder to manage. Without structure, messages overlap, important updates get missed, and decisions are lost in private conversations.
                </p>
                <p>
                  Team Channels solve this by organizing discussions in a way that everyone can understand. Channels reduce confusion and create a shared understanding across the team.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Hash className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">With channels, teams can:</h3>
                <ul className="space-y-4">
                  {channelBenefits.map((benefit, i) => (
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

        {/* --- Organize by Purpose --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Organize Work by Purpose</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Leedsphere channels are designed to reflect how teams actually work. This structure ensures that conversations remain relevant and easy to navigate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channelTypes.map((type, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <type.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{type.label}</h3>
                <p className="text-slate-400 text-sm italic">e.g., {type.example}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Public and Private Channels --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Public and Private Channels</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Not all conversations need the same level of visibility. Leedsphere supports both public and private channels to give teams flexibility without sacrificing control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Public Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Public Channels</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Public channels are open to everyone in the workspace. They encourage transparency and shared knowledge by default.
              </p>
              <p className="text-slate-400 mb-4">Use public channels to:</p>
              <ul className="space-y-3">
                {publicUses.map((use, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {use}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Private Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Lock className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <EyeOff className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Private Channels</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Private channels are restricted to selected members. They are ideal for sensitive discussions or focused work.
              </p>
              <p className="text-slate-400 mb-4">Use private channels for:</p>
              <ul className="space-y-3">
                {privateUses.map((use, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {use}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-400 mt-8 text-lg"
          >
            This balance helps teams collaborate openly while respecting privacy.
          </motion.p>
        </div>

        {/* --- Long-term Collaboration --- */}
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
              <Clock className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Perfect for:</h3>
              <ul className="space-y-4">
                {longTermBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-purple-300 font-medium">
                Every channel becomes a living record of work, not just a temporary chat.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Keep Conversations Organized Over Time
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Unlike unstructured chat tools, Leedsphere channels are built for long-term collaboration. Conversations don't disappear—they stay available for reference and learning.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Reduce Noise --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reduce Noise Without Losing Information</h2>
                <p className="text-lg text-slate-400 mb-8">
                  One of the biggest challenges in team communication is noise. Leedsphere channels help reduce unnecessary interruptions while keeping important information accessible.
                </p>
                <p className="text-slate-300 font-medium">
                  This creates a healthier communication environment where attention is respected.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Hash, text: "Join only the channels they need" },
                  { icon: BellOff, text: "Mute less relevant channels" },
                  { icon: Search, text: "Focus on work without missing key updates" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Cross-Team Collaboration --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Channels for Cross-Team Collaboration</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Work rarely happens in isolation. Team Channels make it easy for different departments to collaborate without friction. By keeping discussions open and accessible, channels break down silos and improve collaboration across the organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {crossTeamExamples.map((example, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <GitBranch className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                <p className="text-slate-300">{example}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Better Onboarding --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Better Onboarding with Shared Context
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                New team members often struggle to catch up on past conversations. With Leedsphere channels, onboarding becomes faster and more effective.
              </p>
              <p className="text-slate-300 font-medium">
                This reduces onboarding time and helps new members contribute sooner.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <UserPlus className="w-10 h-10 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">New joiners can:</h3>
              <ul className="space-y-4">
                {[
                  "Read past discussions",
                  "Understand how decisions were made",
                  "Learn team norms and workflows"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* --- Channels Built to Scale --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Channels Built to Scale</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                As organizations grow, communication complexity increases. Leedsphere channels scale with your team by providing structure without rigidity.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {[
                  "5 team members or 500",
                  "One department or many",
                  "A single project or multiple initiatives"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <span className="text-purple-400 font-bold text-lg">{i + 1}</span>
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-12 text-slate-300 text-lg">
                Channels adapt to your workflow and keep communication manageable.
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Teams Choose Leedsphere Channels</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Teams rely on Leedsphere channels because they deliver real value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChoose.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <reason.icon className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
                <p className="text-slate-300 text-sm">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Closing Statement --- */}
        <div className="text-center border-t border-slate-800 pt-16">
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            Team Channels are not just chat rooms—they are the <span className="text-purple-400">backbone of how work gets done</span> in Leedsphere.
          </p>
        </div>

      </div>
    </div>
  );
}
