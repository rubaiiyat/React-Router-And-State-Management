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
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
