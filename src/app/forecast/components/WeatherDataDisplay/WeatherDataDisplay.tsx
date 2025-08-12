// src/app/forecast/components/WeatherDataDisplay/index.tsx

import React from 'react';
import ForecastCard from './components/ForecastCard';

// Sample data for the forecast cards
const sampleForecastData = [
  { day: 'Today', tempRange: '20°C / 12°C' },
  { day: 'Tomorrow', tempRange: '22°C / 14°C' },
  { day: 'Day 3', tempRange: '18°C / 10°C' },
];

const WeatherDataDisplay = () => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-900">
        Forecast for Your Location
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-8">
        Detailed surf conditions for the next few days.
      </p>

      {/* This grid will hold the daily forecast cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleForecastData.map((forecast) => (
          <ForecastCard 
            key={forecast.day}
            day={forecast.day}
            tempRange={forecast.tempRange}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherDataDisplay;