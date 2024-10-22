// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MyStock App. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact Us
          </a>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i> {/* Font Awesome icon */}
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
            <i className="fab fa-linkedin-in"></i> {/* Font Awesome icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
