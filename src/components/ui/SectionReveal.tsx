import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  return <div className={className}>{children}</div>;
}
