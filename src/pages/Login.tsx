import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../validations/loginValidation";
import { useAuth } from "../hooks/useAuth";
import Layout from "../layouts/Layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
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
        alert("Credenciais inválidas");
      }
    }
  }

  return (
    <Layout>
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-xl mb-4">Login</h1>
          <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
          <input
          type="password"
          placeholder="Senha"
          className="border p-2 w-full mb-2"
          onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
          <button className="bg-blue-500 text-white w-full p-2">
          Entrar
          </button>
      </form>
    </Layout>
  );
}