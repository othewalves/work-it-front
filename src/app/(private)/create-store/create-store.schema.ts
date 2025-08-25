import { z } from "zod";

export const CreateStoreSchema = z.object({
    name: z
        .string()
        .min(1, { message: "O nome é obrigatório" }),
    slogan: z
        .string()
        .optional(),
    category: z
        .string()
        .min(1, { message: "A categoria é obrigatória" }),
    cnpj: z
        .string()
        .min(14, { message: "O CNPJ deve ter no mínimo 14 caracteres" })
        .max(18, { message: "O CNPJ deve ter no máximo 18 caracteres" })
        .regex(/^\d{14}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
            message: "Formato de CNPJ inválido"
        }),
    description: z
        .string()
        .optional(),
    phone: z
        .string()
        .min(8, { message: "O telefone deve ter no mínimo 8 dígitos" })
        .nonempty({ message: "É necessário informar pelo menos um telefone" }),
    email: z
        .string()
        .min(1, { message: 'O e-mail é obrigatório' }),
    photo: z
        .any()
        .refine((files) => files?.[0]?.type?.startsWith("image/"), {
            message: "O arquivo deve ser uma imagem",
        })
        .optional(),
});

export type CreateStoreForm = z.infer<typeof CreateStoreSchema>;