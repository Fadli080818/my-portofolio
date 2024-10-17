import React from "react";
import Sidebar from "../components/Sidebar";
import Resume from "../components/ResumeComp";
import Navbar from "../components/Navbar";

const ResumePages = () => {
  return (
    <div className="flex bg-[url('./src/assets/background.jpg')] bg-cover bg-no-repeat">
      <Resume />
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default ResumePages;
