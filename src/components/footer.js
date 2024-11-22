import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-slate-900 py-10 -mt-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
        <h2 className="text-2xl lg:text-3xl font-extrabold">
          Vishal Bharti Senior Secondary School
        </h2>

        <div className="text-slate-700 text-sm space-y-2">
          <p className="flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" />
            Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India
          </p>

          <p className="flex items-center justify-center">
            <FaPhoneAlt className="mr-2" />
            <span className="font-medium">Contact:</span> 9354937851 / 54
          </p>
        </div>

        <div className="flex justify-center space-x-6 text-lg">
          <a
            href="#"
            className="text-slate-600 hover:text-black transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={25}/>
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-black transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={25}/>
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-black transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={25}/>
          </a>
        </div>

        <div className="border-t border-gray-600 my-4"></div>

        <p className="text-slate-700 text-xs">
          Copyright &copy; {new Date().getFullYear()} Vishal Bharti Senior
          Secondary School - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
