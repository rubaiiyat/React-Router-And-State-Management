import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone, website } = user;
  return (
    <div>
      <div className="border-2 border-accent rounded-2xl p-5 m-5 text-start w-72 h-full flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Webiste: {website}</p>
        <div className="flex-grow flex items-end">
          <Link to={`/user/${id}`} className="btn btn-accent w-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
