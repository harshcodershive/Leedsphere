import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-background p-6 md:p-8 relative scroll-smooth">
      <div className="max-w-7xl mx-auto h-full"> 
        {/* Container for centering if needed, otherwise full fluid */}
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;
