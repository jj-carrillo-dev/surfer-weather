import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between text-white relative">
      <Link href="/" className="z-10">
        <button className="flex items-center px-4 py-2 font-medium transition-colors duration-200 hover:text-gray-200">
          ← Back
        </button>
      </Link>
      <div className="absolute inset-x-0 flex justify-center">
        <h1 className="text-xl font-bold">Detailed Surf Forecast</h1>
      </div>
    </div>
  );
};

export default Header;