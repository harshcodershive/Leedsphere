import { motion } from "framer-motion";
import {
  Code,
  Package,
  Users,
  GitBranch,
  MessageSquare,
  Clock,
  Search,
  Shield,
  Zap,
  CheckCircle,
  Target,
  TrendingUp,
  UserPlus,
  AlertTriangle,
  FileText
} from "lucide-react";

export default function Engineering() {
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

  const productTeamBenefits = [
    "Discuss features in dedicated channels",
    "Share feedback from stakeholders",
    "Keep decisions visible and searchable",
    "Avoid scattered discussions across tools"
  ];

  const engineeringChannelUses = [
    "Architecture and system design discussions",
    "Sprint planning and backlog refinement",
    "Bug tracking and incident follow-ups",
    "Release coordination and deployment updates"
  ];

  const crossFunctionalExamples = [
    "Coordinating with engineering on implementation details",
    "Aligning with marketing on launches and messaging",
    "Sharing customer insights with support teams"
  ];

  const asyncBenefits = [
    "Review discussions when it suits them",
    "Respond thoughtfully instead of rushing",
    "Stay aligned without constant meetings"
  ];

  const productWhyChoose = [
    "Keeps product conversations organized",
    "Preserves decision history",
    "Improves cross-team alignment",
    "Reduces meeting overload",
    "Supports faster, clearer execution"
  ];

  const engineeringWhyChoose = [
    "Keeps technical discussions organized",
    "Preserves decision history",
    "Supports asynchronous work",
    "Reduces meeting overload",
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
            For Teams
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            Product & Engineering
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Built for Teams That Move Fast and Need Clarity
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p>
              Product and engineering teams operate at the intersection of ideas, execution, and feedback. They collaborate constantly—often all at once. Leedsphere is built to support this complexity by giving teams a single workspace where <span className="text-white font-semibold">conversations, decisions, and files stay connected</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* ==================== PRODUCT TEAMS SECTION ==================== */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Package className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">For Product Teams</h2>
          </div>

          {/* Centralized Communication */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Centralized Communication for Product Work
                </motion.h3>
                <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                  <p>
                    Product work involves constant discussion—roadmaps, features, priorities, and trade-offs. Leedsphere helps product teams centralize these conversations so nothing gets lost.
                  </p>
                  <p className="text-slate-300 font-medium">
                    This ensures that everyone understands what is being built and why.
                  </p>
                </motion.div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                  <Target className="w-10 h-10 text-blue-400 mb-6" />
                  <h4 className="text-xl font-bold text-white mb-4">With Leedsphere, product teams can:</h4>
                  <ul className="space-y-4">
                    {productTeamBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ideas to Execution & Cross-Functional */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">From Ideas to Execution</h4>
                </div>
                <p className="text-slate-300 mb-6">
                  Ideas evolve quickly in product teams. Leedsphere provides a space where early concepts, feedback, and final decisions live together.
                </p>
                <ul className="space-y-3">
                  {["Capture early product ideas in channels", "Discuss feasibility with engineering", "Share design drafts and documents", "Track decisions as the product evolves"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Aligning Cross-Functional Teams</h4>
                </div>
                <p className="text-slate-300 mb-6">
                  Product teams rarely work alone. Leedsphere makes it easier to collaborate across functions without creating communication overload.
                </p>
                <ul className="space-y-3">
                  {crossFunctionalExamples.map((example, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {example}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-green-300 text-sm font-medium">
                  Reduces misalignment and improves collaboration.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ==================== ENGINEERING TEAMS SECTION ==================== */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <Code className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">For Engineering Teams</h2>
          </div>

          {/* Technical Discussions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl -z-10" />
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                  <MessageSquare className="w-10 h-10 text-orange-400 mb-6" />
                  <h4 className="text-xl font-bold text-white mb-4">Engineering teams use channels for:</h4>
                  <ul className="space-y-4">
                    {engineeringChannelUses.map((use, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-orange-300 font-medium">
                    Helps teams avoid confusion and repeated explanations.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white mb-6">
                  A Single Space for Technical Discussions
                </motion.h3>
                <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                  <p>
                    Engineering conversations are often detailed and long-lived. Leedsphere provides dedicated channels where teams can discuss technical topics without interruption or noise.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Preserve Context & Async */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Search className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Preserve Technical Context</h4>
                </div>
                <p className="text-slate-300 mb-6">
                  Technical decisions matter long after they're made. Leedsphere preserves conversations so engineers can revisit past discussions and understand why decisions were taken.
                </p>
                <ul className="space-y-3">
                  {["Avoid repeating the same debates", "Maintain consistency in architecture", "Onboard new engineers faster", "Build shared technical understanding"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-cyan-300 text-sm font-medium">
                  Messaging becomes a long-term knowledge asset.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Clock className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Support Asynchronous Work</h4>
                </div>
                <p className="text-slate-300 mb-6">
                  Engineering teams often work across time zones or different schedules. Leedsphere supports asynchronous collaboration so engineers can contribute without needing to be online at the same time.
                </p>
                <p className="text-slate-400 mb-4">Engineers can:</p>
                <ul className="space-y-3">
                  {asyncBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-indigo-300 text-sm font-medium">
                  Leads to better decision-making and healthier work habits.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Incident Management */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-3xl -z-10 blur-xl" />
            <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <AlertTriangle className="w-12 h-12 text-red-400 mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Incident Management and Postmortems</h3>
                  <p className="text-lg text-slate-400 mb-6">
                    When issues arise, clear communication is critical. Leedsphere channels provide a focused space for incident response and follow-up discussions.
                  </p>
                </div>
                <div className="space-y-4">
                  {["Coordinate responses in real time", "Share updates transparently", "Document lessons learned after incidents"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-slate-300 mt-8 font-medium">
                This improves reliability and helps teams prevent future issues.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== SHARED BENEFITS ==================== */}

        {/* Reduce Meetings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Reduce Meetings, Increase Focus
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Both product and engineering teams often spend too much time in meetings. Leedsphere reduces the need for constant syncs by enabling asynchronous collaboration.
              </p>
              <p>
                With structured conversations and searchable history, teams can share updates without meetings, review decisions on their own time, and stay aligned without constant interruptions.
              </p>
              <p className="text-slate-300 font-medium">
                This creates more time for deep, focused work.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm text-center">
              <Clock className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Less Meetings, More Building</h3>
              <p className="text-slate-300">
                Engineers and product managers can spend more time building and less time talking about building.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Faster Onboarding */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <UserPlus className="w-12 h-12 text-green-400 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Faster Onboarding for New Team Members</h2>
                  <p className="text-lg text-slate-400 mb-6">
                    New team members need context to be effective. Leedsphere preserves that context through structured conversations and searchable history.
                  </p>
                  <p className="text-slate-300">
                    This reduces onboarding time and helps new members contribute sooner.
                  </p>
                </div>
                <div className="space-y-4">
                  {["Review past discussions", "Understand product and technical decisions", "Learn team workflows quickly"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scales */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Collaboration That Scales</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                As product and engineering teams grow, communication becomes more complex. Leedsphere scales with your team by maintaining structure without adding friction.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {["Small product team in a startup", "Growing team shipping frequently", "Large organization with multiple products"].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <CheckCircle className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-white font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-300">
                Leedsphere adapts to your workflow.
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Teams Choose Leedsphere</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Product and engineering teams rely on Leedsphere because it delivers real value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {productWhyChoose.map((reason, idx) => (
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
            Leedsphere helps product and engineering teams turn <span className="text-purple-400">ideas into outcomes</span>—without losing context along the way.
          </p>
        </div>

      </div>
    </div>
  );
}
