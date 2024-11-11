import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';

// Import project images
import projectImage1 from '../assets/gallery/showerglass.jpg';
import projectImage2 from '../assets/glassbalustrade.jpg';
import projectImage3 from '../assets/gallery/partition.jpg';
import projectImage4 from '../assets/facade.jpg';
import projectImage5 from '../assets/newglassbalustrade.jpg';


// Project data array
const projectData = [
  { id: 1, title: 'Project One', description: 'Details about Project One', imageUrl: projectImage1 },
  { id: 2, title: 'Project Two', description: 'Details about Project Two', imageUrl: projectImage2 },
  { id: 3, title: 'Project Three', description: 'Details about Project Three', imageUrl: projectImage3 },
  { id: 4, title: 'Project Four', description: 'Details about Project Four', imageUrl: projectImage4 },
  { id: 5, title: 'Project Five', description: 'Details about Project Five', imageUrl: projectImage5 },
];

const ProjectGalleryDetails = () => {
  const { id } = useParams(); // Get project ID from the URL
  const project = projectData.find((project) => project.id === parseInt(id)); // Find project by ID

  // If the project is not found, display a message
  if (!project) {
    return <div className="text-center py-20"><h2>Project not found</h2></div>;
  }

  return (
    <div className="container mx-auto p-6">
       <Breadcrumb 
        items={[
          { label: 'Home', link: '/' },
          { label: 'Projects', link: '/projects' },  
          { label: project.title }, 
        ]}
      />


      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-8">{project.description}</p>
      </div>

      {/* Project image */}
      <div className="flex justify-center mb-8">
        <img src={project.imageUrl} alt={project.title} className="max-w-full rounded-lg shadow-lg" />
      </div>

      {/* Additional project details */}
      <div className="text-center">
        <p className="text-md text-gray-600">
          Here you can add more details about the project, such as its unique features, benefits, and any other 
          information you'd like to highlight.
        </p>
      </div>
    </div>
  );
};

export default ProjectGalleryDetails;
