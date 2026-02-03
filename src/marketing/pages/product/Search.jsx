import { motion } from "framer-motion";
import {
  Search,
  FileText,
  MessageSquare,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  UserPlus,
  Eye,
  Zap,
  BookOpen
} from "lucide-react";

export default function SearchPage() {
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

  const searchBenefits = [
    "Important discussions remain accessible",
    "Decisions are easy to reference",
    "Knowledge is retained within the workspace",
    "Teams save time by avoiding repeated questions"
  ];

  const searchCapabilities = [
    { icon: MessageSquare, text: "Search messages by keywords or phrases" },
    { icon: FileText, text: "Find files shared in channels" },
    { icon: Eye, text: "Locate information within specific conversations" }
  ];

  const contextBenefits = [
    "See surrounding messages",
    "Understand the full conversation",
    "Make informed decisions faster"
  ];

  const onboardingBenefits = [
    "Reduce onboarding time",
    "Preserve institutional knowledge",
    "Empower new team members to work independently"
  ];

  const interruptionBenefits = [
    "Fewer repeated questions",
    "Less reliance on meetings",
    "More uninterrupted focus time"
  ];

  const permissionFeatures = [
    "Private conversations remain private",
    "Sensitive files are protected",
    "Search results follow access rules"
  ];

  const whyChoose = [
    "Saves time finding information",
    "Preserves team knowledge",
    "Supports onboarding and training",
    "Reduces interruptions",
    "Scales with team growth"
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
            Workspace Search
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Find What You Need, When You Need It
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Workspace Search in Leedsphere helps teams quickly find conversations, files, and shared information across their entire workspace. As communication grows, search becomes essential for staying productive.
            </p>
            <p>
              Instead of asking teammates to resend information or repeating discussions, teams can rely on search to <span className="text-white font-semibold">access what they need instantly</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Why Search Matters --- */}
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
                Why Search Matters for Team Collaboration
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  As teams communicate daily, valuable knowledge accumulates inside conversations. Without effective search, this information becomes difficult to access and eventually forgotten.
                </p>
                <p className="text-slate-300 font-medium">
                  Search turns everyday conversations into a long-term knowledge resource.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Search className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Leedsphere search ensures that:</h3>
                <ul className="space-y-4">
                  {searchBenefits.map((benefit, i) => (
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

        {/* --- Search Across --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Search Across Conversations and Files</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Leedsphere search works across both messages and files, allowing teams to locate information regardless of where it originated. This unified search experience reduces friction and improves efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {searchCapabilities.map((capability, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <capability.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-slate-300">{capability.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Context-Aware Results --- */}
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
              <h3 className="text-2xl font-bold text-white mb-4">With context-aware results, users can:</h3>
              <ul className="space-y-4">
                {contextBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 font-medium">
                This ensures that search results are meaningful, not misleading.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Context-Aware Results
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Search results in Leedsphere are presented with context, not just isolated messages. This helps users understand why a result is relevant and how it fits into the broader discussion.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Onboarding & Interruptions --- */}
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
                  <UserPlus className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Support for Onboarding</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Workspace Search plays a critical role in onboarding new team members. Instead of relying on verbal explanations or outdated documents, new hires can search past discussions to learn how the team works.
              </p>
              <p className="text-slate-400 mb-4">This helps:</p>
              <ul className="space-y-3">
                {onboardingBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 text-sm font-medium">
                Search makes the workspace a living knowledge base.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reduce Interruptions</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Without search, team members often interrupt others to ask for information that already exists. Leedsphere search reduces these interruptions by making information easy to find.
              </p>
              <p className="text-slate-400 mb-4">Teams benefit from:</p>
              <ul className="space-y-3">
                {interruptionBenefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-300 text-sm font-medium">
                This leads to better productivity and healthier collaboration.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Respects Permissions --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Search That Respects Permissions</h2>
            <p className="text-lg text-slate-400 mb-8">
              Security and privacy are essential in team communication. Leedsphere search respects workspace permissions, ensuring that users only see information they are authorized to access.
            </p>
            <p className="text-slate-300 mb-6">This means:</p>
            <div className="space-y-4">
              {permissionFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              Teams can trust that search enhances collaboration without compromising security.
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
                  Permission-Aware Search
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Built to Scale --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built to Scale with Growing Workspaces</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                As your workspace grows, so does the volume of communication. Leedsphere search is built to handle increasing amounts of data without slowing teams down.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {["A few channels or hundreds", "Small teams or large organizations", "Fast, reliable, and accurate"].map((item, i) => (
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

        {/* --- Why Teams Rely --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Teams Rely on Leedsphere Workspace Search</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Teams choose Leedsphere search because it delivers real value.
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
            Workspace Search transforms your collaboration history into a <span className="text-purple-400">powerful, accessible resource</span>.
          </p>
        </div>

      </div>
    </div>
  );
}
