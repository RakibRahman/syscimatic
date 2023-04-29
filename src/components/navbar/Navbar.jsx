import React from "react";
import Logo from "../../assets/logo.png";
import { MobileNav } from "./MobileNav";
export const Navbar = () => {
  return (
    <>
      <nav
        className="hidden md:flex h-20 px-9  items-center justify-between"
        style={{
          backgroundColor: "#0c0032",
        }}
      >
        <img src={Logo} alt="Logo" className="w-40 h-auto object-cover" />

        <div className="text-white flex gap-10">
          <a
            href="#"
            className="transition-transform ease-in border-b-2 pb-1 hover:text-gray-400 hover:-translate-y-1"
          >
            Home
          </a>
          <a
            href="#"
            className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 hover:border-b-2"
          >
            About Us
          </a>
          <a
            href="#"
            className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 hover:border-b-2"
          >
            Services
          </a>
          <a
            href="#"
            className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 hover:border-b-2"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 "
          >
            Blog
          </a>
        </div>
        <button className="hidden lg:block w-40 h-11 rounded-3xl bg-white font-bold text-purple-950 hover:bg-purple-950 hover:text-white transition-colors ease-linear">
          Get a quote
        </button>
      </nav>

      <MobileNav />
    </>
  );
};
