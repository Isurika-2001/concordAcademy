import React, { useState } from "react";

function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/courses" },
    { name: "Jobs", link: "/jobs" },
    { name: "E-Solutions", link: "/e-solutions" },
    { name: "About", link: "/about" },
    { name: "Payments", link: "/payments" },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="shadow">
          <div className="flex justify-between items-center py-3 px-10 container mx-auto">
            <div className="flex items-center">
              {/* Your logo */}
              <img
                className="w-24"
                src="./src/assets/logo-rmbg.png"
                alt="Logo"
              />
              <div className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-yellow-500 bg-clip-text text-transparent hover:cursor-pointer ml-2">
                <span className="block">CONCORD</span>
                <span className="block">ACADEMY</span>
              </div>
            </div>
            {!isMobileMenuOpen && (
              <div className="flex items-center">
                <ul className="sm:flex space-x-1 hidden items-center">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        className={`text-indigo-900 font-semibold text-md px-3 py-2 rounded-md transition duration-500 ease-in-out relative hover:after:block hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-indigo-900 hover:after:absolute hover:after:bottom-0 hover:after:left-1/4 hover:font-normal ${
                          item.name === "Jobs"
                            ? "bg-indigo-200 hover:text-white hover:after:bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-yellow-500"
                            : ""
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center">
              <div
                className="hover:cursor-pointer sm:hidden ml-auto" // Right-align the hamburger menu
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  // Close icon when the mobile menu is open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger icon when the mobile menu is closed (right-aligned)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden flex items-center justify-center">
              <ul className="bg-white py-2 px-5 space-y-3 w-full">
                {navItems.map((item) => (
                  <li key={item.name} className="text-center">
                    <a
                      href={item.link}
                      className={`block text-indigo-900 border border-white font-semibold border-b-gray-400 text-sm px-3 py-2 rounded-md transition duration-500 ease-in-out relative hover:after:block hover:after:h-0 hover:after:w-1/2 hover:after:bg-indigo-900 hover:after:absolute hover:after:bottom-0 hover:after:left-1/4 hover:font-normal ${
                        item.name === "Jobs"
                          ? "bg-indigo-200 hover:text-white hover:after:bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-yellow-500"
                          : ""
                      }`}
                    >
                      {item.name.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
