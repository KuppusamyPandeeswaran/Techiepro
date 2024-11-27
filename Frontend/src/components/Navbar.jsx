import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="bg-[#f0faff] py-2 px-8 z-10 top-0 left-0 w-full fixed">
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <a href="/">
              <img src="./../cli.png" alt="CLI logo" className="w-12 h-12" />
            </a>
          </div>
          <div className="flex items-center space-x-4 gap-8">
            <a
              href="/"
              className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
            >
              Home
            </a>
            <a
              href="/About"
              className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
            >
              About
            </a>
            <a
              href="/Contact"
              className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
            >
              Contact
            </a>
            <a
              href="/Resources"
              className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
            >
              Resources
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="/login"
              className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
            >
              Log In &rarr;
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
