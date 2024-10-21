import React from "react";
import { FaBars, FaUser, FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center p-3 w-full top-0 left-0 fixed rounded-b-xl bg-white shadow-xl">
      <div className="flex justify-center items-center ">
        <div className=" mr-2">
          <p className="text-sm font-semibold text-right">Muhammad Fadli</p>
          <div className="flex items-center text-sm text-orange-700 text-right">
            <FaPhone size={10}></FaPhone>
            <a
              className="text-sm ml-1"
              href="https://api.whatsapp.com/send?phone=6282213648742"
              target="_blank"
            >
              +62 822 1364 8742
            </a>
          </div>
        </div>

        <img
          className="w-12 h-12 rounded-full  shadow-xl border-solid border-slate-900 hover:scale-105 transition-all ease-in-out duration-300 hover:cursor-pointer"
          src="src/assets/me1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
