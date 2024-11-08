import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/gf-logo.png'; // Replace with your logo image path
import Divider from './Divider';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0 md:w-1/4">
            <Link to="/"><img src={logo} alt="Glass Fusion Company Logo" className="h-16" /></Link> 
          </div>

          {/* Useful Links */}
          <div className="mb-4 md:mb-0 md:w-1/4">
            <h4 className="font-bold mb-2 text-primary">Useful Links</h4>
            <ul className="list-none">
              <li>
                <a
                  href="/"
                  className="relative text-gray-700 hover:text-primary group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="relative text-gray-700 hover:text-primary group"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="relative text-gray-700 hover:text-primary group"
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="mb-4 md:mb-0 md:w-1/4">
            <h4 className="font-bold mb-2 text-primary">Follow Us</h4>
            <ul className="list-none">
              <li>
                <a
                  href="https://www.facebook.com/glassfusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-700 hover:text-blue-500 group"
                >
                  Facebook
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/glassfusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-700 hover:text-pink-500 group"
                >
                  Instagram
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/glassfusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-700 hover:text-red-500 group"
                >
                  YouTube
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0 md:w-1/4">
            <h4 className="font-bold mb-2 text-primary">Contact Information</h4>
            <p className="text-gray-700">4 Ejike Onyenokporo, Ogudu Orí-òkè, Lagos.</p>
            <p className="text-gray-700">Phone: (234) 815 757-4317</p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@glassfusion.com"
                className="relative text-primary group"
              >
                info@glassfusion.com
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </p>
          </div>
        </div>

        <Divider />

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-gray-700">
            © 2024 Glass Fusion Company. All rights reserved.
          </p>
          <p className="text-gray-700">
            Designed and Developed by 
            <a 
              href="https://kennys-portfolio-delta.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-blue-300 ml-1"
            >
              8701DevOps
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
