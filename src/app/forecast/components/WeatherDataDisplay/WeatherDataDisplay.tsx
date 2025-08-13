"use client";

import { useEffect, useState } from 'react';
import ForecastCard from './components/ForecastCard';
import ForecastDetailCard from './components/ForecastDetailCard';
import TideChart from './components/TideChart';

const mockWeatherData = {
  forecast: [
    { day: 'Today', tempRange: '18°C / 12°C' },
    { day: 'Tomorrow', tempRange: '20°C / 14°C' },
    { day: 'Day 3', tempRange: '19°C / 13°C' },
    { day: 'Day 4', tempRange: '17°C / 11°C' },
  ],
  detail: {
    wind: { speed: '15 km/h', direction: 'Offshore' },
    swell: { height: '2.5 ft', period: '8s', direction: 'NW' },
    waterTemp: '16°C',
  },
  tide: [
    { time: '04:30', height: '0.8m', type: 'Low Tide' },
    { time: '10:50', height: '2.1m', type: 'High Tide' },
    { time: '17:15', height: '0.7m', type: 'Low Tide' },
    { time: '23:40', height: '2.0m', type: 'High Tide' },
  ],
};

const WeatherDataDisplay = ({ lat, lon, locationName }) => {
  const [weatherData, setWeatherData] = useState(mockWeatherData);
  const [loading, setLoading] = useState(false); // Set to false to use mock data
  const [error, setError] = useState(null);

  // In a real scenario, this useEffect would fetch data from your new API endpoint
  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     if (!lat || !lon) {
  //       setLoading(false);
  //       setError('Please select a location from the search bar.');
  //       return;
  //     }
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch weather data');
  //       }
  //       const data = await res.json();
  //       setWeatherData(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchWeather();
  // }, [lat, lon]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-xl text-gray-600 dark:text-gray-400">Loading forecast...</div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!weatherData) {
    return <div className="text-gray-500 text-center">No forecast data available for {locationName}.</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Weather Forecast for {locationName}
      </h2>
      <div className="space-y-8">
        {/* Daily Forecast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockWeatherData.forecast.map((forecast, index) => (
            <ForecastCard
              key={index}
              day={forecast.day}
              tempRange={forecast.tempRange}
            />
          ))}
        </div>
        
        {/* Detailed Surf Info and Tide Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ForecastDetailCard detail={mockWeatherData.detail} />
          <TideChart tideData={mockWeatherData.tide} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDataDisplay;