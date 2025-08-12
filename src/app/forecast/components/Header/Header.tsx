"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 text-center rounded-lg shadow-xl relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          onClick={() => router.back()}
          className="text-white hover:text-blue-200 transition-colors duration-200"
        >
          &larr; Back
        </button>
      </div>
      <h1 className="text-2xl font-bold tracking-wide">Detailed Surf Forecast</h1>
    </header>
  );
};

export default Header;