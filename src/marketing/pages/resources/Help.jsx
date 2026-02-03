import { motion } from "framer-motion";
import { HelpCircle, Bell, FileSearch, User, Shield, Users, Mail, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const troubleshootingItems = [
  {
    icon: Bell,
    question: "Notifications not working?",
    answer: "Check your \"Do Not Disturb\" schedule. Leedsphere respects your working hours by default. You can adjust this in your Preferences > Notifications menu."
  },
  {
    icon: FileSearch,
    question: "Can't find a file?",
    answer: "Remember that Workspace Search (Cmd+K) indexes the content of documents, not just the names. Try searching for a unique phrase inside the document."
  }
];

const roles = [
  {
    icon: Shield,
    title: "Workspace Owners",
    description: "Have full control over billing, security settings, and workspace deletion."
  },
  {
    icon: Users,
    title: "Admins",
    description: "Can manage members, create channels, and handle day-to-day moderation."
  },
  {
    icon: User,
    title: "Members",
    description: "Can join open channels, create private groups, and collaborate freely."
  },
  {
    icon: MessageCircle,
    title: "Guests",
    description: "Restricted access to only specific channels (great for contractors or clients)."
  }
];

export default function Help() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Support Resources</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Help Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Whether you're a new user finding your way or an admin managing an enterprise grid,
                we're here to help. Our support philosophy is simple: unblock you so you can get back to work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Troubleshooting Common Issues
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Quick fixes for the most frequently asked questions
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {troubleshootingItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.question}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Account Management Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Managing Your Account</h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Your profile is your digital identity. We encourage you to upload a clear photo and set your status
                    (e.g., "In a meeting," "Vacation until Monday"). This small act of transparency helps your teammates
                    know when they can expect a response.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Roles & Permissions Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Roles & Permissions
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Understanding access levels in your workspace
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 hover:bg-slate-900/70 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <role.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{role.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-purple-300" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Still Stuck?</h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Our support team is available 24/7. Drop us a note and a real human will get back to you within hours.
              </p>
              <a
                href="mailto:support@leedsphere.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Support
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
