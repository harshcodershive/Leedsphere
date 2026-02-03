import React from 'react';
import { FileText, Bug, CheckSquare, MoreHorizontal, Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import LabelBadge from '../../../shared/ui/LabelBadge';
import IconButton from '../../../shared/ui/IconButton';
import TaskActions from '../tasks/TaskActions';
import StatusPill from '../../../shared/ui/StatusPill';
import { useAuthStore } from '../../../store'; // Import auth
import { canUser } from '../../utils/permissionUtils';

const getIconForType = (type) => {
  switch (type) {
    case 'Bug': return <Bug className="w-4 h-4 text-red-500" />;
    case 'Document': return <FileText className="w-4 h-4 text-blue-500" />;
    default: return <CheckSquare className="w-4 h-4 text-green-500" />;
  }
};

const TableRow = React.memo(({ row, isSelected, onSelect, onEdit, onDelete, onStatusChange }) => {
  const { user } = useAuthStore(); // Get current user

  // Permission Checks
  const canEdit = canUser('task.edit', user, row);
  const canDelete = canUser('task.delete', user, row);
  const canTransition = canUser('task.transition', user, row);

  return (
    <tr 
      className={cn(
        "group border-b border-border/50 hover:bg-muted/20 transition-colors last:border-0",
        isSelected && "bg-primary/5 hover:bg-primary/10"
      )}
    >
      <td className="p-4 w-10">
        <input 
          type="checkbox" 
          checked={isSelected}
          onChange={() => onSelect(row.id)}
          className="rounded border-border w-4 h-4 accent-primary cursor-pointer"
          aria-label={`Select task: ${row.title}`}
        />
      </td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          {getIconForType(row.type)}
          <span className="font-medium text-foreground text-sm">{row.title}</span>
          <Star 
            className="w-3 h-3 text-muted-foreground/30 hover:text-yellow-400 cursor-pointer transition-colors" 
            role="button"
            aria-label="Star task"
            tabIndex={0}
          />
        </div>
      </td>
      <td className="p-4 text-sm text-muted-foreground">{row.type}</td>
      <td className="p-4">
        <StatusPill 
            status={row.status} 
            dueDate={row.dueDate}
            onChange={canTransition ? (newStatus) => onStatusChange(row.id, newStatus) : undefined}
        />
      </td>
      <td className={cn(
        "p-4 text-sm font-mono",
        row.status === 'Overdue' ? "text-destructive font-medium" : "text-muted-foreground"
      )}>
        {row.dueDate ? new Date(row.dueDate).toLocaleDateString() : '-'}
      </td>
      <td className="p-4">
        <div className="flex gap-1 flex-wrap">
          {row.labels?.map((label) => (
            <LabelBadge key={label}>
              {label}
            </LabelBadge>
          ))}
        </div>
      </td>
      <td className="p-4 text-sm text-muted-foreground">{row.assignedTo || 'Unassigned'}</td>
      <td className="p-4 w-10 text-center relative">
        {(canEdit || canDelete) && (
             <TaskActions 
                onEdit={canEdit ? () => onEdit(row) : undefined} 
                onDelete={canDelete ? () => onDelete(row) : undefined} 
             />
        )}
      </td>
    </tr>
  );
});

export default TableRow;
