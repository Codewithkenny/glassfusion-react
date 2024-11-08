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
              <li><a href="/" className="text-gray-700 hover:text-primary hover:underline">Home</a></li>
              <li><a href="/projects" className="text-gray-700 hover:text-primary hover:underline">Projects</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-primary hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Company Address */}
          <div className="mb-4 md:mb-0 md:w-1/4">
            <h4 className="font-bold mb-2 text-primary">Contact Information</h4>
            <p className="text-gray-700">4 Ejike Onyenokporo , Ogudu Orí-òkè, Lagos.</p>
            <p className="text-gray-700">Phone: (234) 815 757-4317</p>
          </div>
        </div>

        {/* Divider */}
       <Divider/>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-gray-700">
            © 2024 Glass Fusion Company. All rights reserved. Designed and Developed by 
            <a 
              href="https://www.8701devops.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-blue-300"
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
