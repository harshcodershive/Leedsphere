import { motion } from "framer-motion";
import {
  Puzzle,
  Zap,
  Eye,
  Shield,
  TrendingUp,
  CheckCircle,
  Bell,
  RefreshCw,
  Settings,
  GitBranch,
  ArrowRight
} from "lucide-react";

export default function Integrations() {
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

  const whyMatters = [
    "Centralizing updates inside conversations",
    "Reducing context switching",
    "Keeping teams informed in real time",
    "Making workflows more efficient"
  ];

  const externalUpdates = [
    "Project updates shared automatically in relevant channels",
    "Notifications when work is completed or changed",
    "Alerts for important events or milestones"
  ];

  const visibilityBenefits = [
    "Transparency across departments",
    "Cross-team alignment",
    "Faster decision-making"
  ];

  const manualReduction = [
    "Avoid repetitive status updates",
    "Reduce manual notifications",
    "Spend more time on meaningful work"
  ];

  const flexibilityBenefits = [
    "Control information flow",
    "Avoid unnecessary noise",
    "Customize their workspace"
  ];

  const securityBenefits = [
    "Manage who can add or configure integrations",
    "Restrict access to sensitive information",
    "Maintain security across connected tools"
  ];

  const whyChoose = [
    "Centralize updates in one workspace",
    "Reduce tool switching",
    "Improve visibility and alignment",
    "Automate repetitive tasks",
    "Support secure collaboration"
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
            Integrations
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Integrations That Fit Into Your Workflow
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Leedsphere is designed to work alongside the tools your team already uses. Integrations allow Leedsphere to connect with other platforms so <span className="text-white font-semibold">information flows smoothly</span> without forcing teams to constantly switch between apps.
            </p>
            <p>
              Instead of breaking focus to check updates in multiple tools, integrations bring relevant information directly into your workspace—where collaboration already happens.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Why Integrations Matter --- */}
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
                Why Integrations Matter for Teams
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  Modern teams rely on many tools to get work done. Without integrations, information becomes fragmented and hard to manage. Important updates live outside your main workspace, leading to delays, missed context, and duplicated effort.
                </p>
                <p className="text-slate-300 font-medium">
                  Integrations ensure that Leedsphere becomes the central hub for team communication.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Puzzle className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Leedsphere integrations solve this by:</h3>
                <ul className="space-y-4">
                  {whyMatters.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- External Updates --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="text-center mb-12">
              <Bell className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bring External Updates into Conversations</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                With integrations, updates from other tools can appear directly inside Leedsphere channels. This keeps everyone informed without needing to leave the workspace.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {externalUpdates.map((update, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-slate-300">{update}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-300 mt-8 font-medium">
              By surfacing updates where teams already communicate, Leedsphere keeps collaboration flowing naturally.
            </p>
          </div>
        </div>

        {/* --- Visibility & Manual Work --- */}
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
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Improve Visibility Across Teams</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Integrations help bridge the gap between different teams and systems. When updates are shared openly in channels, everyone has access to the same information.
              </p>
              <p className="text-slate-400 mb-4">This improves:</p>
              <ul className="space-y-3">
                {visibilityBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 text-sm font-medium">
                Instead of relying on manual updates, teams stay informed automatically.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <RefreshCw className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reduce Manual Work</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Without integrations, teams often spend time copying information between tools or sending manual updates. Leedsphere reduces this overhead by automating information sharing.
              </p>
              <p className="text-slate-400 mb-4">Teams can:</p>
              <ul className="space-y-3">
                {manualReduction.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-green-300 text-sm font-medium">
                This leads to cleaner workflows and improved productivity.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Flexible & Secure --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <Settings className="w-12 h-12 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">This flexibility helps teams:</h3>
              <ul className="space-y-4">
                {flexibilityBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-300 font-medium">
                Integrations support your workflow instead of overwhelming it.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Integration Management
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Leedsphere allows teams to choose which integrations they need and where updates should appear. Integrations can be enabled or disabled based on team needs, ensuring that channels remain relevant and focused.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Secure Access --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Secure and Controlled Access</h2>
            <p className="text-lg text-slate-400 mb-8">
              Security remains a priority when using integrations. Leedsphere ensures that integrations follow workspace permissions and access controls.
            </p>
            <p className="text-slate-300 mb-6">Teams can:</p>
            <div className="space-y-4">
              {securityBenefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              This makes integrations safe for both small teams and large organizations.
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
                  Secure Integrations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Scales --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integrations That Scale with Your Team</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                As teams grow, workflows become more complex. Leedsphere integrations scale alongside your organization by supporting collaboration across multiple tools and departments.
              </p>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Whether you're a startup or an enterprise, integrations help keep communication consistent and organized.
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Teams Choose Leedsphere Integrations</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Teams use Leedsphere integrations because they deliver real value.
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
            Integrations turn Leedsphere into a true <span className="text-purple-400">collaboration hub</span>, connecting your team's tools and conversations in one place.
          </p>
        </div>

      </div>
    </div>
  );
}
