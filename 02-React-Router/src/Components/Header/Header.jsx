import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="mt-10 text-accent text-xl">
        <Link className="px-10" to={"/"}>
          HOME
        </Link>
        <Link className="px-10" to={"/users"}>
          USERS
        </Link>
        <Link className="px-10" to={"/about"}>
          ABOUT
        </Link>
        <Link className="px-10" to={"/contact"}>
          CONTACT
        </Link>
      </ul>
    </div>
  );
};

export default Header;
