import React from "react";
import ProfileDetails from "./ProfileDetails";
import Login from "./login";
import ProfileCards from "./ProfileCards";

export default function App() {
  return (
    <div className="bg-slate-100 ">
      {/* <Login /> */}
      <ProfileCards />
      {/* <ProfileDetails /> */}
    </div>
  );
}
