import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/fr")({
  head: () => ({
    meta: [
      { title: "Version française — bientôt disponible | Punta de Piedra" },
      {
        name: "description",
        content:
          "La version française du site de Procesadora y Congeladora Punta de Piedra est en préparation.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ComingSoonFR,
});

function ComingSoonFR() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center text-primary-foreground">
      <p className="font-display text-lg font-extrabold tracking-[0.18em]">PUNTA DE PIEDRA</p>
      <h1 className="mt-6 text-3xl font-bold">Version française bientôt disponible</h1>
      <p className="mt-3 max-w-md text-sm text-ice">
        Cette version est en préparation. Vous pouvez consulter le site en espagnol.
      </p>
      <Link
        to="/es"
        className="mt-8 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
      >
        Voir le site en espagnol
      </Link>
    </div>
  );
}
