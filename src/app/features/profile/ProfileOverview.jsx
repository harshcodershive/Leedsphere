import React from 'react';
import { useAuthStore } from '../../../store';

const ProfileOverview = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  const initials = user.name 
    ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() 
    : 'JD';

  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-600 border-4 border-background flex items-center justify-center text-3xl font-bold text-white shadow-md">
        {initials}
      </div>
      
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">{user.name}</h2>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>

      <div className="flex gap-2 w-full justify-center pt-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {user.role || 'User'}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-600">
          Active
        </span>
      </div>

      <div className="w-full pt-4 border-t border-border mt-4">
        <div className="flex justify-between text-xs text-muted-foreground">
           <span>Member since</span>
           <span>Jan 2024</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
