import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Booking() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', pickup: '', drop: '', date: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Truck ID ${id} booked by ${form.name} from ${form.pickup} to ${form.drop}`);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Booking Truck #{id}</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-xl space-y-4">
        <input name="name" placeholder="Full Name" className="w-full border rounded p-3" onChange={handleChange} required />
        <input name="pickup" placeholder="Pickup Address" className="w-full border rounded p-3" onChange={handleChange} required />
        <input name="drop" placeholder="Drop Address" className="w-full border rounded p-3" onChange={handleChange} required />
        <input name="date" type="date" className="w-full border rounded p-3" onChange={handleChange} required />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;