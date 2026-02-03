import { 
  Home, 
  Book, 
  Workflow, 
  BarChart2, 
  Settings, 
  Inbox, 
  Clock, 
  Star, 
  Trash2,
  FileText,
  Shield,
  Users,
  Hash
} from 'lucide-react';

export const navigationConfig = [
  {
    id: 'home',
    label: 'Home',
    path: '/home',
    icon: Home,
    sidebarItems: [
      { id: 'overview', label: 'Overview', path: '/home', icon: Inbox },
      { id: 'tasks', label: 'Channels', path: '/home/tasks', icon: Hash },
      { id: 'recent', label: 'Recent', path: '/home/recent', icon: Clock },
      { id: 'starred', label: 'Starred', path: '/home/starred', icon: Star },
      { id: 'trash', label: 'Recycle Bin', path: '/home/trash', icon: Trash2 },
    ]
  },
  {
    id: 'docs',
    label: 'Documentation',
    path: '/docs',
    icon: Book,
    sidebarItems: [
      { id: 'all-docs', label: 'All Documents', path: '/docs', icon: FileText },
      { id: 'drafts', label: 'Drafts', path: '/docs/drafts', icon: FileText },
      { id: 'archived', label: 'Archived', path: '/docs/archived', icon: FileText },
    ]
  },
  {
    id: 'workflows',
    label: 'Channels',
    path: '/workflows',
    icon: Hash,
    sidebarItems: [
      { id: 'active', label: 'All Channels', path: '/workflows', icon: Hash },
      { id: 'templates', label: 'Templates', path: '/workflows/templates', icon: FileText },
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    path: '/analytics',
    icon: BarChart2,
    sidebarItems: [
      { id: 'dashboard', label: 'Dashboard', path: '/analytics', icon: BarChart2 },
      { id: 'reports', label: 'Reports', path: '/analytics/reports', icon: FileText },
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: Settings,
    sidebarItems: [
      { id: 'profile', label: 'Profile', path: '/settings', icon: Users },
      { id: 'security', label: 'Security', path: '/settings/security', icon: Shield },
    ]
  }
];
