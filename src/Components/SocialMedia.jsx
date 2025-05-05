import React from "react";

function SocialMedia() {
  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      url: "https://facebook.com",
      label: "Facebook",
      bg: "bg-blue-600 dark:bg-blue-700",
      hover: "hover:bg-blue-700 dark:hover:bg-blue-800",
    },
    {
      icon: "fab fa-instagram",
      url: "https://instagram.com",
      label: "Instagram",
      bg: "bg-pink-500 dark:bg-pink-600",
      hover: "hover:bg-pink-600 dark:hover:bg-pink-700",
    },
    {
      icon: "fab fa-youtube",
      url: "https://youtube.com",
      label: "YouTube",
      bg: "bg-red-600 dark:bg-red-700",
      hover: "hover:bg-red-700 dark:hover:bg-red-800",
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com",
      label: "Twitter",
      bg: "bg-sky-500 dark:bg-sky-600",
      hover: "hover:bg-sky-600 dark:hover:bg-sky-700",
    },
    {
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com",
      label: "LinkedIn",
      bg: "bg-blue-800 dark:bg-blue-900",
      hover: "hover:bg-blue-900 dark:hover:bg-blue-950",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 text-center px-4 sm:px-6 lg:px-8 text-black dark:text-white">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        Social Media Integration
      </h2>
      <p className="mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        Connect your social accounts with dynamic QR codes for seamless sharing and access.
      </p>

      <div className="flex justify-center flex-wrap gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-xl ${social.bg} ${social.hover} transition-transform transform hover:scale-110 shadow-md`}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialMedia;
