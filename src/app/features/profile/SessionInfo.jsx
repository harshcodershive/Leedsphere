import React from 'react';
import { useAuthStore } from '../../../store';

const SessionInfo = () => {
    const { user } = useAuthStore();

    if (!user) return null;

    return (
        <div className="bg-card border border-border rounded-xl p-6 space-y-6 shadow-sm">
            <h3 className="text-lg font-semibold">Session Information</h3>
            
            <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-border/50">
                        <tr className="bg-muted/30">
                            <td className="px-4 py-3 font-medium text-muted-foreground w-1/3">User ID</td>
                            <td className="px-4 py-3 font-mono text-xs">{user.id}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 font-medium text-muted-foreground">Role</td>
                            <td className="px-4 py-3">{user.role}</td>
                        </tr>
                        <tr className="bg-muted/30">
                            <td className="px-4 py-3 font-medium text-muted-foreground">Login Method</td>
                            <td className="px-4 py-3">Email / Password</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 font-medium text-muted-foreground">Status</td>
                            <td className="px-4 py-3 text-green-600 font-medium">Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-xs text-muted-foreground">
                This information is visible only to you.
            </p>
        </div>
    );
};

export default SessionInfo;
