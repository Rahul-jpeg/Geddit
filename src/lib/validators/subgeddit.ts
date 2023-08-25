import { z } from "zod";

export const SubgedditValidator = z.object({
    name: z.string().min(3).max(21),
})

export const SubgedditSubscriptionValidator = z.object({
    subgedditId: z.string()
})

export type CreateSubgedditPayload = z.infer<typeof SubgedditValidator>
export type SubscribeToSubgedditPayload = z.infer<typeof SubgedditSubscriptionValidator>
