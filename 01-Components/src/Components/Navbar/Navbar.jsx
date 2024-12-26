import React, { useState } from "react";
import Link from "../Link/Link";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="bg-gray-950 ">
      <div className="md:hidden text-2xl p-5" onClick={() => setOpen(!open)}>
        {open ? <IoMdClose /> : <RiMenu4Fill />}
      </div>

      <ul
        className={`w-full absolute md:static md:flex md:flex-row flex flex-col items-center justify-center duration-500 ${
          open ? "top-16 md:0" : "-top-60 md:0"
        } md:gap-10 gap-2 p-8 bg-gray-900  md:bg-gray-950 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
