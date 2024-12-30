import React, { useEffect, useRef, useState } from "react";
import ShowUser from "../ShowUser/ShowUser";

const Form = () => {
  const [users, setUsers] = useState([]);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const newUser = [...users, obj];
    setUsers(newUser);
  };
  /* const handleForm = (e) => {
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
  }; */
  return (
    <div>
      <form onSubmit={handleForm} method="" className="w-96">
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter Your Name"
          name="name"
          className="input input-bordered input-accent w-full max-w-xs mb-2 "
        />
        <br />
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="input input-bordered input-accent w-full max-w-xs mb-2"
        />
        <br />
        <input
          ref={passwordRef}
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
