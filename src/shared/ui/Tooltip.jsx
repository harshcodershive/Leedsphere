import React from 'react';
import { cn } from '../utils/cn';

const Tooltip = ({ content, children, side = 'top', className }) => {
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className={cn("relative group flex items-center justify-center", className)}>
      {children}
      <div 
        className={cn(
          "absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-md border border-border whitespace-nowrap z-[60]",
          positionClasses[side]
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
