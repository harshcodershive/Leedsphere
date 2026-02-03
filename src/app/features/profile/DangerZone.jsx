import React from 'react';
import { useAuthStore } from '../../../store';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/ui/Button';

const DangerZone = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            logout();
            navigate('/login');
        }
    };

    return (
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 space-y-4">
             <h3 className="text-lg font-semibold text-destructive">Danger Zone</h3>
             <p className="text-sm text-muted-foreground">
                Logging out will clear your session and local storage data.
             </p>
             <Button variant="default" className="bg-destructive hover:bg-destructive/90 text-white" onClick={handleLogout}>
                Log Out
             </Button>
        </div>
    );
};

export default DangerZone;
