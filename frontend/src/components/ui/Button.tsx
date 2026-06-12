import React from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-purple text-white hover:bg-purple-700 shadow-sm shadow-purple/30",
  secondary:
    "bg-surface-soft text-navy hover:bg-border",
  ghost:
    "bg-transparent text-purple hover:bg-surface-soft",
  outline:
    "border border-border text-navy bg-white hover:border-purple hover:text-purple",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
