import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { es } from "@/i18n";

export const Route = createFileRoute("/es")({
  component: SpanishLayout,
});

function SpanishLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-deep text-deep-foreground">
        <div className="container-site py-2 text-center text-[11px] font-medium tracking-wide text-ice">
          {es.topbar}
        </div>
      </div>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
