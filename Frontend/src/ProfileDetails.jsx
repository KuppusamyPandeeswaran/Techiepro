import React from "react";
import Navbar from "./Navbar";
// import { FaLinkedinIn, FaGithub, FaLink } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProfileDetails() {
  const location = useLocation();
  const { userdata } = location.state;
  return (
    <>
      <div key={userdata.username} className="bg-[#f0faff]">
        <Navbar />
        <div className="pt-16 pb-8 px-8 ">
          <h1 className="text-3xl font-semibold">Profile</h1>
          {/* <a href="" className="text-xl ">
            Edit
          </a> */}
        </div>
        <div className="parent-grid pb-20 grid grid-cols-3 gap-2 ">
          {/* Left section */}
          <div className="details-section px-6 pt-4 pb-4 border-2 border-[#D0E7F5] rounded-lg border-solid ml-8 col-span-1 bg-[#cceeff]">
            <img
              src="profile.jpg"
              alt=""
              className="w-24 h-24 object-cover rounded-lg"
            />
            <h1 className="text-lg mt-2 font-semibold">{userdata.username}</h1>
            <p className="text-sm my-1">{userdata.role}</p>
            <p className="text-sm my-1">Chennai</p>
            <div className="my-4">
              <h3 className="text-sm font-semibold">Email Address</h3>
              <p>{userdata.email}</p>
            </div>
            <div className="my-4">
              <h3 className="text-sm font-semibold">Address</h3>
              <p>{userdata.address}</p>
            </div>
            <div className="my-4">
              <h3 className="text-sm font-semibold">Mobile Number</h3>
              <p>{userdata.mobile}</p>
            </div>
            <h1 className="text-lg font-bold mb-4">Socials</h1>

            <ul className="flex gap-4">
              <li>
                <a href="">
                  <FaLinkedinIn className="w-6 h-6" color="#0e76a8" />
                </a>
              </li>
              <li>
                {" "}
                <a href="">
                  <FaGithub className="w-6 h-6" color="#0e76a8" />
                </a>
              </li>
              <li>
                {" "}
                <a href="">
                  <FaLink className="w-6 h-6" color="#0e76a8" />
                </a>
              </li>
            </ul>
          </div>
          {/* Right section  */}
          <div className="bio-section px-6 pt-4 border-2 border-[#D0E7F5] rounded-lg border-solid mr-8 second-grid pb-8 col-span-2 bg-[#cceeff]">
            <div className="grid grid-cols-2 gap-4">
              <div className="div1 col-span-2 mb-6">
                <div className="flex justify-between">
                  <h1 className="text-lg font-semibold mb-4">Bio</h1>

                  <Link
                    to={"/ProfileEdit"}
                    className="text-[12px] text-[#00b0ff] underline hover:no-underline"
                  >
                    Edit Profile
                  </Link>
                </div>
                <p>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam libero non dolores magni ducimus maxime modi repellendus
                  nisi. Adipisci culpa ex fuga nemo. Necessitatibus, magni.
                  Sequi assumenda provident magni nulla.{" "}
                </p>
              </div>
              <div className="div2 ">
                <h3 className="text-sm font-semibold">Current Organization</h3>
                <p>Company Law Insitute of India</p>
              </div>
              <div className="div3 ">
                <h3 className="text-sm font-semibold">Role</h3>
                <p>{userdata.role}</p>
              </div>
              <div className="div4">
                <h3 className="text-sm font-semibold">Languages</h3>
                <p>Tamil, English</p>
              </div>
              <div className="div5">
                <h3 className="text-sm font-semibold">Birthday</h3>
                <p>28/July/1996</p>
              </div>
              <div className="div6">
                <h3 className="text-sm font-semibold">Education</h3>
                <p>St. Peters University</p>
              </div>
              <div className="div7">
                <h3 className="text-sm font-semibold">Work History</h3>
                <p>Debug Technician at Flextronics</p>
                <p>Software Engineer at Company Law Insitute of India</p>
              </div>
            </div>
            <h1 className="text-lg font-bold mb-4 mt-8">Skills</h1>
            <div>
              <div className="skill-list flex flex-wrap gap-2 ">
                {userdata.skills.map((skill, index) => (
                  <p
                    className=" border-2 border-[#00b0ff] rounded-lg py-1 px-2 text-sm hover:text-white hover:bg-[#00b0ff] transition-colors"
                    key={index}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
