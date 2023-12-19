import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  let [open, setopen] = useState(true);
  return (
    <>
      <nav className="navbar flex bg-red-600 justify-between items-center text-center px-2 py-2">
        <div className="logo">
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/02/logo.png"
            className=""
          />
        </div>

        <div
          className={
            open
              ? "px-4 hidden mb:block"
              : "block fixed top-0 left-0 bg-gray-200 w-6/12 h-full z-10 pt-20 rounded-lg"
          }
        >
          <ul className={open ? "flex text-white" : "flex-col"}>
            <li className={open ? "px-3" : "pt-8"}>
              <NavLink to={"/"} className=" text-2xl">
                Home
              </NavLink>
            </li>
            <li className={open ? "px-3" : "pt-8"}>
              <NavLink to={"/aboutus"} className=" text-2xl ">
                About us
              </NavLink>
            </li>
            <li className={open ? "px-3" : "pt-8"}>
              <NavLink to={"/ourpuja"} className=" text-2xl">
                Our Puja
              </NavLink>
            </li>
            <li className={open ? "px-3" : "pt-8"}>
              <NavLink to={"/pages"} className=" text-2xl">
                Pages
              </NavLink>
            </li>
            <li className={open ? "px-3" : "pt-8"}>
              <NavLink to={"/contactus"} className=" text-2xl py-3">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="phone flex items-center text-white capitalize px-3">
          <div onClick={() => setopen(!open)}>
            {open ? (
              <RxHamburgerMenu className="text-3xl mx-5 mb:hidden cursor-pointer" />
            ) : (
              <RxCross2 className="text-black text-3xl mx-5 mb:hidden absolute left-[38%] top-[4%] z-10 cursor-pointer" />
            )}
          </div>
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/02/call.png"
            className="w-12 h-12 mr-2"
          />
          <div>
            <p>Call for appointment</p>
            <h3>+1 3333 *** 444</h3>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
