import { useState, useEffect, useRef } from 'react';
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
            if (imageRefs.current[entry.target.id]) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.keys(imageRefs.current).forEach((key) => {
      if (imageRefs.current[key]) {
        observer.observe(imageRefs.current[key]);
      }
    });

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
        <h2 className="text-4xl font-bold text-primary transition-transform duration-300 hover:scale-105">
          OUR GLASS PROJECTS
        </h2>
        <p className="mt-4 text-gray-900">
          Discover our range of glass projects and glazing solutions.
        </p>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/glass-types/${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative w-full h-48 md:h-64 overflow-hidden">
                  <img
                    ref={(el) => (imageRefs.current[project.id] = el)}
                    id={project.id}
                    src={visibleImages[project.id] ? project.image : ""}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                {/* Glass Name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-xl md:text-2xl font-bold text-white text-center">
                    {project.name}
                  </h1>
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
