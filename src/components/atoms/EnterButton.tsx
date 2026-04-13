import type { ReactNode } from "react";

type EnterButtonProps = {
  children: ReactNode;
};

export default function EnterButton({ children }: EnterButtonProps) {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white w-full p-2 rounded-lg hover:bg-blue-600 transition"
    >
      {children}
    </button>
  );
}