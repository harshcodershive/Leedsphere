import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Users,
  Server,
  Eye,
  Key,
  FileCheck,
  Building2,
  CheckCircle,
  Layers,
  Globe,
  Heart
} from "lucide-react";

export default function Security() {
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

  const securityPrinciples = [
    "Protecting data from unauthorized access",
    "Giving organizations control over information visibility",
    "Maintaining reliability and integrity across the platform"
  ];

  const workspaceIsolationBenefits = [
    "Maintain clear boundaries between teams",
    "Protect sensitive conversations",
    "Support multi-team or multi-department setups"
  ];

  const rbacBenefits = [
    "Define who can view or manage channels",
    "Restrict access to sensitive conversations",
    "Control administrative capabilities",
    "Maintain oversight without micromanagement"
  ];

  const secureMessagingBenefits = [
    "Private conversations remain private",
    "Sensitive discussions are protected",
    "Team communication stays confidential"
  ];

  const authFeatures = [
    "Session persistence with validation",
    "Controlled login flows",
    "Protection against unauthorized access attempts"
  ];

  const infrastructureBenefits = [
    "Reduce downtime",
    "Protect against data loss",
    "Maintain consistent performance"
  ];

  const privacyBenefits = [
    "User data is handled responsibly",
    "Access is transparent and controlled",
    "Privacy expectations are respected"
  ];

  const enterpriseBenefits = [
    "Clear governance models",
    "Consistent permission enforcement",
    "Reliable security practices"
  ];

  const whyTrust = [
    "Protects conversations and files",
    "Respects workspace boundaries",
    "Scales with organizational needs",
    "Supports secure collaboration",
    "Maintains reliability and integrity"
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-green-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl relative z-10">

        {/* --- Hero Section --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-24 md:mb-32"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-xs font-medium text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Security & Trust
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            Security & Trust
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Security Built Into Every Layer
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              Security is not an add-on at Leedsphere—it is a <span className="text-white font-semibold">core part of how the platform is designed, built, and operated</span>. Teams trust Leedsphere with their conversations, files, and internal knowledge, and that responsibility is taken seriously at every level.
            </p>
            <p>
              From how data is accessed to how users are authenticated, every part of Leedsphere is built to protect your organization's information while enabling seamless collaboration.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Security-First Platform --- */}
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
                A Security-First Collaboration Platform
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
                <p>
                  Modern teams handle sensitive information every day—product plans, customer data, internal discussions, and strategic decisions. Leedsphere is designed to support this reality by providing a secure environment where teams can collaborate with confidence.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
                <Shield className="w-10 h-10 text-green-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Security focuses on three key principles:</h3>
                <ul className="space-y-4">
                  {securityPrinciples.map((principle, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      {principle}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-green-300 text-sm font-medium">
                  These principles guide every design and engineering decision.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Workspace Isolation & RBAC --- */}
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
                <h3 className="text-2xl font-bold text-white">Workspace-Level Isolation</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Each Leedsphere workspace is logically isolated to ensure that data remains contained within its intended environment. This isolation prevents accidental data exposure.
              </p>
              <p className="text-slate-400 mb-4">Workspace isolation helps organizations:</p>
              <ul className="space-y-3">
                {workspaceIsolationBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-300 text-sm font-medium">
                Especially important for companies managing multiple teams or clients.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Role-Based Access Control</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Leedsphere uses role-based access control to ensure that users only have access to what they need. Permissions are assigned based on roles, responsibilities, and workspace policies.
              </p>
              <p className="text-slate-400 mb-4">Organizations can:</p>
              <ul className="space-y-3">
                {rbacBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-purple-300 text-sm font-medium">
                Balances security with flexibility.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Secure Messaging & Files --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Lock className="w-10 h-10 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Secure Messaging and Conversations</h3>
                <p className="text-slate-300 mb-6">
                  All conversations within Leedsphere are protected by secure communication practices. Messages are accessible only to authorized users within a workspace.
                </p>
                <ul className="space-y-3">
                  {secureMessagingBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <FileCheck className="w-10 h-10 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Secure File Sharing</h3>
                <p className="text-slate-300 mb-6">
                  Files shared in Leedsphere follow the same security and permission model as conversations. Access to files is governed by channel visibility and user roles.
                </p>
                <p className="text-slate-400 mb-4">This approach prevents:</p>
                <ul className="space-y-3">
                  {["Accidental file exposure", "Unauthorized downloads", "Confusion about file ownership or access"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- Authentication & Data Protection --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <Key className="w-12 h-12 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Security features include:</h3>
              <ul className="space-y-4">
                {authFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-amber-300 font-medium">
                These safeguards help ensure that only verified users can access workspace data.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Authentication and Session Protection
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Leedsphere uses secure authentication mechanisms to protect user accounts and sessions. Access to a workspace requires proper authentication, and sessions are managed carefully to prevent unauthorized access.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Data Protection & Infrastructure --- */}
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
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Data Protection and Integrity</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Protecting data integrity is essential for collaboration platforms. Leedsphere is built to ensure that conversations and files remain accurate, consistent, and protected from unauthorized modification.
              </p>
              <p className="text-slate-400 mb-4">Teams can trust that:</p>
              <ul className="space-y-3">
                {["Messages are preserved correctly", "Files remain intact", "Collaboration history is reliable"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-cyan-300 text-sm font-medium">
                Critical for accountability, compliance, and long-term knowledge retention.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Server className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Secure Infrastructure Practices</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Leedsphere is designed using modern infrastructure practices that prioritize reliability and security. Systems are built with redundancy, monitoring, and safeguards.
              </p>
              <p className="text-slate-400 mb-4">These practices help:</p>
              <ul className="space-y-3">
                {infrastructureBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-indigo-300 text-sm font-medium">
                Security and reliability work together to support uninterrupted collaboration.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Privacy by Design --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy by Design</h2>
            <p className="text-lg text-slate-400 mb-8">
              Privacy is a fundamental part of Leedsphere's design philosophy. The platform is built to collect and process only what is necessary to provide collaboration features, while respecting user privacy and organizational boundaries.
            </p>
            <p className="text-slate-300 mb-6">Leedsphere ensures that:</p>
            <div className="space-y-4">
              {privacyBenefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-pink-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-400">
              This approach builds trust between Leedsphere and the teams that rely on it.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative">
              <Heart className="w-16 h-16 text-slate-700 mb-6 mx-auto" />
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-pink-400" />
                  <div className="h-2 flex-1 bg-slate-800 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-pink-400" />
                  <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-pink-400" />
                  <div className="h-2 w-5/6 bg-slate-800 rounded-full" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <span className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-sm font-medium">
                  Privacy First
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Enterprise Security --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Building2 className="w-12 h-12 text-green-400 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supporting Enterprise Security Needs</h2>
                  <p className="text-lg text-slate-400 mb-8">
                    For larger organizations, security requirements are more complex. Leedsphere is built to support enterprise-level needs through structured access control, workspace isolation, and scalable architecture.
                  </p>
                </div>
                <div className="space-y-4">
                  {enterpriseBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-slate-300 mt-8 font-medium">
                This makes Leedsphere suitable for organizations with strict security and compliance expectations.
              </p>
            </div>
          </div>
        </div>

        {/* --- Trust Through Transparency --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building Trust Through Transparency
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Security is not just about technology—it's also about trust. Leedsphere aims to be transparent about how security is handled and how teams can protect their workspaces.
              </p>
              <p className="text-slate-300 font-medium">
                By providing clear security controls and predictable behavior, Leedsphere helps organizations collaborate with confidence.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm text-center">
              <Globe className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Security That Enables Collaboration</h3>
              <p className="text-slate-300">
                Strong security should not slow teams down. Leedsphere is designed to make security invisible when it's working well—protecting data in the background while teams focus on meaningful work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- Why Teams Trust --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Teams Trust Leedsphere</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Teams trust Leedsphere because security is built into every layer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyTrust.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <Shield className="w-6 h-6 text-green-400 mb-3 mx-auto" />
                <p className="text-slate-300 text-sm">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Closing --- */}
        <div className="text-center border-t border-slate-800 pt-16">
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            Security is not a feature—it's a <span className="text-green-400">foundation</span>. And at Leedsphere, that foundation is built to support teams as they work together every day.
          </p>
        </div>

      </div>
    </div>
  );
}
