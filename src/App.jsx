import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Addmentee from "./pages/AddMentee";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";
import Sample3 from "./pages/Sample3";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/1" element={<Sample1 />} />
        <Route path="/2" element={<Sample2 />} />
        <Route path="/3" element={<Sample3 />} />
        <Route path="/addmentee" element={<Addmentee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
