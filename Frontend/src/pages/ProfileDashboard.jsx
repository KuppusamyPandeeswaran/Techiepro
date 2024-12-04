import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileDashboard({
  techies,
  handleTechies,
  handleSelectedId,
}) {
  const navigate = useNavigate();
  const getallTechies = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:3000/api/v1/techie`);
      const data = await res.json();
      handleTechies(data.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getallTechies();
  }, []);

  return (
    <>
      <div className=" pt-24">
        <div className="flex flex-col justify-center font-inter px-40 ">
          <h1 className="text-6xl font-semibold mb-5">Our team</h1>
          <p className="">
            We’re a dynamic group of individuals who are passionate about what
            we do <br /> and dedicated to delivering the best results for our
            clients.
          </p>
        </div>
        <div className="px-20 pb-20 gap-6 grid grid-cols-3 ">
          {techies.map((techie, index) => (
            <div
              key={techie.memid}
              className="p-8 rounded-2xl flex flex-col items-center cursor-pointer"
              onClick={() => {
                handleSelectedId(techie.memid);
                navigate(`/Profile/${techie.full_name}`);
              }}
            >
              <div>
                <img
                  src="photo.avif"
                  alt="image"
                  className="w-70 h-56 mb-2 rounded-3xl"
                />
                <h2 className="m-2 text-2xl font-semibold">
                  {techie.full_name}
                </h2>
                <h2 className="m-2 text-gray-500 font-semibold">
                  {techie.rol}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
