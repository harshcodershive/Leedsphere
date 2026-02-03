export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  CONTRIBUTOR: 'contributor',
};

export const PERMISSIONS = {
  TASK_CREATE: 'task.create',
  TASK_VIEW_ALL: 'task.view.all',
  TASK_EDIT_ANY: 'task.edit.any',
  TASK_EDIT_OWN: 'task.edit.own',
  TASK_DELETE_ANY: 'task.delete.any',
  TASK_DELETE_OWN: 'task.delete.own',
  TASK_TRANSITION_ANY: 'task.transition.any',
  TASK_TRANSITION_LIMITED: 'task.transition.limited', // e.g. draft -> in_review only
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.TASK_CREATE,
    PERMISSIONS.TASK_VIEW_ALL,
    PERMISSIONS.TASK_EDIT_ANY,
    PERMISSIONS.TASK_DELETE_ANY,
    PERMISSIONS.TASK_TRANSITION_ANY,
  ],
  [ROLES.EDITOR]: [
    PERMISSIONS.TASK_CREATE,
    PERMISSIONS.TASK_VIEW_ALL,
    PERMISSIONS.TASK_EDIT_ANY,
    PERMISSIONS.TASK_DELETE_OWN, // Can only delete own
    PERMISSIONS.TASK_TRANSITION_ANY,
  ],
  [ROLES.CONTRIBUTOR]: [
    PERMISSIONS.TASK_CREATE,
    PERMISSIONS.TASK_EDIT_OWN,
    PERMISSIONS.TASK_TRANSITION_LIMITED,
  ],
};
