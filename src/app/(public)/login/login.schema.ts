import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('E-mail inválido').min(1, 'Campo é obrigatório'),
    password: z.string().min(1, 'A senha é obrigatória')
})

export type loginForm = z.infer<typeof loginSchema>