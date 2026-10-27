import { ReactNode } from "react";
import { FadeUp } from "@/components/motion-wrapper";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <FadeUp className="mb-12 md:mb-14">
      <p className="eyebrow mb-5">
        <span className="eyebrow-dot" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl md:text-5xl font-bold tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-base mt-4 max-w-2xl"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
