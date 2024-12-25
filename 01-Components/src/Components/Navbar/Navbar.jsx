import React, { useState } from "react";
import Link from "../Link/Link";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const changeButton = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className=" md:flex gap-10 justify-center md:bg-gray-950 p-8 ">
      <div className="text-2xl md:hidden">
        <button onClick={changeButton}>
          {open ? <IoMdClose /> : <RiMenu4Fill />}
        </button>
      </div>
      {routes.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))}
    </nav>
  );
};

export default Navbar;
