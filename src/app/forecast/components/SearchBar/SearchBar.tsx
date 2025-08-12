"use client";

import React, { useState } from 'react';
import SearchIcon from './components/SearchIcon';

const SearchBar = () => {
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    console.log('Searching for:', location);
    setLocation('');
  };

  return (
    <div className="flex items-center justify-center p-2 pl-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <input
        type="text"
        placeholder="Enter a German city (e.g., Hamburg)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-grow p-2 text-gray-700 placeholder-gray-400 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;