import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  withContainer?: boolean;
  containerClassName?: string;
}

export function Section({
  children,
  id,
  className = "",
  withContainer = true,
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${className}`}
    >
      {withContainer ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}