import { useParams } from "react-router-dom";

const projectData = {
  "shower-glass": {
    name: "Shower Glass",
    description:
      "Shower glass is widely used in modern bathrooms, providing a sleek and luxurious look.",
    projects: [
      { id: 1, title: "Luxury Apartment Bathroom", location: "Lagos, Nigeria" },
      { id: 2, title: "5-Star Hotel Suite", location: "Abuja, Nigeria" },
    ],
  },
  "glass-balustrade": {
    name: "Glass Balustrade",
    description:
      "Glass balustrades are commonly used in commercial and residential buildings for aesthetics and safety.",
    projects: [
      { id: 1, title: "High-Rise Office Building", location: "Victoria Island, Lagos" },
      { id: 2, title: "Modern Duplex Balcony", location: "Lekki, Lagos" },
    ],
  },
};

const ProjectOverview = () => {
  const { type } = useParams();
  const project = projectData[type];

  if (!project) {
    return <div className="text-center text-xl font-bold mt-10">No Project Found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary">{project.name} Projects</h1>
      <p className="mt-4 text-lg text-gray-700">{project.description}</p>

      <div className="mt-8 space-y-6">
        {project.projects.map((p) => (
          <div key={p.id} className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
