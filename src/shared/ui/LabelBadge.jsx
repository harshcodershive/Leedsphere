import React from 'react';
import { cn } from '../utils/cn';

const LabelBadge = ({ children, className }) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground border border-border/50",
        className
      )}
    >
      {children}
    </span>
  );
};

export default LabelBadge;
