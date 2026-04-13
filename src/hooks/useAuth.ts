// Hook responsável por gerenciar o estado de autenticação e persistência da sessão
import { useState } from "react";
import { login } from "../services/auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  // Realiza o login e atualiza o estado de autenticação
  function handleLogin(email: string, password: string) {
    const success = login(email, password);

    if (success) {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
    }

    return success;
  }

  // Encerra a sessão do usuário
  function logout() {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  }

  return { isAuthenticated, handleLogin, logout };
}