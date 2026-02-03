import { Outlet } from 'react-router-dom';

const AppMainContent = () => {
  return (
    <main className="flex-1 overflow-hidden bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default AppMainContent;
