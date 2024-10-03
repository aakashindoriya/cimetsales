import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white text-center py-4 mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-200">Facebook</a>
          <a href="#" className="hover:text-blue-200">Twitter</a>
          <a href="#" className="hover:text-blue-200">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
