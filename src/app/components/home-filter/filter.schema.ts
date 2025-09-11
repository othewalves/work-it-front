import { z } from 'zod';

export const filterSchema = z.object({
    filter: z.string(),
})

export type filterForm = z.infer<typeof filterSchema>