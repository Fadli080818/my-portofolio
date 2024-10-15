import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const ResumeComp = () => {
  return (
    <div className="flex justify-center w-full h-auto p-5 bg-[url('./src/assets/background.jpg')] bg-cover bg-no-repeat sm:pt-12 ">
      <div className="lg:w-1/2 md:w-3/4 h-auto shadow-2xl  rounded-md border p-4 relative">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-1">Resume</h1>
          <a
            href="https://api.whatsapp.com/send?phone=6282213648742"
            className="w-30 text-slate-900 w-8 h-8 rounded-full hover:text-orange-700 hover:shadow-2xl animate-bounce text-sm absolute -top-4 right-2"
            target="_blank"
          >
            <IoLogoWhatsapp size={50} />
          </a>
        </div>

        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          blanditiis?
        </p>

        {/* Experience */}
        <h3 className=" text-lg font-semibold pt-6 mb-3">Work Experience</h3>
        <div className="border-l-2 border-slate-900">
          <div className="ml-4 mb-4 hover:text-orange-800">
            <p className="font-bold">Admin</p>
            <p className="sm:text-sm md:text-base">
              CV. Sumber Harapan Toyota Authorized Dealer & Service
            </p>
            <p className="sm:text-sm md:text-base">April 2017 - Oktober 2020</p>
          </div>
          <div className="ml-4 mb-4 hover:text-orange-800">
            <p className="font-bold">Partsman</p>
            <p className="sm:text-sm md:text-base">PT. Premium eternal Utama</p>
            <p className="sm:text-sm md:text-base">April 2017 - Oktober 2020</p>
          </div>
          <div className="ml-4 mb-4 hover:text-orange-800">
            <p className="font-bold">Admin</p>
            <p className="sm:text-sm md:text-base">
              CV. Sumber Harapan Toyota Authorized Dealer & Service
            </p>
            <p className="sm:text-sm md:text-base">April 2017 - Oktober 2020</p>
          </div>
        </div>

        {/* Formal Education */}
        <h3 className=" text-lg font-semibold pt-6 mb-3">Formal Education</h3>
        <div className="border-l-2 border-slate-900 relative">
          <div className="ml-4 mb-4 hover:text-orange-800">
            <p className="font-bold">Admin</p>
            <p className="sm:text-sm md:text-base">
              CV. Sumber Harapan Toyota Authorized Dealer & Service
            </p>
            <p className="sm:text-sm md:text-base">April 2017 - Oktober 2020</p>
          </div>
        </div>

        {/* Non Formal Education */}
        <h3 className=" text-lg font-semibold pt-6 mb-3">
          Non Formal Education
        </h3>
        <div className="border-l-2 border-slate-900 relative">
          <div className="ml-4 mb-4 hover:text-orange-800">
            <p className="font-bold">Admin</p>
            <p className="sm:text-sm md:text-base">
              CV. Sumber Harapan Toyota Authorized Dealer & Service
            </p>
            <p className="sm:text-sm md:text-base">April 2017 - Oktober 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComp;
