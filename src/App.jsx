import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { useAuthStore } from "./store";

function App() {
  const loadSession = useAuthStore((state) => state.loadSession);

  // Initialize Auth Session
  useEffect(() => {
    loadSession();
  }, [loadSession]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
