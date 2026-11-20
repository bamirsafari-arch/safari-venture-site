import { MessageCircle, Sparkles } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";

const WHATSAPP = "+254725957050";

export function FloatingActions() {
  const { open } = useQuoteModal();
  const wa = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent("Hi BAMIR, I'm interested in a safari kindly provide more details!")}`;

  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <button
        onClick={() => open()}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 pl-5 pr-6 py-3.5 rounded-full bg-gradient-to-r from-gold to-amber-500 text-night font-semibold shadow-2xl shadow-amber-500/40 hover:scale-105 transition-transform"
      >
        <Sparkles className="w-5 h-5" />
        <span>Get a Quote</span>
      </button>
    </>
  );
}
