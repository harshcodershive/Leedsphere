import { motion } from "framer-motion";
import { Rocket, Building2, Users, Hash, MessageSquare, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";

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

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Create Your Workspace",
    description: "Your workspace is the digital building where your team lives. When you create a new workspace, you choose a unique URL (e.g., yourcompany.leedsphere.com). This will be your team's permanent address.",
    tip: "Keep the name short and recognizable. If you're a large organization, you might eventually have multiple workspaces connected by an Enterprise Grid, but for now, start with one central hub."
  },
  {
    number: "02",
    icon: Users,
    title: "Invite Your Teammates",
    description: "Leedsphere is lonely without people. Go to your admin dashboard and send invites via email. We recommend starting with a small \"pilot group\"—perhaps your immediate team or a specific project squad—to establish norms before inviting the whole company.",
    tip: "Send a personal note along with the invite explaining why you're moving to Leedsphere. Explain that this is where work will happen from now on."
  },
  {
    number: "03",
    icon: Hash,
    title: "Set Up Your Channels",
    description: "Good channel hygiene is the secret to success. Avoid creating a channel for every random thought. Start with the basics and expand organically.",
    channels: [
      { name: "#general", desc: "For company-wide announcements (keep this low volume)" },
      { name: "#random", desc: "For social chatter, pet photos, and culture building" },
      { name: "#team-[name]", desc: "For department-specific work (e.g., #team-design, #team-sales)" },
      { name: "#proj-[name]", desc: "For temporary project-based collaboration" }
    ]
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Send the First Message",
    description: "Lead by example. Post a welcome message in #general. Encourage people to fill out their profiles with photos and job titles—it helps remote teams feel more connected. Start a thread to show people how to keep conversations tidy.",
    tip: "The first message sets the tone. Make it warm, welcoming, and informative."
  }
];

export default function Start() {
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
                <Rocket className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Quick Start Guide</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Getting Started
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Welcome to your new HQ. You've taken the first step toward a more organized, transparent,
                and efficient way of working. Leedsphere isn't just a chat app; it's a new operating system for your team's culture.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="p-8 md:p-12 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                            <step.icon className="w-10 h-10 text-purple-400" />
                          </div>
                          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-lg text-slate-400 leading-relaxed mb-6">{step.description}</p>

                        {/* Channels List */}
                        {step.channels && (
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {step.channels.map((channel, cIndex) => (
                              <div key={cIndex} className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50">
                                <Hash className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <div>
                                  <code className="text-purple-300 font-medium">{channel.name}</code>
                                  <p className="text-slate-500 text-sm mt-1">{channel.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tip */}
                        {step.tip && (
                          <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                            <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <p className="text-slate-300 text-sm leading-relaxed">
                              <span className="font-semibold text-white">Pro Tip:</span> {step.tip}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex justify-center py-4">
                      <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Checklist */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Launch Checklist</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Workspace created with memorable URL",
                  "Core team members invited",
                  "Essential channels set up",
                  "Welcome message posted",
                  "Channel guidelines documented",
                  "Admin permissions configured"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Team?</h2>
              <p className="text-xl text-slate-400 mb-8">
                Start your journey to better collaboration today.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                Create Your Workspace
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
