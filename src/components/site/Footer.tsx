import { Link } from "@tanstack/react-router";
import { es, company } from "@/i18n";
import { T } from "./Pending";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold tracking-[0.18em]">{es.brand.name}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-ice">
            {es.brand.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">{es.footer.about}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ice">
            {es.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/es" className="hover:text-ice">
                {es.nav.home}
              </Link>
            </li>
            <li>
              <Link to="/es/nosotros" className="hover:text-ice">
                {es.nav.about}
              </Link>
            </li>
            <li>
              <Link to="/es/productos" className="hover:text-ice">
                {es.nav.products}
              </Link>
            </li>
            <li>
              <Link to="/es/procesos-y-calidad" className="hover:text-ice">
                {es.nav.quality}
              </Link>
            </li>
            <li>
              <Link to="/es/contacto" className="hover:text-ice">
                {es.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ice">
            {es.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {es.contact.info.map((i) => (
              <li key={i.label}>
                <span className="text-primary-foreground/60">{i.label}: </span>
                {"href" in i && i.href ? (
                  <a
                    href={i.href}
                    target={i.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="break-words hover:text-ice"
                  >
                    {i.value}
                  </a>
                ) : (
                  <T>{i.value}</T>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName} · RIF {company.rif} ·{" "}
            {es.footer.rights}
          </p>
          <p className="max-w-xl">
            <span className="font-semibold text-primary-foreground/80">
              {es.footer.privacy}:{" "}
            </span>
            <T>{es.footer.privacyText}</T>
          </p>
        </div>
      </div>
    </footer>
  );
}
