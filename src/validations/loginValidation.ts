export function validateLogin(email: string, password: string) {
  const errors: { email?: string; password?: string } = {};

  if (!email.includes("@")) {
    errors.email = "Email inválido";
  }

  if (password.length < 6) {
    errors.password = "Senha deve ter no mínimo 6 caracteres";
  }

  return errors;
}