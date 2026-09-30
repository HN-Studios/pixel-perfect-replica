import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section className={cn("py-16 md:py-24", muted && "bg-secondary", className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

export function PageHero({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="container-site">
        <h1 className="font-display text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-ice md:text-lg">{lead}</p>
      </div>
    </section>
  );
}
