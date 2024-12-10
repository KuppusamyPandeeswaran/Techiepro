import React, { useState } from "react";

export default function Navbar() {
  return (
    <header className="bg-[#f0faff] px-8 z-10 top-0 left-0 w-full fixed">
      <nav>
        <div className="navigation bg-[#f0faff] ">
          <div className="logo max-sm:hidden ">
            <a href="/">
              <img src="./../cli.png" alt="CLI" className="w-12 h-12" />
            </a>
          </div>

          <input
            type="checkbox"
            className="navigation_checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation_button">
            <span className="navigation_icon">&nbsp;</span>
          </label>
          <div className="navigation_background">&nbsp;</div>
          <div className="navigation_nav">
            <ul className="navigation_list ">
              <li className="navigation_item">
                <a
                  href="/"
                  className="navigation_link text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
                >
                  Home
                </a>
              </li>
              <li className="navigation_item">
                <a
                  href="/About"
                  className="navigation_link text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
                >
                  About
                </a>
              </li>
              <li className="navigation_item">
                <a
                  href="/Contact"
                  className="navigation_link text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
                >
                  Contact
                </a>
              </li>
              <li className="navigation_item">
                <a
                  href="/Resources"
                  className="navigation_link text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
                >
                  Resources
                </a>
              </li>
              <li className="navigation_item sm:hidden">
                <a
                  href="/login"
                  className="navigation_link text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
                >
                  Log In &rarr;
                </a>
              </li>
            </ul>
          </div>
          <div className=" login-btn max-sm:hidden">
            <a
              href="/login"
              className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
            >
              Log In &rarr;
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
