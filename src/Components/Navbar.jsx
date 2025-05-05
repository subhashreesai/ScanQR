import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); 

  const menuItems = ["Scan QR", "Home", "Services", "About", "FAQ", "Pricing", "Contact"];
  const languages = ["English", "हिन्दी", "Gujarati", "Kannada", "Malayalam", "Marathi", "Punjabi", "Tamil", "Telugu", "Odia"];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md font-sans">
      <div className="container mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-teal-600 dark:text-teal-400">
            <rect width="5" height="5" x="3" y="3" rx="1"></rect>
            <rect width="5" height="5" x="16" y="3" rx="1"></rect>
            <rect width="5" height="5" x="3" y="16" rx="1"></rect>
            <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
            <path d="M21 21v.01" />
          </svg>
          <span className="text-xl font-bold text-teal-600 dark:text-teal-400">ZM QR Code</span>
        </div>

       
        <div className="hidden md:flex space-x-8"> 
          {menuItems.map((item) => (
            <a key={item} href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition">
              {item}
            </a>
          ))}
        </div>

       
        <div className="hidden md:flex items-center space-x-6"> 
         
          <div className="relative group">
            <i className="fas fa-globe dark:text-gray-300"></i>
            <ul className="absolute right-0 mt-2 p-2 shadow bg-white dark:bg-gray-700 rounded-md w-32 z-10 hidden group-hover:block">
              {languages.map((lang) => (
                <li key={lang}>
                  <a className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">{lang}</a>
                </li>
              ))}
            </ul>
          </div>

          
          <button onClick={toggleDarkMode} className="focus:outline-none text-xl">
            {isDarkMode ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-700 dark:text-gray-300"></i>
            )}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800 shadow">
          {menuItems.map((item) => (
            <a key={item} href="#" className="block text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition">
              {item}
            </a>
          ))}
          <button onClick={toggleDarkMode} className="text-xl mt-2">
            {isDarkMode ? (
              <i className="fas fa-sun text-yellow-400"></i>
            ) : (
              <i className="fas fa-moon text-gray-700 dark:text-gray-300"></i>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
