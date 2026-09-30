import { createFileRoute } from "@tanstack/react-router";
import { Thermometer, ShieldCheck, Truck } from "lucide-react";
import { es } from "@/i18n";
import { T } from "@/components/site/Pending";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading, PageHero } from "@/components/site/Section";

const title = "Procesos y calidad | Exportación de pescado congelado a la UE";
const description =
  "Proceso en seis etapas, cadena de frío controlada, HACCP y habilitación sanitaria para exportar a la Unión Europea.";

export const Route = createFileRoute("/es/procesos-y-calidad")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHero title={es.quality.title} lead={es.quality.lead} />

      <Section>
        <SectionHeading title={es.quality.stagesTitle} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {es.quality.stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="font-display text-sm font-bold text-ice">
                  Etapa 0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <T>{s.text}</T>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading title={es.quality.coldTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {es.quality.cold.map((c, i) => (
            <Reveal key={c.step} delay={i * 90}>
              <div className="rounded-2xl bg-primary p-7 text-primary-foreground shadow-soft">
                <Thermometer className="size-7 text-ice" />
                <p className="mt-4 font-display text-2xl font-bold">
                  <T>{c.temp}</T>
                </p>
                <p className="mt-1 text-sm text-ice">{c.step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={es.quality.certsTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {es.quality.certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div
                className={
                  "h-full rounded-2xl border p-7 shadow-soft " +
                  ("highlight" in c && c.highlight
                    ? "border-accent bg-accent/5"
                    : "border-border bg-card")
                }
              >
                <ShieldCheck
                  className={
                    "size-7 " + ("highlight" in c && c.highlight ? "text-accent" : "text-ice")
                  }
                />
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <T>{c.text}</T>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading title={es.quality.logisticsTitle} />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          {es.quality.logistics.map((l) => (
            <div
              key={l.label}
              className="flex flex-col gap-1 border-b border-border px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Truck className="size-4 text-ice" /> {l.label}
              </span>
              <span className="text-sm text-muted-foreground">
                <T>{l.value}</T>
              </span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
