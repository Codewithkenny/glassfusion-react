import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import project images
import projectImage1 from '../assets/gallery/showerglass.jpg';
import projectImage2 from '../assets/glassbalustrade.jpg';
import projectImage3 from '../assets/gallery/partition.jpg';
import projectImage4 from '../assets/facade.jpg';
import projectImage5 from '../assets/newglassbalustrade.jpg';


// Project data 
const projectData = [
  { id: 1, title: 'Project One', imageUrl: projectImage1 },
  { id: 2, title: 'Project Two', imageUrl: projectImage2 },
  { id: 3, title: 'Project Three', imageUrl: projectImage3 },
  { id: 4, title: 'Project Four', imageUrl: projectImage4 },
  { id: 5, title: 'Project Five', imageUrl: projectImage5 },
];

const ProjectGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + projectData.length) % projectData.length
    );
  };

  return (
    <section className="w-full bg-gray-200 py-16">
      <div className="relative flex items-center justify-center h-[500px] bg-cover bg-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url(${projectData[currentSlide].imageUrl})`,
          }}
        ></div>

        {/* Left Overlay Column */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-black bg-opacity-50 flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold text-white mb-4">Project Gallery</h2>
          <h3 className="text-2xl text-white mb-8">
            {projectData[currentSlide].title}
          </h3>
          <Link to={`/project/${projectData[currentSlide].id}`}>
            <button className="bg-gray-400 text-white px-6 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-white border border-white">
              VIEW PROJECT
            </button>
          </Link>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-8 flex space-x-4">
          <button
            onClick={handlePrev}
            className="bg-white p-3 rounded-full hover:bg-gray-300 transition duration-300"
          >
            <FaArrowLeft className="text-black" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-3 rounded-full hover:bg-gray-300 transition duration-300"
          >
            <FaArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
