import { ROLES, PERMISSIONS, ROLE_PERMISSIONS } from '../../config/permissionsConfig';

/**
 * Checks if a user can perform an action on a specific resource (optional).
 * @param {string} action - The permission string (e.g., 'task.edit.any').
 * @param {object} user - The user object from authStore.
 * @param {object} resource - The target resource (e.g., the task object).
 * @returns {boolean}
 */
export const canUser = (action, user, resource = null) => {
  if (!user || !user.role) return false;

  const userPermissions = ROLE_PERMISSIONS[user.role.toLowerCase()] || [];

  // 1. Direct Permission Check
  // If the user has a permission that covers "Any", they effectively have "Own" too,
  // but we usually check specific "Any" permission in logic or "Own" if resource matches.
  
  // However, often the caller asks: "Can I edit this task?"
  // And we need to check both "Edit Any" AND "Edit Own" + ownership.

  // Logic Strategy: Map high-level intent to permission checks
  
  if (action === 'task.edit') {
    if (userPermissions.includes(PERMISSIONS.TASK_EDIT_ANY)) return true;
    if (userPermissions.includes(PERMISSIONS.TASK_EDIT_OWN)) {
       return resource && (resource.createdBy === user.name || resource.assignedTo === user.name);
    }
    return false;
  }

  if (action === 'task.delete') {
    if (userPermissions.includes(PERMISSIONS.TASK_DELETE_ANY)) return true;
    if (userPermissions.includes(PERMISSIONS.TASK_DELETE_OWN)) {
       return resource && resource.createdBy === user.name;
    }
    return false;
  }

  if (action === 'task.view') {
    // If asking for general view access (resource is null usually, or checking list filter)
    if (userPermissions.includes(PERMISSIONS.TASK_VIEW_ALL)) return true;
    return false; // For filtered view, logic is handled in the component/selector
  }

  // Limited transition check
  if (action === 'task.transition') {
     if (userPermissions.includes(PERMISSIONS.TASK_TRANSITION_ANY)) return true;
     if (userPermissions.includes(PERMISSIONS.TASK_TRANSITION_LIMITED)) {
        // Limited users can only move Draft -> In Review
        // And usually only their own tasks
        const isOwner = resource && (resource.createdBy === user.name || resource.assignedTo === user.name);
        if (!isOwner) return false;
        
        // We defer specific state transition validation to the logic, 
        // but here we basically say "Yes, they have transition rights" 
        // The specific allowed transitions (draft->in_review) are enforced 
        // by the valid transitions map AND the fact they are "limited".
        return true; 
     }
     return false;
  }

  // Fallback for direct permission strings (create, etc.)
  return userPermissions.includes(action);
};
