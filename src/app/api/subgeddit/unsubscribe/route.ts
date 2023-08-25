import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubgedditSubscriptionValidator } from "@/lib/validators/subgeddit";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const session = await getAuthSession();

        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }

        const body = await req.json();

        const { subgedditId } = SubgedditSubscriptionValidator.parse(body)

        const subscriptionExists = await db.subscription.findFirst({
            where: {
                subgedditId,
                userId: session.user.id,
            },
        })

        if (!subscriptionExists) {
            return new Response('You are not subscribed to this subgeddit', { status: 400 })
        }

        const subgeddit = await db.subgeddit.findFirst({
            where: {
                id: subgedditId,
                creatorId: session.user.id
            },
        })

        if (subgeddit) {
            return new Response('You cannnot unsubscribe from you own subgeddit', { status: 400 })
        }

        await db.subscription.delete({
            where: {
                userId_subgedditId: {
                    subgedditId,
                    userId: session.user.id,
                }
            }
        })

        return new Response(subgedditId);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response('Invalid request data', { status: 422 })
        }

        return new Response('Could not unsubscribe, please try again later', { status: 500 })
    }
}