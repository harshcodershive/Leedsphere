import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Hash,
  ChevronDown,
  ChevronRight,
  Plus,
  MessageSquare,
  Bookmark,
  MoreHorizontal,
  Send,
  Bell,
  Headphones,
  Settings,
  LogOut,
  User
} from 'lucide-react';
import { cn } from '../../shared/utils/cn';
import { useUiStore, useUserStore, useAuthStore } from '../../store';

const AppSidebar = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    channels: true,
    directMessages: true,
  });
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useUiStore();
  const { user, workspace } = useUserStore();
  const { logout } = useAuthStore();

  // Get user initials
  const userInitials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'U';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const channels = [
    { id: 'general', name: 'general', path: '/app/docs', unread: false },
    { id: 'announcements', name: 'announcements', path: '/app/workflows', unread: true },
    { id: 'random', name: 'random', path: '/app/analytics', unread: false },
    { id: 'design', name: 'design', path: '/app/docs/drafts', unread: false },
    { id: 'engineering', name: 'engineering', path: '/app/docs/archived', unread: true },
  ];

  const directMessages = [
    { id: 'sarah', name: 'Sarah Wilson', status: 'online', avatar: 'SW', path: '/app/profile' },
    { id: 'mike', name: 'Mike Chen', status: 'away', avatar: 'MC', path: '/app/profile' },
    { id: 'emily', name: 'Emily Davis', status: 'offline', avatar: 'ED', path: '/app/profile' },
    { id: 'alex', name: 'Alex Johnson', status: 'online', avatar: 'AJ', path: '/app/profile' },
  ];

  const quickLinks = [
    { icon: MessageSquare, label: 'Threads', path: '/app/docs' },
    { icon: Send, label: 'Drafts & Sent', path: '/app/docs/drafts' },
    { icon: Bookmark, label: 'Saved Items', path: '/app/workflows' },
    { icon: MoreHorizontal, label: 'More', path: '/app/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={cn(
          "w-64 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 flex flex-col z-50 transition-transform duration-300",
          "fixed md:static inset-y-0 left-0 h-full",
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Workspace Header */}
        <div className="h-14 px-4 flex items-center justify-between border-b border-purple-800/50">
          <button className="flex items-center gap-2 hover:bg-purple-800/30 rounded-md px-2 py-1.5 transition-colors group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
              L
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-white text-sm">Leedsphere</span>
              <span className="text-[10px] text-purple-300/70 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Active
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-purple-300 ml-auto group-hover:text-white transition-colors" />
          </button>
          <button className="p-1.5 hover:bg-purple-800/30 rounded-md transition-colors">
            <Bell className="w-5 h-5 text-purple-300 hover:text-white" />
          </button>
        </div>

        {/* Quick Links */}
        <div className="px-2 py-3 space-y-0.5">
          {quickLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-1.5 rounded-md text-sm transition-all",
                isActive
                  ? "bg-purple-700/50 text-white"
                  : "text-purple-200 hover:bg-purple-800/30 hover:text-white"
              )}
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="h-px bg-purple-800/50 mx-3" />

        {/* Scrollable Section */}
        <div className="flex-1 overflow-y-auto py-3 px-2 space-y-4 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent">

          {/* Channels Section */}
          <div>
            <button
              onClick={() => toggleSection('channels')}
              className="w-full flex items-center gap-1 px-3 py-1 text-purple-300 hover:text-white transition-colors group"
            >
              {expandedSections.channels ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
              <span className="text-sm font-medium">Channels</span>
              <button
                className="ml-auto p-0.5 opacity-0 group-hover:opacity-100 hover:bg-purple-700/50 rounded transition-all"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Plus className="w-4 h-4" />
              </button>
            </button>

            {expandedSections.channels && (
              <div className="mt-1 space-y-0.5">
                {channels.map((channel) => (
                  <NavLink
                    key={channel.id}
                    to={channel.path}
                    className={({ isActive }) => cn(
                      "flex items-center gap-2 px-3 py-1 rounded-md text-sm transition-all group",
                      isActive
                        ? "bg-purple-700/50 text-white"
                        : "text-purple-200 hover:bg-purple-800/30 hover:text-white",
                      channel.unread && "font-semibold text-white"
                    )}
                  >
                    <Hash className="w-4 h-4 text-purple-400" />
                    <span className="truncate">{channel.name}</span>
                    {channel.unread && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-purple-400"></span>
                    )}
                  </NavLink>
                ))}
                <button className="flex items-center gap-2 px-3 py-1 rounded-md text-sm text-purple-300 hover:bg-purple-800/30 hover:text-white transition-colors w-full">
                  <Plus className="w-4 h-4" />
                  Add channels
                </button>
              </div>
            )}
          </div>

          {/* Direct Messages Section */}
          <div>
            <button
              onClick={() => toggleSection('directMessages')}
              className="w-full flex items-center gap-1 px-3 py-1 text-purple-300 hover:text-white transition-colors group"
            >
              {expandedSections.directMessages ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
              <span className="text-sm font-medium">Direct Messages</span>
              <button
                className="ml-auto p-0.5 opacity-0 group-hover:opacity-100 hover:bg-purple-700/50 rounded transition-all"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Plus className="w-4 h-4" />
              </button>
            </button>

            {expandedSections.directMessages && (
              <div className="mt-1 space-y-0.5">
                {directMessages.map((dm) => (
                  <NavLink
                    key={dm.id}
                    to={dm.path}
                    className={({ isActive }) => cn(
                      "flex items-center gap-2 px-3 py-1 rounded-md text-sm transition-all",
                      isActive
                        ? "bg-purple-700/50 text-white"
                        : "text-purple-200 hover:bg-purple-800/30 hover:text-white"
                    )}
                  >
                    <div className="relative">
                      <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-[10px] font-medium text-white">
                        {dm.avatar}
                      </div>
                      <span className={cn(
                        "absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-purple-900",
                        dm.status === 'online' && "bg-green-400",
                        dm.status === 'away' && "bg-yellow-400",
                        dm.status === 'offline' && "bg-gray-400"
                      )} />
                    </div>
                    <span className="truncate">{dm.name}</span>
                  </NavLink>
                ))}
                <button className="flex items-center gap-2 px-3 py-1 rounded-md text-sm text-purple-300 hover:bg-purple-800/30 hover:text-white transition-colors w-full">
                  <Plus className="w-4 h-4" />
                  Add teammates
                </button>
              </div>
            )}
          </div>

          {/* Apps Section */}
          <div>
            <button className="w-full flex items-center gap-1 px-3 py-1 text-purple-300 hover:text-white transition-colors group">
              <ChevronRight className="w-3 h-3" />
              <span className="text-sm font-medium">Apps</span>
              <button
                className="ml-auto p-0.5 opacity-0 group-hover:opacity-100 hover:bg-purple-700/50 rounded transition-all"
              >
                <Plus className="w-4 h-4" />
              </button>
            </button>
          </div>
        </div>

        {/* User Section at Bottom */}
        <div className="p-3 border-t border-purple-800/50 relative">
          <div
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-purple-800/30 cursor-pointer transition-colors"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                {userInitials}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-purple-900" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user?.name || 'User'}</p>
              <p className="text-xs text-purple-300 truncate">{user?.email || 'Active'}</p>
            </div>
            <ChevronDown className={cn(
              "w-4 h-4 text-purple-300 transition-transform",
              showUserMenu && "rotate-180"
            )} />
          </div>

          {/* User Menu Dropdown */}
          {showUserMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowUserMenu(false)}
              />
              <div className="absolute bottom-full left-3 right-3 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                {/* User Info Header */}
                <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                      {userInitials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                      {user?.role}
                    </span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {workspace?.plan}
                    </span>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <NavLink
                    to="/app/profile"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">View Profile</span>
                  </NavLink>
                  <NavLink
                    to="/app/settings"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Settings</span>
                  </NavLink>
                  <button className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 transition-colors w-full">
                    <Headphones className="w-4 h-4" />
                    <span className="text-sm font-medium">Start Huddle</span>
                  </button>
                </div>

                {/* Logout */}
                <div className="border-t border-gray-100 py-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors w-full"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Sign out</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
