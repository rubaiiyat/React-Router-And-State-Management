import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="mt-10 text-accent text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold underline p-10"
              : "text-accent p-10"
          }
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold underline p-10"
              : "text-accent p-10"
          }
          to={"/users"}
        >
          USERS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold underline p-10"
              : "text-accent p-10"
          }
          to={"/posts"}
        >
          POSTS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold underline p-10"
              : "text-accent p-10"
          }
          to={"/about"}
        >
          ABOUT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold underline p-10"
              : "text-accent p-10"
          }
          to={"/contact"}
        >
          CONTACT
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
