import React from "react";

const ShowUser = ({ user }) => {
  const { name, email } = user;
  return (
    <div>
      <div className="border-2 border-accent m-5 p-2 rounded-2xl">
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ShowUser;
