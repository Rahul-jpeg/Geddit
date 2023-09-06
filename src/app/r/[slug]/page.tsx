import CreatePost from "@/components/CreatePost";
import PostFeed from "@/components/PostFeed";
import { INFINITE_SCROLLLING_PAGINATION_RESULTS } from "@/config";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = params;

  const session = await getAuthSession();

  const subgeddit = await db.subgeddit.findFirst({
    where: {
      name: slug,
    },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
          comments: true,
          subgeddit: true,
        },
        take: 10,
      },
    },
  });

  if (!subgeddit) {
    return notFound();
  }

  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl h-14">
        r/{subgeddit.name}
      </h1>
      <CreatePost session={session} />
      <PostFeed initialPosts={subgeddit.posts} subgedditName={subgeddit.name} />
    </>
  );
};

export default page;
