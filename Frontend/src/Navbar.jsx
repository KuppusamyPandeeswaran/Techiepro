import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <h1 className="font-semibold  text-3xl border-[2px] font-inter border-none">
          Profile
        </h1>
        <button className="border border-solid p-3 rounded-md hover:bg-white">
          Log Out
        </button>
      </div>
    </>
  );
}
