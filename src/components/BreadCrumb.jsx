import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="mb-4">
      <ol className="list-reset flex text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.link ? (
              <Link to={item.link} className="text-blue-500 hover:text-blue-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
