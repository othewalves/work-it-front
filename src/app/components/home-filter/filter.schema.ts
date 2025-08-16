import { z } from 'zod';

export const filterSchema = z.object({
    filter: z.string().min(1, 'Campo é obrigatório'),
})

export type filterForm = z.infer<typeof filterSchema>