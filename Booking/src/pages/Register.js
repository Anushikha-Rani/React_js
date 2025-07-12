import React, { useState } from 'react';

function Register() {
  const [role, setRole] = useState('customer');
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${role === 'customer' ? 'Customer' : 'Job Seeker'} ${form.name} registered successfully!`);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Register as {role === 'customer' ? 'Customer' : 'Job Seeker'}</h2>
      <div className="flex justify-center mb-4 space-x-4">
        <button onClick={() => setRole('customer')} className={`px-4 py-2 rounded ${role === 'customer' ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>Customer</button>
        <button onClick={() => setRole('jobseeker')} className={`px-4 py-2 rounded ${role === 'jobseeker' ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>Job Seeker</button>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-xl space-y-4">
        <input name="name" placeholder="Full Name" className="w-full border rounded p-3" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" className="w-full border rounded p-3" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" type="tel" className="w-full border rounded p-3" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" className="w-full border rounded p-3" onChange={handleChange} required />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;