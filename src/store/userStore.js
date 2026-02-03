import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: {
    id: 'usr_123',
    name: 'Kishan Jangid',
    email: 'kishan@example.com',
    role: 'Admin',
    avatar: null
  },
  workspace: {
    id: 'ws_001',
    name: 'Sabai Innovation',
    plan: 'Enterprise'
  },
  permissions: ['admin', 'manage_team', 'view_all'],

  setUser: (userData) => set({ user: userData }),
  updatePreferences: (prefs) => set((state) => ({ 
    user: { ...state.user, preferences: { ...state.user.preferences, ...prefs } } 
  })),
}));
