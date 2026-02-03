import { motion } from "framer-motion";
import {
  MessageSquare,
  Clock,
  Search,
  GitMerge,
  Shield,
  Zap,
  CheckCircle,
  Link,
  FileText,
  Bell,
  TrendingUp,
  Eye
} from "lucide-react";

export default function Messaging() {
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

  const messageFeatures = [
    "Belongs to a specific channel or conversation",
    "Remains searchable over time",
    "Retains its context",
    "Supports thoughtful discussion, not just quick replies"
  ];

  const asyncBenefits = [
    { icon: Zap, text: "Respond instantly during active discussions" },
    { icon: Clock, text: "Catch up later without losing context" },
    { icon: Eye, text: "Review full conversations instead of summaries" }
  ];

  const threadBenefits = [
    "Follow multiple discussions in the same channel",
    "Avoid confusion when topics overlap",
    "Keep conversations readable and organized"
  ];

  const decisionBenefits = [
    "Understand why decisions were made",
    "Avoid repeating discussions",
    "Onboard new members faster"
  ];

  const contextItems = [
    { icon: FileText, label: "Files" },
    { icon: Link, label: "Links" },
    { icon: MessageSquare, label: "Past discussions" },
    { icon: Bell, label: "Related updates" }
  ];

  const whyChoose = [
    "Keeps communication organized",
    "Preserves context over time",
    "Supports remote and distributed teams",
    "Reduces noise and distractions",
    "Helps teams make better decisions"
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
            Team Messaging
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Messaging Designed for Real Work
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Team Messaging in Leedsphere is built to support <span className="text-white font-semibold">clear, meaningful communication</span>—not endless streams of disconnected messages. It enables teams to have conversations that stay organized, searchable, and connected to the work they're doing.
            </p>
            <p>
              Instead of relying on long email chains or fragmented chat tools, Leedsphere messaging helps teams communicate efficiently while preserving full context.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Beyond Simple Chat --- */}
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
                Beyond Simple Chat
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  Traditional messaging tools focus on speed, often at the cost of clarity. Messages arrive quickly, but important discussions get buried.
                </p>
                <p>
                  Leedsphere takes a different approach by designing messaging around <span className="text-purple-400 font-medium">collaboration, not noise</span>. This ensures that communication remains useful long after it happens.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <MessageSquare className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">With Leedsphere, every message:</h3>
                <ul className="space-y-4">
                  {messageFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Real-Time and Async --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-Time and Asynchronous Communication</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Modern teams don't always work at the same time. Leedsphere supports both real-time and asynchronous communication so teams can collaborate across schedules and time zones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {asyncBenefits.map((benefit, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-slate-300">{benefit.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-300 mt-8">
              This flexibility reduces pressure to be always online and helps teams work more sustainably.
            </p>
          </div>
        </div>

        {/* --- Threaded Conversations --- */}
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
              <GitMerge className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Threads make it easier to:</h3>
              <ul className="space-y-4">
                {threadBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-purple-300 font-medium">
                Threads help teams communicate clearly without clutter.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Threaded Conversations for Clarity
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Leedsphere uses threaded conversations to keep discussions focused. Instead of interrupting the main conversation, replies stay connected to the topic they belong to.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Decisions Visible --- */}
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
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Search className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Keep Decisions Visible</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Important decisions shouldn't disappear in private messages. Leedsphere messaging keeps decisions visible and accessible so teams can reference them later.
              </p>
              <p className="text-slate-400 mb-4">By maintaining a searchable history, teams can:</p>
              <ul className="space-y-3">
                {decisionBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 text-sm font-medium">
                Messaging becomes a source of shared knowledge, not just temporary communication.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reduce Email & Meeting Overload</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Leedsphere messaging helps teams reduce reliance on emails and unnecessary meetings. Instead of scheduling calls for every discussion, teams can communicate directly where work happens.
              </p>
              <p className="text-slate-400 mb-4">This leads to:</p>
              <ul className="space-y-3">
                {["Faster decision-making", "Fewer interruptions", "More focused work time"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-300 text-sm font-medium">
                Collaborate effectively without constant meetings.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Messaging with Context --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Messaging with Context</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Messages in Leedsphere are never isolated. They exist alongside important context that ensures communication remains meaningful and actionable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contextItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <item.icon className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
                <p className="text-white font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Secure Messaging --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Secure Messaging for Teams</h2>
            <p className="text-lg text-slate-400 mb-8">
              Security is built into Leedsphere messaging. Conversations are protected, and access is controlled based on roles and permissions.
            </p>
            <p className="text-slate-300 mb-6">Teams can:</p>
            <div className="space-y-4">
              {[
                "Control who sees sensitive discussions",
                "Manage access at the workspace level",
                "Collaborate confidently without compromising security"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              This makes Leedsphere suitable for both small teams and large organizations.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl" />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative">
              <Shield className="w-16 h-16 text-slate-700 mb-6 mx-auto" />
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="h-2 flex-1 bg-slate-800 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="h-2 w-5/6 bg-slate-800 rounded-full" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium">
                  Protected Conversations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Scales with Team --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Designed to Scale with Your Team</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                As your team grows, messaging volume increases. Leedsphere messaging is designed to scale without becoming overwhelming.
              </p>
              <p className="text-slate-300 max-w-2xl mx-auto">
                With organized channels, threaded discussions, and powerful search, teams can manage increasing communication without losing clarity.
              </p>
            </div>
          </div>
        </div>

        {/* --- Why Teams Rely --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Teams Rely on Leedsphere Messaging</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Teams choose Leedsphere messaging because it delivers real value.
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
            Leedsphere messaging isn't just about talking—it's about <span className="text-purple-400">working better together.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
