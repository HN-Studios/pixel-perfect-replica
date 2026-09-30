import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Factory, Snowflake, Ship, Check, ArrowRight } from "lucide-react";
import { es } from "@/i18n";
import { products, featuredIds, productImage, categoryLabels } from "@/data/products";
import { T } from "@/components/site/Pending";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { ProvisionalPhoto } from "@/components/site/ProvisionalPhoto";
import heroMar from "@/assets/hero-mar.jpg";
import planta from "@/assets/planta.jpg";

const title = "Exportadora de pescado congelado en Venezuela | Punta de Piedras";
const description =
  "Más de 18 años trabajando con pescado. Procesamos, congelamos y exportamos 15 especies de pescados y mariscos desde Punta de Piedras, Venezuela, a Guadalupe y Martinica.";

export const Route = createFileRoute("/es/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

const processIcons = [Anchor, Factory, Snowflake, Ship];

function HomePage() {
  const featured = featuredIds.map((id) => products.find((p) => p.id === id)!).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[86vh] items-center">
        <img
          src={heroMar}
          alt="Barco pesquero en el mar Caribe — foto provisional"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/45" />
        <span className="absolute right-4 top-4 z-10 rounded-full bg-pending px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-pending-foreground">
          {es.common.provisionalPhoto}
        </span>

        <div className="container-site pb-40 pt-24 text-primary-foreground md:pb-48">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ice">
              {es.home.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
              {es.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">
              {es.home.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/es/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-[1.03]"
              >
                {es.home.ctaQuote} <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/es/productos"
                className="inline-flex items-center gap-2 rounded-xl border border-ice/60 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ice hover:text-ice-foreground"
              >
                {es.home.ctaProducts}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Franja de datos clave */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-5">
          <div className="container-site">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-border shadow-card sm:grid-cols-2 lg:grid-cols-4">
              {es.home.facts.map((f) => (
                <div key={f.label} className="bg-card px-6 py-6 text-center">
                  <p className="font-display text-xl font-bold text-primary">
                    <T>{f.value}</T>
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <Section className="pt-36 md:pt-44">
        <SectionHeading title={es.home.featuredTitle} subtitle={es.home.featuredSubtitle} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Link
                to="/es/productos"
                hash={p.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="aspect-4/3 border-b border-border bg-white">
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
                  <p className="mt-3 text-sm text-muted-foreground">{p.tags.join(" · ")}</p>
                  {p.seasonShort && (
                    <p className="mt-1 text-xs font-semibold text-accent">
                      {es.products.season}: {p.seasonShort}
                    </p>
                  )}
                  <span className="mt-auto pt-4 text-sm font-semibold text-accent">
                    {es.products.seeSheet} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            to="/es/productos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            {es.home.featuredCta} <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </Section>

      {/* Proceso en 4 pasos */}
      <Section muted>
        <SectionHeading title={es.home.processTitle} subtitle={es.home.processSubtitle} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {es.home.process.map((step, i) => {
            const Icon = processIcons[i] ?? Snowflake;
            return (
              <Reveal key={step.title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-sm font-bold text-ice">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <T>{step.text}</T>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Sobre nosotros */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <ProvisionalPhoto
              src={planta}
              alt="Planta de proceso — foto provisional"
              width={1280}
              height={864}
              className="aspect-4/3"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">{es.home.aboutTitle}</h2>
            <p className="mt-4 text-base text-muted-foreground">
              <T>{es.home.aboutText}</T>
            </p>
            <ul className="mt-6 space-y-3">
              {es.home.aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/es/nosotros"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              Conocer la empresa <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* CTA final */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{es.home.finalCtaTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-ice">{es.home.finalCtaText}</p>
          </div>
          <Link
            to="/es/contacto"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-[1.03]"
          >
            {es.nav.quote} <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
