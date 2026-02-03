import { create } from 'zustand';

export const useUiStore = create((set) => ({
  // Sidebar State
  isMobileSidebarOpen: false, 
  toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
  setMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),

  isDesktopSidebarOpen: true,
  toggleDesktopSidebar: () => set((state) => ({ isDesktopSidebarOpen: !state.isDesktopSidebarOpen })),

  // Navigation State
  activeModule: null, // Will be populated based on URL in components
  setActiveModule: (module) => set({ activeModule: module }),

  // Dashboard Filters & Tabs
  activeFilter: 'all',
  setActiveFilter: (filterId) => set({ activeFilter: filterId }),

  activeTab: 'all',
  setActiveTab: (tabId) => set({ activeTab: tabId }),

  assigneeFilter: 'all',
  setAssigneeFilter: (assigneeId) => set({ assigneeFilter: assigneeId }),
}));
