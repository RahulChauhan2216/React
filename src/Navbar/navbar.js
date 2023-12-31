import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  let [open, setopen] = useState(true);
  let [visible, setvisible] = useState(true);
  return (
    <>
      <nav className="navbar flex bg-red-600 justify-between items-center text-center px-2 h-24 relative">
        <div className="logo">
          <Link to={"/"}>
            <img
              src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/02/logo.png"
              className="w-44"
            />
          </Link>
        </div>

        <div
          className={
            open
              ? "px-4 hidden lg:block h-full cursor-pointer"
              : "fixed top-0 left-0 bg-gray-200 w-6/12 h-full z-10 pt-20 rounded-lg"
          }
        >
          <ul className={open ? "flex text-white h-full" : "block"}>
            <li className={open ? "px-3 flex items-center" : "pt-8"}>
              <NavLink
                to={"/"}
                className=" text-2xl"
                onClick={() => setopen(true)}
              >
                Home
              </NavLink>
            </li>
            <li className={open ? "px-3 flex items-center" : "pt-8"}>
              <NavLink
                to={"/aboutus"}
                className=" text-2xl"
                onClick={() => setopen(true)}
              >
                About us
              </NavLink>
            </li>
            <li
              className={
                open
                  ? "px-3 flex items-center [&>ul]:hover:block text-2xl"
                  : "pt-8 text-2xl"
              }
            >
              Our Puja
              <button onClick={() => setvisible(!visible)}>
                {visible ? (
                  <FaAngleDown className="relative lg:top-1 lg:left-1 left-5" />
                ) : (
                  <FaAngleUp className="relative lg:top-1 lg:left-1 left-5" />
                )}
              </button>
              <ul
                className={
                  visible
                    ? "hidden lg:absolute lg:bg-white lg:top-[100%] h-fit lg:w-fit py-6 z-10"
                    : "block lg:absolute lg:bg-white lg:top-[100%] h-fit lg:w-fit py-6 lg:hidden z-10"
                }
              >
                <li className="px-3">
                  <NavLink
                    to={"/laxmi"}
                    className="text-xl border-b-2 border-gray-600 pb-2 text-gray-800"
                    onClick={() => setopen(true)}
                  >
                    Laxmi Puja
                  </NavLink>
                </li>
                <li className={open ? "px-3 my-6" : "py-6"}>
                  <NavLink
                    to={"/rudra"}
                    className=" text-xl border-b-2 border-gray-600 pb-2 text-gray-800"
                    onClick={() => setopen(true)}
                  >
                    Rudra Abhishek
                  </NavLink>
                </li>
                <li className="px-3">
                  <NavLink
                    to={"/kal"}
                    className=" text-xl border-b-2 border-gray-600 pb-2 text-gray-800"
                    onClick={() => setopen(true)}
                  >
                    KalSarp Puja
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={open ? "px-3  flex items-center" : "pt-8"}>
              <NavLink
                to={"/pages"}
                className=" text-2xl"
                onClick={() => setopen(true)}
              >
                Services
              </NavLink>
            </li>
            <li className={open ? "px-3 flex items-center" : "pt-8"}>
              <NavLink
                to={"/Contactus"}
                className=" text-2xl py-3"
                onClick={() => setopen(true)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="phone flex items-center text-white capitalize px-3">
          <div onClick={() => setopen(!open)}>
            {open ? (
              <RxHamburgerMenu className="text-3xl mx-5 lg:hidden cursor-pointer" />
            ) : (
              <RxCross2 className="text-black text-3xl mb:hidden absolute left-[40%] top-10 z-10 cursor-pointer" />
            )}
          </div>
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/02/call.png"
            className="w-9 h-9 mr-2 hidden smm:block"
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
