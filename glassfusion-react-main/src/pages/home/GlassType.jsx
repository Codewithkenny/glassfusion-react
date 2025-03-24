import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaLink, FaSearch } from "react-icons/fa";

const glassData = {
  "shower-glass": {
    name: "Shower Glass",
    image: "/assets/gallery/showerglass.jpg",
    description:
      "Shower glass provides a sleek and modern look for bathrooms. It enhances the space, making it feel larger and more luxurious.",
    specifications: [
      "Tempered safety glass",
      "Customizable thickness (6mm - 12mm)",
      "Anti-stain & easy-to-clean coating",
      "Available in clear, frosted, or tinted finishes",
    ],
    relatedImages: [
      { id: 1, image: "/assets/gallery/showerglass1.jpg" },
      { id: 2, image: "/assets/gallery/showerglass2.jpg" },
      { id: 3, image: "/assets/gallery/showerglass3.jpg" },
      { id: 4, image: "/assets/gallery/showerglass4.jpg" },
    ],
  },
  "glass-balustrade": {
    name: "Glass Balustrade",
    image: "/assets/gallery/balustrade-thumbnail1.jpeg",
    description:
      "Glass balustrades provide a stylish and strong barrier for staircases, balconies, and terraces. They offer unobstructed views while ensuring safety.",
    specifications: [
      "Toughened laminated glass",
      "Frameless and framed options",
      "Scratch-resistant coating",
      "UV protection and weather-resistant",
    ],
    relatedImages: [
      { id: 1, image: "/assets/gallery/balustrade1.jpg" },
      { id: 2, image: "/assets/gallery/balustrade2.jpg" },
      { id: 3, image: "/assets/gallery/balustrade3.jpg" },
      { id: 4, image: "/assets/gallery/balustrade4.jpg" },
    ],
  },
};

const GlassType = () => {
  const { type } = useParams();
  const glass = glassData[type];

  if (!glass) {
    return <div className="text-center text-xl font-bold mt-10">Glass Type Not Found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Glass Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Glass Image */}
        <div className="w-full">
          <img
            src={glass.image}
            alt={glass.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Description & Specifications */}
        <div>
          <h1 className="text-4xl font-bold text-primary">{glass.name}</h1>
          <p className="mt-4 text-lg text-gray-700">{glass.description}</p>

          <h3 className="mt-6 text-2xl font-semibold">Specifications</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            {glass.specifications.map((spec, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Images Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-primary">
          {glass.name} Applications
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {glass.relatedImages.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img
                src={item.image}
                alt={`${glass.name} example`}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {glass.name} Usage
                </p>
              </div>

              {/* Icons on Hover */}
              <div className="absolute bottom-4 left-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={`/projects/${type}`}
                  className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
                >
                  <FaLink className="text-primary text-xl" />
                </Link>
                <Link
                  to={`/gallery/${type}`}
                  className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
                >
                  <FaSearch className="text-primary text-xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassType;
