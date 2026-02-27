import { useState, useEffect } from "react";
import { X, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    const isStandaloneMode = globalThis.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(isStandaloneMode);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in globalThis);
    setIsIOS(iOS);

    // Listen for beforeinstallprompt event (Android/Chrome)
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Show prompt after 3 seconds delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    globalThis.addEventListener("beforeinstallprompt", handler);

    // For iOS, show install prompt if not standalone and not dismissed
    if (iOS && !isStandaloneMode) {
      const dismissed = localStorage.getItem("pwa-ios-dismissed");
      if (!dismissed) {
        setTimeout(() => {
          setShowPrompt(true);
        }, 5000);
      }
    }

    return () => {
      globalThis.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for user response
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    }

    // Clear the deferred prompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    if (isIOS) {
      localStorage.setItem("pwa-ios-dismissed", "true");
    }
  };

  // Don't show if already installed
  if (isStandalone) return null;

  // Don't show if dismissed
  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 animate-slide-in-right">
      <div className="glass-card p-4 md:p-6 shadow-2xl border-2 border-primary/20 max-w-md">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 ocean-gradient rounded-xl flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-6 h-6 text-primary-foreground" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-1">Install Slanka Taxi App</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {isIOS
                ? "Add to your home screen for quick access and offline booking"
                : "Install our app for faster access, offline support, and push notifications"}
            </p>

            {isIOS ? (
              <div className="text-xs text-muted-foreground space-y-2">
                <p className="font-semibold">To install on iOS:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Tap the Share button (square with arrow)</li>
                  <li>Scroll down and tap "Add to Home Screen"</li>
                  <li>Tap "Add" to confirm</li>
                </ol>
              </div>
            ) : (
              <Button
                onClick={handleInstallClick}
                className="w-full ocean-gradient text-primary-foreground"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Install App
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;

