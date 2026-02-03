import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, HelpCircle, User, Settings, LogOut, ChevronDown, ExternalLink, Menu } from 'lucide-react';
import { cn } from '../../shared/utils/cn';
import Dropdown from '../../shared/ui/Dropdown';
import IconButton from '../../shared/ui/IconButton';
import { useAuthStore } from '../../store';

const TopNavbar = ({ onMobileMenuClick }) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const profileMenuItems = [
    { label: 'Profile', icon: User, to: '/profile' },
    { label: 'Settings', icon: Settings, to: '/settings' },
    { type: 'separator' },
    { label: 'Log out', icon: LogOut, onClick: handleLogout },
  ];

  // Get user initials or fallback
  const userInitials = user?.name 
    ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() 
    : 'JD';

  return (
    <header className="h-14 bg-background border-b border-border flex items-center justify-between px-4 sticky top-0 z-50 shadow-sm/50">
      {/* 1) LEFT ZONE: Context & Identity */}
      <div className="flex items-center gap-4 min-w-[200px]">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMobileMenuClick}
          className="md:hidden text-muted-foreground hover:text-foreground"
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link to="/home" className="flex items-center gap-2 group" aria-label="Go to Home">
          <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
            <div className="w-4 h-4 bg-primary rounded-sm" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-sm">Workspace Name</span>
            <span className="text-[10px] text-muted-foreground">Premium Plan</span>
          </div>
        </Link>
        <span className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono text-muted-foreground border border-border">v1.0</span>
      </div>
      
      {/* 2) CENTER ZONE: Global Search */}
      <div className="flex-1 max-w-xl mx-4 lg:mx-8 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" aria-hidden="true" />
          <input 
            type="text"
            placeholder="Search tasks, docs, workflows..." 
            aria-label="Global search"
            className="w-full h-9 pl-9 pr-4 bg-muted/30 border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-ring focus:bg-background transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
            <kbd className="hidden sm:inline-block border border-border rounded px-1.5 text-[10px] font-mono text-muted-foreground bg-muted/50">⌘K</kbd>
          </div>
        </div>
      </div>

      {/* 3) RIGHT ZONE: Actions & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Trial Status Pill */}
        <div className="hidden lg:flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-xs border border-yellow-500/20">
           <span className="font-medium">Trial: 13 days left</span>
           <ExternalLink className="w-3 h-3" />
        </div>

        <div className="h-6 w-px bg-border mx-1 hidden sm:block" />

        {/* Action Icons */}
        <div className="flex items-center gap-1">
          <IconButton icon={HelpCircle} label="Help & Support" />
          <IconButton icon={Bell} label="Notifications" badge={true} />
        </div>

        {/* Profile Dropdown */}
        <Dropdown 
          align="right"
          items={profileMenuItems}
          trigger={
            <div className="flex items-center gap-2 hover:bg-muted py-1 px-1.5 rounded-md transition-colors select-none cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-blue-600 border border-border/50 text-white flex items-center justify-center text-xs font-medium shadow-sm">
                {userInitials}
              </div>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>
          }
        />
      </div>
    </header>
  );
};

export default TopNavbar;
