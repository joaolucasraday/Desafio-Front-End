import type { ReactNode } from "react";
import { ToggleDarkMode } from "../components/molecules/ToggleDarkMode";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gray-100 dark:bg-gray-900 transition px-4 relative">

      {/* botão no canto */}
      <div className="absolute top-4 right-4">
        <ToggleDarkMode />
      </div>

      {children}
    </div>
  );
}