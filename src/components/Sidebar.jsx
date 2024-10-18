import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex  top-0 left-0 fixed">
      <div
        className={`${
          show ? " hidden " : " block "
        }w-72 bg-white fixed h-screen  drop-shadow-lg`}
      >
        <ul className="text-black relative">
          <li className="bg-slate-700 rounded-b-2xl p-2 ml-2 mr-2">
            <div className="flex justify-center mt-4 mb-2">
              <img
                src="./src/assets/me.png"
                alt=""
                className="w-40 rounded-full shadow-slate-200 bg-white"
              />
            </div>
            <h2 className="text-center text-2xl font-semibold text-white">
              Muhammad Fadli
            </h2>
            <p className="text-center text-sm text-white pb-2">
              Junior Full-Stack Developer
            </p>
          </li>

          <li className="mb-2 ml-2 mr-2 rounded hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white  py-2 mt-4 text-sm group">
            <a
              href="/"
              className="pl-1"
              onClick={() => navigate("/my-portofolio")}
            >
              <FaHome className="inline-block w-6 h-6 mr-3 -mt-2"></FaHome>
              Home
            </a>
          </li>

          <li className="mb-2 ml-2 mr-2  rounded hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white py-2 text-sm">
            <a
              href=""
              className="pl-1 "
              onClick={() => navigate("/my-portofolio/resume")}
            >
              <FaFile className="inline-block w-6 h-6 mr-3 -mt-2"></FaFile>
              Resume
            </a>
          </li>

          <li className="mb-2 ml-2 mr-2  rounded hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white  py-2 text-sm">
            <a
              href=""
              className="pl-1"
              onClick={() => navigate("/my-portofolio/portofolio")}
            >
              <FaPager className="inline-block w-6 h-6 mr-3 -mt-2"></FaPager>
              Portofolio
            </a>
          </li>

          <li className="mb-2 ml-2 mr-2  rounded hover:shadow hover:bg-slate-700 hover:cursor-pointer hover:text-white  py-2 text-sm">
            <a href="#" className="pl-1">
              <FaMailBulk className="inline-block w-6 h-6 mr-3 -mt-2"></FaMailBulk>
              Contact
            </a>
          </li>
        </ul>

        {/* Icon Sosmed */}
        <div className="flex justify-center fixed bottom-0 left-16 text-black">
          <a
            href="https://github.com/Fadli080818"
            className="pr-4"
            target="_blank"
          >
            <FaGithub size={25}></FaGithub>
          </a>

          <a href="#" className="pr-4" target="_blank">
            <FaLinkedin size={25}></FaLinkedin>
          </a>

          <a
            href="https://instagram.com/fadli0428"
            className="pb-4 pr-4"
            target="_blank"
          >
            <FaInstagram size={25}></FaInstagram>
          </a>

          <a href="https://wa.me/6282213648742" target="_blank">
            <FaWhatsapp size={25}></FaWhatsapp>
          </a>

          <br />
        </div>
      </div>

      <div>
        <FaBars
          size={35}
          className={`${
            show ? "text-slate-800" : "ml-56 absolute text-white"
          }  my-2 pl-4 cursor-pointer mt-5 `}
          onClick={() => setShow(!show)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
