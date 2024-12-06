// import React from "react";

// export default function Navbar() {
//   return (
//     <>
//       <header className="bg-[#f0faff] py-2 px-8 z-10 top-0 left-0 w-full fixed">
//         <nav className="flex items-center justify-between">
//           <div className="flex items-center justify-center">
//             <a href="/">
//               <img src="./../cli.png" alt="CLI logo" className="w-12 h-12" />
//             </a>
//           </div>
//           <div className="flex items-center space-x-4 gap-8">
//             <a
//               href="/"
//               className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
//             >
//               Home
//             </a>
//             <a
//               href="/About"
//               className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
//             >
//               About
//             </a>
//             <a
//               href="/Contact"
//               className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
//             >
//               Contact
//             </a>
//             <a
//               href="/Resources"
//               className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
//             >
//               Resources
//             </a>
//           </div>
//           <div className="flex items-center justify-center">
//             <a
//               href="/login"
//               className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]"
//             >
//               Log In &rarr;
//             </a>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }


import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#f0faff] py-2 px-8 z-10 top-0 left-0 w-full fixed">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="./../cli.png" alt="CLI logo" className="w-12 h-12" />
          </a>
        </div>

        {/* Menu items container - desktop */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="/" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
            Home
          </a>
          <a href="/About" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
            About
          </a>
          <a href="/Contact" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
            Contact
          </a>
          <a href="/Resources" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
            Resources
          </a>
        </div>

        {/* Log In button - desktop */}
        <div className="hidden sm:block">
          <a href="/login" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
            Log In &rarr;
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            {menuOpen ? (
              // Close icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 11-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414L10.586 12 6.225 7.639a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 18a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#f0faff] flex flex-col items-center gap-6 py-4 sm:hidden min-h-screen">
            <a href="/" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
              Home
            </a>
            <a href="/About" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
              About
            </a>
            <a href="/Contact" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
              Contact
            </a>
            <a href="/Resources" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
              Resources
            </a>
            <a href="/login" className="text-gray-800 text-[16px] font-semibold hover:text-[#00b0ff]">
              Log In &rarr;
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
