import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { BiSolidDislike } from "react-icons/bi";

const Post = ({ post }) => {
  const { id, title, body, tags, reactions, views } = post;

  const [showFull, setShowFull] = useState(false);

  const words = body.split(" ");
  const isLong = words.length > 20;

  const displayBody = showFull ? body : words.slice(0, 20).join(" ");
  return (
    <div>
      <div className="border-2 border-accent rounded-2xl p-5 m-5 text-start w-[500px] h-full flex flex-col gap-2">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="mb-2">{displayBody}......</p>

        <p>
          {tags.map((tag, index) => (
            <span index={index} className="text-blue-400">
              #{tag},{" "}
            </span>
          ))}
        </p>
        <div className="flex gap-20 items-center mt-5">
          <p className=" flex items-center gap-2">
            <FaEye /> {views}
          </p>

          <p className=" flex items-center gap-2">
            <FcLike /> {reactions.likes}
          </p>

          <p className=" flex items-center gap-2">
            <BiSolidDislike /> {reactions.dislikes}
          </p>
        </div>
        <div className="flex-grow flex items-end">
          <Link to={`/posts/${id}`} className="btn btn-accent w-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
