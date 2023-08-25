import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubgedditValidator } from "@/lib/validators/subgeddit";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const session = await getAuthSession()

        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }

        const body = await req.json()
        const { name } = SubgedditValidator.parse(body)

        const subgedditExists = await db.subgeddit.findFirst({
            where: {
                name,
            },
        })
        if (subgedditExists) {
            return new Response('Subgeddit already exists', { status: 409 })
        }

        const subgeddit = await db.subgeddit.create({
            data: {
                name,
                creatorId: session.user.id,
            },
        })

        await db.subscription.create({
            data: {
                userId: session.user.id,
                subgedditId: subgeddit.id,
            },
        })

        return new Response(subgeddit.name)
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(error.message, { status: 422 })
        }

        return new Response('Could not create subgeddit', { status: 500 })
    }
}