import React from "react";

function Services() {
  const services = [
    {
      name: "Audio",
      icon: "fa-solid fa-headphones",
      color: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900",
    },
    {
      name: "Image Gallery",
      icon: "fa-solid fa-image",
      color: "text-pink-500 bg-pink-100 dark:bg-pink-900",
    },
    {
      name: "Video",
      icon: "fa-solid fa-video",
      color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900",
    },
    {
      name: "Documents",
      icon: "fa-solid fa-file-alt",
      color: "text-green-500 bg-green-100 dark:bg-green-900",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
        Featured Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.name}
            className="p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 text-center cursor-pointer"
            onClick={() => alert(`Clicked on ${service.name}`)}
          >
            <div
              className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-5 ${service.color}`}
            >
              <i className={`${service.icon} text-2xl`}></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              {service.name} Service
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share your {service.name.toLowerCase()} with just a scan.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
