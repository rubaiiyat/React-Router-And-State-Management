import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="sticky top-[100vh] bg-gray-800 text-white text-center ">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
