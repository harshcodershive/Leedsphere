import React from 'react';
import { cn } from '../../utils/cn';

const FilterPill = ({ label, count, isActive, onClick, variant = 'default' }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all border",
        isActive 
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "bg-background text-muted-foreground border-border hover:bg-muted/50 hover:text-foreground hover:border-border/80"
      )}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={cn(
          "text-xs px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center",
          isActive 
            ? "bg-primary-foreground/20 text-primary-foreground" 
            : "bg-muted text-muted-foreground"
        )}>
          {count}
        </span>
      )}
    </button>
  );
};

export default FilterPill;
