import React from "react";
import Link from "../Link/Link";
const routes = [
  { id: 1, path: "/home", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact" },
  { id: 5, path: "/dashboard", name: "Dashboard" },
];
const Navbar = () => {
  return (
    <nav className="flex gap-10">
      {routes.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))}
    </nav>
  );
};

export default Navbar;
