import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/showerglass.jpg";
import image2 from "../../assets/glassbalustrade.jpg";
import image3 from "../../assets/glasspartition.jpg";
import image4 from "../../assets/mirrors.jpg";
import image5 from "../../assets/facade.jpg";
import image6 from "../../assets/glass.jpg";

const projectsData = [
  {
    id: 1,
    name: "Shower Glass",
    image: image1,
  },
  {
    id: 2,
    name: "Glass Balustrade",
    image: image2,
  },
  {
    id: 3,
    name: "Glass Partition",
    image: image3,
  },
  {
    id: 4,
    name: "Mirrors",
    image: image4,
  },
  {
    id: 5,
    name: "Facades",
    image: image5,
  },
  {
    id: 6,
    name: "Glass",
    image: image6,
  },
];

const Project = () => {
  return (
    <section className="py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-primary transition-transform duration-300 hover:scale-105">
          Our Projects
        </h2>
        <p className="mt-4 text-gray-900">
          View our wide range of glass projects and glazing solutions here, or alternatively view by different glass types below.
        </p>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Link to={`/projects/${project.id}`}>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

              {/* Project Details */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <button className="mt-2 px-6 py-3 bg-[#D8DCE9] text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-100">
                  View More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
