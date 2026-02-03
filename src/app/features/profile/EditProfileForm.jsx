import React, { useState } from 'react';
import { useAuthStore } from '../../../store';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';

const EditProfileForm = () => {
  const { user, updateProfile, isLoading } = useAuthStore();
  const [name, setName] = useState(user?.name || '');
  const [isEditing, setIsEditing] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    await updateProfile({ name });
    setIsEditing(false);
    setSuccessMsg('Profile updated successfully.');
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleCancel = () => {
    setName(user?.name || '');
    setIsEditing(false);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Profile Details</h3>
        {!isEditing && (
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        )}
      </div>

      {successMsg && (
        <div className="p-3 text-sm text-green-600 bg-green-500/10 border border-green-500/20 rounded-md">
           {successMsg}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid gap-2">
            <Input 
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing || isLoading}
            />
        </div>

        <div className="grid gap-2">
           <Input 
              label="Email Address"
              value={user?.email || ''}
              disabled={true} // Email cannot be changed in this mock
              className="bg-muted/50"
           />
           <p className="text-xs text-muted-foreground">Contact support to change your email.</p>
        </div>

        {isEditing && (
          <div className="flex gap-2 pt-2">
            <Button type="submit" isLoading={isLoading}>
              Save Changes
            </Button>
            <Button type="button" variant="ghost" onClick={handleCancel} disabled={isLoading}>
              Cancel
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditProfileForm;
