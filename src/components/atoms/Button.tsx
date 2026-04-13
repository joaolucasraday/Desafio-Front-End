// Botão reutilizável com variações de estilo
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "danger";
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "w-full sm:w-auto px-4 py-2 rounded-lg transition text-white";

  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
    danger:
      "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}