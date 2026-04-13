// Página de dashboard com controle de sessão e ação de logout
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import Layout from "../layouts/Layout";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Encerra a sessão e redireciona para a tela de login
  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black dark:text-white">Bem vindo ao Dashboard</h1>
        <Button variant="danger" onClick={handleLogout}>Sair do Sistema</Button>
      </div>
    </Layout>
  );
}