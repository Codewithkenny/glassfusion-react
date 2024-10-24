import React from 'react';
import { useParams, Link } from 'react-router-dom';
import image1 from "../../assets/showerglass.jpg";
import image2 from "../../assets/glassbalustrade.jpg";
import image3 from "../../assets/glasspartition.jpg";
import image4 from "../../assets/mirrors.jpg";
import image5 from "../../assets/facade.jpg";
import image6 from "../../assets/glass.jpg";
import Breadcrumb from '../../components/BreadCrumb';

const projectsData = [
  {
    id: 1,
    name: "Shower Glass",
    image: image1,
    description: "High-quality shower glass solutions for modern bathrooms.",
    galleryLink: "/gallery/shower-glass",
    overview: "Our shower glass solutions provide both elegance and functionality, ensuring privacy while adding a modern touch to your bathroom."
  },
  {
    id: 2,
    name: "Glass Balustrade",
    image: image2,
    description: "Elegant glass balustrades for safety and style.",
    galleryLink: "/gallery/glass-balustrade",
    overview: "The glass balustrades we offer combine safety with aesthetic appeal, making them ideal for both residential and commercial applications."
  },
  {
    id: 3,
    name: "Glass Partition",
    image: image3,
    description: "Innovative glass partitions for office and home.",
    galleryLink: "/gallery/glass-partition",
    overview: "Our glass partitions are perfect for creating open, airy spaces while providing necessary privacy and functionality."
  },
  {
    id: 4,
    name: "Mirrors",
    image: image4,
    description: "Custom mirrors tailored to your specifications.",
    galleryLink: "/gallery/mirrors",
    overview: "We create custom mirrors that enhance the aesthetic of any room, tailored to fit your design needs."
  },
  {
    id: 5,
    name: "Facades",
    image: image5,
    description: "Stunning glass facades for commercial buildings.",
    galleryLink: "/gallery/facades",
    overview: "Our glass facades provide a sleek, modern look while ensuring durability and energy efficiency."
  },
  {
    id: 6,
    name: "Glass",
    image: image6,
    description: "Wide range of glass products for various applications.",
    galleryLink: "/gallery/glass",
    overview: "We offer a diverse selection of glass products suitable for both commercial and residential use."
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="container mx-auto py-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Our Projects', link: '/projects' },
          { label: project.name },
        ]}
      />
      
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-[400px] object-cover mb-4" 
      />
      <p className="text-lg mb-4">{project.overview}</p>
      {/* View Gallery Button */}
      <Link to={project.galleryLink}>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
          View Gallery
        </button>
      </Link>
      {/* Add more project details as needed */}
    </div>
  );
};

export default ProjectDetail;
