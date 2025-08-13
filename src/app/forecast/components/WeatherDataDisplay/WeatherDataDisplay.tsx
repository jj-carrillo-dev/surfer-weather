"use client";

import { useEffect, useState } from 'react';
import ForecastCard from './components/ForecastCard';

const WeatherDataDisplay = ({ lat, lon, locationName }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!lat || !lon) {
        setLoading(false);
        setError('Please select a location from the search bar.');
        return;
      }
      setLoading(true);
      setError(null);
      
      try {
        const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        if (!res.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [lat, lon]);

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

  if (!weatherData || weatherData.length === 0) {
    return <div className="text-gray-500 text-center">No forecast data available for {locationName}.</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Weather Forecast for {locationName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {weatherData.map((forecast, index) => (
          <ForecastCard
            key={index}
            day={forecast.day}
            tempRange={forecast.tempRange}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherDataDisplay;