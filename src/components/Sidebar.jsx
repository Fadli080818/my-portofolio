import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaFile,
  FaPager,
  FaMailBulk,
  FaLinkedin,
  FaBars,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ImgMe from "/src/assets/me.png";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex  top-0 left-0 fixed">
      <div
        className={`${
          show ? " invisible " : " block "
        }w-72 bg-slate-50 fixed h-screen drop-shadow-lg transition-all `}
      >
        <ul className="text-black relative ">
          <li className="bg-white rounded-b-2xl p-2 ml-2 mr-2 border-l border-r border-b border-t-4 border-t-slate-700 border-slate-300 shadow-md">
            <IoMdCloseCircle
              size={30}
              className="absolute cursor-pointer right-5 text-slate-700"
              onClick={() => setShow(!show)}
            />
            <div className="flex justify-center mt-4 mb-2 ">
              <img
                src={ImgMe}
                alt=""
                className="w-40 rounded-full  shadow-slate-200 bg-white"
              />
            </div>
            <h2 className="text-center text-2xl font-semibold ">
              Muhammad Fadli
            </h2>
            <p className="text-center text-sm  pb-2">Full-Stack Developer</p>
          </li>

          <li
            className="pl-2 pb-3 pt-3 hover:border-r-4 hover:border-orange-400 transition ease-in-out duration-300 hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white  py-2 mt-4 text-sm group"
            onClick={() => navigate("/")}
          >
            <a href="/" className="pl-1">
              <FaHome className="inline-block w-6 h-6 mr-3 -mt-2"></FaHome>
              Home
            </a>
          </li>

          <li
            className="pl-2 pb-3 pt-3 hover:border-r-4 hover:border-orange-400 transition ease-in-out duration-300 hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white py-2 text-sm"
            onClick={() => navigate("/resume")}
          >
            <a href="/resume" className="pl-1 ">
              <FaFile className="inline-block w-6 h-6 mr-3 -mt-2"></FaFile>
              Resume
            </a>
          </li>

          <li
            className="pl-2 pb-3 pt-3 hover:border-r-4 hover:border-orange-400 transition ease-in-out duration-300 hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white  py-2 text-sm "
            onClick={() => navigate("/portofolio")}
          >
            <a href="/portofolio" className="pl-1">
              <FaPager className="inline-block w-6 h-6 mr-3 -mt-2"></FaPager>
              Portofolio
            </a>
          </li>

          <li
            className="pl-2 pb-3 pt-3 hover:border-r-4 hover:border-orange-400 transition ease-in-out duration-300 hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white  py-2 text-sm"
            onClick={() => navigate("/contact")}
          >
            <a href="/contact" className="pl-1">
              <FaMailBulk className="inline-block w-6 h-6 mr-3 -mt-2"></FaMailBulk>
              Contact
            </a>
          </li>
        </ul>

        {/* Icon Sosmed */}
        <div className="flex justify-evenly fixed bottom-0 left-0 text-white bg-slate-700 w-full pt-3 pb-3 border-t-4 border-t-orange-500">
          <a
            href="https://github.com/Fadli080818"
            target="_blank"
            className="hover:text-orange-400 hover:scale-110"
          >
            <FaGithub size={25}></FaGithub>
          </a>

          <a
            href="#"
            target="_blank"
            className="hover:text-orange-400 hover:scale-110"
          >
            <FaLinkedin size={25}></FaLinkedin>
          </a>

          <a
            href="https://instagram.com/fadli0428"
            target="_blank"
            className="hover:text-orange-400 hover:scale-110"
          >
            <FaInstagram size={25}></FaInstagram>
          </a>

          <a
            href="https://wa.me/6285191580140"
            target="_blank"
            className="hover:text-orange-400 hover:scale-110"
          >
            <FaWhatsapp size={25}></FaWhatsapp>
          </a>

          <br />
        </div>
      </div>

      <div>
        <FaBars
          size={35}
          className="text-slate-800 my-2 pl-4 cursor-pointer mt-5  "
          onClick={() => setShow(!show)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
