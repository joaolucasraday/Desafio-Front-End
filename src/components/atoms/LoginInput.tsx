import type { ChangeEvent } from "react";

type LoginInputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function LoginInput({
  type,
  placeholder,
  value,
  onChange,
  error,
}: LoginInputProps) {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 w-full mb-2 rounded-lg"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}