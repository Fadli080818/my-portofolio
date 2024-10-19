import React from "react";
import { FaFileExcel, FaFileWord } from "react-icons/fa6";
import { BsFileEarmarkPptFill } from "react-icons/bs";
import { FaStar, FaRegStar, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoMdClose } from "react-icons/io";

const LanguangeContain = () => {
  return (
    <div className="md:w-full h-auto border border-slate-300 bg-white rounded-xl p-4 relative mb-5">
      <h3 className=" text-lg font-semibold mb-2">Languange</h3>
      <div className="flex-wrap md:flex md:justify-start">
        <div className=" mb-4 p-4 shadow-md bg-slate-50 text-slate-800 border border-slate-200 hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-95 transition-all ease-in-out duration-200 md:w-96 h-auto md:mr-3 rounded-lg">
          <div className="flex items-center">
            <p className="mr-3 font-semibold">English</p>
            <FaStar className="text-yellow-500 mr-2"></FaStar>
            <FaStar className="text-yellow-500 mr-2"></FaStar>
            <FaStar className="text-yellow-500 mr-2"></FaStar>
            <FaRegStar className="text-yellow-500 mr-2"></FaRegStar>
            <FaRegStar className="text-yellow-500 mr-2"></FaRegStar>
          </div>
          <p className="text-sm mt-2">{`(B1) Intermediate`}</p>
          <p className="text-sm mt-2">Ability : Write & Reading</p>
        </div>
      </div>
    </div>
  );
};

export default LanguangeContain;
