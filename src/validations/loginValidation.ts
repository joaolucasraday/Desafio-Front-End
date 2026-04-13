import { z } from "zod";

// Definindo o esquema de validação
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

// Isso exporta o tipo baseado no schema acima (útil para o seu formulário)
export type LoginFormData = z.infer<typeof loginSchema>;