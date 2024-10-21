import React from "react";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

const ContactComp = () => {
  return (
    <div className=" bg-slate-50 w-11/12 md:w-2/4 border border-slate-300 h-auto rounded-lg p-2">
      <h1 className="text-lg text-center font-semibold mb-3">
        Contact Me On :
      </h1>
      <div className="flex items-center justify-center text-sm">
        <IoLogoWhatsapp size={25} className="mt-2 text-green-600" />
        <p className="ml-2">
          {" "}
          Whatsapp : <span className="font-semibold">+62 822 1364 8742</span>
        </p>
      </div>
      <div className="flex items-center justify-center text-sm mb-4">
        <IoMdMail size={25} className="mt-2 text-red-500" />
        <p className="ml-2">
          {" "}
          E-mail :{" "}
          <span className="font-semibold">muhammadfadli080818@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactComp;
