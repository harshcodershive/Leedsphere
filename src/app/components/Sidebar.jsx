import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationConfig } from '../../config/navigation';
import { cn } from '../../shared/utils/cn';
import { useUiStore } from '../../store';

const Sidebar = () => {
  const location = useLocation();
  
  const { 
    isMobileSidebarOpen, 
    setMobileSidebarOpen, 
    isDesktopSidebarOpen 
  } = useUiStore();

  // Find the active module based on the current path
  const activeModule = navigationConfig.find(module => 
    location.pathname.startsWith(module.path)
  );

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden fade-in-0 animate-in"
        />
      )}

      <aside 
        aria-label="Sidebar navigation"
        className={cn(
          "bg-background border-r border-border flex-none overflow-hidden transition-all duration-300 ease-in-out z-50",
          // Desktop Classes
          "hidden md:block",
          isDesktopSidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0 border-r-0",
          // Mobile Classes (Fixed Drawer)
          "md:static fixed inset-y-0 left-0 h-full shadow-lg md:shadow-none",
          isMobileSidebarOpen ? "flex w-64 translate-x-0" : "md:flex -translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-4 w-64 h-full flex flex-col"> 
          {/* Module Title */}
            {activeModule ? activeModule.label : 'Menu'}

          
          {/* Navigation Items */}
          <div className="space-y-1 overflow-y-auto flex-1">
            {activeModule?.sidebarItems?.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === activeModule.path && item.path !== '/home'}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200",
                  isActive 
                    ? "bg-primary/5 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
              </NavLink>
            ))}

            {/* Fallback if no module selected */}
            {!activeModule && (
              <div className="p-4 text-sm text-muted-foreground text-center">
                Select a module from the left rail.
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
