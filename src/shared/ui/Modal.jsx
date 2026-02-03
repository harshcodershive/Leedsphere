import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils/cn';

const Modal = ({ isOpen, onClose, title, description, children, footer, className }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div 
        className={cn(
            "relative w-full max-w-[400px] bg-card border border-border shadow-lg rounded-lg animate-in zoom-in-95 duration-200 p-6 space-y-4",
            className
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
        </div>
        
        <div>{children}</div>
        
        {footer && (
            <div className="flex justify-end gap-2 pt-2">
                {footer}
            </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
