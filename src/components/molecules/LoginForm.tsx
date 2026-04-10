import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../atoms/LoginInput";
import EnterButton from "../atoms/EnterButton";
import { validateLogin } from "../../validations/loginValidation";
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

    const validationErrors = validateLogin(email, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const success = handleLogin(email, password);

      if (success) {
        navigate("/dashboard");
      } else {
        setErrors({ password: "Credenciais inválidas" });
      }
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-xl mb-4">Login</h1>

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

      <EnterButton>Entrar</EnterButton>
    </form>
  );
}