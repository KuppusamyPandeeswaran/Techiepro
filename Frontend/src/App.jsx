import React from "react";
import ProfileDetails from "./ProfileDetails";
import Login from "./Login";
import ProfileCards from "./ProfileCards";
import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="bg-slate-100 ">
      {/* <Register /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ProfileCards" element={<ProfileCards />} />
        <Route path="/:id" element={<ProfileDetails />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
