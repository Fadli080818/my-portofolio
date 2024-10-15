import React from "react";
import Sidebar from "../components/Sidebar";
import Resume from "../components/ResumeComp";

const ResumePages = () => {
  return (
    <div className="flex relative">
      <Sidebar />
      <Resume />
    </div>
  );
};

export default ResumePages;
