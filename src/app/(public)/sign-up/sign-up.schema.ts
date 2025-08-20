import { z } from 'zod';

export const signUpSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'O nome é obrigatório' }),
    email: z
        .string()
        .email({ message: 'Email inválido' }),
    cpf: z
        .string()
        .min(11, { message: 'CPF inválido' })
        .max(14, { message: 'CPF inválido' }),
    phone: z
        .string()
        .min(1, { message: 'O telefone é obrigatório' })
        .regex(
            /^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/,
            { message: 'Telefone inválido' }
        ),
    password: z
        .string()
        .min(6, { message: 'A senha deve ter ao menos 6 caracteres' })
        .regex(/[A-Z]/, { message: 'A senha deve conter ao menos uma letra maiúscula' })
        .regex(/[a-z]/, { message: 'A senha deve conter ao menos uma letra minúscula' })
        .regex(/[^A-Za-z0-9]/, { message: 'A senha deve conter ao menos um caractere especial' }),
    photo: z
        .string()
        .optional(),
    confirmPassword: z
        .string()
        .nonempty('Senha antiga é obrigatória')
        .min(1, 'Senha antiga é obrigatória'),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não conferem",
        path: ["confirmPassword"],
    });


export type signUpForm = z.infer<typeof signUpSchema>;
