import { MessageCircle } from "lucide-react";
import { company } from "@/i18n";

export function WhatsAppFab() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label={`Escríbanos por WhatsApp (${company.whatsapp})`}
      title={`WhatsApp ${company.whatsapp}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
