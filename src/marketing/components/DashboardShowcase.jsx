import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Hash, BarChart2, Settings, ChevronLeft, ChevronRight, Sparkles, Play } from 'lucide-react';

// Import screenshots
import screenshotMessaging from '../../assets/dashboard-messaging.png';
import screenshotChannels from '../../assets/dashboard-channels.png';
import screenshotAnalytics from '../../assets/dashboard-analytics.png';
import screenshotSettings from '../../assets/dashboard-settings.png';

const screenshots = [
  {
    id: 1,
    title: 'Team Messaging',
    description: 'Real-time conversations with threads, reactions, and rich formatting.',
    icon: MessageSquare,
    image: screenshotMessaging,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Channel Management',
    description: 'Organize conversations by topic, project, or team with ease.',
    icon: Hash,
    image: screenshotChannels,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Track engagement metrics and team activity in real-time.',
    icon: BarChart2,
    image: screenshotAnalytics,
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Workspace Settings',
    description: 'Customize your workspace with powerful admin controls.',
    icon: Settings,
    image: screenshotSettings,
    color: 'from-orange-500 to-red-500',
  },
];

export default function DashboardShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">See It In Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Beautiful, Powerful Dashboard
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Experience a workspace designed for modern teams. Every feature crafted for productivity.
          </p>
        </motion.div>

        {/* Main Screenshot Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-12"
        >
          {/* Browser Frame */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl shadow-purple-500/10">
            {/* Browser Header */}
            <div className="h-12 bg-slate-800/80 border-b border-slate-700 flex items-center px-4 gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-slate-700/50 rounded-lg px-4 py-1.5 text-sm text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  app.leedsphere.com
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeScreenshot.id}
                  src={activeScreenshot.image}
                  alt={activeScreenshot.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {screenshots.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative p-5 rounded-2xl border text-left transition-all duration-300 overflow-hidden ${
                activeIndex === index
                  ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50 shadow-lg shadow-purple-500/10'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              {/* Active indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeCard"
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"
                />
              )}

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-bold mb-2 ${activeIndex === index ? 'text-white' : 'text-slate-200'}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform origin-left transition-transform duration-300 ${
                activeIndex === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </motion.button>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                  : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/signup"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
          >
            <Play className="w-5 h-5" />
            Try It Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
