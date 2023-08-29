import { z } from 'zod';

export const PostValidator = z.object({
    title: z
        .string()
        .min(3, { message: 'Title must be at least 3 characters long' })
        .max(128, { message: 'Title must not be longer than 128 characters' }),
    subgedditId: z.string(),
    content: z.any(),
})

export type PostCreationRequest = z.infer<typeof PostValidator>