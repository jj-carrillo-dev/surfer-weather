"use client";

import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDataDisplay from './components/WeatherDataDisplay/WeatherDataDisplay';

const ForecastPage = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: '53.5511', // Default to Hamburg's coordinates
    lon: '9.9937',
    name: 'Hamburg'
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 py-8">
        <div className="container mx-auto px-4">
          <Header />
        </div>
      </div>
      <main className="flex-grow flex justify-center py-8 px-4">
        <div className="w-full max-w-4xl space-y-8">
          <SearchBar onSelectLocation={setSelectedLocation} />
          <WeatherDataDisplay
            lat={selectedLocation.lat}
            lon={selectedLocation.lon}
            locationName={selectedLocation.name}
          />
        </div>
      </main>
    </div>
  );
};

export default ForecastPage;