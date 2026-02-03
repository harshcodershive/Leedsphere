import React from 'react';
import { cn } from '../../utils/cn';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-6 border-b border-border mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "pb-3 text-sm font-medium transition-all border-b-2 -mb-px hover:text-primary",
            activeTab === tab.id
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
