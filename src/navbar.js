import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex bg-orange-600 justify-around items-center text-center">
        <div className="logo">
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/02/logo.png"
            className=""
          />
        </div>

        <div className="menu-link">
          <ul className="flex">
            <li className="w-fit">
              <Link className="px-3 text-2xl text-white">Home</Link>
            </li>
            <li>
              <Link to={"/aboutus"} className="px-3 text-2xl text-white">About us</Link>
            </li>
            <li>
              <Link to={"/ourpuja"} className="px-3 text-2xl text-white">Our Puja </Link>
            </li>
            <li>
              <Link className="px-3 text-2xl text-white">Pages</Link>
            </li>
            <li>
              <Link className="px-3 text-2xl text-white py-3">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="phone flex bg-red-300">
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/02/call.png"
            className="w-12 h-12 mr-4"
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
