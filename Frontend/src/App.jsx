import React from "react";
import ProfileDetails from "./ProfileDetails";
import Login from "./login";
import ProfileCards from "./ProfileCards";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-slate-100 ">
      <Routes>
      {/* <Login /> */}
      <Route path="/" element={<ProfileCards />}/>
      <Route path="/:id" element={<ProfileDetails />}/>
      </Routes>
    </div>
  );
}
