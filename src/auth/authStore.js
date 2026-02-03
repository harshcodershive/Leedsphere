import { create } from 'zustand';

const MOCK_USER = {
  id: 'usr_123',
  name: 'Kishan Jangid',
  email: 'kishan@example.com',
  role: 'admin', // Default role for dev. Change to 'editor' or 'contributor' to test.
  avatar: 'https://ui-avatars.com/api/?name=Kishan+Jangid&background=0D8ABC&color=fff',
  lastLogin: new Date().toISOString()
};

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true, // For initial session check
  error: null,

  // Actions
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    
    // Simulate API call
    setTimeout(() => {
      if (email === 'fail@example.com') {
        set({ 
          isLoading: false, 
          error: 'Invalid credentials. Please try again.' 
        });
        return;
      }

      const user = { ...MOCK_USER, email };
      localStorage.setItem('auth_session', JSON.stringify(user));
      
      set({ 
        user, 
        isAuthenticated: true, 
        isLoading: false 
      });
    }, 800);
  },

  signup: async (name, email, password) => {
    set({ isLoading: true, error: null });

    // Simulate API call
    setTimeout(() => {
      const user = { ...MOCK_USER, name, email };
      localStorage.setItem('auth_session', JSON.stringify(user));

      set({ 
        user, 
        isAuthenticated: true, 
        isLoading: false 
      });
    }, 1000);
  },

  logout: () => {
    localStorage.removeItem('auth_session');
    set({ user: null, isAuthenticated: false });
  },

  updateProfile: async (updates) => {
    // updates: { name, avatar }
    set({ isLoading: true });
    
    // Simulate API delay
    setTimeout(() => {
      set((state) => {
        if (!state.user) return { isLoading: false };
        
        const updatedUser = { ...state.user, ...updates };
        localStorage.setItem('auth_session', JSON.stringify(updatedUser));
        
        return { 
          user: updatedUser,
          isLoading: false
        };
      });
    }, 600);
  },


  loadSession: () => {
    const session = localStorage.getItem('auth_session');
    if (session) {
      try {
        const user = JSON.parse(session);
        set({ user, isAuthenticated: true, isLoading: false });
      } catch (e) {
        set({ user: null, isAuthenticated: false, isLoading: false });
      }
    } else {
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
  
  clearError: () => set({ error: null })
}));
