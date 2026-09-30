import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { es, company } from "@/i18n";
import { products } from "@/data/products";
import { T } from "@/components/site/Pending";
import { Reveal } from "@/components/site/Reveal";
import { Section, PageHero } from "@/components/site/Section";

const title = "Contacto | Solicite su cotización de pescado congelado";
const description =
  "Solicite una cotización de pescados y mariscos congelados de Venezuela. Correo, teléfono y WhatsApp de Congeladora y Procesadora Punta de Piedras.";

export const Route = createFileRoute("/es/contacto")({
  validateSearch: (search: Record<string, unknown>): { producto?: string } => ({
    producto: typeof search.producto === "string" ? search.producto : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const icons = [Mail, Phone, MessageCircle, MapPin, Clock];
const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ice/60";
const label = "mb-1.5 block text-sm font-semibold text-primary";

function ContactPage() {
  const { producto } = Route.useSearch();
  const f = es.contact.fields;
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const productName =
      products.find((p) => p.id === get("producto"))?.name ??
      (get("producto") === "varios" ? f.several : "");
    const body = [
      `${f.name}: ${get("nombre")}`,
      `${f.company}: ${get("empresa")}`,
      `${f.email}: ${get("email")}`,
      `${f.phone}: ${get("telefono")}`,
      `${f.country}: ${get("pais")}`,
      `${f.product}: ${productName}`,
      `${f.volume}: ${get("volumen")}`,
      `${f.incoterm}: ${get("incoterm")}`,
      "",
      get("mensaje"),
    ].join("\n");
    const subject = `Solicitud de cotización – ${get("empresa") || get("nombre")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero title={es.contact.title} lead={es.contact.lead} />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
            >
              <h2 className="font-display text-xl font-bold text-primary">{es.contact.formTitle}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="nombre">{f.name}</label>
                  <input id="nombre" name="nombre" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="empresa">{f.company}</label>
                  <input id="empresa" name="empresa" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="email">{f.email}</label>
                  <input id="email" name="email" type="email" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="telefono">{f.phone}</label>
                  <input id="telefono" name="telefono" type="tel" className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="pais">{f.country}</label>
                  <select id="pais" name="pais" className={field} defaultValue="">
                    <option value="" disabled>{f.select}</option>
                    {es.contact.countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="producto">{f.product}</label>
                  <select id="producto" name="producto" className={field} defaultValue={producto ?? ""}>
                    <option value="" disabled>{f.select}</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.english})
                      </option>
                    ))}
                    <option value="varios">{f.several}</option>
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="volumen">{f.volume}</label>
                  <select id="volumen" name="volumen" className={field} defaultValue="">
                    <option value="" disabled>{f.select}</option>
                    {es.contact.volumes.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="incoterm">{f.incoterm}</label>
                  <select id="incoterm" name="incoterm" className={field} defaultValue="">
                    <option value="" disabled>{f.select}</option>
                    {es.contact.incoterms.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="mensaje">{f.message}</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder={f.messagePlaceholder}
                    className={field}
                  />
                </div>
              </div>
              <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 size-4 accent-[var(--accent)]" />
                {f.consent}
              </label>
              <button
                type="submit"
                className="mt-6 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                {f.submit}
              </button>
              {sent && (
                <p className="mt-5 flex items-start gap-2 rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> {es.contact.success}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-xl font-bold text-primary">{es.contact.infoTitle}</h2>
            <ul className="mt-6 space-y-5">
              {es.contact.info.map((item, i) => {
                const Icon = icons[i] ?? Mail;
                return (
                  <li key={item.label} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-primary">{item.label}</p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener"
                          className="break-words text-sm text-muted-foreground hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          <T>{item.value}</T>
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-8 font-display text-base font-bold text-primary">{es.contact.mapTitle}</h3>
            <div className="mt-3 aspect-4/3 overflow-hidden rounded-2xl border border-border">
              <iframe
                title={`Mapa: ${company.place}`}
                src="https://www.google.com/maps?q=Punta+de+Piedras,+Venezuela&z=13&output=embed"
                loading="lazy"
                className="h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
