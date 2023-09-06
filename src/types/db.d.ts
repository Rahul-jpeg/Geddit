import { Subgeddit, Vote, Post, User, Comment } from "@prisma/client"

export type ExtendedPost = Post & {
    subgeddit: Subgeddit
    votes: Vote[],
    author: User,
    comments: Comment[]
}