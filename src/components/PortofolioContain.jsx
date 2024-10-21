import React, { useState } from "react";
import Img1 from "/src/assets/web_portofolio.png";
import { MdOpenInNew } from "react-icons/md";

const PortofolioContain = () => {
  return (
    <div>
      <div className="md:w-full h-auto border border-slate-300 bg-white rounded-xl p-4 relative mb-5">
        <h3 className=" text-lg font-semibold mb-2">My Project</h3>
        <div className="flex-wrap md:flex md:justify-start">
          {/* Work Experience Content */}
          <div className=" mb-4 p-4 shadow-md bg-slate-50 text-slate-800 border border-slate-200 transition-all ease-in-out duration-200 md:w-96 h-auto md:mr-3 rounded-lg">
            <div className="w-full ">
              <img
                className="w-full h-52 object-cover rounded-lg hover:scale-110 transition-all ease-in-out duration-200 hover:shadow-xl"
                src={Img1}
                alt="Img"
              />
              <div className="flex items-center mt-3 justify-between">
                <p className="font-semibold">My Portofolio</p>
                <a target="_blank" className="text-sm" href="/">
                  <MdOpenInNew
                    className="hover:scale-110 hover:text-orange-600"
                    size={20}
                  />
                </a>
              </div>
              <p className="text-sm mt-3">This Is My Portofolio Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortofolioContain;
