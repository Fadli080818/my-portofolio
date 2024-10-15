import React from "react";
import Sidebar from "../components/Sidebar";
import Resume from "../components/ResumeComp";

const ResumePages = () => {
  return (
    <div className="flex relative">
      <Resume />
      <Sidebar />
    </div>
  );
};

export default ResumePages;
