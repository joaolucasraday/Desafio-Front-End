import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/atoms/LogoutButton";
import Layout from "../layouts/Layout";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Bem vindo ao Dashboard</h1>
        <LogoutButton onClick={handleLogout} />
      </div>
    </Layout>
  );
}