import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"
import { z } from "zod"

export async function GET(req: Request) {
    const url = new URL(req.url)

    const session = await getAuthSession()

    let followedCommunitiesIds: string[] = []

    if (session) {
        const followedCommunities = await db.subscription.findMany({
            where: {
                userId: session.user.id,
            },
            include: {
                subgeddit: true
            }
        })

        followedCommunitiesIds = followedCommunities.map(({ subgeddit }) => subgeddit.id)
    }

    try {
        const { limit, page, subgedditName } = z.object({
            limit: z.string(),
            page: z.string(),
            subgedditName: z.string().nullish().optional(),
        }).parse({
            subgedditName: url.searchParams.get('subgedditName'),
            limit: url.searchParams.get('limit'),
            page: url.searchParams.get('page'),
        })

        let whereClause = {}

        if (subgedditName) {
            whereClause = {
                subgeddit: {
                    name: subgedditName,
                },
            }
        } else if (session) {
            whereClause = {
                subgeddit: {
                    id: {
                        in: followedCommunitiesIds,
                    },
                },
            }
        }

        const posts = await db.post.findMany({
            take: parseInt(limit),
            skip: (parseInt(page) - 1) * parseInt(limit),
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                subgeddit: true,
                votes: true,
                author: true,
                comments: true
            },
            where: whereClause
        })

        return new Response(JSON.stringify(posts))
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response('Invalid request data passed', { status: 422 })
        }

        return new Response(
            'Could not fetch more posts',
            { status: 500 },
        )
    }
}