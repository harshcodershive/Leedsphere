import { create } from 'zustand';
import { tasks as mockTasks } from '../data/tasks';
import { useAuthStore } from '../auth/authStore'; // Import authStore
import { canUser } from '../shared/utils/permissionUtils'; // Import permission util
import { PERMISSIONS } from '../config/permissionsConfig';

const STORAGE_KEY = 'app_tasks';

export const useTaskStore = create((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,

  // Actions
  fetchTasks: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const stored = localStorage.getItem(STORAGE_KEY);
      let data = [];

      if (stored) {
        data = JSON.parse(stored);
      } else {
        // Initialize with mock data if storage is empty
        data = mockTasks;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
      
      set({ 
        tasks: data, 
        isLoading: false 
      });
    } catch (err) {
      set({ 
        error: 'Failed to fetch tasks', 
        isLoading: false 
      });
    }
  },

  addTask: async (taskData) => {
    const currentUser = useAuthStore.getState().user;
    if (!canUser(PERMISSIONS.TASK_CREATE, currentUser)) {
        set({ error: 'Unauthorized: Cannot create tasks' }); // Or specific error state
        return;
    }

    set({ isLoading: true });
    
    // Simulate API
    await new Promise(resolve => setTimeout(resolve, 500));

    const newTask = {
      ...taskData,
      id: `tsk_${Date.now()}`,
      createdBy: currentUser.name, // Enforce real creator
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      labels: taskData.labels || [] // Ensure array
    };

    set(state => {
      const updatedTasks = [newTask, ...state.tasks];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
      return { tasks: updatedTasks, isLoading: false, error: null };
    });
  },

  updateTask: async (taskId, updates) => {
    set({ isLoading: true });
    const state = get();
    const currentUser = useAuthStore.getState().user;
    const task = state.tasks.find(t => t.id === taskId);

    if (!task) {
        set({ isLoading: false }); 
        return;
    }

    if (!canUser('task.edit', currentUser, task)) {
        set({ isLoading: false, error: 'Unauthorized: Cannot edit this task' });
        return;
    }

    // Simulate API
    await new Promise(resolve => setTimeout(resolve, 500));

    set(state => {
      const updatedTasks = state.tasks.map(t => 
        t.id === taskId 
          ? { ...t, ...updates, updatedAt: new Date().toISOString() } 
          : t
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
      return { tasks: updatedTasks, isLoading: false, error: null };
    });
  },

  deleteTask: async (taskId) => {
    set({ isLoading: true });
    const state = get();
    const currentUser = useAuthStore.getState().user;
    const task = state.tasks.find(t => t.id === taskId);

    if (!task) {
         set({ isLoading: false });
         return;
    }
    
    if (!canUser('task.delete', currentUser, task)) {
        set({ isLoading: false, error: 'Unauthorized: Cannot delete this task' });
        return;
    }

    // Simulate API
    await new Promise(resolve => setTimeout(resolve, 500));

    set(state => {
      const updatedTasks = state.tasks.filter(t => t.id !== taskId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
      return { tasks: updatedTasks, isLoading: false, error: null };
    });
  },

  transitionTaskStatus: async (taskId, newStatus) => {
    // Validation Logic
    const allowedTransitions = {
      'draft': ['in_review'],
      'in_review': ['approved', 'draft'],
      'approved': ['completed', 'in_review'],
      'completed': ['in_review'] // Allow reopening
    };

    set({ isLoading: true });
    
    const state = get();
    const currentUser = useAuthStore.getState().user;
    const task = state.tasks.find(t => t.id === taskId);

    if (!task) {
        set({ isLoading: false });
        return;
    }

    // RBAC Check
    if (!canUser('task.transition', currentUser, task)) {
        set({ isLoading: false, error: 'Unauthorized: Cannot change status' });
        return;
    }

    // Simulate API
    await new Promise(resolve => setTimeout(resolve, 400));

    set((state) => {
      const taskIndex = state.tasks.findIndex(t => t.id === taskId);
      if (taskIndex === -1) return { isLoading: false };

      const task = state.tasks[taskIndex];
      const currentStatus = task.status.toLowerCase().replace(' ', '_');
      const validNextSteps = allowedTransitions[currentStatus] || ['draft'];

      if (!validNextSteps.includes(newStatus)) {
        // In a real app we might throw or return error
        return { isLoading: false, error: 'Invalid Transition' };
      }

      const updatedTasks = [...state.tasks];
      updatedTasks[taskIndex] = {
        ...task,
        status: newStatus,
        updatedAt: new Date().toISOString()
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
      return { tasks: updatedTasks, isLoading: false, error: null };
    });
  }

}));

export const getFilteredTasks = (tasks, user, filters) => {
  if (!user || !tasks) return [];

  const { activeTab, activeFilter, assigneeFilter } = filters;
  const normalize = (s) => s?.toLowerCase().replace(' ', '_');

  // 1. RBAC Filter
  const visibleTasks = tasks.filter(task => {
    // If user has view all permission, show everything
    if (canUser(PERMISSIONS.TASK_VIEW_ALL, user)) return true;
    
    // Otherwise only show own/assigned
    return task.createdBy === user?.name || task.assignedTo === user?.name;
  });

  // 2. Dashboard Filters
  return visibleTasks.filter(task => {
    const taskStatus = normalize(task.status);
    const isOverdue = taskStatus !== 'completed' && task.dueDate && new Date(task.dueDate) < new Date();
    
    // Workflow Tab Logic
    let matchesTab = true;
    if (activeTab && activeTab !== 'all') {
        if (activeTab === 'overdue') matchesTab = isOverdue;
        else matchesTab = taskStatus === normalize(activeTab);
    }

    // Priority Filter
    const matchesPriority = !activeFilter || activeFilter === 'all' || task.priority?.toLowerCase() === activeFilter;

    // Assignee Filter (Future proofing)
    const matchesAssignee = !assigneeFilter || assigneeFilter === 'all' || task.assignedTo === assigneeFilter;
    
    return matchesTab && matchesPriority && matchesAssignee;
  });
};
