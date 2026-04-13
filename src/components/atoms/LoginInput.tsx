import type { ChangeEvent } from "react";

type LoginInputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string; // O erro vindo do Zod será passado aqui
};

export default function LoginInput({
  type,
  placeholder,
  value,
  onChange,
  error,
}: LoginInputProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border p-2 w-full rounded-lg transition-colors 
        bg-white text-black dark:bg-gray-700 dark:text-white
        ${
          error
            ? "border-red-500 focus:outline-red-500"
            : "border-gray-300 dark:border-gray-600 focus:outline-blue-500 dark:focus:outline-blue-400"
        }`}
      />
      {/* Renderização condicional do erro */}
      {error && <span className="text-red-500 text-xs font-medium">{error}</span>}
    </div>
  );
}