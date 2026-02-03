import { motion } from "framer-motion";
import { Newspaper, Sparkles, Code2, Users, Calendar, ArrowRight, Tag } from "lucide-react";

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

const blogPosts = [
  {
    category: "Product Launch",
    categoryColor: "purple",
    date: "October 24, 2024",
    title: "Introducing Leedsphere AI: Your Intelligent Teammate",
    excerpt: "Today we are launching a suite of AI-powered features designed to summarize threads, draft replies, and surface hidden context from your workspace history.",
    icon: Sparkles,
    featured: true
  },
  {
    category: "Engineering",
    categoryColor: "blue",
    date: "October 10, 2024",
    title: "How We Scaled Our WebSocket Infrastructure",
    excerpt: "A technical deep dive into how we handle millions of concurrent real-time connections with 99.999% reliability using Elixir and Rust.",
    icon: Code2,
    featured: false
  },
  {
    category: "Customer Story",
    categoryColor: "green",
    date: "September 28, 2024",
    title: "How Acme Corp Reduced Meetings by 40%",
    excerpt: "See how a Fortune 500 logistics company transformed their culture by switching from daily standups to Leedsphere asynchronous check-ins.",
    icon: Users,
    featured: false
  },
  {
    category: "Product Update",
    categoryColor: "orange",
    date: "September 15, 2024",
    title: "New: Enhanced Search with Filters",
    excerpt: "Find exactly what you need with our new advanced search filters. Filter by date, channel, file type, and more.",
    icon: Tag,
    featured: false
  },
  {
    category: "Engineering",
    categoryColor: "blue",
    date: "September 1, 2024",
    title: "Building Real-Time Collaboration at Scale",
    excerpt: "How we architected our system to support seamless real-time editing and collaboration across distributed teams.",
    icon: Code2,
    featured: false
  },
  {
    category: "Customer Story",
    categoryColor: "green",
    date: "August 20, 2024",
    title: "Startup to IPO: Growth with Leedsphere",
    excerpt: "From 10 to 10,000 employees—how a tech unicorn scaled their communication infrastructure without missing a beat.",
    icon: Users,
    featured: false
  }
];

const getCategoryStyles = (color) => {
  const styles = {
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  };
  return styles[color] || styles.purple;
};

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                <Newspaper className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Latest Updates</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Blog & Product Updates
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Stay in the loop. This is where we announce new features, share deep dives into our
                engineering challenges, and highlight stories of how our customers are changing the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-10 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <featuredPost.icon className="w-10 h-10 text-purple-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryStyles(featuredPost.categoryColor)}`}>
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-wider border border-yellow-500/20">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                      Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regularPosts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <post.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryStyles(post.categoryColor)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:text-purple-300 transition-colors">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Get the latest product updates, engineering insights, and customer stories delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                />
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
