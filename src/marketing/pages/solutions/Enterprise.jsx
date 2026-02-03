import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  Users,
  Globe,
  Layers,
  Search,
  Clock,
  CheckCircle,
  Lock,
  TrendingUp,
  GitBranch,
  UserPlus,
  Server
} from "lucide-react";

export default function Enterprise() {
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

  const centralHubBenefits = [
    "Organize communication by teams, departments, and initiatives",
    "Keep discussions visible to the right stakeholders",
    "Maintain consistency across large organizations"
  ];

  const scalableBenefits = [
    "Clear organization of conversations",
    "Predictable communication patterns",
    "Easy expansion across departments"
  ];

  const governanceBenefits = [
    "Define roles and permissions",
    "Control access to sensitive channels",
    "Maintain oversight without blocking collaboration"
  ];

  const securityBenefits = [
    "Controlled access to conversations and files",
    "Workspace isolation for sensitive projects",
    "Consistent security practices across teams"
  ];

  const globalBenefits = [
    "Collaborate without overlapping schedules",
    "Review conversations at their own pace",
    "Stay aligned across locations"
  ];

  const crossFunctionalBenefits = [
    "Coordinate initiatives across departments",
    "Share updates transparently",
    "Avoid duplicated work"
  ];

  const knowledgeBenefits = [
    "Retain institutional knowledge",
    "Reduce dependency on individuals",
    "Onboard new employees faster"
  ];

  const whyChoose = [
    "Supports large-scale collaboration",
    "Provides structure without rigidity",
    "Preserves security and governance",
    "Improves cross-team alignment",
    "Scales across departments and regions"
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
            For Enterprise
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            Enterprises
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Built for Enterprise-Scale Collaboration
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Large organizations face a different set of collaboration challenges than small teams. Multiple departments, distributed teams, complex workflows, and strict security requirements make communication harder to manage.
            </p>
            <p>
              Leedsphere is built to support enterprise collaboration by providing a <span className="text-white font-semibold">structured, secure, and scalable workspace</span> where teams can communicate with clarity and confidence.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Central Collaboration Hub --- */}
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
                A Central Collaboration Hub for the Organization
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  Enterprises often rely on many systems to manage work. Leedsphere acts as the central hub where conversations, files, and updates come together in a structured environment.
                </p>
                <p className="text-slate-300 font-medium">
                  This centralized approach improves alignment and reduces communication silos.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Building2 className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">With Leedsphere, enterprises can:</h3>
                <ul className="space-y-4">
                  {centralHubBenefits.map((benefit, i) => (
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

        {/* --- Scalable Structure & Governance --- */}
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
                  <Layers className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Scalable Structure for Large Teams</h3>
              </div>
              <p className="text-slate-300 mb-6">
                As organizations grow, unstructured communication becomes unmanageable. Leedsphere provides a scalable structure through channels, workspaces, and role-based access.
              </p>
              <p className="text-slate-400 mb-4">Enterprises benefit from:</p>
              <ul className="space-y-3">
                {scalableBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 text-sm font-medium">
                Collaboration remains effective even as teams grow in size and complexity.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <Users className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Governance Without Micromanagement</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Enterprises require control, but excessive restrictions can slow teams down. Leedsphere balances governance with flexibility by providing role-based access and workspace-level controls.
              </p>
              <p className="text-slate-400 mb-4">Organizations can:</p>
              <ul className="space-y-3">
                {governanceBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-amber-300 text-sm font-medium">
                Teams work independently while staying within organizational guidelines.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Secure Collaboration --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Shield className="w-12 h-12 text-green-400 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Collaboration Across Departments</h2>
                <p className="text-lg text-slate-400 mb-6">
                  Security is a top priority for enterprises. Leedsphere is designed to support secure communication across departments without compromising ease of use.
                </p>
                <p className="text-slate-300 font-medium">
                  Enterprises can collaborate confidently knowing that information is protected.
                </p>
              </div>
              <div className="space-y-4">
                {securityBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Global Teams & Cross-Functional --- */}
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
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Support for Distributed and Global Teams</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Many enterprises operate across multiple regions and time zones. Leedsphere supports global collaboration by enabling asynchronous communication and shared context.
              </p>
              <p className="text-slate-400 mb-4">Global teams can:</p>
              <ul className="space-y-3">
                {globalBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-cyan-300 text-sm font-medium">
                Reduces dependency on meetings and improves productivity across time zones.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <GitBranch className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Improve Cross-Functional Collaboration</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Enterprise work often requires collaboration across departments such as product, engineering, support, marketing, and operations. Leedsphere makes cross-functional collaboration easier.
              </p>
              <p className="text-slate-400 mb-4">Teams can:</p>
              <ul className="space-y-3">
                {crossFunctionalBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-purple-300 text-sm font-medium">
                Improves efficiency and reduces organizational friction.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Preserve Knowledge & Reduce Email --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Preserve Institutional Knowledge</h2>
            <p className="text-lg text-slate-400 mb-8">
              Enterprises generate a vast amount of knowledge through daily communication. Leedsphere preserves this knowledge by keeping conversations and files searchable and accessible.
            </p>
            <p className="text-slate-300 mb-6">This helps organizations:</p>
            <div className="space-y-4">
              {knowledgeBenefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              Knowledge stays within the organization instead of leaving with employees.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <Clock className="w-10 h-10 text-orange-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Reduce Email Dependency and Meeting Overload</h3>
              <p className="text-slate-300 mb-6">
                Enterprises often rely heavily on email and meetings, which can slow decision-making. Leedsphere reduces this dependency by enabling clear, documented communication within channels.
              </p>
              <ul className="space-y-4">
                {["Faster decision cycles", "Fewer unnecessary meetings", "Improved focus across teams"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-300 font-medium">
                Communication becomes more efficient and less disruptive.
              </p>
            </div>
          </div>
        </div>

        {/* --- Reliable & Scalable --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Server className="w-12 h-12 text-purple-400 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reliable Collaboration for Mission-Critical Work</h2>
                  <p className="text-lg text-slate-400 mb-6">
                    Enterprises depend on reliable systems. Leedsphere is built to support mission-critical collaboration by maintaining consistent performance and predictable behavior.
                  </p>
                </div>
                <div className="space-y-4">
                  {["Day-to-day communication", "Project coordination", "Long-term collaboration"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-slate-300">Teams can rely on Leedsphere for {item.toLowerCase()}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-slate-300 mt-8 font-medium">
                Reliability builds trust and enables teams to focus on their work.
              </p>
            </div>
          </div>
        </div>

        {/* --- Enterprise Collaboration That Grows --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Collaboration That Grows with You</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
                As organizations evolve, collaboration needs change. Leedsphere is designed to adapt without forcing enterprises to rework their processes.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {["A single department", "Multiple business units", "Global operations"].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-300">
                Leedsphere scales alongside the organization.
              </p>
            </div>
          </div>
        </div>

        {/* --- Why Enterprises Choose --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Enterprises Choose Leedsphere</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Enterprises trust Leedsphere because it delivers real value at scale.
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
            Leedsphere helps enterprises collaborate effectively while maintaining <span className="text-purple-400">control, security, and clarity</span>.
          </p>
        </div>

      </div>
    </div>
  );
}
