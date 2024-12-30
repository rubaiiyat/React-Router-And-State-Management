import React from "react";

const Form = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <div>
      <form onSubmit={handleForm} className="w-96">
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
    </div>
  );
};

export default Form;
