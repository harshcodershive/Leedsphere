import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-[400px] space-y-6">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
            <div className="w-5 h-5 bg-primary rounded-sm" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Card Content */}
        <div className="bg-card text-card-foreground shadow-sm border border-border/50 rounded-xl overflow-hidden p-6 md:p-8">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>
            &copy; 2026 Docoment App. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
