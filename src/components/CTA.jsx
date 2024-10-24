import React from 'react';
import bgImage1 from '../assets/facade.jpg'; 
import bgImage2 from '../assets/mirrors.jpg'; 
import bgImage3 from '../assets/glass.jpg';

const CTASection = () => {
  return (
    <div className=" mx-auto py-16 bg-primary w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* Column 1 */}
        <div
          className="relative h-64 bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url(${bgImage1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative p-4">
            <h2 className="text-white text-2xl font-bold mb-4">Get a Quote</h2>
          </div>
          <div className="relative p-4 mb-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-white block mx-auto">
              Get Quote
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div
          className="relative h-64 bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url(${bgImage2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative p-4">
            <h2 className="text-white text-2xl font-bold mb-4">Find a Branch</h2>
          </div>
          <div className="relative p-4 mb-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-white block mx-auto">
              Find a Branch
            </button>
          </div>
        </div>

        {/* Column 3 */}
        <div
          className="relative h-64 bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url(${bgImage3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative p-4">
            <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
          </div>
          <div className="relative p-4 mb-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-white block mx-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
