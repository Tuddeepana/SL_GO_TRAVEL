import { MessageCircle } from "lucide-react";
import { sendWhatsApp } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => sendWhatsApp("Hello SL Go Travel, I need more information.")}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl animate-float"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" style={{ color: "#fff" }} />
    </button>
  );
};

export default WhatsAppButton;
