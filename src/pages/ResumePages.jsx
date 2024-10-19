import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Resume from "../components/ResumeComp";
import Navbar from "../components/Navbar";

//  bg-[url('/src/assets/background.jpg')] bg-cover bg-no-repeat

const ResumePages = () => {
  return (
    <div className="flex bg-slate-50 h-screen overflow-y-auto">
      <Resume />
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default ResumePages;
