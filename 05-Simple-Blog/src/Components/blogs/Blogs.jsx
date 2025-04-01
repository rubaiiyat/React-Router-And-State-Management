import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl mt-5">
        Available Post: {blogs.length}
      </h1>

      <div className="flex gap-5 flex-wrap justify-center mt-10">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
