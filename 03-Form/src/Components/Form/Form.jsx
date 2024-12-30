import React, { useState } from "react";
import ShowUser from "../ShowUser/ShowUser";

const Form = () => {
  const [users, setUsers] = useState([]);
  const handleForm = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    const obj = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    const newuser = [...users, obj];
    setUsers(newuser);
  };
  return (
    <div>
      <form onSubmit={handleForm} method="" className="w-96">
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          className="input input-bordered input-accent w-full max-w-xs mb-2 "
        />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="input input-bordered input-accent w-full max-w-xs mb-2"
        />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          className="input input-bordered input-accent w-full max-w-xs mb-2"
        />

        <button className="btn btn-accent" type="submit">
          SUBMIT
        </button>
      </form>

      {users.map((user, index) => (
        <ShowUser key={index} user={user}></ShowUser>
      ))}
    </div>
  );
};

export default Form;
