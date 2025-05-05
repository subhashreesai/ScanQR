import React from "react";

function ContactForm() {
  return (
    <section className="p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
        Get In Touch
      </h2>

      <form className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 text-black dark:text-white">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Full Name"
            className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email Address"
            className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
