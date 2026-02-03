import React, { useState } from 'react';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';

const SecuritySettings = () => {
  const [formData, setFormData] = useState({ current: '', new: '', confirm: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    
    if (!formData.current || !formData.new || !formData.confirm) {
        setMessage({ type: 'error', text: 'All fields are required.' });
        return;
    }

    if (formData.new !== formData.confirm) {
        setMessage({ type: 'error', text: 'New passwords do not match.' });
        return;
    }

    if (formData.new.length < 8) {
        setMessage({ type: 'error', text: 'Password must be at least 8 characters.' });
        return;
    }

    setIsLoading(true);

    // Simulate API
    setTimeout(() => {
        setIsLoading(false);
        setMessage({ type: 'success', text: 'Password updated successfully.' });
        setFormData({ current: '', new: '', confirm: '' });
    }, 1000);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6 shadow-sm">
      <h3 className="text-lg font-semibold">Security</h3>

      {message.text && (
        <div className={`p-3 text-sm rounded-md border ${
            message.type === 'error' 
                ? 'bg-destructive/10 text-destructive border-destructive/20' 
                : 'bg-green-500/10 text-green-600 border-green-500/20'
        }`}>
           {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <Input 
            label="Current Password"
            type="password"
            name="current"
            value={formData.current}
            onChange={handleChange}
        />
        <Input 
            label="New Password"
            type="password"
            name="new"
            value={formData.new}
            onChange={handleChange}
        />
        <Input 
            label="Confirm New Password"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
        />

        <Button type="submit" variant="outline" isLoading={isLoading}>
            Update Password
        </Button>
      </form>
    </div>
  );
};

export default SecuritySettings;
