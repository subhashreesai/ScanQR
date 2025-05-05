import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">ZM QR Code</h3>
          <p className="mb-3 text-sm">Generate a unique QR Code for your brand with us.</p>
          <div className="flex border rounded overflow-hidden">
            <input type="email" placeholder="Your Email" className="px-2 py-1 w-full text-black" />
            <button className="bg-teal-500 px-4">➤</button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>QR Code Services</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <p className="text-sm">officialzmqrcodeservices@zmqrcode.com</p>
          <div className="flex space-x-4 mt-3 text-lg">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">© 2024 ZM QR Code Services. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
