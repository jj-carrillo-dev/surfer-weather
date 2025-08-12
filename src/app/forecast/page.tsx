import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDataDisplay from './components/WeatherDataDisplay';

const ForecastPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 py-8">
        <div className="container mx-auto px-4">
          <Header />
        </div>
      </div>
      <main className="flex-grow flex justify-center py-8 px-4">
        <div className="w-full max-w-4xl">
          <div className="mb-8">
            <SearchBar />
          </div>
          <div className="mb-8">
            <WeatherDataDisplay />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForecastPage;