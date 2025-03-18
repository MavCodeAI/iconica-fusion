
import React from 'react';
import { Link } from 'react-router-dom';

// This is a component that you can import in your Navbar to add the Illustrations link
// Use it like: <NavbarExtension /> inside your Navbar component
const NavbarExtension = () => {
  return (
    <li>
      <Link 
        to="/illustrations" 
        className="text-gray-700 hover:text-brand-500 px-2 py-1 rounded transition-colors"
      >
        Illustrations
      </Link>
    </li>
  );
};

export default NavbarExtension;
