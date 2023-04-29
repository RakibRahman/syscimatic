import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Menu from "../../assets/menu.svg";
import X from "../../assets/x.svg";

export const MobileNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="md:hidden">
      <nav
        className="flex md:hidden h-20 px-9  items-center justify-between"
        style={{
          backgroundColor: "#0c0032",
        }}
      >
        <img src={Logo} alt="Logo" className="w-40 h-auto object-cover" />

        {toggleMenu ? null : (
          <button onClick={() => setToggleMenu(true)}>
            <img src={Menu} alt="menu" className="w-8 h-auto object-cover" />
          </button>
        )}
      </nav>
      {toggleMenu ? (
        <div
          className={
            ` ease-in fixed w-screen bg-black opacity-75 h-screen top-0 bottom-0` +
            (toggleMenu
              ? " transition-opacity opacity-100 duration-200 -translate-y-0  "
              : " transition-all delay-100 opacity-0 -translate-y-full")
          }
        >
          <button onClick={() => setToggleMenu(false)}>
            <img
              src={X}
              alt="close menu"
              className="w-8 h-auto object-cover absolute right-0 top-0 m-1"
            />
          </button>
          <div className="text-white flex gap-4 flex-col items-center -mt-20  h-full  justify-center text-2xl">
            <a
              onClick={() => setToggleMenu(false)}
              href="#"
              className="transition-transform ease-in border-b-2 pb-1 hover:text-gray-400 hover:-translate-y-1"
            >
              Home
            </a>
            <a
              onClick={() => setToggleMenu(false)}
              href="#"
              className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 hover:border-b-2"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setToggleMenu(false)}
              className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 hover:border-b-2"
            >
              Services
            </a>
            <a
              onClick={() => setToggleMenu(false)}
              href="#portfolio"
              className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 hover:border-b-2"
            >
              Portfolio
            </a>
            <a
              onClick={() => setToggleMenu(false)}
              href="#blog"
              className="transition-transform ease-in  pb-1 hover:text-gray-400 hover:-translate-y-1 "
            >
              Blog
            </a>
            <button
              className=" w-auto px-3  h-11 rounded-3xl bg-white font-bold text-purple-950 hover:bg-purple-950 hover:text-white transition-colors ease-linear"
              onClick={() => setToggleMenu(false)}
            >
              Get a quote
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
