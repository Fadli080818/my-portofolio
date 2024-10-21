import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import ResumePages from "./pages/ResumePages";
import PortofolioPages from "./pages/PortofolioPages";
import ContactPages from "./pages/ContactPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/resume" element={<ResumePages />} />
        <Route path="/portofolio" element={<PortofolioPages />} />
        <Route path="/contact" element={<ContactPages />} />
      </Routes>
    </Router>
  );
}

export default App;
