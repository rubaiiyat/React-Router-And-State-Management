import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  const { name, username, website, email, phone, address, company } = user;
  return (
    <div>
      <div className="border-2 border-accent rounded-2xl p-5 m-5 text-start w-96 h-full flex flex-col gap-2 shadow-xl bg-base-100 mx-auto">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h1 className="">username: {username}</h1>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>
          Webiste: <a href={website}>{website}</a>
        </p>
        <p>
          Address: {address.street}, {address.suite}, {address.city},{" "}
          {address.zipcode}
        </p>
        <p>
          Company: {company.name}, {company.catchPhrase}, {company.bs}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
