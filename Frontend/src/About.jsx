import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <div className="bg-[#f0faff]">
        <Navbar />
        <div className="flex items-center max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8 ">
          <div className="w-full sm:w-1/2 p-5">
            <div className="flex justify-center">
              <img
                className="object-center max-w-full h-auto"
                src="tech.svg"
                alt="Company"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-5">
            <div>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                About <span className="text-[#00b0ff]">Us</span>
              </h2>
              <p className="text-gray-700">
                In 1998 CLI promoted a company for exploiting new avenues for
                distribution of content called Taxlawsonline.com Pvt Ltd (TLO).
                Currently TLO is a wholly owned subsidiary of CLI and handles
                the e-publishing of content provided by CLI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
