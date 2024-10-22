import React from "react";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

const ContactComp = () => {
  return (
    <div className=" bg-white w-11/12 md:w-2/4 border border-slate-300 h-auto rounded-lg p-2 shadow-lg">
      <h1 className="text-lg text-center font-semibold mb-3">Contact :</h1>
      <div className="flex items-center justify-center text-sm">
        <IoLogoWhatsapp size={25} className="mt-2 text-slate-600" />
        <p className="ml-2">+62 851 9158 0140</p>
      </div>
      <div className="flex items-center justify-center text-sm mb-4">
        <IoMdMail size={25} className="mt-2 text-slate-600" />
        <p className="ml-2">muhammadfadli080818@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactComp;
