import { useState } from "react";
import { login } from "../services/auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  function handleLogin(email: string, password: string) {
    const success = login(email, password);

    if (success) {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
    }

    return success;
  }

  function logout() {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  }

  return { isAuthenticated, handleLogin, logout };
}