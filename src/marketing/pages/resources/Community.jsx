import { motion } from "framer-motion";
import { Users, Globe, MessageCircle, Calendar, Lightbulb, Share2, Award, Heart, ArrowRight, ExternalLink } from "lucide-react";

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

const communityFeatures = [
  {
    icon: Share2,
    title: "Share Workflows",
    description: "Show off how your marketing team uses automated bots to track leads, or how your engineering team handles deployments."
  },
  {
    icon: MessageCircle,
    title: "Ask for Advice",
    description: "\"How do you handle channel naming for a 500-person engineering org?\" Get answers from those who've been there."
  },
  {
    icon: Users,
    title: "Find Partners",
    description: "Connect with consultants and experts who can help you deploy and optimize Leedsphere for your unique needs."
  }
];

const events = [
  {
    type: "Virtual Meetup",
    title: "Quarterly Community Roundtable",
    description: "Join us for open discussions about best practices, new features, and community highlights.",
    schedule: "Every quarter"
  },
  {
    type: "Conference",
    title: "Annual User Conference",
    description: "Our flagship event featuring product roadmap reveals, customer stories, and networking opportunities.",
    schedule: "Once a year"
  },
  {
    type: "Local Meetup",
    title: "Leedsphere User Groups (LUG)",
    description: "Find a local chapter in your city. Pizza, collaborative software talk, and great connections.",
    schedule: "Monthly"
  }
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Shape the Product",
    description: "Our roadmap is heavily influenced by our community. Upvote features and provide feedback on betas."
  },
  {
    icon: Award,
    title: "Get Recognized",
    description: "Top contributors earn badges, early access to features, and invitations to exclusive events."
  },
  {
    icon: Heart,
    title: "Give Back",
    description: "Help newcomers learn the ropes and share the knowledge you've gained along the way."
  }
];

export default function Community() {
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
                <Globe className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Global Network</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Leedsphere Community
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                You're not alone on this journey. The Leedsphere Community is a global network of team leaders,
                developers, and productivity enthusiasts who are rewriting the rules of work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Sharing Section */}
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
                Knowledge Sharing Framework
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                We believe that the best way to learn is from each other. Our community forums are a place to connect, share, and grow.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
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
                User Groups & Events
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Opportunities to see behind the curtain, hear from our product team, and network with industry leaders.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-300 text-sm font-medium">{event.schedule}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20 mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{event.description}</p>
                  <span className="inline-flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:text-purple-300 transition-colors">
                    Learn more <ExternalLink className="w-4 h-4" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Why Join?</h2>
                <p className="text-slate-400">We build Leedsphere <em className="text-purple-300">with</em> you, not just for you.</p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-slate-900/50 border border-slate-700 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
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
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Connect?</h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of teams who are transforming the way they work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                  <Users className="w-5 h-5" />
                  Join the Community
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                  View Events Calendar
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
