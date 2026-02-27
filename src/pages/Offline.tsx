import { Wifi, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (isOnline) {
    window.location.reload();
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full ocean-gradient flex items-center justify-center">
          <Wifi className="w-12 h-12 text-primary-foreground opacity-50" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">You're Offline</h1>

        <p className="text-muted-foreground mb-8">
          No internet connection detected. Some features may be limited while offline.
          Your bookings will be saved and sent when you're back online.
        </p>

        <div className="space-y-4">
          <Button
            onClick={handleRefresh}
            className="w-full ocean-gradient"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>

          <div className="glass-card p-4 text-left">
            <h3 className="font-semibold mb-2 text-sm">Available Offline:</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>✓ Browse cached pages</li>
              <li>✓ View service information</li>
              <li>✓ See pricing & routes</li>
              <li>✓ Access contact details</li>
            </ul>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            <a href="/" className="text-primary hover:underline">Return to Home</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;

