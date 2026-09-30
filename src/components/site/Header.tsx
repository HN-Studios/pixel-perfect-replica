import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { es } from "@/i18n";
import { locales } from "@/i18n";
import { cn } from "@/lib/utils";

const links = [
  { to: "/es", label: es.nav.home, exact: true },
  { to: "/es/nosotros", label: es.nav.about },
  { to: "/es/productos", label: es.nav.products },
  { to: "/es/procesos-y-calidad", label: es.nav.quality },
  { to: "/es/contacto", label: es.nav.contact },
] as const;

function LangSwitcher({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 text-xs font-semibold", className)}>
      {locales.map((l) =>
        l.available ? (
          <span
            key={l.id}
            className="rounded-md bg-ice px-2 py-1 text-ice-foreground"
            aria-current="true"
          >
            {l.label}
          </span>
        ) : (
          <span
            key={l.id}
            title={`${l.label} — ${es.common.comingSoon}`}
            className="cursor-not-allowed rounded-md px-2 py-1 text-primary-foreground/45"
          >
            {l.label}
          </span>
        ),
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary/95 backdrop-blur">
      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/es" className="group flex flex-col leading-tight">
          <span className="font-display text-base font-extrabold tracking-[0.18em] text-primary-foreground sm:text-lg">
            {es.brand.name}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-ice">
            {es.brand.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: "exact" in l ? l.exact : false }}
              activeProps={{ className: "text-ice" }}
              className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-ice"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher />
          <Link
            to="/es/contacto"
            className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            {es.nav.quote}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-primary-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: "exact" in l ? l.exact : false }}
                activeProps={{ className: "text-ice" }}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-primary-foreground/90"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/es/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              {es.nav.quote}
            </Link>
            <LangSwitcher className="mt-3 px-2" />
          </nav>
        </div>
      )}
    </header>
  );
}
