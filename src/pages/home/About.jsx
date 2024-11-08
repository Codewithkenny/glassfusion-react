import React from 'react';
import { Link } from 'react-router-dom';
import showerGlassImage from '../../assets/gallery/showerglass.jpg'; 
import Divider from "../../components/Divider"


const About = () => {
  return (
    <div>
      {/* Hero Section - Positioned directly below the navbar */}
      <section
        className="hero-section bg-cover bg-center h-96 flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url('/path/to/your/about-hero-image.jpg')` }}
      >
        <div className="bg-primary p-8 w-full flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Glass Fusion</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Pioneering innovation in glass fabrication, bringing excellence to every project.
          </p>
        </div>
      </section>

      {/* Breadcrumbs - Placed after the Hero Section */}
      <nav className="bg-gray-200 py-3 px-4 md:px-8">
        <ul className="flex items-center text-sm text-gray-600 space-x-2">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>/</li>
          <li>About</li>
        </ul>
      </nav>

      {/* Original Two-Column Layout */}
      <section className="two-column-section py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Who We Are */}
          <div className="left-column">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Who We Are</h2>
            <p className="text-lg mb-4">
              Glass Fusion is a leader in glass fabrication, committed to quality, innovation, and customer satisfaction. Our solutions are designed to transform spaces with beauty and functionality, tailored to the unique needs of each project.
            </p>
            <p className="text-lg mb-4">
              We take pride in our ability to offer a wide range of glass products that meet the highest industry standards, making us a trusted partner for architects, designers, and builders.
            </p>
          </div>

          {/* Right Column: Mission, Vision, and Values */}
          <div className="right-column">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission, Vision, and Values</h2>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p>Deliver exceptional glass solutions that enhance the aesthetics and safety of architectural designs.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p>Become the leading provider of innovative, sustainable glass products worldwide.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
              <p>Excellence, Integrity, Customer Focus, and Continuous Improvement.</p>
            </div>
          </div>
        </div>
      </section>

      <Divider/>

      {/* New Two-Column Section with Image and Text */}
      <section className="py-12 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Glass Fusion</h2>
            <p className="text-lg mb-4">
              Glass Fusion specializes in innovative glass fabrication, offering high-quality, custom solutions for architectural and interior applications.
            </p>
            <p className="text-lg mb-4">
              With a dedication to excellence, we bring together craftsmanship, technology, and sustainability to meet the unique needs of our clients.
            </p>
          </div>

          {/* Right Column: Image */}
          <div>
              <img
                src={showerGlassImage}
                alt="Shower Glass Image"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
