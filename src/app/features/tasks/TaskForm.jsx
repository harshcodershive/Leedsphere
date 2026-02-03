import React, { useState, useEffect } from 'react';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import { useTaskStore } from '../../../store';

const PRIORITY_OPTIONS = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' }
];

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'in_review', label: 'In Review' },
  { value: 'approved', label: 'Approved' },
  { value: 'completed', label: 'Completed' }
];

const TaskForm = ({ task, onClose }) => {
  const { addTask, updateTask, isLoading } = useTaskStore();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'draft',
    priority: 'Medium',
    dueDate: '',
    assignedTo: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        status: task.status || 'draft',
        priority: task.priority || 'Medium',
        dueDate: task.dueDate ? task.dueDate.split('T')[0] : '', // Format for date input
        assignedTo: task.assignedTo || ''
      });
    }
  }, [task]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (task) {
      // Update
      await updateTask(task.id, formData);
    } else {
      // Create
      await addTask({
        ...formData,
        status: 'draft', // Force new tasks to start as draft
        createdBy: 'Current User' // Mock
      });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Channel name"
        placeholder="e.g. #marketing"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        error={errors.title}
        disabled={isLoading}
      />

      <div className="space-y-2">
        <label className="text-sm font-medium">Topic</label>
        <textarea 
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="What is this channel about?"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          disabled={isLoading}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Status is usually managed via workflow, but allowing edit here for now */}
        <div className="space-y-2">
            <label className="text-sm font-medium">Activity</label>
            <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                disabled={isLoading}
            >
                {STATUS_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium">Priority</label>
            <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                disabled={isLoading}
            >
                {PRIORITY_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
      </div>

      <Input
        type="date"
        label="Due Date"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        disabled={isLoading}
      />

      <Input
        label="Add members"
        placeholder="e.g. Jane Doe"
        value={formData.assignedTo}
        onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
        disabled={isLoading}
      />

      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline" type="button" onClick={onClose} disabled={isLoading}>
            Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
            {task ? 'Save Changes' : 'Create Channel'}
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
