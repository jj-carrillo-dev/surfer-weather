"use client";

import useWeatherController from '@/app/hooks/useWeatherController';
import ForecastCard from './components/ForecastCard';
import ForecastDetailCard from './components/ForecastDetailCard';
import TideChart from './components/TideChart';

const WeatherDataDisplay = ({ lat, lon, locationName }) => {
    const { weatherData, loading, error } = useWeatherController (lat, lon);

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
        return <div className="text-gray-500 text-center">No location selected. Please use the search bar.</div>;
    }

    // Handle cases where marine data is not available (e.g., landlocked city)
    if (weatherData.detail.swell.height === 'N/A') {
        return (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No marine data available for {locationName}. Please select a coastal city.
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                Weather Forecast for {locationName}
            </h2>
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {weatherData.forecast.map((forecast, index) => (
                        <ForecastCard
                            key={index}
                            day={forecast.day}
                            tempRange={forecast.tempRange}
                        />
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ForecastDetailCard detail={weatherData.detail} />
                    <TideChart tideData={weatherData.tide} />
                </div>
            </div>
        </div>
    );
};

export default WeatherDataDisplay;