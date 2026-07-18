interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <h2 className="text-3xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}