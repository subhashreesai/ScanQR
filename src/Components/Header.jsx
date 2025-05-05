import React from "react";

function Header() {
  return (
    <header className="text-center py-20 bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Unlock the Power of <span className="text-teal-600 dark:text-teal-400">QR Codes</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Create, manage, and track QR codes with powerful tools for your business growth.
      </p>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700">
          Explore Services
        </button>
        <button className="border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 px-6 py-2 rounded-md hover:bg-teal-50 dark:hover:bg-gray-700">
          Learn More
        </button>
      </div>
      <img
        src="/qr-illustration.svg"
        alt="QR Illustration"
        className="mt-10 mx-auto w-40 sm:w-52 md:w-60"
      />
    </header>
  );
}

export default Header;
