import React from "react";

export default function Welcome() {
  return (
    <div className="bg-[#f0faff]">
      <main>
        <div className="flex items-center justify-center min-h-screen ">
          <div className=" rounded-2xl p-6 w-full mt-24">
            <h2 className="text-7xl font-semibold text-center text-gray-800 mb-4">
              Meet the Team, <br /> Manage with Ease
            </h2>
            <p className="text-gray-600 text-center mb-6 mt-8 text-xl tracking-wide">
              View, update, and manage team profiles with ease.
            </p>
            <div className="flex items-center mt-8 justify-center gap-6">
              <a
                className="cursor-pointer rounded-md bg-[#00b0ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#008dcc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b0ff]"
                onClick={() => {
                  window.location.href = "/Register";
                }}
              >
                Get started
              </a>
              <a
                href="/About"
                className="hover:text-[#00b0ff]"
                onClick={() => {
                  window.location.href = "/About";
                }}
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
