import React from "react";
import profiles from "./profile.json";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { FiGithub } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa";

export default function ProfileCards() {
  return (
    <>
      <div className="bg-[#f0faff] font-inter">
        <Navbar />
        <div className="flex flex-col justify-center mt-20 px-40 pb-0">
          <h1 className="text-6xl font-semibold mb-5">Our team</h1>
          <p className="">
            We’re a dynamic group of individuals who are passionate about what
            we do <br /> and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <div className="px-20 pb-20 gap-6 grid grid-cols-3 ">
          {profiles.map((userdata, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl flex flex-col items-center"
            >
              <Link to={`/${userdata.username}`} state={{ userdata }}>
                <img
                  src="photo.avif"
                  alt="image"
                  className="w-70 h-56 mb-2 rounded-3xl"
                />
                <h2 className="m-2 text-2xl font-semibold">
                  {userdata.username}
                </h2>
                <h2 className="m-2 text-gray-500 font-semibold">
                  {userdata.role}
                </h2>
              </Link>
              {/* <span className="flex gap-2 ml-2">
                <FaLinkedin className=" w-6 h-6" />

                <FiGithub className=" w-6 h-6" />
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
