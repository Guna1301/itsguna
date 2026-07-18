import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-5xl px-6 lg:px-8 border-x border-black/10 dark:border-white/10 ${className}`}
    >
      {children}
    </div>
  );
}