import { cn } from "@/lib/utils";

/**
 * Imagen provisional, marcada visiblemente. Para sustituirla por una foto real,
 * basta cambiar el archivo importado en src/assets.
 */
export function ProvisionalPhoto({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-secondary", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      <span className="absolute left-3 top-3 rounded-full bg-pending px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-pending-foreground shadow-soft">
        Foto provisional
      </span>
    </div>
  );
}
