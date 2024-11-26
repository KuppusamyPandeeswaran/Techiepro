import React from "react";
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
  return (
    <div className="bg-[#f0faff] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ProfileCards" element={<ProfileDashboard />} />
        <Route path="/:id" element={<ProfileView />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} />
      </Routes>
    </div>
  );
}
