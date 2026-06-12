import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  bordered?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padded = true,
  bordered = true,
  hover = false,
}) => {
  return (
    <div
      className={[
        "bg-surface rounded-2xl",
        padded ? "p-5" : "",
        bordered ? "border border-border" : "",
        hover
          ? "transition-shadow duration-200 hover:shadow-md hover:shadow-purple/10 cursor-pointer"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
}) => {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-navy font-semibold text-base leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-muted text-sm mt-0.5">{subtitle}</p>
        )}
      </div>
      {action && <div className="ml-4 shrink-0">{action}</div>}
    </div>
  );
};
