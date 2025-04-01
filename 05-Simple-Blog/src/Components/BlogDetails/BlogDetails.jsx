import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  if (!blog) {
    return (
      <p className="text-center text-2xl mt-10 text-blue-400">Loading...</p>
    );
  }
  return (
    <div>
      <div className="w-6/12 mx-auto ">
        <h1 className="text-2xl mt-10 mb-3">{blog.title}</h1>
        <p className="text-gray-400 mb-5">{blog.body}</p>

        <div className="flex gap-2">
          <p>Category: </p>
          {blog.tags.map((tag) => (
            <p className="text-blue-400">{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
