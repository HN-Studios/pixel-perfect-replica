import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { es } from "@/i18n";
import { T } from "@/components/site/Pending";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading, PageHero } from "@/components/site/Section";
import { ProvisionalPhoto } from "@/components/site/ProvisionalPhoto";
import planta from "@/assets/planta.jpg";
import empacado from "@/assets/producto-empacado.jpg";
import equipo from "@/assets/equipo.jpg";

const title = "Nosotros | Congeladora y Procesadora Punta de Piedras";
const description =
  "Más de 18 años trabajando con pescado y 4 años procesando y congelando para exportar a Guadalupe y Martinica.";

export const Route = createFileRoute("/es/nosotros")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const gallery = [
  { src: planta, alt: "Planta de proceso — foto provisional", caption: "Planta" },
  { src: empacado, alt: "Producto empacado — foto provisional", caption: "Producto empacado" },
  { src: equipo, alt: "Equipo de trabajo — foto provisional", caption: "Equipo" },
];

function AboutPage() {
  return (
    <>
      <PageHero title={es.about.title} lead={es.about.lead} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              {es.about.historyTitle}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              <T>{es.about.historyText}</T>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-secondary p-7 shadow-soft">
              <MapPin className="size-7 text-accent" />
              <h2 className="mt-4 font-display text-xl font-bold text-primary">
                {es.about.destinationsTitle}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{es.about.destinationsText}</p>
              <div className="mt-5 flex gap-2">
                {["Guadalupe", "Martinica"].map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-ice px-3 py-1 text-xs font-semibold text-ice-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <SectionHeading title={es.about.valuesTitle} align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {es.about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="h-full rounded-2xl bg-card p-7 shadow-soft">
                <h3 className="font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  <T>{v.text}</T>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={es.about.galleryTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.caption} delay={i * 90}>
              <ProvisionalPhoto
                src={g.src}
                alt={g.alt}
                width={1280}
                height={864}
                className="aspect-4/3"
              />
              <p className="mt-3 text-sm font-medium text-primary">{g.caption}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
