import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const data = useLoaderData();
  const posts = data.posts;
  return (
    <div>
      <div className="flex gap-5 flex-wrap w-full justify-center ">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
