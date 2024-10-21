import React from "react";
import ContactComp from "../components/ContactComp";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ContactPages = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <ContactComp />
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default ContactPages;
