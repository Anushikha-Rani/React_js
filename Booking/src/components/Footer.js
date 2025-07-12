import React from 'react';

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6 mt-10 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} TruckBook | Built for logistics by innovators 🚀</p>
    </footer>
  );
}

export default Footer;