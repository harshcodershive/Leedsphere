import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppSidebar from '../app/components/AppSidebar';
import AppTopBar from '../app/components/AppTopBar';
import AppMainContent from '../app/components/AppMainContent';
import { useUiStore } from '../store';
import { useScrollToTop } from '../shared/hooks/useScrollToTop';

const AppLayout = () => {
  useScrollToTop();
  const { setMobileSidebarOpen } = useUiStore();
  const location = useLocation();

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname, setMobileSidebarOpen]);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <AppTopBar />

        {/* Content */}
        <AppMainContent />
      </div>
    </div>
  );
};

export default AppLayout;
