import React from 'react';
import { Link } from 'react-router-dom';

const trucks = [
  { id: 1, name: 'Tata 407', capacity: '2 Tons', price: '₹1500/day', image: '/images/truck1.jpg' },
  { id: 2, name: 'Eicher 19Ft', capacity: '7 Tons', price: '₹3500/day', image: '/images/truck2.jpg' },
  { id: 3, name: 'Mahindra Loadking', capacity: '3.5 Tons', price: '₹2500/day', image: '/images/truck3.jpg' },
];

function Trucks() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Available Trucks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trucks.map((truck) => (
          <div key={truck.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={truck.image} alt={truck.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{truck.name}</h3>
              <p className="text-gray-600">Capacity: {truck.capacity}</p>
              <p className="text-gray-700 font-bold mt-2">{truck.price}</p>
              <Link to={`/booking/${truck.id}`} className="mt-4 inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trucks;
