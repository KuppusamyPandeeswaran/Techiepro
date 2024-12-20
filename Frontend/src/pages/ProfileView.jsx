import React, { useState, useEffect } from "react";
// import { FaLinkedinIn, FaGithub, FaLink } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import profileSkill from "./profile.json";

console.log(profileSkill);
export default function ProfileView({ selectedId }) {
  const [singleTechie, setSingleTechie] = useState(null);
  const [userid, setUserId] = useState(null);

  useEffect(() => {
    localStorage.setItem("userId", selectedId);
  }, [selectedId]);

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    setUserId(uid);
  }, []);

  const getSingleTechie = async () => {
    try {
      const token = localStorage.getItem("authToken");
      console.log(`This line is from Profile view ${token}`);
      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await fetch(`http://127.0.0.1:3000/api/v1/techie/${userid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const data = await res.json();
      setSingleTechie(data.data.user.profile);
    } catch (err) {
      console.error("Error fetching single techie:", err);
    }
  };

  useEffect(() => {
    getSingleTechie();
  }, [userid]);

  if (!singleTechie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-[#f0faff] mt-10">
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
              src="./../profile.jpg"
              alt=""
              className="w-24 h-24 object-cover rounded-lg"
            />
            <h1 className="text-lg mt-2 font-semibold">
              {singleTechie.full_name}
            </h1>
            <p className="text-sm my-1">{singleTechie.rol}</p>
            <p className="text-sm my-1">{singleTechie.address}</p>
            <div className="my-4">
              <h3 className="text-sm font-semibold">Email Address</h3>
              <p>{singleTechie.email}</p>
            </div>
            <div className="my-4">
              <h3 className="text-sm font-semibold">Address</h3>
              <p>{singleTechie.address}</p>
            </div>
            <div className="my-4">
              <h3 className="text-sm font-semibold">Mobile Number</h3>
              <p>{singleTechie.phoneno}</p>
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
                <p>{singleTechie.bio}</p>
              </div>
              <div className="div2 ">
                <h3 className="text-sm font-semibold">Current Organization</h3>
                <p>Company Law Insitute of India</p>
              </div>
              <div className="div3 ">
                <h3 className="text-sm font-semibold">Role</h3>
                <p>{singleTechie.rol}</p>
              </div>
              <div className="div4">
                <h3 className="text-sm font-semibold">Languages</h3>
                <p>Tamil, English</p>
              </div>
              <div className="div5">
                <h3 className="text-sm font-semibold">Birthday</h3>
                <p>{singleTechie.dob}</p>
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
              <div>
                <div className="skill-list flex flex-wrap gap-2">
                  {profileSkill[1].skills.map((skill, index) => (
                    <p
                      className="border-2 border-[#00b0ff] rounded-lg py-1 px-2 text-sm hover:text-white hover:bg-[#00b0ff] transition-colors"
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
      </div>
    </>
  );
}
