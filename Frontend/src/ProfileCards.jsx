import React from "react";
import profiles from "./profile.json";
import { Link } from "react-router-dom";

export default function ProfileCards() {
  return (
    <>
    <div className="p-20 gap-6 grid grid-cols-3">
      {profiles.map((userdata, index) => (
        <div
          key={index}
          className="p-8 rounded-2xl bg-white text-center flex flex-col items-center"
        >
          <img
            src={userdata.photo}
            alt={userdata.username}
            className="w-52 h-52 mb-3 rounded-3xl"
          />
          <h2 className="m-4 text-2xl font-semibold">{userdata.username}</h2>
          <Link
          to={`/${userdata.username}`}
          state={{userdata}}            
          className="p-2 rounded-lg bg-slate-400 hover:bg-white shadow-2xl"
          >
            View Profile
          </Link>  
        </div>
      ))}
    </div>
    </>
  );
}
