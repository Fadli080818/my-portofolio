import { useState } from "react";
import "./App.css";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumePages from "./pages/ResumePages";
import PortofolioPages from "./pages/PortofolioPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/my-portofolio" element={<HomePages />} />
        <Route path="/my-portofolio/resume" element={<ResumePages />} />
        <Route path="/my-portofolio/portofolio" element={<PortofolioPages />} />
      </Routes>
    </Router>
  );
}

export default App;
