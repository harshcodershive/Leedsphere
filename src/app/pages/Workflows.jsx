import { useState } from 'react';
import {
  Hash,
  Lock,
  Globe,
  Users,
  Plus,
  Search,
  MoreHorizontal,
  Star,
  Bell,
  Settings
} from 'lucide-react';
import { cn } from '../../shared/utils/cn';

const Workflows = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const channels = [
    {
      id: 1,
      name: 'general',
      description: 'Company-wide announcements and work-related discussions',
      isPrivate: false,
      members: 342,
      starred: true,
      unread: 5,
    },
    {
      id: 2,
      name: 'engineering',
      description: 'Engineering team discussions and technical updates',
      isPrivate: false,
      members: 89,
      starred: true,
      unread: 12,
    },
    {
      id: 3,
      name: 'design',
      description: 'Design system, UI/UX feedback, and creative discussions',
      isPrivate: false,
      members: 45,
      starred: false,
      unread: 0,
    },
    {
      id: 4,
      name: 'product-roadmap',
      description: 'Product planning and roadmap discussions',
      isPrivate: true,
      members: 23,
      starred: false,
      unread: 3,
    },
    {
      id: 5,
      name: 'marketing',
      description: 'Marketing campaigns, content, and growth strategies',
      isPrivate: false,
      members: 34,
      starred: false,
      unread: 0,
    },
    {
      id: 6,
      name: 'leadership',
      description: 'Executive team private discussions',
      isPrivate: true,
      members: 8,
      starred: true,
      unread: 1,
    },
    {
      id: 7,
      name: 'random',
      description: 'Non-work related conversations, fun stuff, and team bonding',
      isPrivate: false,
      members: 298,
      starred: false,
      unread: 0,
    },
    {
      id: 8,
      name: 'support-team',
      description: 'Customer support discussions and escalations',
      isPrivate: true,
      members: 18,
      starred: false,
      unread: 7,
    },
  ];

  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         channel.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' ||
                         (filter === 'starred' && channel.starred) ||
                         (filter === 'private' && channel.isPrivate) ||
                         (filter === 'public' && !channel.isPrivate);
    return matchesSearch && matchesFilter;
  });

  const filters = [
    { id: 'all', label: 'All channels', count: channels.length },
    { id: 'starred', label: 'Starred', count: channels.filter(c => c.starred).length },
    { id: 'private', label: 'Private', count: channels.filter(c => c.isPrivate).length },
    { id: 'public', label: 'Public', count: channels.filter(c => !c.isPrivate).length },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Channels</h1>
            <p className="text-sm text-gray-500 mt-1">
              Browse and manage all channels in your workspace
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            Create Channel
          </button>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channels..."
              className="w-full h-10 pl-10 pr-4 bg-gray-100 border border-transparent focus:border-purple-500 focus:bg-white rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  filter === f.id
                    ? "bg-purple-100 text-purple-700 border border-purple-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent"
                )}
              >
                {f.label}
                <span className={cn(
                  "px-1.5 py-0.5 rounded text-xs",
                  filter === f.id ? "bg-purple-200 text-purple-800" : "bg-gray-200 text-gray-500"
                )}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Channel List */}
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-100">
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                {/* Channel Icon */}
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                  channel.isPrivate
                    ? "bg-purple-100 text-purple-600"
                    : "bg-gray-100 text-gray-600"
                )}>
                  {channel.isPrivate ? (
                    <Lock className="w-5 h-5" />
                  ) : (
                    <Hash className="w-5 h-5" />
                  )}
                </div>

                {/* Channel Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={cn(
                      "font-semibold text-gray-900",
                      channel.unread > 0 && "text-purple-700"
                    )}>
                      {channel.name}
                    </h3>
                    {channel.starred && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                    {channel.unread > 0 && (
                      <span className="px-2 py-0.5 bg-purple-600 text-white text-xs font-medium rounded-full">
                        {channel.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5 truncate">
                    {channel.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {channel.members} members
                    </span>
                    <span className="flex items-center gap-1">
                      {channel.isPrivate ? (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          Private
                        </>
                      ) : (
                        <>
                          <Globe className="w-3.5 h-3.5" />
                          Public
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    title="Notifications"
                  >
                    <Bell className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    title="Settings"
                  >
                    <Settings className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    title="More"
                  >
                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredChannels.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Hash className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">No channels found</h3>
            <p className="text-sm text-gray-500 text-center max-w-sm">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workflows;
