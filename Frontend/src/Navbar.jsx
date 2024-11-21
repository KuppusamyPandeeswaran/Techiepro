import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#f0faff]">
        <header className="pt-8 mx-12 ">
          <nav className="flex items-center justify-between">
            <img
              className="h-10 w-10 cursor-pointer"
              src="cli.png"
              alt="clilogo"
              onClick={() => {
                window.location.href = "/";
              }}
            />
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
            </div>
            <div>
              <a
                href="/login"
                className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
              >
                Log In &rarr;
              </a>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
