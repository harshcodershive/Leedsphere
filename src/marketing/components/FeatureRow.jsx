import { useState, useRef, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Check, Search, Shield, BarChart3, History, Globe, Layers, Zap, Hash, MessageSquare, FileText, Users, Clock, Paperclip, MoreHorizontal, Video } from "lucide-react";
import RevealSection from "./RevealSection";

const FEATURES_DATA = [
  {
    id: "channels",
    title: "Channels",
    shortDesc: "Create dedicated spaces for every project, team, or topic to keep work organized.",
    icon: <Hash className="w-5 h-5" />,
    description: "Channels keep conversations organized.",
    theme: {
      activeBg: "bg-indigo-50/50 dark:bg-indigo-900/10",
      activeBorder: "border-indigo-200 dark:border-indigo-800/50",
      activeRing: "ring-indigo-100 dark:ring-indigo-900/30",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
      iconText: "text-indigo-600 dark:text-indigo-300",
      titleColor: "text-indigo-900 dark:text-indigo-100"
    },
    windowContent: (
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between pb-3 border-b border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">marketing-launch</span>
          </div>
          <div className="flex -space-x-1.5">
             {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-slate-200 border border-white dark:border-slate-800" />)}
          </div>
        </div>
        
        <div className="space-y-4">
           {/* Message 1 */}
           <div className="flex gap-3">
             <div className="w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs font-bold text-indigo-600 shrink-0">SM</div>
             <div className="space-y-1.5">
               <div className="flex items-baseline gap-2">
                 <span className="text-xs font-bold text-slate-800 dark:text-white">Sarah Miller</span>
                 <span className="text-[10px] text-slate-400">10:42 AM</span>
               </div>
               <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                 Here are the final assets for the Q4 campaign. Can everyone review before EOD?
               </p>
               <div className="flex items-center gap-2 p-2 rounded border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 w-fit">
                  <div className="p-1.5 bg-red-50 text-red-500 rounded"><FileText className="w-3 h-3" /></div>
                  <div className="text-[10px]">
                    <div className="font-bold text-slate-700 dark:text-slate-200">Campaign_Assets_Final.zip</div>
                    <div className="text-slate-400">14 MB</div>
                  </div>
               </div>
             </div>
           </div>

           {/* Message 2 */}
           <div className="flex gap-3">
             <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">JD</div>
             <div className="space-y-1">
               <div className="flex items-baseline gap-2">
                 <span className="text-xs font-bold text-slate-800 dark:text-white">John Davis</span>
                 <span className="text-[10px] text-slate-400">10:45 AM</span>
               </div>
               <p className="text-xs text-slate-600 dark:text-slate-300">
                 Looks great Sarah! I'll pass this to the dev team. 🚀
               </p>
             </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "messages",
    title: "Messages",
    shortDesc: "Reach teammates instantly with direct messages and quick video huddles.",
    icon: <MessageSquare className="w-5 h-5" />,
    description: "Talk to your team in real time.",
    theme: {
      activeBg: "bg-violet-50/50 dark:bg-violet-900/10",
      activeBorder: "border-violet-200 dark:border-violet-800/50",
      activeRing: "ring-violet-100 dark:ring-violet-900/30",
      iconBg: "bg-violet-100 dark:bg-violet-900/40",
      iconText: "text-violet-600 dark:text-violet-300",
      titleColor: "text-violet-900 dark:text-violet-100"
    },
    windowContent: (
      <div className="flex flex-col gap-5">
         <div className="flex items-center justify-between pb-3 border-b border-violet-100 dark:border-violet-900/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alex Chen (Product)</span>
            </div>
            <Video className="w-4 h-4 text-violet-500" />
         </div>
         
         <div className="space-y-4">
            <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-xs font-bold text-violet-600 shrink-0">AC</div>
               <div className="p-3 rounded-2xl rounded-tl-sm bg-white border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                  <p className="text-xs text-slate-700 dark:text-slate-300">Hey! Do you have 5 mins to sync on the roadmap?</p>
               </div>
            </div>

            <div className="flex items-start gap-3 flex-row-reverse">
               <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">You</div>
               <div className="p-3 rounded-2xl rounded-tr-sm bg-violet-50 border border-violet-100 dark:bg-violet-900/20 dark:border-violet-800/50">
                  <p className="text-xs text-slate-700 dark:text-slate-300">Sure thing! Jumping in now.</p>
               </div>
            </div>

            <div className="flex items-center justify-center py-2">
               <span className="text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
                 Call ended • 14m 20s
               </span>
            </div>
            
            <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-xs font-bold text-violet-600 shrink-0">AC</div>
               <div className="p-3 rounded-2xl rounded-tl-sm bg-white border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                  <p className="text-xs text-slate-700 dark:text-slate-300">Thanks for the quick sync!</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "files",
    title: "File Sharing",
    shortDesc: "Share, preview, and collaborate on files without leaving your conversation.",
    icon: <FileText className="w-5 h-5" />,
    description: "Share files where work happens.",
    theme: {
      activeBg: "bg-blue-50/50 dark:bg-blue-900/10",
      activeBorder: "border-blue-200 dark:border-blue-800/50",
      activeRing: "ring-blue-100 dark:ring-blue-900/30",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      iconText: "text-blue-600 dark:text-blue-300",
      titleColor: "text-blue-900 dark:text-blue-100"
    },
    windowContent: (
      <div className="space-y-4">
         <div className="flex items-center justify-between pb-3 border-b border-blue-100 dark:border-blue-900/30">
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Recent Files</span>
            <div className="flex gap-2">
                <span className="text-[10px] text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded font-medium">Documents</span>
                <span className="text-[10px] text-slate-500 px-2 py-0.5">Images</span>
            </div>
         </div>
         
         <div className="space-y-3">
            {[
              { name: "Q4_Financials.xlsx", type: "XLS", size: "2.4 MB", user: "Finance Team" },
              { name: "Brand_Guidelines_v2.pdf", type: "PDF", size: "14 MB", user: "Design Team" }
            ].map((file, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700 group hover:border-blue-300 transition-colors">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-[10px]">
                       {file.type}
                    </div>
                    <div>
                       <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors cursor-pointer">{file.name}</div>
                       <div className="text-[10px] text-slate-500">Uploaded by {file.user} • {file.size}</div>
                    </div>
                 </div>
                 <MoreHorizontal className="w-4 h-4 text-slate-400" />
              </div>
            ))}
            
            <div className="p-3 mt-2 rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-800/50 dark:border-slate-700 flex items-center gap-3">
               <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-blue-500"></div>
               </div>
               <span className="text-[10px] text-slate-500 whitespace-nowrap">Uploading...</span>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    shortDesc: "Move projects forward with real-time editing, comments, and decision tracking.",
    icon: <Users className="w-5 h-5" />,
    description: "Collaborate without switching tools.",
    theme: {
      activeBg: "bg-teal-50/50 dark:bg-teal-900/10",
      activeBorder: "border-teal-200 dark:border-teal-800/50",
      activeRing: "ring-teal-100 dark:ring-teal-900/30",
      iconBg: "bg-teal-100 dark:bg-teal-900/40",
      iconText: "text-teal-600 dark:text-teal-300",
      titleColor: "text-teal-900 dark:text-teal-100"
    },
    windowContent: (
      <div className="flex flex-col gap-4">
         <div className="p-3 bg-white border border-slate-100 dark:bg-slate-800 dark:border-slate-700 rounded-lg flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/40 rounded flex items-center justify-center text-teal-600">
                  <Check className="w-4 h-4" />
               </div>
               <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Website Redesign</div>
                  <div className="text-[10px] text-slate-500">Due tomorrow • 3 tasks remaining</div>
               </div>
            </div>
            <div className="flex -space-x-2">
               {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800" />)}
            </div>
         </div>

         <div className="space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Activity</div>
            
            <div className="flex gap-3 text-xs">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></div>
               <div>
                  <span className="font-bold text-slate-700 dark:text-slate-200">Mike R.</span>
                  <span className="text-slate-500"> moved </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">Homepage Hero</span>
                  <span className="text-slate-500"> to In Progress</span>
               </div>
            </div>

            <div className="flex gap-3 text-xs">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></div>
               <div>
                  <span className="font-bold text-slate-700 dark:text-slate-200">Anna K.</span>
                  <span className="text-slate-500"> commented on </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">Mobile Layout</span>
                  <div className="mt-1 p-2 bg-slate-50 dark:bg-slate-800/50 rounded text-slate-600 italic border border-slate-100 dark:border-slate-800">
                     "We need to check this on smaller screens..."
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "integrations",
    title: "Integrations",
    shortDesc: "Connect your favorite tools like GitHub, Jira, and Drive directly into your workflow.",
    icon: <Globe className="w-5 h-5" />,
    description: "Bring your tools into one workspace.",
    theme: {
      activeBg: "bg-slate-50/50 dark:bg-slate-800/50",
      activeBorder: "border-slate-300 dark:border-slate-600",
      activeRing: "ring-slate-200 dark:ring-slate-700",
      iconBg: "bg-slate-200 dark:bg-slate-700",
      iconText: "text-slate-700 dark:text-slate-200",
      titleColor: "text-slate-900 dark:text-white"
    },
    windowContent: (
      <div className="space-y-4">
         <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
            <span className="text-sm font-bold text-slate-800 dark:text-white">Connected Apps</span>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">+ Connect</span>
         </div>

         <div className="grid grid-cols-1 gap-2.5">
            {[
              { name: "GitHub", desc: "Pull request #42 merged into main", status: "Just now", icon: "GH" },
              { name: "Jira", desc: "Ticket LE-294 moved to QA", status: "2m ago", icon: "JR" },
              { name: "Sentry", desc: "New issue detected in prod", status: "15m ago", icon: "SN" }
            ].map((tool, i) => (
               <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-white dark:bg-slate-800 dark:border-slate-700">
                  <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">
                     {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                     <div className="flex items-center justify-between">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{tool.name}</div>
                        <div className="text-[10px] text-slate-400">{tool.status}</div>
                     </div>
                     <div className="text-[10px] text-slate-500 truncate">{tool.desc}</div>
                  </div>
               </div>
            ))}
         </div>
         
         <div className="flex items-center justify-center pt-1">
             <button className="text-[10px] text-slate-500 hover:text-slate-800 transition-colors">View all 42 integrations</button>
         </div>
      </div>
    )
  },
  {
    id: "search",
    title: "Search & History",
    shortDesc: "Find exactly what you need across messages, files, and people instantly.",
    icon: <Search className="w-5 h-5" />,
    description: "Find what you need, instantly.",
    theme: {
      activeBg: "bg-purple-50/50 dark:bg-purple-900/10",
      activeBorder: "border-purple-200 dark:border-purple-800/50",
      activeRing: "ring-purple-100 dark:ring-purple-900/30",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      iconText: "text-purple-600 dark:text-purple-300",
      titleColor: "text-purple-900 dark:text-purple-100"
    },
    windowContent: (
      <div className="flex flex-col gap-4">
         <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-purple-500" />
            <div className="w-full py-2.5 pl-9 pr-3 rounded-lg border border-purple-200 bg-white text-xs text-slate-800 font-medium shadow-sm dark:bg-slate-900 dark:border-purple-900/30 dark:text-slate-300">
               launch assets
            </div>
         </div>
         
         <div className="flex gap-2">
            {["All", "Messages", "Files", "People"].map((filter, i) => (
                <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full border ${i === 0 ? "bg-purple-100 text-purple-700 border-purple-200" : "bg-white text-slate-500 border-slate-200 dark:bg-slate-800 dark:border-slate-700"}`}>
                    {filter}
                </span>
            ))}
         </div>
         
         <div className="space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Top Results</div>
            
            <div className="p-3 rounded-lg bg-white border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
               <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-white">#marketing</span>
                  <span className="text-[10px] text-slate-400 px-1.5 py-0.5 bg-slate-50 rounded">Channel</span>
               </div>
               <p className="text-[10px] text-slate-500 line-clamp-2">
                  ...where are the <strong className="text-purple-600 font-medium bg-purple-50 px-0.5 rounded">launch assets</strong> stored?
               </p>
            </div>
            
            <div className="p-3 rounded-lg bg-white border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700 opacity-90">
               <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-white">Launch_Assets_vFinal.zip</span>
                  <span className="text-[10px] text-slate-400 px-1.5 py-0.5 bg-slate-50 rounded">File</span>
               </div>
               <p className="text-[10px] text-slate-500">
                  Uploaded by Sarah Miller • Yesterday
               </p>
            </div>
         </div>
      </div>
    )
  }
];

// --- SCROLLING WRAPPER ---
const AutoScrollWrapper = memo(({ children, isEnabled = false }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 overflow-y-auto p-6">
        {children}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-slate-950 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10" />

      <motion.div
        animate={isEnabled ? { y: ["0%", "-50%"] } : { y: 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40, 
        }}
        className="w-full"
        style={{ willChange: "transform" }}
      >
        <div className="flex flex-col">
          <div className="p-8 pb-10 border-b border-transparent">
             {children}
          </div>
          <div className="p-8 pb-10 border-b border-transparent">
             {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
});

// Extracted card to prevent re-rendering all cards on hover
const FeatureCard = memo(({ card, isActive, onMouseEnter, shouldReduceMotion }) => {
    return (
        <motion.div 
        key={card.id} 
        onMouseEnter={onMouseEnter}
        variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
            }
        }}
        whileHover={!shouldReduceMotion ? { y: -2 } : {}}
        className={`p-3.5 rounded-xl border transition-all duration-200 ease-out cursor-default flex flex-col items-start gap-1.5 shadow-sm min-h-[110px]
            ${isActive 
            ? `${card.theme.activeBg} ${card.theme.activeBorder} ring-1 ${card.theme.activeRing}` 
            : "bg-white/50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80"
            }`}
        >
            <div className={`w-7 h-7 rounded-md flex items-center justify-center text-lg transition-colors duration-200 ${isActive ? `${card.theme.iconBg} ${card.theme.iconText}` : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`}>
                {card.icon}
            </div>
            <div>
                <h3 className={`font-semibold text-sm mb-0.5 transition-colors duration-200 ${isActive ? card.theme.titleColor : "text-slate-900 dark:text-white"}`}>
                {card.title}
                </h3>
                <p className={`text-[11px] leading-snug ${isActive ? "text-slate-600 dark:text-slate-300" : "text-slate-500 dark:text-slate-500"}`}>
                {card.shortDesc}
                </p>
            </div>
        </motion.div>
    );
});

const FeatureRow = memo(function FeatureRow({ 
  badge, 
  title, 
  description, 
  bullets = [], 
  align = "left", 
  visualComponent 
}) {
  const isReversed = align === "right";
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [hasActivated, setHasActivated] = useState(false);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView && !hasActivated) {
      setHasActivated(true);
    }
  }, [isInView, hasActivated]);

  const activeFeature = FEATURES_DATA[activeFeatureIndex];

  const handleMouseEnter = useCallback((idx) => {
     setActiveFeatureIndex(idx);
     setHasActivated(true);
  }, []);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          
          {/* LEFT SIDE: Feature Grid */}
          <div className="flex-1 lg:flex-[0.8] max-w-xl">
            <div className="flex-1 max-w-xl">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "0px 0px -200px 0px", once: true }}
                variants={{
                  hidden: {},
                  visible: { 
                    transition: { staggerChildren: 0.1 } 
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                 {FEATURES_DATA.map((card, idx) => (
                    <FeatureCard 
                        key={card.id}
                        card={card}
                        isActive={idx === activeFeatureIndex}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        shouldReduceMotion={shouldReduceMotion}
                    />
                 ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Mac Window */}
          <div className="flex-1 lg:flex-[1.5] w-full relative">
            <div className="flex-1 w-full relative">
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-2 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden transition-colors duration-500">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
                 
                 <div className="relative aspect-[4/3] bg-white dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col">
                      <div className="h-10 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-2 bg-slate-50/50 dark:bg-slate-900/50 z-20 relative">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                         <div className="ml-4 px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-400 font-mono opacity-50">
                            leedsphere — v2.4
                         </div>
                      </div>

                      <div className="flex-1 relative overflow-hidden bg-slate-50/20 dark:bg-slate-900/20">
                         {/* Internal content transition */}
                         <AnimatePresence mode="wait">
                           <motion.div
                             key={activeFeature.id}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ duration: 0.3 }}
                             className="absolute inset-0"
                             style={{ willChange: "opacity, transform" }}
                           >
                              <AutoScrollWrapper isEnabled={hasActivated}>
                                  <div className="mb-6">
                                     <h4 className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeFeature.theme.titleColor}`}>{activeFeature.title}</h4>
                                     <p className="text-sm text-slate-500 dark:text-slate-400">{activeFeature.description}</p>
                                  </div>
                                  <div className="relative">
                                     {activeFeature.windowContent}
                                  </div>
                                  <div className="h-4"></div>
                              </AutoScrollWrapper>
                           </motion.div>
                         </AnimatePresence>
                      </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default FeatureRow;
