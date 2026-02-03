import React from 'react';
import { Sparkles } from 'lucide-react';

const DashboardHeader = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">
          {getGreeting()}, <span className="text-primary font-bold">Kishan</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-2 font-medium">
          Here's what's happening on {currentDate}.
        </p>
      </div>
      
      {/* AI CTA Placeholder */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 px-4 py-3 rounded-lg hover:border-primary/40 transition-colors cursor-pointer group">
        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Ask AI Assistant</p>
          <p className="text-[10px] text-muted-foreground">Summarize my overdue tasks</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
