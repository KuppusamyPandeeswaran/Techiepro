import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div>
        <nav className="bg-slate-200 p-2 flex justify-between items-center">
          <img className="h-14 w-14" src="cli.png" alt="clilogo" />
          <div>
            <Link to={"/login"} className="text-blue-700 text-2xl">
              Login
            </Link>
          </div>
        </nav>
        <div className="text-2xl flex font-semibold flex-row justify-between items-center p-4">
          <div className="flex flex-col w-2/3 pr-4">
            <h1 className="mb-4 text-4xl">Taxlaws</h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ab ducimus tempore aliquid molestias omnis repudiandae praesentium
              nulla, cupiditate magni, vel illum minus animi quibusdam aperiam
              quis molestiae minima facilis?
            </p>
          </div>
          <img
            className="h-2/6 w-1/3 mb-20"
            src="tech.svg"
            alt="techteam img"
          />
        </div>
      </div>
    </>
  );
}
