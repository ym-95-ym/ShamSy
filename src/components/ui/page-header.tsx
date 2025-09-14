import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <section className={cn(
      "pt-32 pb-16 shamsy-bg-gradient text-center",
      className
    )}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};