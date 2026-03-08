import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "section" | "div" | "article";
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  innerClassName,
  as: Tag = "section",
  id,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn("py-16 md:py-24", className)}
    >
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
