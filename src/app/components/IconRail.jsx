import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationConfig } from '../../config/navigation';
import { cn } from '../../shared/utils/cn';
import Tooltip from '../../shared/ui/Tooltip';

const IconRail = () => {
  return (
    <nav 
      className="w-16 flex-none bg-muted/20 border-r border-border hidden md:flex flex-col items-center py-4 gap-4 z-40"
      aria-label="Primary navigation"
    >
      {navigationConfig.map((module) => (
        <Tooltip key={module.id} content={module.label} side="right">
          <NavLink
            to={module.path}
            className={({ isActive }) => cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-colors relative group",
              isActive 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <module.icon className="w-5 h-5" strokeWidth={1.5} />
          </NavLink>
        </Tooltip>
      ))}

      <div className="mt-auto">
         {/* Settings or User generic could go here if separate from config */}
      </div>
    </nav>
  );
};

export default IconRail;
