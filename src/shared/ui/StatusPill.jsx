import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { ChevronDown } from 'lucide-react';

const STATUS_CONFIG = {
  draft: { color: 'bg-gray-100 text-gray-700', label: 'Draft' },
  in_review: { color: 'bg-blue-100 text-blue-700', label: 'In Review' },
  approved: { color: 'bg-purple-100 text-purple-700', label: 'Approved' },
  completed: { color: 'bg-green-100 text-green-700', label: 'Completed' },
  overdue: { color: 'bg-red-100 text-red-700 border-red-200', label: 'Overdue' }
};

const ALLOWED_TRANSITIONS = {
    'draft': ['in_review'],
    'in_review': ['approved', 'draft'],
    'approved': ['completed', 'in_review'],
    'completed': ['in_review']
};

const StatusPill = ({ status, dueDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const normalizedStatus = status?.toLowerCase().replace(' ', '_') || 'draft';
  
  // Compute if Overdue
  const isOverdue = normalizedStatus !== 'completed' && dueDate && new Date(dueDate) < new Date();
  
  // Config
  const displayConfig = isOverdue ? STATUS_CONFIG.overdue : (STATUS_CONFIG[normalizedStatus] || STATUS_CONFIG.draft);
  const validNextSteps = ALLOWED_TRANSITIONS[normalizedStatus] || [];

  const handleSelect = (nextStatus) => {
    onChange?.(nextStatus);
    setIsOpen(false);
  };

  if (!onChange) {
      // Read-only variation
      return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-transparent",
            displayConfig.color
        )}>
          {displayConfig.label}
        </span>
      );
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border border-transparent transition-all hover:brightness-95 cursor-pointer select-none",
          displayConfig.color,
          isOpen && "ring-2 ring-offset-1 ring-primary/20"
        )}
      >
        {displayConfig.label}
        <ChevronDown className="w-3 h-3 opacity-50" />
      </button>

      {isOpen && (
        <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute left-0 z-20 mt-1 w-32 origin-top-left rounded-md bg-popover text-popover-foreground shadow-md border border-border animate-in fade-in zoom-in-95 duration-100">
                <div className="p-1">
                    {validNextSteps.length === 0 ? (
                        <div className="px-2 py-1.5 text-xs text-muted-foreground">No actions</div>
                    ) : (
                        validNextSteps.map((step) => (
                            <button
                                key={step}
                                onClick={() => handleSelect(step)}
                                className="w-full text-left px-2 py-1.5 text-xs rounded-sm hover:bg-accent hover:text-accent-foreground capitalize"
                            >
                                Move to {STATUS_CONFIG[step]?.label || step}
                            </button>
                        ))
                    )}
                </div>
            </div>
        </>
      )}
    </div>
  );
};

export default StatusPill;
