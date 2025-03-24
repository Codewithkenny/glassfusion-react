import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  let dropdownTimeout = null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
    setActiveSubMenu(null);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
      setActiveSubMenu(null);
    }, 200); // Small delay to prevent flickering
  };

  const glassTypes = [
    { name: "Balustrades", sub: ["Glass Railings", "Staircase Panels"] },
    { name: "Shower Glass", sub: ["Frameless", "Frosted", "Sliding"] },
    { name: "Tempered Glass", sub: ["Heat Strengthened", "Toughened"] },
    { name: "Glass Partition", sub: ["Office Partitions", "Decorative Panels"] },
    { name: "Insulated Glass", sub: [] },
    { name: "Laminated Safety Glass", sub: ["Bulletproof", "UV Protected"] },
    { name: "Colored Glass", sub: [] },
    { name: "Reflective Glass", sub: [] },
    { name: "Tempered Safety Glass", sub: [] },
    { name: "Clear Glass", sub: [] },
  ];

  return (
    <header className="bg-white text-[#005792] py-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Glass Fusion</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-12">
          <Link to="/" className="text-base font-normal hover:text-[#00bbf0] transition duration-200">
            Home
          </Link>

          {/* Glass Types Dropdown */}
          <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="text-base font-normal hover:text-[#00bbf0] transition duration-200">
              Glass Types
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 bg-[rgba(194,233,244,0.8)]
 shadow-lg mt-2 rounded-lg z-50 w-56 border border-gray-200 transition-all duration-300">
                <ul className="flex flex-col p-3 space-y-1">
                  {glassTypes.map((type, index) => (
                    <li
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setActiveSubMenu(index)}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <div className="flex justify-between items-center cursor-pointer p-2 rounded-lg hover:bg-[#00bbf0] transition">
                        <Link to={`/glass-types/${type.name.toLowerCase().replace(/ /g, "-")}`} className="w-full">
                          {type.name}
                        </Link>
                        {type.sub.length > 0 && <span className="ml-2 text-gray-500">▶</span>}
                      </div>

                      {/* Submenu */}
                      {type.sub.length > 0 && activeSubMenu === index && (
                        <div className="absolute left-full top-0 bg-[rgba(194,233,244,0.8)] shadow-lg rounded-lg w-48 border border-gray-200 opacity-100 translate-x-0 transition-all duration-300">
                          <ul className="flex flex-col p-3 space-y-1">
                            {type.sub.map((subType, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={`/glass-types/${subType.toLowerCase().replace(/ /g, "-")}`}
                                  className="block p-2 rounded-lg hover:bg-[#00bbf0] transition"
                                >
                                  {subType}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/projects" className="text-base font-normal hover:text-blue-600 transition duration-200">
            Projects
          </Link>
          <Link to="/about" className="text-base font-normal hover:text-blue-600 transition duration-200">
            About
          </Link>
          <Link to="/contact" className="text-base font-normal hover:text-blue-600 transition duration-200">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-5">
          <nav className="flex flex-col space-y-4 py-4 px-4">
            <Link to="/" className="text-sm font-semibold hover:text-blue-600 transition duration-200" onClick={toggleMenu}>
              Home
            </Link>

            {/* Glass Types Dropdown for Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-sm font-semibold hover:text-blue-600 transition duration-200"
              >
                Glass Types
              </button>

              {isDropdownOpen && (
                <div className="bg-white shadow-lg mt-2 rounded-lg z-50 w-full border border-gray-300 p-3">
                  <ul className="flex flex-col space-y-2">
                    {glassTypes.map((type, index) => (
                      <li key={index} className="relative">
                        <div
                          className="flex justify-between items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition"
                          onClick={() => setActiveSubMenu(activeSubMenu === index ? null : index)}
                        >
                          <span>{type.name}</span>
                          {type.sub.length > 0 && <span className="ml-2">{activeSubMenu === index ? "▲" : "▼"}</span>}
                        </div>

                        {type.sub.length > 0 && activeSubMenu === index && (
                          <ul className="ml-4 border-l border-gray-300 pl-2">
                            {type.sub.map((subType, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={`/glass-types/${subType.toLowerCase().replace(/ /g, "-")}`}
                                  className="block p-2 rounded-lg hover:bg-gray-100 transition"
                                  onClick={() => { setIsDropdownOpen(false); setIsMenuOpen(false); }}
                                >
                                  {subType}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link to="/projects" className="text-sm font-semibold hover:text-blue-600 transition duration-200" onClick={toggleMenu}>
              Projects
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
