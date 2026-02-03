import React from 'react';
import { Edit2, Trash2, MoreHorizontal } from 'lucide-react';
import Dropdown from '../../../shared/ui/Dropdown';
import IconButton from '../../../shared/ui/IconButton';

const TaskActions = ({ onEdit, onDelete }) => {
  const items = [
    onEdit && { 
      label: 'Edit channel', 
      icon: Edit2, 
      onClick: onEdit 
    },
    (onEdit && onDelete) && { type: 'separator' },
    onDelete && { 
      label: 'Delete', 
      icon: Trash2, 
      onClick: onDelete,
      variant: 'destructive' 
    },
  ].filter(Boolean); // Remove false/undefined items

  if (items.length === 0) return null;

  return (
    <Dropdown
      align="right"
      items={items}
      trigger={
        <div className="opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
            <IconButton icon={MoreHorizontal} label="Actions" />
        </div>
      }
    />
  );
};

export default TaskActions;
