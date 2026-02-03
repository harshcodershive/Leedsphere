import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BookDemoModal from "../../marketing/components/BookDemoModal";
import {
  MessageSquare,
  Search,
  Users,
  Shield,
  Layers,
  Globe,
  Zap,
  FolderOpen,
  Eye,
  CheckCircle,
  ArrowRight,
  Building2,
  Rocket,
  Target,
  Brain,
  Lock,
  Bell,
  Workflow,
  FileText,
  Video,
  Headphones,
  BarChart3,
  Settings,
  Sparkles,
  Clock,
  RefreshCw,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Code,
  GitBranch,
  Key,
  UserCheck,
  MessagesSquare,
  FolderTree,
  BookOpen,
  Lightbulb,
  Gauge,
  Timer,
  Share2
} from "lucide-react";

export default function Features() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
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

  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "Real-Time Messaging",
      description: "Instant communication with your team through channels and direct messages. Send text, images, files, and code snippets with rich formatting support.",
      highlights: ["Threaded conversations", "Message reactions", "Rich text editor", "Code syntax highlighting"]
    },
    {
      icon: Layers,
      title: "Organized Channels",
      description: "Create dedicated spaces for projects, teams, or topics. Keep conversations focused and easily discoverable with customizable channel structures.",
      highlights: ["Public & private channels", "Channel categories", "Pinned messages", "Channel descriptions"]
    },
    {
      icon: FolderOpen,
      title: "Smart File Sharing",
      description: "Share documents, images, and files directly in conversations. Files stay connected to their context, making them easy to find later.",
      highlights: ["Drag & drop upload", "File previews", "Version history", "Organized file browser"]
    },
    {
      icon: Search,
      title: "Powerful Search",
      description: "Find anything instantly with our advanced search. Search across messages, files, and users with powerful filters and operators.",
      highlights: ["Full-text search", "Filter by date/user", "Search operators", "Saved searches"]
    },
    {
      icon: Brain,
      title: "AI-Powered Assistant",
      description: "Let our AI help you work smarter. Get instant answers, summarize long threads, and automate repetitive tasks with intelligent assistance.",
      highlights: ["Thread summaries", "Smart replies", "Knowledge extraction", "Task automation"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security to protect your data. Compliance-ready infrastructure with granular access controls and audit logging.",
      highlights: ["End-to-end encryption", "SSO & SAML 2.0", "Audit logs", "Data residency options"]
    }
  ];

  const communicationFeatures = [
    {
      icon: MessagesSquare,
      title: "Threaded Discussions",
      description: "Keep conversations organized with threaded replies. Discuss specific topics without cluttering the main channel, and easily follow complex discussions."
    },
    {
      icon: Video,
      title: "Video Huddles",
      description: "Start instant video calls directly from any conversation. Quick huddles for spontaneous discussions without the overhead of scheduling meetings."
    },
    {
      icon: Headphones,
      title: "Voice Messages",
      description: "Sometimes typing isn't enough. Record and send voice messages when you need to explain something complex or add a personal touch."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed without being overwhelmed. Customize notifications by channel, set focus hours, and let AI prioritize what matters most."
    }
  ];

  const productivityFeatures = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks with custom workflows. Create triggers and actions to streamline processes and reduce manual work."
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Build a searchable repository of team knowledge. Create, organize, and share documentation that stays up-to-date and accessible."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Understand how your team communicates. Track engagement, identify bottlenecks, and optimize collaboration with actionable insights."
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Connect Leedsphere with your favorite tools. Integrate with 100+ apps or build custom integrations with our open API."
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All messages and files are encrypted in transit and at rest. Your data remains private and secure at all times."
    },
    {
      icon: Key,
      title: "Advanced Authentication",
      description: "Support for SSO, SAML 2.0, and multi-factor authentication. Integrate with your existing identity provider seamlessly."
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Define granular permissions based on roles. Control who can see, edit, and manage content across your workspace."
    },
    {
      icon: Database,
      title: "Data Compliance",
      description: "Meet regulatory requirements with SOC 2, GDPR, and HIPAA compliance. Full audit trails and data export capabilities."
    }
  ];

  const platformFeatures = [
    { icon: Monitor, title: "Desktop App", description: "Native apps for Windows, macOS, and Linux with full feature parity." },
    { icon: Smartphone, title: "Mobile Apps", description: "Stay connected on the go with iOS and Android apps." },
    { icon: Globe, title: "Web Access", description: "Access your workspace from any browser, anywhere." },
    { icon: Code, title: "API & Webhooks", description: "Build custom integrations with our comprehensive API." }
  ];

  const aiCapabilities = [
    {
      title: "Intelligent Thread Summaries",
      description: "Missed a long conversation? Our AI can summarize entire threads in seconds, extracting key decisions, action items, and important context so you can catch up quickly without reading through hundreds of messages."
    },
    {
      title: "Smart Search & Discovery",
      description: "Go beyond keyword matching with semantic search. Ask natural language questions like 'What did we decide about the Q4 marketing budget?' and get relevant results even if those exact words weren't used."
    },
    {
      title: "Automated Knowledge Extraction",
      description: "As your team communicates, our AI automatically identifies and extracts important information—decisions, deadlines, specifications—and suggests adding them to your knowledge base."
    },
    {
      title: "Contextual Assistance",
      description: "Get AI-powered suggestions based on your current work context. Whether you're drafting a message, searching for information, or setting up a workflow, intelligent assistance is always available."
    }
  ];

  const integrations = [
    { name: "GitHub", category: "Development" },
    { name: "Jira", category: "Project Management" },
    { name: "Google Drive", category: "File Storage" },
    { name: "Salesforce", category: "CRM" },
    { name: "Figma", category: "Design" },
    { name: "Notion", category: "Documentation" },
    { name: "Zoom", category: "Video Conferencing" },
    { name: "Trello", category: "Project Management" },
    { name: "Dropbox", category: "File Storage" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Asana", category: "Project Management" },
    { name: "Slack Import", category: "Migration" }
  ];

  const useCases = [
    {
      icon: Code,
      title: "Engineering Teams",
      description: "Integrate with GitHub, review PRs in-context, and keep technical discussions organized by project or sprint.",
      benefits: ["Code snippet sharing", "CI/CD notifications", "Issue tracking integration", "Technical documentation"]
    },
    {
      icon: Target,
      title: "Product Teams",
      description: "Collaborate on roadmaps, gather feedback, and align cross-functional teams around product decisions.",
      benefits: ["Feature discussions", "User feedback collection", "Sprint planning", "Release coordination"]
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Centralize customer communications, share insights across teams, and ensure nothing falls through the cracks.",
      benefits: ["Shared customer context", "Escalation workflows", "Knowledge sharing", "Response templates"]
    },
    {
      icon: BarChart3,
      title: "Marketing Teams",
      description: "Coordinate campaigns, share creative assets, and collaborate with external agencies in dedicated spaces.",
      benefits: ["Campaign coordination", "Asset management", "External collaboration", "Performance discussions"]
    }
  ];

  const performanceStats = [
    { value: "99.99%", label: "Uptime SLA", icon: Gauge },
    { value: "<100ms", label: "Message Delivery", icon: Timer },
    { value: "256-bit", label: "AES Encryption", icon: Lock },
    { value: "150+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-purple-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl relative z-10">

        {/* --- Hero Section --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-24 md:mb-32"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm text-sm font-medium text-purple-300 mb-8">
            <Sparkles className="w-4 h-4" />
            Complete Feature Overview
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-slate-400 bg-clip-text text-transparent tracking-tight leading-tight">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Work Better Together</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Leedsphere combines powerful communication tools, intelligent automation, and enterprise-grade security into one seamless platform designed for modern teams.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Video className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* --- Core Features Grid --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">
              Core Platform Features
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built from the ground up to transform how teams communicate and collaborate
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Communication Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-6">
                <MessageSquare className="w-3 h-3" />
                Communication Tools
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Every Way to Connect, One Platform
              </motion.h2>

              <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Whether you need a quick message, a threaded discussion, a voice note, or a video huddle, Leedsphere provides the right communication tool for every situation. Switch seamlessly between modes without losing context or disrupting your workflow.
              </motion.p>

              <motion.p variants={itemVariants} className="text-slate-300 mb-8">
                Our communication features are designed to respect your time and attention. Smart notifications ensure you never miss what matters while filtering out the noise. Set focus hours, customize alerts by channel, and let our AI help prioritize your inbox.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {communicationFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <feature.icon className="w-5 h-5 text-blue-400 mb-2" />
                    <h4 className="font-semibold text-white text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-400">{feature.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
                {/* Mock Chat Interface */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">JD</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white text-sm">John Doe</span>
                        <span className="text-xs text-slate-500">2:34 PM</span>
                      </div>
                      <div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300">
                        Hey team, I've pushed the latest changes to the feature branch. Can someone review before we merge?
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold">SM</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white text-sm">Sarah Miller</span>
                        <span className="text-xs text-slate-500">2:36 PM</span>
                      </div>
                      <div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300">
                        On it! I'll take a look now 👀
                      </div>
                      <div className="flex gap-1 mt-2">
                        <span className="px-2 py-0.5 bg-purple-500/20 rounded text-xs">👍 3</span>
                        <span className="px-2 py-0.5 bg-purple-500/20 rounded text-xs">🚀 2</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-2 border-purple-500/50 pl-4 ml-11">
                    <div className="text-xs text-purple-400 mb-2">Thread • 5 replies</div>
                    <div className="bg-slate-800/50 rounded-lg p-2 text-xs text-slate-400">
                      Latest: "LGTM! Approved and merged." - Sarah
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-3">
                    <span className="text-slate-400 text-sm flex-1">Type a message...</span>
                    <div className="flex gap-2">
                      <Headphones className="w-4 h-4 text-slate-500" />
                      <Video className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- AI Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="relative bg-gradient-to-br from-purple-900/30 via-slate-900 to-blue-900/30 border border-purple-500/20 rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-16">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm font-medium text-purple-300 mb-6">
                  <Brain className="w-4 h-4" />
                  Powered by AI
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Intelligence Built Into Every Feature
                </motion.h2>

                <motion.p variants={itemVariants} className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Our AI doesn't just add features—it transforms how you work. From understanding your conversations to automating workflows, intelligent assistance is woven throughout the platform.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {aiCapabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      {capability.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{capability.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="mt-12 text-center">
                <p className="text-slate-400 mb-6">
                  Our AI is trained on collaboration best practices and continuously learns from anonymized usage patterns to provide better suggestions and automation. All AI features are optional and can be customized to your team's preferences.
                </p>
                <Link
                  to="/ai"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
                >
                  Learn more about our AI capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- Productivity Features --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative">
                  {/* Mock Dashboard */}
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-white">Workflow: New Feature Release</h4>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">PR merged to main</p>
                        <p className="text-xs text-slate-500">Triggered 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">Notify #engineering channel</p>
                        <p className="text-xs text-slate-500">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <RefreshCw className="w-4 h-4 text-purple-400 animate-spin" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">Deploy to staging</p>
                        <p className="text-xs text-purple-400">In progress...</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg opacity-60">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-slate-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400">Notify QA team</p>
                        <p className="text-xs text-slate-600">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-300 mb-6">
                <Workflow className="w-3 h-3" />
                Productivity Tools
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Automate Work, Focus on What Matters
              </motion.h2>

              <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Beyond communication, Leedsphere is a productivity powerhouse. Create automated workflows that trigger actions based on events, build a knowledge base your team can actually find, and get insights into how collaboration is happening across your organization.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                {productivityFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- Security Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-300 mb-6">
                  <Shield className="w-3 h-3" />
                  Enterprise Security
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Security You Can Trust
                </motion.h2>

                <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Your data is your business. Leedsphere is built with security at its core, providing enterprise-grade protection without compromising usability. We're compliant with major security standards and give you complete control over your data.
                </motion.p>

                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                  {securityFeatures.map((feature, idx) => (
                    <div key={idx} className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                      <feature.icon className="w-6 h-6 text-red-400 mb-3" />
                      <h4 className="font-semibold text-white text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-400">{feature.description}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8">
                  <Link
                    to="/security"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium"
                  >
                    Read our security whitepaper
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-2xl -z-10" />
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
                  <Shield className="w-20 h-20 text-slate-700 mx-auto mb-8" />
                  <div className="grid grid-cols-2 gap-4">
                    {performanceStats.map((stat, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-xl">
                        <stat.icon className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {['SOC 2', 'GDPR', 'HIPAA', 'ISO 27001'].map((badge, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400">
                        {badge} Compliant
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- Use Cases --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">
              Built for Every Team
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-400 max-w-2xl mx-auto">
              From engineering to marketing, Leedsphere adapts to how your team works
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/30 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                    <useCase.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-slate-400">{useCase.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Platform Access --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Access Leedsphere Anywhere
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-400">
              Native apps for every platform, with full feature parity
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platformFeatures.map((platform, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-colors">
                <platform.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-1">{platform.title}</h4>
                <p className="text-sm text-slate-400">{platform.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- Integrations --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connects With Your Favorite Tools
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-2xl mx-auto">
              Integrate with 100+ apps or build custom integrations with our comprehensive API
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full hover:border-purple-500/50 hover:bg-slate-800 transition-all cursor-default"
              >
                <span className="text-sm text-slate-300">{integration.name}</span>
                <span className="text-xs text-slate-500 ml-2">• {integration.category}</span>
              </div>
            ))}
            <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <span className="text-sm text-purple-300">+ 100 more integrations</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 text-center">
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
            >
              Browse all integrations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* --- CTA Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl -z-10" />
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Team?
              </motion.h2>

              <motion.p variants={itemVariants} className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                Join thousands of teams who have already made the switch to better collaboration. Start your free trial today—no credit card required.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/signup"
                  className="px-8 py-4 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk to Sales
                </button>
              </motion.div>

              <motion.p variants={itemVariants} className="mt-8 text-sm text-slate-500">
                Free 14-day trial • No credit card required • Cancel anytime
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
      <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
