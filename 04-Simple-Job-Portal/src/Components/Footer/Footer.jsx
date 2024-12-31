import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <h1 className="text-2xl text-white font-bold">Simple Job Portal</h1>
          <p className="w-72">
            Your go-to platform for connecting talented individuals with top
            employers. Browse job listings, post opportunities, and take the
            next step in your career journey—all in one place. Start exploring
            today!
          </p>
          <div className="flex gap-5 text-xl">
            <p className="cursor-pointer">
              <FaFacebook />
            </p>
            <p className="cursor-pointer">
              <FaGithub />
            </p>
            <p className="cursor-pointer">
              <FaLinkedinIn />
            </p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
