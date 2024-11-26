import React, { useState } from "react";
import ProfileView from "./pages/ProfileView";
import Login from "./pages/login";
import ProfileDashboard from "./pages/ProfileDashboard";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfileEdit from "./pages/ProfileEdit";
import Navbar from "./components/Navbar";

export default function App() {
  const [techies, setTechies] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  function handleTechies(data) {
    setTechies(data);
  }

  function handleSelectedId(id) {
    setSelectedId(id);
  }

  return (
    <div className="bg-[#f0faff]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Profiles"
          element={
            <ProfileDashboard
              techies={techies}
              handleTechies={handleTechies}
              handleSelectedId={handleSelectedId}
            />
          }
        />
        <Route
          path="/Profile/:id"
          element={<ProfileView selectedId={selectedId} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
      </Routes>
    </div>
  );
}
