import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative text-white text-center py-28 px-4" style={{ backgroundImage: 'url(/images/truck-bg.jpg)', backgroundSize: 'cover' }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
        <h2 className="text-4xl font-bold mb-4">Your Logistics Partner</h2>
        <p className="mb-6 text-lg">Reliable truck booking and job opportunities for drivers.</p>
        <div className="flex justify-center gap-4">
          <Link to="/trucks" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold">Book a Truck</Link>
          <Link to="/register" className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-full font-semibold">Join as Driver or Customer</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;