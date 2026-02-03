import React from 'react';
import { Inbox } from 'lucide-react';
import { cn } from '../utils/cn';

const EmptyState = ({ 
  title = "Nothing here yet", 
  description, 
  icon: Icon = Inbox, 
  actionLabel, 
  onAction,
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center text-muted-foreground", className)}>
      <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 opacity-50" />
      </div>
      <h3 className="text-lg font-medium text-foreground">{title}</h3>
      {description && (
        <p className="text-sm mt-1 max-w-sm text-muted-foreground/80">{description}</p>
      )}
      {actionLabel && (
        <button 
          onClick={onAction}
          className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
