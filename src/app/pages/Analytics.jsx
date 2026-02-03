import {
  Users,
  MessageSquare,
  FileText,
  Clock,
  ArrowUp,
  ArrowDown,
  Calendar
} from 'lucide-react';
import { cn } from '../../shared/utils/cn';

const Analytics = () => {
  const stats = [
    {
      label: 'Total Messages',
      value: '24,589',
      change: '+12.5%',
      trend: 'up',
      icon: MessageSquare,
      color: 'purple',
    },
    {
      label: 'Active Users',
      value: '1,284',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'blue',
    },
    {
      label: 'Files Shared',
      value: '3,847',
      change: '+23.1%',
      trend: 'up',
      icon: FileText,
      color: 'green',
    },
    {
      label: 'Avg Response Time',
      value: '4.2m',
      change: '-15.3%',
      trend: 'down',
      icon: Clock,
      color: 'orange',
    },
  ];

  const topChannels = [
    { name: 'general', messages: 4892, members: 342, activity: 95 },
    { name: 'engineering', messages: 3241, members: 89, activity: 88 },
    { name: 'design', messages: 2156, members: 45, activity: 76 },
    { name: 'marketing', messages: 1847, members: 34, activity: 72 },
    { name: 'support-team', messages: 1523, members: 18, activity: 85 },
  ];

  const recentActivity = [
    { user: 'Sarah Wilson', action: 'created channel', target: '#product-launch', time: '2 min ago', avatar: 'SW' },
    { user: 'Mike Chen', action: 'shared file', target: 'Q4-Report.pdf', time: '15 min ago', avatar: 'MC' },
    { user: 'Emily Davis', action: 'joined channel', target: '#design', time: '32 min ago', avatar: 'ED' },
    { user: 'Alex Johnson', action: 'mentioned you in', target: '#engineering', time: '1 hour ago', avatar: 'AJ' },
    { user: 'Lisa Park', action: 'created thread in', target: '#general', time: '2 hours ago', avatar: 'LP' },
  ];

  const colorClasses = {
    purple: 'bg-purple-100 text-purple-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="flex flex-col h-full bg-gray-50/50 overflow-y-auto">
      {/* Header */}
      <div className="px-6 py-5 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            <p className="text-sm text-gray-500 mt-1">
              Track your workspace activity and engagement metrics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <Calendar className="w-4 h-4" />
              Last 30 days
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all shadow-sm text-sm">
              Export Report
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center",
                  colorClasses[stat.color]
                )}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-sm font-medium",
                  stat.trend === 'up' ? "text-green-600" : "text-green-600"
                )}>
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Channels */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Top Channels</h2>
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  View all
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {topChannels.map((channel, index) => (
                <div key={index} className="px-5 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <span className="w-6 text-center text-sm font-medium text-gray-400">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">#{channel.name}</p>
                    <p className="text-xs text-gray-500">{channel.members} members</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{channel.messages.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">messages</p>
                  </div>
                  <div className="w-20">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${channel.activity}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Recent Activity</h2>
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  View all
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity, index) => (
                <div key={index} className="px-5 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                    {activity.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-medium text-purple-600">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Chart Placeholder */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold text-gray-900">Message Activity</h2>
              <p className="text-sm text-gray-500">Messages sent over the last 7 days</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                Messages
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                Threads
              </span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const heights = [65, 80, 45, 90, 75, 30, 55];
              const threadHeights = [30, 45, 20, 50, 40, 15, 25];
              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center gap-1" style={{ height: '200px' }}>
                    <div className="w-full flex justify-center gap-1 flex-1 items-end">
                      <div
                        className="w-5 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm"
                        style={{ height: `${heights[index]}%` }}
                      />
                      <div
                        className="w-5 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                        style={{ height: `${threadHeights[index]}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
