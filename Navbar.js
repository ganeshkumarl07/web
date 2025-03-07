import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <div className="text-xl font-bold">WebDev</div>
    <div className="flex space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/contact" className="hover:underline">Contact Info</Link>
      <Link to="/shop" className="hover:underline">Shop</Link>
    </div>
  </nav>
);

export default Navbar;
