import React from "react";
// import profile from "./profile.json";

const profiles = [
  { name: "Santhanakrishnan", img: "img_avatar.png", id: "1" },
  { name: "Pandeeswaran", img: "img_avatar.png", id: "2" },
  { name: "Prakash", img: "img_avatar.png" },
  { name: "Ganesh", img: "img_avatar.png" },
  { name: "Parthiban", img: "img_avatar.png" },
  { name: "Karunamurthy", img: "img_avatar.png" },
  { name: "Lokesh", img: "img_avatar.png" },
  { name: "Dinesh", img: "img_avatar.png" },
  { name: "Sathish", img: "img_avatar.png" },
  { name: "Harish", img: "img_avatar.png" },
  { name: "Ranjith", img: "img_avatar.png" },
];

export default function ProfileCards() {
  return (
    <div className="p-20 gap-6 grid grid-cols-3">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="p-8 rounded-2xl bg-white text-center flex flex-col items-center"
        >
          <img
            src={profile.img}
            alt={profile.name}
            className="w-52 h-52 mb-3 rounded-3xl"
          />
          <h2 className="m-4 text-2xl font-semibold">{profile.name}</h2>
          <a
            href="#"
            className="p-2 rounded-lg bg-slate-400 hover:bg-white shadow-2xl"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}
