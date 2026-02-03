import React from 'react';
import { cn } from '../utils/cn';
import Tooltip from './Tooltip';

const IconButton = ({ 
  icon: Icon, 
  onClick, 
  label, 
  variant = 'ghost', 
  className,
  tooltipSide = 'bottom',
  disabled = false,
  badge
}) => {
  const baseClasses = "relative flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    ghost: "hover:bg-muted text-muted-foreground hover:text-foreground",
    outline: "border border-border hover:bg-muted text-foreground",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  };

  const sizes = "w-8 h-8";

  const button = (
    <button 
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(baseClasses, variants[variant], sizes, className)}
    >
      <Icon className="w-4 h-4" />
      {/* Optional Notification Badge */}
      {badge && (
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-destructive rounded-full border border-background" />
      )}
    </button>
  );

  if (label) {
    return (
      <Tooltip content={label} side={tooltipSide}>
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default IconButton;
