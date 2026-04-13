// Componente responsável pelo formulário de login com validação e autenticação
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../atoms/LoginInput";
import Button from "../atoms/Button";
import { loginSchema } from "../../validations/loginValidation";
import { useAuth } from "../../hooks/useAuth";

type Errors = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validação dos dados com Zod antes do envio
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0], 
        password: fieldErrors.password?.[0] 
      });
      return;
    }

    setErrors({});
    const success = handleLogin(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setErrors({ password: "Credenciais inválidas" });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md p-6 rounded-xl shadow-lg 
      bg-white text-black 
      dark:bg-gray-800 dark:text-white 
      flex flex-col gap-4 
      transition-colors duration-300"
    >
    <h1 className="text-xl font-bold text-center">Login</h1>
    <LoginInput
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={errors.email}
    />
    <LoginInput
      type="password"
      placeholder="Senha"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      error={errors.password}
    />
    <Button type="submit">Entrar</Button>
  </form>
  );
}