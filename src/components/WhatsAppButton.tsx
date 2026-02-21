import { MessageCircle } from "lucide-react";
import { sendWhatsApp } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => sendWhatsApp("Hello SL Go Travel, I need more information.")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] group"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
      <span className="text-primary-foreground font-semibold text-sm hidden sm:inline">Chat with us</span>
    </button>
  );
};

export default WhatsAppButton;
