import { useState } from "react";
import "./App.css";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumePages from "./pages/ResumePages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/resume" element={<ResumePages />} />
      </Routes>
    </Router>
  );
}

export default App;
