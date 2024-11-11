import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/gallery/showerglass.jpg";
import image2 from "../../assets/gallery/balustrade-thumbnail1.jpeg";
import image3 from "../../assets/glasspartition.jpg";
import image4 from "../../assets/mirrors.jpg";
import image5 from "../../assets/facade.jpg";
import image6 from "../../assets/glass.jpg";

const projectsData = [
  { id: 1, name: "Shower Glass", image: image1 },
  { id: 2, name: "Glass Balustrade", image: image2 },
  { id: 3, name: "Glass Partition", image: image3 },
  { id: 4, name: "Mirrors", image: image4 },
  { id: 5, name: "Facades", image: image5 },
  { id: 6, name: "Glass", image: image6 },
];

const Project = () => {
  const [visibleImages, setVisibleImages] = useState({});
  const imageRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            // Safely unobserve the image only if the element exists
            if (imageRefs.current[entry.target.id]) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the image is visible
    );

    Object.keys(imageRefs.current).forEach((key) => {
      if (imageRefs.current[key]) {
        observer.observe(imageRefs.current[key]);
      }
    });

    // Cleanup observer on unmount
    return () => {
      Object.keys(imageRefs.current).forEach((key) => {
        if (imageRefs.current[key]) {
          observer.unobserve(imageRefs.current[key]);
        }
      });
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-primary transition-transform duration-300 hover:scale-105">
          OUR PROJECTS
        </h2>
        <p className="mt-4 text-gray-900">
          View our wide range of glass projects and glazing solutions here, or alternatively view by different glass types below.
        </p>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto space-x-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-x-0 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-72 sm:w-auto relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Link to={`/projects/${project.id}`}>
                <img
                  ref={(el) => (imageRefs.current[project.id] = el)}
                  id={project.id}
                  src={visibleImages[project.id] ? project.image : ""}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
                  loading="lazy" // Native lazy loading
                />
                {/* Diagonal Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage: `linear-gradient(
                      135deg,
                      rgba(19, 8, 75, 0.7) 35%,
                      transparent 25%
                    )`,
                  }}
                ></div>

                {/* Project Details */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h1 className="text-2xl font-bold">{project.name}</h1>
                  <button className="mt-2 px-6 py-3 bg-[#D8DCE9] text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-100">
                    VIEW MORE
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
