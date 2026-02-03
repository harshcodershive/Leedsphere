import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Hash, MoreHorizontal, User, Paperclip, Smile, Image as ImageIcon, FileText, CheckCircle2, Video } from "lucide-react";

const MESSAGES = [
  {
    id: 1,
    user: "Elena M.",
    avatar: "bg-purple-100 text-purple-600",
    initials: "EM",
    time: "10:42 AM",
    content: "Just dropped the new homepage hero assets. Thoughts on the lighting?",
    attachment: { icon: <ImageIcon className="w-4 h-4 text-blue-500" />, name: "hero_v3.png", size: "2.4 MB" },
    reactions: ["🔥 2", "👀 1"]
  },
  {
    id: 2,
    user: "David K.",
    avatar: "bg-green-100 text-green-600",
    initials: "DK",
    time: "10:45 AM",
    content: "Love the lighting on this! Approved. ✅",
    reactions: ["👍 1"]
  },
  {
    id: 3,
    user: "Sarah J.",
    avatar: "bg-blue-100 text-blue-600",
    initials: "SJ",
    time: "10:48 AM",
    content: "Can we get a quick sync on the copy? I have some ideas for the headline.",
    attachment: null,
    reactions: []
  },
  {
    id: 4,
    user: "Alex R.",
    avatar: "bg-orange-100 text-orange-600",
    initials: "AR",
    time: "10:52 AM",
    content: "Heading into a meeting, but left comments on the Figma file.",
    attachment: null,
    reactions: ["🙏 1"]
  },
  {
    id: 5,
    user: "System",
    avatar: "bg-slate-100 text-slate-500",
    initials: "SYS",
    time: "10:55 AM",
    content: "GitHub: Pull request #1024 merged into main.",
    isSystem: true,
    reactions: []
  },
  {
    id: 6,
    user: "Elena M.",
    avatar: "bg-purple-100 text-purple-600",
    initials: "EM",
    time: "11:05 AM",
    content: "Great work everyone! 🚀 Listing the task as complete.",
    attachment: null,
    reactions: ["🎉 3"]
  }
];

// Duplicate messages to create seamless loop
const SCROLL_CONTENT = [...MESSAGES, ...MESSAGES];

export default function AIChatMock() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glass Container - Slightly larger now */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/50 dark:border-slate-800/50 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden flex flex-col h-[440px]">
        
        {/* Header - Channel Bar */}
        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white/50 dark:bg-slate-900/50 z-20">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
               <Hash className="w-3.5 h-3.5" />
             </div>
             <div>
               <div className="text-sm font-bold text-slate-900 dark:text-white">marketing-launch</div>
               <div className="text-[10px] text-slate-500 dark:text-slate-400">24 members</div>
             </div>
           </div>
           
           <div className="flex -space-x-1.5">
             {[1,2,3].map(i => (
               <div key={i} className="w-5 h-5 rounded-full bg-slate-200 border border-white dark:border-slate-800 dark:bg-slate-700" />
             ))}
           </div>
        </div>

        {/* Sidebar + Main Content Layout */}
        <div className="flex-1 flex overflow-hidden relative">
            {/* Sidebar Mock */}
            <div className="w-12 border-r border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col items-center py-4 gap-3 hidden sm:flex z-10">
               {[1,2,3,4, 5].map(i => (
                 <div key={i} className={`w-6 h-6 rounded-md ${i === 2 ? 'bg-purple-100 text-purple-600' : 'bg-slate-200/50 dark:bg-slate-800'} flex items-center justify-center`}>
                    <Hash className="w-3 h-3" />
                 </div>
               ))}
            </div>

            {/* Message Area with Infinite Scroll */}
            <div className="flex-1 overflow-hidden relative">
                
                {/* Gradient Masks for smooth fade out */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
                
                <motion.div
                    className="flex flex-col gap-6 p-5"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 30, // Very slow, calm speed
                    }}
                    style={{ willChange: "transform" }}
                >
                    {SCROLL_CONTENT.map((msg, index) => (
                        <div key={`${msg.id}-${index}`} className="flex gap-3">
                            {msg.isSystem ? (
                                <div className="flex items-center gap-3 w-full opacity-70">
                                    <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        {msg.content}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold flex-shrink-0 ${msg.avatar} dark:bg-opacity-20`}>
                                        {msg.initials}
                                    </div>
                                    <div className="flex flex-col gap-1.5 w-full">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">{msg.user}</span>
                                            <span className="text-[10px] text-slate-400">{msg.time}</span>
                                        </div>
                                        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {msg.content}
                                        </div>
                                        
                                        {msg.attachment && (
                                            <div className="flex items-center gap-3 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 w-fit mt-1">
                                                <div className="w-8 h-8 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                                    {msg.attachment.icon}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-slate-700 dark:text-slate-200">{msg.attachment.name}</div>
                                                    <div className="text-[10px] text-slate-400">{msg.attachment.size}</div>
                                                </div>
                                            </div>
                                        )}

                                        {msg.reactions.length > 0 && (
                                            <div className="flex gap-1 mt-1">
                                                {msg.reactions.map((reaction, i) => (
                                                    <span key={i} className="px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] shadow-sm text-slate-600 dark:text-slate-400">
                                                        {reaction}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>

        {/* Input Area (Collapsed) */}
        <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 z-20">
           <div className="h-9 bg-white dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-700 flex items-center px-3 gap-3 text-slate-300 dark:text-slate-600">
              <MoreHorizontal className="w-4 h-4" />
              <div className="h-2 w-px bg-slate-200 dark:bg-slate-700" />
              <div className="text-xs">Message #marketing-launch...</div>
           </div>
        </div>

      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 blur-[60px] rounded-full -z-10" />
    </div>
  );
}
