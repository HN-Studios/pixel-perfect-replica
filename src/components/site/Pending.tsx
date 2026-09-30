import type { ReactNode } from "react";

/**
 * Resalta en amarillo suave cualquier dato pendiente escrito entre corchetes.
 * Uso: <T>{"[XX] años de experiencia"}</T>
 */
export function T({ children }: { children: string }): ReactNode {
  const parts = children.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <mark
        key={i}
        className="rounded-sm bg-pending px-1 py-0.5 font-medium text-pending-foreground"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
