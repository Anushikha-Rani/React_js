import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">🚛 TruckBook</h1>
        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/trucks" className="hover:text-yellow-300">Book Truck</Link>
          <Link to="/register" className="hover:text-yellow-300">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;