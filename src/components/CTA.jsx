import React from 'react';
import { Link } from 'react-router-dom';
import bgImage1 from '../assets/mirrors.jpg'; 
import bgImage2 from '../assets/glass.jpg';   
import bgImage3 from '../assets/facade.jpg';  

const CTASection = () => {
  return (
    <section className="w-full bg-primary mt-10 py-16">
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Get a Quote */}
        <div
          className="relative h-64 bg-cover bg-center flex flex-col items-center justify-end"
          style={{ backgroundImage: `url(${bgImage1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center p-4 mb-4">
            <Link to="/contact">
              <button className="bg-primary text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-white">
                Get Quote
              </button>
            </Link>
          </div>
        </div>

        {/* Column 2 - Find a Branch */}
        <div
          className="relative h-64 bg-cover bg-center flex flex-col items-center justify-end"
          style={{ backgroundImage: `url(${bgImage2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center p-4 mb-4">
            <button className="bg-primary text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-white">
              Find Branch
            </button>
          </div>
        </div>

        {/* Column 3 - Contact Us */}
        <div
          className="relative h-64 bg-cover bg-center flex flex-col items-center justify-end"
          style={{ backgroundImage: `url(${bgImage3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center p-4 mb-4">
            <Link to="/contact">
              <button className="bg-primary text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
