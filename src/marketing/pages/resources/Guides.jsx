import { motion } from "framer-motion";
import { BookOpen, Hash, MessageSquareText, TrendingUp, Archive, Users, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

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

const guides = [
  {
    icon: Hash,
    title: "Organizing Channels Effectively",
    description: "The number one problem teams face is \"channel sprawl.\" Learn to adopt a consistent naming convention and use prefixes to group related channels together.",
    prefixes: [
      { name: "#announcements-*", desc: "Read-only channels for one-way updates" },
      { name: "#ask-*", desc: "Help desks (e.g., #ask-legal, #ask-finance)" },
      { name: "#client-*", desc: "External-facing channels for customer collaboration" }
    ],
    tip: "Don't be afraid to archive channels! If a project is done, archive the channel. The history is preserved, but it clears the clutter from everyone's sidebar."
  },
  {
    icon: MessageSquareText,
    title: "The Art of the Thread",
    description: "Threads are the superpower of Leedsphere. Use them to keep the main channel readable.",
    rules: [
      "If your reply is directed at one person → thread it",
      "If it's a detailed follow-up to a specific post → thread it",
      "If it's a new standalone topic → post to the channel"
    ],
    tip: "A good rule of thumb: keep the main channel for high-signal announcements and major updates."
  },
  {
    icon: TrendingUp,
    title: "Scaling Communication",
    description: "As you grow from 10 to 100 to 1,000 employees, you cannot just \"talk louder.\" You need to structure your communication.",
    practices: [
      "Move updates out of meetings and into written weekly digests",
      "Use emoji reactions (✅, 👀, 👍) to acknowledge receipts without notifications",
      "Create dedicated announcement channels for important updates",
      "Establish \"office hours\" for synchronous Q&A sessions"
    ],
    tip: "These small habits compound. A team that masters asynchronous written communication moves faster and makes better decisions."
  }
];

const quickTips = [
  {
    icon: Archive,
    title: "Archive Liberally",
    description: "Completed project? Archive the channel. History preserved, sidebar cleared."
  },
  {
    icon: Users,
    title: "Default to Public",
    description: "Unless discussing sensitive info, keep channels public for transparency."
  },
  {
    icon: Lightbulb,
    title: "Pin Important Messages",
    description: "Use pins to create a living knowledge base in each channel."
  }
];

export default function Guides() {
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
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Best Practices</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Guides & Best Practices
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Leedsphere is a powerful tool, but tools are only as good as the workflows they support.
                These guides deep-dive into how high-performing teams structure their communication for maximum impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Guides Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 md:p-12 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <guide.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{guide.title}</h2>
                      <p className="text-lg text-slate-400 leading-relaxed">{guide.description}</p>
                    </div>
                  </div>

                  {/* Prefixes */}
                  {guide.prefixes && (
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      {guide.prefixes.map((prefix, pIndex) => (
                        <div key={pIndex} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                          <code className="text-purple-300 font-bold">{prefix.name}</code>
                          <p className="text-slate-500 text-sm mt-2">{prefix.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Rules */}
                  {guide.rules && (
                    <div className="space-y-3 mb-8">
                      {guide.rules.map((rule, rIndex) => (
                        <div key={rIndex} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">{rule}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Practices */}
                  {guide.practices && (
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {guide.practices.map((practice, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{practice}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tip */}
                  {guide.tip && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                      <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300 leading-relaxed">
                        <span className="font-semibold text-white">Pro Tip:</span> {guide.tip}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quick Tips</h2>
              <p className="text-slate-400">Small habits that make a big difference</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {quickTips.map((tip, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                  <p className="text-slate-400 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Level Up?</h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                These practices compound over time. Start implementing them today and watch your team's communication transform.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                Explore More Resources
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
