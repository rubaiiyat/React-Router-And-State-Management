import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { BiSolidDislike } from "react-icons/bi";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body, tags, reactions, views } = post;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="border-2 border-accent rounded-2xl p-5 m-5 text-start w-6/12 h-full flex flex-col gap-2 mx-auto">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="mb-2">{body}</p>

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
          <button onClick={handleGoBack} className="btn btn-accent w-full">
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
