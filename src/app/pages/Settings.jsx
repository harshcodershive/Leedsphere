import { useState } from 'react';
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  Users,
  Hash,
  Trash2,
  ChevronRight,
  Check,
  Moon,
  Sun,
  Monitor
} from 'lucide-react';
import { cn } from '../../shared/utils/cn';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [notifications, setNotifications] = useState({
    messages: true,
    mentions: true,
    threads: true,
    channels: false,
    email: true,
  });
  const [theme, setTheme] = useState('system');

  const sections = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'language', label: 'Language & Region', icon: Globe },
  ];

  const workspaceSections = [
    { id: 'members', label: 'Members', icon: Users, count: 156 },
    { id: 'channels', label: 'Channels', icon: Hash, count: 24 },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  const themes = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-gray-50/50 flex-shrink-0 overflow-y-auto hidden md:block">
        <div className="p-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
            Account
          </h2>
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeSection === section.id
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>

          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3 mt-8">
            Workspace
          </h2>
          <div className="space-y-1">
            {workspaceSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeSection === section.id
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <section.icon className="w-4 h-4" />
                <span className="flex-1 text-left">{section.label}</span>
                {section.count && (
                  <span className="text-xs text-gray-400">{section.count}</span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 px-3">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
              <Trash2 className="w-4 h-4" />
              Delete Workspace
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto p-6 md:p-8">
          {activeSection === 'general' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">General Settings</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Manage your workspace settings and preferences
                </p>
              </div>

              {/* Workspace Info */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    L
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Leedsphere</h3>
                    <p className="text-sm text-gray-500">app.leedsphere.com</p>
                    <button className="mt-3 text-sm text-purple-600 hover:text-purple-700 font-medium">
                      Edit workspace details
                    </button>
                  </div>
                </div>
              </div>

              {/* Settings List */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Workspace Settings</h2>

                <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Workspace name</p>
                      <p className="text-sm text-gray-500">Leedsphere</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Workspace URL</p>
                      <p className="text-sm text-gray-500">app.leedsphere.com</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Default channels</p>
                      <p className="text-sm text-gray-500">#general, #random</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Choose how and when you want to be notified
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Activity</h2>

                <div className="space-y-3">
                  {[
                    { key: 'messages', label: 'Direct messages', desc: 'Get notified when someone sends you a direct message' },
                    { key: 'mentions', label: 'Mentions', desc: 'Get notified when someone mentions you' },
                    { key: 'threads', label: 'Thread replies', desc: 'Get notified when someone replies to a thread you\'re in' },
                    { key: 'channels', label: 'Channel activity', desc: 'Get notified about all channel activity' },
                    { key: 'email', label: 'Email notifications', desc: 'Receive email for missed notifications' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <button
                        onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                        className={cn(
                          "w-11 h-6 rounded-full transition-colors relative",
                          notifications[item.key] ? "bg-purple-600" : "bg-gray-300"
                        )}
                      >
                        <span
                          className={cn(
                            "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm",
                            notifications[item.key] && "translate-x-5"
                          )}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'appearance' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Appearance</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Customize how Leedsphere looks for you
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Theme</h2>

                <div className="grid grid-cols-3 gap-4">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all text-center",
                        theme === t.id
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center",
                        theme === t.id ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"
                      )}>
                        <t.icon className="w-6 h-6" />
                      </div>
                      <p className="font-medium text-gray-900">{t.label}</p>
                      {theme === t.id && (
                        <div className="mt-2 flex justify-center">
                          <Check className="w-5 h-5 text-purple-600" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Accent Color</h2>

                <div className="flex gap-3">
                  {['purple', 'blue', 'green', 'orange', 'pink', 'red'].map((color) => (
                    <button
                      key={color}
                      className={cn(
                        "w-10 h-10 rounded-full transition-transform hover:scale-110",
                        color === 'purple' && "bg-purple-500 ring-2 ring-offset-2 ring-purple-500",
                        color === 'blue' && "bg-blue-500",
                        color === 'green' && "bg-green-500",
                        color === 'orange' && "bg-orange-500",
                        color === 'pink' && "bg-pink-500",
                        color === 'red' && "bg-red-500"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Add more sections as needed */}
          {!['general', 'notifications', 'appearance'].includes(activeSection) && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <SettingsIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Coming Soon</h3>
              <p className="text-sm text-gray-500 text-center max-w-sm">
                This settings section is under development.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
