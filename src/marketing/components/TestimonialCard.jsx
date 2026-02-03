import RevealSection from "./RevealSection";
import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, author, role, company, delay = 0 }) {
  return (
    <RevealSection delay={delay} className="h-full">
      <div className="h-full p-8 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between backdrop-blur-md">
        <div>
          <Quote className="w-8 h-8 text-purple-200 dark:text-purple-900/40 mb-4 fill-purple-100 dark:fill-purple-900/20" />
          <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-medium">
            "{quote}"
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500 uppercase">
             {author.charAt(0)}{author.split(" ")[1]?.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">{author}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {role}, <span className="text-purple-600 dark:text-purple-400">{company}</span>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
