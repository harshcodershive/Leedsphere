import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Search,
  Hash,
  Star,
  Users,
  ChevronDown,
  Phone,
  Video,
  Pin,
  BookmarkPlus,
  Menu,
  Info
} from 'lucide-react';
import { cn } from '../../shared/utils/cn';
import { useUiStore } from '../../store';

const AppTopBar = () => {
  const location = useLocation();
  const { toggleMobileSidebar } = useUiStore();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Get current channel name from path
  const getChannelInfo = () => {
    const path = location.pathname;
    if (path.includes('/docs')) return { name: 'design', type: 'channel', members: 24 };
    if (path.includes('/workflows')) return { name: 'random', type: 'channel', members: 156 };
    if (path.includes('/analytics')) return { name: 'analytics', type: 'channel', members: 12 };
    if (path.includes('/settings')) return { name: 'settings', type: 'channel', members: 5 };
    if (path.includes('/profile')) return { name: 'Sarah Wilson', type: 'dm', status: 'online' };
    return { name: 'general', type: 'channel', members: 342 };
  };

  const channelInfo = getChannelInfo();

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-30">
      {/* Left: Channel Info */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileSidebar}
          className="md:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Channel/DM Header */}
        <button className="flex items-center gap-2 hover:bg-gray-100 rounded-md px-2 py-1.5 transition-colors group min-w-0">
          {channelInfo.type === 'channel' ? (
            <Hash className="w-5 h-5 text-purple-600 flex-shrink-0" />
          ) : (
            <div className="relative flex-shrink-0">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] font-medium text-white">
                SW
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
            </div>
          )}
          <span className="font-bold text-gray-900 truncate">{channelInfo.name}</span>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
        </button>

        {/* Star Button */}
        <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors hidden sm:flex">
          <Star className="w-4 h-4 text-gray-400 hover:text-yellow-500" />
        </button>

        {/* Divider */}
        <div className="h-5 w-px bg-gray-200 hidden sm:block" />

        {/* Members/Status */}
        {channelInfo.type === 'channel' ? (
          <button className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-600 transition-colors">
            <Users className="w-4 h-4" />
            <span>{channelInfo.members}</span>
          </button>
        ) : (
          <span className="hidden sm:flex items-center gap-1.5 text-sm text-green-600">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Active
          </span>
        )}
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className={cn(
          "relative group transition-all duration-200",
          isSearchFocused && "ring-2 ring-purple-500 rounded-md"
        )}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search in Leedsphere"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full h-9 pl-9 pr-4 bg-gray-100 hover:bg-gray-200 focus:bg-white border border-transparent focus:border-purple-500 rounded-md text-sm focus:outline-none transition-all placeholder-gray-500"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-block bg-white border border-gray-300 rounded px-1.5 text-[10px] font-mono text-gray-400 shadow-sm">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1">
        {/* Mobile Search */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Search className="w-5 h-5 text-gray-600" />
        </button>

        {/* Call Actions */}
        <div className="hidden sm:flex items-center gap-1">
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors group" title="Start huddle">
            <Phone className="w-5 h-5 text-gray-500 group-hover:text-purple-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors group" title="Start video call">
            <Video className="w-5 h-5 text-gray-500 group-hover:text-purple-600" />
          </button>
        </div>

        <div className="h-5 w-px bg-gray-200 mx-1 hidden sm:block" />

        {/* Quick Actions */}
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors group hidden sm:flex" title="Pinned items">
            <Pin className="w-5 h-5 text-gray-500 group-hover:text-purple-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors group hidden sm:flex" title="Add to saved">
            <BookmarkPlus className="w-5 h-5 text-gray-500 group-hover:text-purple-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors group" title="Channel details">
            <Info className="w-5 h-5 text-gray-500 group-hover:text-purple-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppTopBar;
