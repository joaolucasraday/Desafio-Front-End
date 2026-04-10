import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
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
        <button
          onClick={handleLogout}
          className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </Layout>
  );
}