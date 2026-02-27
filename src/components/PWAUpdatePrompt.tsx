import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Button } from "@/components/ui/button";
import { RefreshCw, X } from "lucide-react";

const PWAUpdatePrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("Service Worker registered:", r);
    },
    onRegisterError(error) {
      console.error("Service Worker registration error:", error);
    },
  });

  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (needRefresh) {
      setShowPrompt(true);
    }
  }, [needRefresh]);

  const handleUpdate = async () => {
    await updateServiceWorker(true);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setNeedRefresh(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-4 left-4 right-4 md:left-auto md:right-4 z-50 animate-slide-in-right max-w-md">
      <div className="glass-card p-4 shadow-2xl border-2 border-primary/20">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <div className="flex items-start gap-4 pr-6">
          <div className="w-10 h-10 ocean-gradient rounded-full flex items-center justify-center flex-shrink-0">
            <RefreshCw className="w-5 h-5 text-primary-foreground" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-1">Update Available</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A new version of Slanka Taxi is available. Update now for the latest features and improvements.
            </p>

            <div className="flex gap-2">
              <Button
                onClick={handleUpdate}
                className="ocean-gradient text-primary-foreground"
                size="sm"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Update Now
              </Button>
              <Button
                onClick={handleDismiss}
                variant="outline"
                size="sm"
              >
                Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAUpdatePrompt;

