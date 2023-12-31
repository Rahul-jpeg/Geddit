import { INFINITE_SCROLLLING_PAGINATION_RESULTS } from "@/config";
import { db } from "@/lib/db";
import React from "react";
import PostFeed from "./PostFeed";

const GeneralFeed = async () => {
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      subgeddit: true,
    },
    take: INFINITE_SCROLLLING_PAGINATION_RESULTS,
  });

  return <PostFeed initialPosts={posts} />;
};

export default GeneralFeed;
