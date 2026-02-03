import React, { useRef, useState, useEffect } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

const Dropdown = ({ trigger, items, align = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleOpen} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div 
          className={cn(
            "absolute top-full mt-2 w-56 rounded-md border border-border bg-popover text-popover-foreground shadow-lg animate-in fade-in-80 zoom-in-95 z-50 overflow-hidden",
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          <div className="p-1">
            {items.map((item, index) => {
              if (item.type === 'separator') {
                return <div key={index} className="h-px bg-muted my-1" />;
              }
              
              const content = (
                <div className="flex items-center gap-2 px-2 py-2 text-sm rounded-sm hover:bg-muted cursor-pointer transition-colors w-full">
                  {item.icon && <item.icon className="w-4 h-4 text-muted-foreground" />}
                  <span>{item.label}</span>
                </div>
              );

              if (item.to) {
                return (
                  <Link key={index} to={item.to} onClick={() => setIsOpen(false)} className="block">
                    {content}
                  </Link>
                );
              }

              return (
                <div key={index} onClick={() => { item.onClick?.(); setIsOpen(false); }}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
