import React from "react";
import { Link } from "react-router";

const Blog = ({ blog }) => {
  const { id, title, body } = blog;

  const shortBody = body.split(" ").slice(0, 20).join(" ") + "...";
  return (
    <div>
      <div className="w-96 border border-gray-900 p-5 rounded h-64">
        <h1 className="text-2xl mb-2">{title}</h1>
        <p className="text-gray-400">
          {shortBody}{" "}
          <Link className="text-blue-400" to={`/blog/${id}`}>
            More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Blog;
