type LogoutButtonProps = {
  onClick: () => void;
};

export default function LogoutButton({ onClick }: LogoutButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
    >
      Sair do Sistema
    </button>
  );
}