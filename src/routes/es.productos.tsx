import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { es, company } from "@/i18n";
import {
  products,
  categoryLabels,
  productImage,
  type Category,
  type Product,
} from "@/data/products";
import { Reveal } from "@/components/site/Reveal";
import { Section, PageHero } from "@/components/site/Section";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const title = "Productos | Pescado y mariscos congelados de Venezuela";
const description =
  "Pargos, dorado, carite, sierra, mero, pez león, langosta, pulpo y más: 15 especies congeladas con ficha técnica, tallas y presentaciones.";

export const Route = createFileRoute("/es/productos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductsPage,
});

type Filter = "todos" | Category;
const filters: Filter[] = ["todos", "pargos", "pescados", "mariscos"];

function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [selected, setSelected] = useState<Product | null>(null);

  // Abrir la ficha si se llega con #id (desde los destacados de Inicio).
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const p = products.find((x) => x.id === id);
    if (p) setSelected(p);
  }, []);

  const visible = filter === "todos" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <PageHero title={es.products.title} lead={es.products.lead} />

      <Section>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const count =
              f === "todos" ? products.length : products.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary",
                )}
              >
                {f === "todos" ? es.products.all : categoryLabels[f]} ({count})
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 70}>
              <button
                type="button"
                id={p.id}
                onClick={() => setSelected(p)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="aspect-4/3 w-full border-b border-border bg-white">
                  <img
                    src={productImage(p.id)}
                    alt={`${p.name} (${p.english})`}
                    loading="lazy"
                    className="h-full w-full object-contain p-3"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-ice/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                    {categoryLabels[p.category]}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-primary">{p.name}</h3>
                  <p className="text-xs italic text-muted-foreground">
                    {p.english} · {p.scientific}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                    {p.seasonShort && (
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {es.products.season}: {p.seasonShort}
                      </span>
                    )}
                  </div>
                  <span className="mt-auto pt-4 text-sm font-semibold text-accent">
                    {es.products.seeSheet} →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-secondary p-7 md:flex-row md:items-center">
            <p className="max-w-2xl font-display text-base italic text-primary md:text-lg">
              {es.products.note}
            </p>
            <a
              href={company.catalogPdf}
              target="_blank"
              rel="noopener"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="size-4" /> {es.products.downloadPdf}
            </a>
          </div>
        </Reveal>
      </Section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0 sm:rounded-2xl">
          {selected && <ProductSheet product={selected} />}
        </DialogContent>
      </Dialog>
    </>
  );
}

function ProductSheet({ product: p }: { product: Product }) {
  const s = es.products.sheet;
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: s.english, value: p.english },
    { label: s.scientific, value: <em>{p.scientific}</em> },
    { label: s.origin, value: s.originValue },
    { label: s.zone, value: s.zoneValue },
    { label: s.fishing, value: p.fishing },
    { label: s.season, value: p.season },
    { label: s.products, value: <List items={p.products} /> },
    { label: s.presentation, value: <List items={p.presentation} /> },
    { label: s.sizes, value: <List items={p.sizes.map((z) => `${z.label}: ${z.value}`)} /> },
  ];

  return (
    <div className="grid md:grid-cols-[0.9fr_1.1fr]">
      <div className="flex items-center justify-center border-b border-border bg-white p-6 md:border-b-0 md:border-r">
        <img src={productImage(p.id)} alt={`${p.name} (${p.english})`} className="w-full object-contain" />
      </div>
      <div className="p-6 md:p-8">
        <span className="rounded-full bg-ice/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
          {s.title}
        </span>
        <DialogTitle className="mt-3 font-display text-3xl font-extrabold text-primary">
          {p.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {s.title} de {p.name}
        </DialogDescription>
        <dl className="mt-4 divide-y divide-border text-sm">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[42%_58%] gap-3 py-2.5">
              <dt className="text-muted-foreground">{r.label}</dt>
              <dd className="text-foreground">{r.value}</dd>
            </div>
          ))}
        </dl>
        <Link
          to="/es/contacto"
          search={{ producto: p.id }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03]"
        >
          {s.quote}
        </Link>
      </div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
