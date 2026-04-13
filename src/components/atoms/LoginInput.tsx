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
        className={`border p-2 w-full rounded-lg transition-colors ${
          error ? "border-red-500 focus:outline-red-500" : "border-gray-300 focus:outline-blue-500"
        }`}
      />
      {/* Renderização condicional do erro */}
      {error && <span className="text-red-500 text-xs font-medium">{error}</span>}
    </div>
  );
}