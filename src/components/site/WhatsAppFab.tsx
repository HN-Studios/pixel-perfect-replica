import { MessageCircle } from "lucide-react";

/** Número pendiente: al confirmarlo, sustituir "#" por https://wa.me/58XXXXXXXXX */
export function WhatsAppFab() {
  return (
    <a
      href="#"
      aria-label="WhatsApp (número pendiente)"
      title="WhatsApp · número pendiente"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
