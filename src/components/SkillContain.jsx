import React from "react";
import { FaFileExcel, FaFileWord } from "react-icons/fa6";
import { BsFileEarmarkPptFill } from "react-icons/bs";
import {
  FaStar,
  FaRegStar,
  FaHtml5,
  FaCss3,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoMdClose } from "react-icons/io";

const SkillContainer = () => {
  return (
    <div>
      <div className="md:w-full h-auto border border-slate-300 bg-white rounded-xl p-4 relative mb-5">
        <h3 className=" text-lg font-semibold mb-2">Skill</h3>
        <div className="flex-wrap md:flex md:justify-start">
          {/* Skill Content */}
          <div className=" mb-4 p-4 shadow-md bg-slate-50 text-slate-800 border border-slate-200 hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-95 transition-all ease-in-out duration-200 md:w-96 h-auto md:mr-3 rounded-lg">
            <div className="w-full ">
              <div className="flex items-center mb-3">
                <p className="mr-3 font-semibold">Programming</p>
                <FaStar className="text-yellow-500 mr-2"></FaStar>
                <FaStar className="text-yellow-500 mr-2"></FaStar>
                <FaStar className="text-yellow-500 mr-2"></FaStar>
                <FaRegStar className="text-yellow-500 mr-2"></FaRegStar>
                <FaRegStar className="text-yellow-500 mr-2"></FaRegStar>
              </div>

              <div className="flex">
                <IoLogoJavascript size={30} className="mr-2" />
                <FaHtml5 size={30} className="mr-2" />
                <FaCss3 size={30} className="mr-2" />
                <FaReact size={30} className="mr-2" />
                <RiTailwindCssFill size={30} className="mr-2" />
                <FaPhp size={30} className="mr-2" />
                <FaLaravel size={30} className="mr-2" />
              </div>
              <p className="text-sm mt-2">Abble to : </p>
              <ul>
                <li className="text-sm mt-2 font-semibold">Front End Dev</li>
                <li className="text-sm mt-2 ml-2">- React.js </li>
                <li className="text-sm mt-2 ml-2">- Tailwind CSS </li>
                <li className="text-sm mt-2 font-semibold">Back End Dev </li>
                <li className="text-sm mt-2 ml-2">- PHP </li>
                <li className="text-sm mt-2 ml-2">- Laravel </li>
                <li className="text-sm mt-2 font-semibold">Windows Apps </li>
                <li className="text-sm mt-2 ml-2">- VB.Net </li>
              </ul>
            </div>
          </div>
          <div className=" mb-4 p-4 shadow-md bg-slate-50 text-slate-800 border border-slate-200 hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-95 transition-all ease-in-out duration-200 md:w-96 h-auto md:mr-3 rounded-lg">
            <div className="w-full ">
              <div className="flex items-center mb-3">
                <p className="mr-3 font-semibold">Administration</p>
                <FaStar className="text-yellow-500 mr-2"></FaStar>
                <FaStar className="text-yellow-500 mr-2"></FaStar>
                <FaStar className="text-yellow-500 mr-2"></FaStar>
                <FaStar className="text-yellow-500 mr-2"></FaStar>
                <FaRegStar className="text-yellow-500 mr-2"></FaRegStar>
              </div>

              <div className="flex">
                <FaFileExcel size={30} className="mr-2" />
                <FaFileWord size={30} className="mr-2" />
                <BsFileEarmarkPptFill size={30} className="mr-2" />
              </div>
              <p className="text-sm mt-2">Abble to : </p>
              <ul>
                <li className="text-sm mt-2 ml-2">{`- Excel (VB Macro, Pivot Table) `}</li>
                <li className="text-sm mt-2 ml-2">{`- PPT (Make & Presentation) `}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
