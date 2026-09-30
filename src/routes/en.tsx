import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "English version — coming soon | Punta de Piedra" },
      {
        name: "description",
        content:
          "The English version of the Procesadora y Congeladora Punta de Piedra website is coming soon.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ComingSoonEN,
});

function ComingSoonEN() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center text-primary-foreground">
      <p className="font-display text-lg font-extrabold tracking-[0.18em]">PUNTA DE PIEDRA</p>
      <h1 className="mt-6 text-3xl font-bold">English version coming soon</h1>
      <p className="mt-3 max-w-md text-sm text-ice">
        This version is being prepared. Meanwhile, you can browse the site in Spanish.
      </p>
      <Link
        to="/es"
        className="mt-8 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
      >
        Browse in Spanish
      </Link>
    </div>
  );
}
